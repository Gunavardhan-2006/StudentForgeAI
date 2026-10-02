'use client';

import React, { useState, useMemo } from 'react';
import { Semester, Subject, BranchCode } from '@/types';
import { 
  X, 
  CheckSquare, 
  Square, 
  BookOpen, 
  Layers, 
  Sparkles, 
  Check, 
  RotateCcw, 
  Search,
  CheckCircle2,
  GraduationCap,
  SlidersHorizontal,
  BookmarkCheck,
  Zap,
  ArrowRight
} from 'lucide-react';

interface SubjectSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  semesters: Semester[];
  activeBranch: BranchCode;
  enrolledSemId: number;
  activeSubjectNames: string[];
  onToggleSubject: (subjectName: string) => void;
  onSetSubjectNames: (subjectNames: string[]) => void;
  onResetFilters: () => void;
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
  // Currently active semester tab (1 to 8)
  const [activeSemId, setActiveSemId] = useState<number>(enrolledSemId || 3);
  const [searchQuery, setSearchQuery] = useState('');

  // Total subjects count
  const totalSubjectCount = useMemo(() => {
    return semesters.flatMap((s) => s.subjects).length;
  }, [semesters]);

  // Compute list of unique semesters that have at least 1 checked subject
  const selectedSemesterSummary = useMemo(() => {
    const semMap: Record<number, number> = {};
    semesters.forEach((sem) => {
      const checkedInSem = sem.subjects.filter((sub) => activeSubjectNames.includes(sub.name)).length;
      if (checkedInSem > 0) {
        semMap[sem.id] = checkedInSem;
      }
    });
    const semIds = Object.keys(semMap).map(Number).sort((a, b) => a - b);
    return {
      count: semIds.length,
      semIds,
      details: semIds.map((id) => `Sem ${id}`).join(' & '),
    };
  }, [semesters, activeSubjectNames]);

  // Current active semester object
  const currentSem = useMemo(() => {
    return semesters.find((s) => s.id === activeSemId) || semesters[0];
  }, [semesters, activeSemId]);

  // Filter subjects inside current semester by search query
  const filteredSubjects = useMemo(() => {
    if (!searchQuery.trim()) return currentSem?.subjects || [];
    const q = searchQuery.toLowerCase();
    return (currentSem?.subjects || []).filter(
      (sub) => sub.name.toLowerCase().includes(q) || sub.code.toLowerCase().includes(q)
    );
  }, [currentSem, searchQuery]);

  if (!isOpen) return null;

  // Batch action: Select all in active semester
  const handleSelectAllInCurrentSem = () => {
    if (!currentSem) return;
    const names = currentSem.subjects.map((s) => s.name);
    const updated = Array.from(new Set([...activeSubjectNames, ...names]));
    onSetSubjectNames(updated);
  };

  // Batch action: Clear active semester
  const handleClearCurrentSem = () => {
    if (!currentSem) return;
    const names = currentSem.subjects.map((s) => s.name);
    const updated = activeSubjectNames.filter((name) => !names.includes(name));
    onSetSubjectNames(updated);
  };

  // Batch action: Select up to enrolled sem
  const handleSelectUpToEnrolledSem = () => {
    const semIds = Array.from({ length: enrolledSemId }, (_, i) => i + 1);
    const names = semesters
      .filter((s) => semIds.includes(s.id))
      .flatMap((s) => s.subjects)
      .map((s) => s.name);
    onSetSubjectNames(names);
  };

  // Batch action: Select all semesters
  const handleSelectAllGlobal = () => {
    const allNames = semesters.flatMap((s) => s.subjects).map((s) => s.name);
    onSetSubjectNames(allNames);
  };

  // Helper to determine subject course type badge
  const getCourseType = (sub: Subject): 'Core' | 'Professional Elective' | 'Open Elective' => {
    if (sub.type) return sub.type;
    if (sub.isElective) {
      return sub.electiveType === 'OE' ? 'Open Elective' : 'Professional Elective';
    }
    return 'Core';
  };

  // Helper to determine status mode for a subject
  const getSubjectStatus = (sub: Subject): 'Completed' | 'Currently Studying' | 'Unchecked' => {
    const isChecked = activeSubjectNames.includes(sub.name);
    if (!isChecked) return 'Unchecked';
    if (sub.semId === enrolledSemId) return 'Currently Studying';
    return 'Completed';
  };

  // Toggle specific status for a subject
  const handleSetSubjectStatus = (sub: Subject, targetStatus: 'Completed' | 'Currently Studying' | 'Unchecked') => {
    if (targetStatus === 'Unchecked') {
      onSetSubjectNames(activeSubjectNames.filter((n) => n !== sub.name));
    } else {
      if (!activeSubjectNames.includes(sub.name)) {
        onSetSubjectNames([...activeSubjectNames, sub.name]);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-canvas/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="w-full max-w-5xl h-[88vh] glass-panel rounded-2xl border border-indigo-accent/40 shadow-2xl flex flex-col overflow-hidden text-ghost bg-card/95"
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
              <span className="text-emerald-accent font-bold text-sm">{activeSubjectNames.length}</span>
              <span className="text-muted"> / {totalSubjectCount}</span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-canvas hover:bg-border border border-border text-muted hover:text-ghost transition-colors"
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
                onClick={handleSelectUpToEnrolledSem}
                className="px-3 py-1.5 rounded-lg bg-indigo-accent/15 hover:bg-indigo-accent/25 border border-indigo-accent/40 text-indigo-accent font-mono text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>Auto-Select Up To Sem {enrolledSemId}</span>
              </button>

              <button
                onClick={handleSelectAllGlobal}
                className="px-3 py-1.5 rounded-lg bg-card hover:bg-border border border-border text-readable hover:text-ghost font-mono text-xs flex items-center gap-1.5 transition-all"
              >
                <CheckSquare className="w-3.5 h-3.5 text-cyan-accent" />
                <span>Select All 8 Semesters</span>
              </button>

              <button
                onClick={onResetFilters}
                className="px-3 py-1.5 rounded-lg bg-card hover:bg-red-500/10 border border-border hover:border-red-500/30 text-muted hover:text-red-400 font-mono text-xs flex items-center gap-1.5 transition-all"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Reset Default</span>
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

          {/* 1. SELECTION 1: Structured Semester Navigation Bar (Sem 1 to Sem 8) */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
            {semesters.map((sem) => {
              const isActiveTab = activeSemId === sem.id;
              const checkedCount = sem.subjects.filter((s) => activeSubjectNames.includes(s.name)).length;
              const isFullyCompleted = checkedCount === sem.subjects.length && sem.subjects.length > 0;
              const isPriorCompleted = sem.id < enrolledSemId;
              const isEnrolled = sem.id === enrolledSemId;

              return (
                <button
                  key={sem.id}
                  onClick={() => setActiveSemId(sem.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-mono font-bold whitespace-nowrap flex items-center space-x-2 transition-all border ${
                    isActiveTab
                      ? 'bg-indigo-accent text-white border-indigo-accent shadow-glow scale-[1.02]'
                      : isEnrolled
                      ? 'bg-cyan-accent/15 border-cyan-accent/40 text-cyan-accent'
                      : isFullyCompleted || isPriorCompleted
                      ? 'bg-card border-emerald-accent/30 text-readable hover:text-ghost'
                      : 'bg-card border-border text-muted hover:text-ghost'
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {(isFullyCompleted || isPriorCompleted) && (
                      <CheckCircle2 className={`w-3.5 h-3.5 ${isActiveTab ? 'text-white' : 'text-emerald-accent'}`} />
                    )}
                    <span>Sem {sem.id}</span>
                  </span>

                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    isActiveTab
                      ? 'bg-white/20 text-white font-extrabold'
                      : checkedCount > 0
                      ? 'bg-indigo-accent/20 text-indigo-accent font-bold'
                      : 'bg-canvas text-muted'
                  }`}>
                    {checkedCount}/{sem.subjects.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 2. SELECTION 2: Option-Style Subject Cards Grid for Active Semester */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          
          {/* Active Semester Sub-Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 border-b border-border/80 gap-2">
            <div>
              <div className="flex items-center space-x-2.5">
                <span className="px-2.5 py-1 rounded-lg bg-indigo-accent/15 border border-indigo-accent/30 font-mono text-xs font-bold text-indigo-accent">
                  {currentSem.shortCode}
                </span>
                <h3 className="text-lg font-bold text-ghost tracking-tight">{currentSem.title}</h3>
                {currentSem.id === enrolledSemId && (
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-accent/20 text-cyan-accent border border-cyan-accent/40 font-bold">
                    Currently Enrolled
                  </span>
                )}
              </div>
              <p className="text-xs text-muted font-mono mt-1">
                Displaying course options for Semester {currentSem.id} • Click card or status badge to toggle
              </p>
            </div>

            {/* Batch Controls for Current Semester */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handleSelectAllInCurrentSem}
                className="px-3 py-1.5 rounded-lg bg-indigo-accent/15 hover:bg-indigo-accent/25 border border-indigo-accent/30 text-indigo-accent font-mono text-xs font-semibold flex items-center gap-1.5 transition-all"
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>Select All Sem {currentSem.id}</span>
              </button>

              <button
                onClick={handleClearCurrentSem}
                className="px-3 py-1.5 rounded-lg bg-canvas hover:bg-red-500/10 border border-border hover:border-red-500/30 text-muted hover:text-red-400 font-mono text-xs transition-all"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Subject Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredSubjects.map((sub) => {
              const isChecked = activeSubjectNames.includes(sub.name);
              const courseType = getCourseType(sub);
              const currentStatus = getSubjectStatus(sub);

              return (
                <div
                  key={sub.id}
                  onClick={() => onToggleSubject(sub.name)}
                  className={`p-4 rounded-xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 group ${
                    isChecked
                      ? 'bg-gradient-to-br from-card via-card to-indigo-accent/10 border-indigo-accent/50 shadow-glow scale-[1.01]'
                      : 'bg-canvas/60 border-border/80 hover:bg-card hover:border-border'
                  }`}
                >
                  {/* Card Header: Course Code & Course Type Badge */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-cyan-accent bg-cyan-accent/10 px-2 py-0.5 rounded border border-cyan-accent/20">
                      {sub.code}
                    </span>

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

                  {/* Card Body: Course Title */}
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-ghost group-hover:text-cyan-accent transition-colors leading-snug">
                      {sub.name}
                    </h4>
                    <p className="text-[11px] text-muted font-mono">
                      PVP23 Academic Unit • Sem {sub.semId}
                    </p>
                  </div>

                  {/* Card Footer: Explicit Status Toggles */}
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between">
                    <div className="flex items-center space-x-1.5">
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-emerald-accent" />
                      ) : (
                        <Square className="w-4 h-4 text-muted" />
                      )}
                      <span className={`text-xs font-mono font-bold ${
                        isChecked ? 'text-emerald-accent' : 'text-muted'
                      }`}>
                        {currentStatus}
                      </span>
                    </div>

                    {/* Quick Interactive Status Switcher Buttons */}
                    <div className="flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
                      <button
                        type="button"
                        onClick={() => handleSetSubjectStatus(sub, isChecked ? 'Unchecked' : 'Completed')}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold transition-all ${
                          isChecked
                            ? 'bg-emerald-accent/20 text-emerald-accent border border-emerald-accent/40'
                            : 'bg-canvas hover:bg-border text-muted hover:text-ghost border border-border'
                        }`}
                      >
                        {isChecked ? 'Active ✔' : '+ Select'}
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

          {filteredSubjects.length === 0 && (
            <div className="p-8 rounded-xl bg-canvas/40 border border-border text-center text-xs font-mono text-muted">
              No subjects found in Semester {currentSem.id} matching &quot;{searchQuery}&quot;.
            </div>
          )}

        </div>

        {/* 3. SELECTION 3: Persistent Selection Bar */}
        <div className="p-4 border-t border-border bg-gradient-to-r from-canvas via-card to-canvas flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="flex items-center space-x-3 text-xs font-mono">
            <div className="p-2 rounded-lg bg-emerald-accent/15 border border-emerald-accent/30 text-emerald-accent">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-ghost font-bold">
                {activeSubjectNames.length} Subjects Selected {selectedSemesterSummary.count > 0 ? `across ${selectedSemesterSummary.details}` : ''}
              </div>
              <div className="text-muted text-[11px]">
                Target project blueprints will immediately update upon applying
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-accent hover:bg-indigo-hover text-white font-medium text-xs shadow-glow flex items-center justify-center space-x-2 transition-all cursor-pointer group"
          >
            <span>Apply Selection & Update Blueprints</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
};
