'use client';

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Semester, Subject, BranchCode } from '@/types';
import { 
  X, 
  CheckSquare, 
  BookOpen, 
  RotateCcw, 
  Search,
  CheckCircle2,
  GraduationCap,
  Zap,
  ArrowRight,
  ChevronDown,
  ChevronRight
} from 'lucide-react';

interface SubjectSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  semesters: Semester[];
  activeBranch: BranchCode;
  enrolledSemId: number;
  activeSubjectNames: string[];
  onToggleSubject?: (subjectName: string) => void;
  onSetSubjectNames?: (subjectNames: string[]) => void;
  onResetFilters?: () => void;
}

export const SubjectSelectorModal: React.FC<SubjectSelectorModalProps> = ({
  isOpen,
  onClose,
  semesters,
  activeBranch,
  enrolledSemId,
  activeSubjectNames,
  onToggleSubject,
  onSetSubjectNames,
  onResetFilters,
}) => {
  // Requirement 7: State Structure
  // Initially every semester is collapsed (empty array), no subjects are visible.
  const [expandedSemesters, setExpandedSemesters] = useState<number[]>([]);
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Lookup maps for fast and memoized conversion between subject ID and subject metadata
  const { idToSubjectMap, nameToSubjectMap, totalSubjectCount } = useMemo(() => {
    const idMap = new Map<string, Subject>();
    const nameMap = new Map<string, Subject>();
    let count = 0;

    semesters.forEach((sem) => {
      sem.subjects.forEach((sub) => {
        idMap.set(sub.id, sub);
        nameMap.set(sub.name, sub);
        count++;
      });
    });

    return {
      idToSubjectMap: idMap,
      nameToSubjectMap: nameMap,
      totalSubjectCount: count,
    };
  }, [semesters]);

  // Synchronize internal selectedSubjects state with incoming activeSubjectNames prop
  useEffect(() => {
    if (!isOpen) return;

    const matchedIds: string[] = [];
    semesters.forEach((sem) => {
      sem.subjects.forEach((sub) => {
        if (activeSubjectNames.includes(sub.name) || activeSubjectNames.includes(sub.id)) {
          matchedIds.push(sub.id);
        }
      });
    });

    setSelectedSubjects(matchedIds);
  }, [isOpen, activeSubjectNames, semesters]);

  // Helper to notify parent immediately so recommendation cards refresh with zero lag
  const notifyParent = useCallback(
    (newSubjectIds: string[]) => {
      if (!onSetSubjectNames) return;
      const names = newSubjectIds
        .map((id) => idToSubjectMap.get(id)?.name)
        .filter(Boolean) as string[];
      onSetSubjectNames(names);
    },
    [idToSubjectMap, onSetSubjectNames]
  );

  // Requirement 8: Functions

  // 1. toggleSemester()
  // Expands only that semester or collapses it. Multiple semesters can remain expanded.
  const toggleSemester = useCallback((semId: number) => {
    setExpandedSemesters((prev) =>
      prev.includes(semId) ? prev.filter((id) => id !== semId) : [...prev, semId]
    );
  }, []);

  // 2. toggleSubject()
  // Controlled checkbox toggle. Adds/removes subject from selectedSubjects state and refreshes recommendations immediately.
  const toggleSubject = useCallback(
    (subjectId: string) => {
      setSelectedSubjects((prev) => {
        const next = prev.includes(subjectId)
          ? prev.filter((id) => id !== subjectId)
          : [...prev, subjectId];

        notifyParent(next);
        return next;
      });
    },
    [notifyParent]
  );

  // 3. selectAllSemester()
  // Selects every subject in that semester, updates selectedSubjects and counters.
  const selectAllSemester = useCallback(
    (semId: number) => {
      const sem = semesters.find((s) => s.id === semId);
      if (!sem) return;

      const semSubjectIds = sem.subjects.map((s) => s.id);
      setSelectedSubjects((prev) => {
        const next = Array.from(new Set([...prev, ...semSubjectIds]));
        notifyParent(next);
        return next;
      });
    },
    [semesters, notifyParent]
  );

  // 4. clearSemester()
  // Removes only subjects from that semester, keeping all other semester selections intact.
  const clearSemester = useCallback(
    (semId: number) => {
      const sem = semesters.find((s) => s.id === semId);
      if (!sem) return;

      const semSubjectIdSet = new Set(sem.subjects.map((s) => s.id));
      setSelectedSubjects((prev) => {
        const next = prev.filter((id) => !semSubjectIdSet.has(id));
        notifyParent(next);
        return next;
      });
    },
    [semesters, notifyParent]
  );

  // 5. resetSelections()
  // Collapses all semesters, unchecks every checkbox, clears state, resets recommendation engine, integrated projects, and counters.
  const resetSelections = useCallback(() => {
    setExpandedSemesters([]);
    setSelectedSubjects([]);
    notifyParent([]);
    if (onResetFilters) {
      onResetFilters();
    }
  }, [notifyParent, onResetFilters]);

  // Global batch action: Auto-select up to enrolled sem
  const handleSelectUpToEnrolledSem = useCallback(() => {
    const semIds = Array.from({ length: enrolledSemId }, (_, i) => i + 1);
    const targetSubjectIds = semesters
      .filter((s) => semIds.includes(s.id))
      .flatMap((s) => s.subjects)
      .map((s) => s.id);

    setSelectedSubjects(targetSubjectIds);
    notifyParent(targetSubjectIds);
  }, [enrolledSemId, semesters, notifyParent]);

  // Global batch action: Select all 8 semesters
  const handleSelectAllGlobal = useCallback(() => {
    const allIds = semesters.flatMap((s) => s.subjects).map((s) => s.id);
    setSelectedSubjects(allIds);
    notifyParent(allIds);
  }, [semesters, notifyParent]);

  // Helper for course type badge styling
  const getCourseType = useCallback((sub: Subject): 'Core' | 'Professional Elective' | 'Open Elective' => {
    if (sub.type) return sub.type;
    if (sub.isElective) {
      return sub.electiveType === 'OE' ? 'Open Elective' : 'Professional Elective';
    }
    return 'Core';
  }, []);

  // Summary of selected semesters for the footer
  const selectedSemesterSummary = useMemo(() => {
    const semMap: Record<number, number> = {};
    semesters.forEach((sem) => {
      const checkedInSem = sem.subjects.filter((sub) => selectedSubjects.includes(sub.id)).length;
      if (checkedInSem > 0) {
        semMap[sem.id] = checkedInSem;
      }
    });
    const semIds = Object.keys(semMap).map(Number).sort((a, b) => a - b);
    return {
      count: semIds.length,
      details: semIds.map((id) => `Sem ${id}`).join(' & '),
    };
  }, [semesters, selectedSubjects]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-canvas/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-5xl h-[90vh] glass-panel rounded-2xl border border-indigo-accent/40 shadow-2xl flex flex-col overflow-hidden text-ghost bg-card/95"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Header */}
        <div className="p-4 sm:p-5 border-b border-border bg-gradient-to-r from-card via-canvas to-card flex flex-col md:flex-row md:items-center justify-between gap-4 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-indigo-accent/15 border border-indigo-accent/30 text-indigo-accent shadow-glow">
              <BookOpen className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-lg sm:text-xl font-bold text-ghost tracking-tight">
                  Semester Curriculum & Subject Selector
                </h2>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent font-bold">
                  {activeBranch === '12' ? 'IT PVP23' : 'CSD PVP23'}
                </span>
              </div>
              <p className="text-xs text-muted font-mono mt-0.5">
                Structured semester-by-semester course picker. Select subjects to map production blueprints.
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 justify-between md:justify-end">
            <div className="px-3.5 py-1.5 rounded-xl bg-canvas border border-border text-xs font-mono">
              <span className="text-muted">Total Selected: </span>
              <span className="text-emerald-accent font-bold text-sm">{selectedSubjects.length}</span>
              <span className="text-muted"> / {totalSubjectCount}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-canvas hover:bg-border border border-border text-muted hover:text-ghost transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Global Toolbar & Search */}
        <div className="p-3.5 border-b border-border bg-canvas/40 space-y-3 flex-shrink-0">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleSelectUpToEnrolledSem}
                className="px-3 py-1.5 rounded-lg bg-indigo-accent/15 hover:bg-indigo-accent/25 border border-indigo-accent/40 text-indigo-accent font-mono text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Auto-Select Up To Sem {enrolledSemId}</span>
              </button>

              <button
                type="button"
                onClick={handleSelectAllGlobal}
                className="px-3 py-1.5 rounded-lg bg-card hover:bg-border border border-border text-readable hover:text-ghost font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <CheckSquare className="w-3.5 h-3.5 text-cyan-accent" />
                <span>Select All 8 Semesters</span>
              </button>

              <button
                type="button"
                onClick={resetSelections}
                className="px-3 py-1.5 rounded-lg bg-card hover:bg-red-500/10 border border-border hover:border-red-500/30 text-muted hover:text-red-400 font-mono text-xs flex items-center gap-1.5 transition-all cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Selections</span>
              </button>
            </div>

            {/* Filter Search Input */}
            <div className="relative min-w-[220px]">
              <Search className="w-3.5 h-3.5 text-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search subject or code..."
                className="w-full pl-8 pr-3 py-1.5 bg-canvas border border-border rounded-lg text-xs font-mono text-ghost placeholder-muted focus:outline-none focus:border-cyan-accent transition-all"
              />
            </div>
          </div>
        </div>

        {/* Collapsible Accordions: Semester 1 through Semester 8 */}
        {/* Main modal scroll container allowing smooth scrolling through all semesters */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 custom-scrollbar">
          {semesters.map((sem) => {
            const isExpanded = expandedSemesters.includes(sem.id);
            const semSubjectIds = sem.subjects.map((s) => s.id);
            const selectedInSemCount = semSubjectIds.filter((id) => selectedSubjects.includes(id)).length;
            const isFullySelected = selectedInSemCount === sem.subjects.length && sem.subjects.length > 0;
            const isEnrolled = sem.id === enrolledSemId;

            // Filter subjects inside this semester by search query if present
            const q = searchQuery.toLowerCase().trim();
            const visibleSubjects = q
              ? sem.subjects.filter(
                  (sub) => sub.name.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q)
                )
              : sem.subjects;

            // If user searches and this semester has matches, automatically show it or keep collapsible
            const shouldRenderSubjects = isExpanded || (q.length > 0 && visibleSubjects.length > 0);
            const hasManySubjects = visibleSubjects.length >= 10;

            return (
              <div
                key={sem.id}
                className={`rounded-xl border transition-all duration-200 ${
                  isExpanded
                    ? 'border-indigo-accent/50 bg-card/60 shadow-lg'
                    : 'border-border/80 bg-canvas/40 hover:border-border hover:bg-card/30'
                }`}
              >
                {/* Accordion Header (Sticky within card when expanded) */}
                <div
                  onClick={() => toggleSemester(sem.id)}
                  className={`p-3.5 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none transition-colors rounded-xl ${
                    isExpanded ? 'sticky top-0 z-10 bg-card/95 backdrop-blur-md rounded-b-none border-b border-border/40' : ''
                  }`}
                >
                  {/* Left: Chevron + Semester Title + Badges */}
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      className="p-1 rounded-md text-muted hover:text-ghost transition-transform"
                      aria-label={isExpanded ? 'Collapse semester' : 'Expand semester'}
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4 text-indigo-accent" />
                      ) : (
                        <ChevronRight className="w-4 h-4 text-muted" />
                      )}
                    </button>

                    <div className="flex items-center space-x-2">
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-accent/15 border border-indigo-accent/30 font-mono text-xs font-bold text-indigo-accent">
                        Sem {sem.id}
                      </span>
                      <span className="text-xs font-mono text-muted">
                        ({sem.shortCode})
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-ghost tracking-tight">
                        {sem.title.replace(/^Semester \d+.*?: /, '')}
                      </h3>
                      {isEnrolled && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40 font-bold">
                          Enrolled
                        </span>
                      )}
                      {isFullySelected && (
                        <CheckCircle2 className="w-4 h-4 text-emerald-accent" />
                      )}
                    </div>
                  </div>

                  {/* Right: Semester Controls (Select All, Clear) & Counter */}
                  <div className="flex items-center space-x-2.5 self-end sm:self-auto" onClick={(e) => e.stopPropagation()}>
                    {/* Counter (e.g. 4/6) */}
                    <div className="px-2.5 py-1 rounded-lg bg-canvas border border-border text-xs font-mono font-bold">
                      <span className={selectedInSemCount > 0 ? 'text-indigo-accent font-extrabold' : 'text-muted'}>
                        {selectedInSemCount}
                      </span>
                      <span className="text-muted">/{sem.subjects.length}</span>
                    </div>

                    {/* Select All in this semester */}
                    <button
                      type="button"
                      onClick={() => selectAllSemester(sem.id)}
                      className="px-2.5 py-1 rounded-lg bg-indigo-accent/15 hover:bg-indigo-accent/25 border border-indigo-accent/30 text-indigo-accent font-mono text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer"
                    >
                      <CheckSquare className="w-3.5 h-3.5" />
                      <span>Select All</span>
                    </button>

                    {/* Clear this semester */}
                    <button
                      type="button"
                      onClick={() => clearSemester(sem.id)}
                      className="px-2.5 py-1 rounded-lg bg-canvas hover:bg-red-500/10 border border-border hover:border-red-500/30 text-muted hover:text-red-400 font-mono text-xs transition-all cursor-pointer"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                {/* Accordion Body: Displays all subjects belonging to that semester when expanded */}
                {/* Grows automatically according to content; only scrolls if 10+ subjects */}
                {shouldRenderSubjects && (
                  <div className="p-4 sm:p-5 border-t border-border/70 bg-canvas/30 rounded-b-xl">
                    {visibleSubjects.length > 0 ? (
                      <div className={hasManySubjects ? 'max-h-[320px] overflow-y-auto pr-1.5 custom-scrollbar' : ''}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                          {visibleSubjects.map((sub) => {
                            const isChecked = selectedSubjects.includes(sub.id);
                            const courseType = getCourseType(sub);

                            return (
                              <div
                                key={sub.id}
                                onClick={() => toggleSubject(sub.id)}
                                className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 group select-none ${
                                  isChecked
                                    ? 'bg-gradient-to-br from-card via-card to-indigo-accent/10 border-indigo-accent/50 shadow-glow'
                                    : 'bg-canvas/60 border-border/80 hover:bg-card hover:border-border'
                                }`}
                              >
                                {/* Top Bar: Controlled Checkbox + Code + Type Badge */}
                                <div className="flex items-center justify-between gap-2">
                                  <div className="flex items-center space-x-2.5">
                                    {/* Requirement 9: Controlled Checkbox */}
                                    <input
                                      type="checkbox"
                                      id={`checkbox-${sub.id}`}
                                      checked={selectedSubjects.includes(sub.id)}
                                      onChange={() => toggleSubject(sub.id)}
                                      onClick={(e) => e.stopPropagation()}
                                      className="w-4 h-4 rounded border-border text-indigo-accent focus:ring-0 focus:ring-offset-0 bg-canvas cursor-pointer accent-indigo-600"
                                    />
                                    <span className="font-mono font-bold text-xs text-cyan-accent bg-cyan-accent/10 px-2 py-0.5 rounded border border-cyan-accent/20">
                                      {sub.code}
                                    </span>
                                  </div>

                                  <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-semibold border ${
                                    courseType === 'Core'
                                      ? 'bg-indigo-accent/15 text-indigo-accent border-indigo-accent/30'
                                      : courseType === 'Professional Elective'
                                      ? 'bg-emerald-accent/15 text-emerald-accent border-emerald-accent/30'
                                      : 'bg-purple-500/15 text-purple-400 border-purple-500/30'
                                  }`}>
                                    {courseType}
                                  </span>
                                </div>

                                {/* Subject Name */}
                                <div>
                                  <h4 className="text-sm font-bold text-ghost group-hover:text-cyan-accent transition-colors leading-snug">
                                    {sub.name}
                                  </h4>
                                  <p className="text-[11px] text-muted font-mono mt-1">
                                    Semester {sub.semId} Academic Unit
                                  </p>
                                </div>

                                {/* Bottom status line */}
                                <div className="pt-2.5 border-t border-border/50 flex items-center justify-between text-xs font-mono">
                                  <span className={isChecked ? 'text-emerald-accent font-bold' : 'text-muted'}>
                                    {isChecked ? 'Selected ✔' : 'Unchecked'}
                                  </span>
                                  <span className="text-[11px] text-muted">
                                    {isChecked ? 'Click to deselect' : 'Click to select'}
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-lg bg-canvas/60 border border-border text-center text-xs font-mono text-muted">
                        No subjects found matching &quot;{searchQuery}&quot; in Semester {sem.id}.
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Persistent Bottom Bar */}
        <div className="p-4 border-t border-border bg-gradient-to-r from-canvas via-card to-canvas flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <div className="p-2 rounded-lg bg-emerald-accent/15 border border-emerald-accent/30 text-emerald-accent">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-ghost font-bold">
                {selectedSubjects.length} Subjects Selected {selectedSemesterSummary.count > 0 ? `across ${selectedSemesterSummary.details}` : ''}
              </div>
              <div className="text-muted text-[11px]">
                Project recommendations and integrated capstone blueprints update in real time.
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-accent hover:bg-indigo-hover text-white font-medium text-xs shadow-glow flex items-center justify-center space-x-2 transition-all cursor-pointer group"
          >
            <span>Done & Explore Recommendations</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
