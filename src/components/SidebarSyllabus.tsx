'use client';

import React, { useState } from 'react';
import { Semester, DomainFilter, DifficultyFilter, BranchCode } from '@/types';
import { 
  ChevronDown, 
  ChevronRight, 
  CheckSquare, 
  Square, 
  Filter, 
  BookOpen, 
  Sparkles, 
  Layers, 
  Award, 
  Tag,
  SlidersHorizontal,
  CheckCircle2,
  XSquare
} from 'lucide-react';

interface SidebarSyllabusProps {
  semesters: Semester[];
  activeBranch: BranchCode;
  onSwitchBranch: (code: BranchCode) => void;
  enrolledSemId: number;
  activeSubjectNames: string[];
  onToggleSubject: (subjectName: string) => void;
  onSetSubjectNames?: (subjectNames: string[]) => void;
  selectedDomain: DomainFilter;
  onSelectDomain: (domain: DomainFilter) => void;
  selectedDifficulty: DifficultyFilter;
  onSelectDifficulty: (difficulty: DifficultyFilter) => void;
  onResetFilters: () => void;
  onOpenSubjectSelector?: () => void;
}

const DOMAIN_OPTIONS: DomainFilter[] = [
  'All',
  'FinTech',
  'Healthcare',
  'Cybersecurity',
  'E-Commerce',
  'Cloud/DevOps',
  'AI/Data',
];

const DIFFICULTY_OPTIONS: DifficultyFilter[] = ['All', 'Beginner', 'Intermediate', 'Capstone'];

export const SidebarSyllabus: React.FC<SidebarSyllabusProps> = ({
  semesters,
  activeBranch,
  onSwitchBranch,
  enrolledSemId,
  activeSubjectNames,
  onToggleSubject,
  onSetSubjectNames,
  selectedDomain,
  onSelectDomain,
  selectedDifficulty,
  onSelectDifficulty,
  onResetFilters,
  onOpenSubjectSelector,
}) => {
  // Accordion state: sem 1 through 8
  const [openSemesters, setOpenSemesters] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: true,
    4: true,
    5: true,
    6: false,
    7: false,
    8: false,
  });

  const toggleSemester = (semId: number) => {
    setOpenSemesters((prev) => ({
      ...prev,
      [semId]: !prev[semId],
    }));
  };

  // 1-Click Select All subjects in a specific semester
  const handleSelectAllInSem = (e: React.MouseEvent, sem: Semester) => {
    e.stopPropagation();
    if (!onSetSubjectNames) {
      sem.subjects.forEach((sub) => {
        if (!activeSubjectNames.includes(sub.name)) {
          onToggleSubject(sub.name);
        }
      });
      return;
    }

    const semNames = sem.subjects.map((sub) => sub.name);
    const updated = Array.from(new Set([...activeSubjectNames, ...semNames]));
    onSetSubjectNames(updated);
  };

  // 1-Click Clear subjects in a specific semester
  const handleClearSem = (e: React.MouseEvent, sem: Semester) => {
    e.stopPropagation();
    if (!onSetSubjectNames) {
      sem.subjects.forEach((sub) => {
        if (activeSubjectNames.includes(sub.name)) {
          onToggleSubject(sub.name);
        }
      });
      return;
    }

    const semNames = sem.subjects.map((sub) => sub.name);
    const updated = activeSubjectNames.filter((name) => !semNames.includes(name));
    onSetSubjectNames(updated);
  };

  // Extract electives from all semesters
  const allElectives = semesters
    .flatMap((sem) => sem.subjects)
    .filter((sub) => sub.isElective);

  // Current semester active courses
  const currentSemObj = semesters.find((sem) => sem.id === enrolledSemId) || semesters[4];

  return (
    <aside className="w-full lg:w-[34%] xl:w-[32%] flex-shrink-0 flex flex-col gap-5">
      
      {/* Branch Selector & Subject Manager Button */}
      <div className="glass-panel p-4 rounded-xl border border-border space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Layers className="w-4 h-4 text-indigo-accent" />
            <span className="text-[13px] font-mono font-medium text-readable">Curriculum Branch:</span>
          </div>
          <div className="flex items-center bg-canvas p-1 rounded-lg border border-border">
            <button
              onClick={() => onSwitchBranch('44')}
              className={`px-3 py-1 rounded-md text-[12px] font-mono font-bold transition-all ${
                activeBranch === '44'
                  ? 'bg-indigo-accent text-white shadow-glow'
                  : 'text-muted hover:text-ghost'
              }`}
            >
              CSD [44]
            </button>
            <button
              onClick={() => onSwitchBranch('12')}
              className={`px-3 py-1 rounded-md text-[12px] font-mono font-bold transition-all ${
                activeBranch === '12'
                  ? 'bg-cyan-accent text-canvas font-bold shadow-cyanGlow'
                  : 'text-muted hover:text-ghost'
              }`}
            >
              IT [12]
            </button>
          </div>
        </div>

        {/* Modal Trigger Button */}
        {onOpenSubjectSelector && (
          <button
            onClick={onOpenSubjectSelector}
            className="w-full py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-indigo-accent/20 to-cyan-accent/20 hover:from-indigo-accent/30 hover:to-cyan-accent/30 border border-indigo-accent/40 text-ghost font-mono text-xs font-semibold flex items-center justify-center space-x-2 transition-all shadow-glow group"
          >
            <SlidersHorizontal className="w-4 h-4 text-cyan-accent group-hover:scale-110 transition-transform" />
            <span>Manage Required Subjects (Semester-Wise)</span>
          </button>
        )}
      </div>

      {/* Special Section: Current Enrolled Semester Active Courses */}
      <div className="glass-panel p-4 rounded-xl border border-cyan-accent/30 bg-gradient-to-br from-card via-card to-canvas relative overflow-hidden shadow-cyanGlow">
        <div className="flex items-center justify-between mb-3 border-b border-border/60 pb-2">
          <div className="flex items-center space-x-2 text-cyan-accent font-semibold text-[14px]">
            <BookOpen className="w-4 h-4 animate-pulse" />
            <span>Enrolled Semester ({currentSemObj.shortCode})</span>
          </div>
          <button
            onClick={(e) => handleSelectAllInSem(e, currentSemObj)}
            className="text-[11px] font-mono text-cyan-accent hover:underline flex items-center gap-1"
          >
            <CheckSquare className="w-3.5 h-3.5" />
            <span>Select All</span>
          </button>
        </div>

        <p className="text-[12px] text-readable mb-3">
          Check subjects you are studying right now to generate custom blueprints:
        </p>

        <div className="flex flex-col gap-2">
          {currentSemObj.subjects.map((sub) => {
            const isChecked = activeSubjectNames.includes(sub.name);
            return (
              <div
                key={sub.id}
                onClick={() => onToggleSubject(sub.name)}
                className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${
                  isChecked
                    ? 'bg-cyan-accent/15 border border-cyan-accent/50 text-ghost shadow-inner'
                    : 'bg-card border border-border/80 text-readable hover:bg-border/30'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {isChecked ? (
                    <CheckSquare className="w-4 h-4 text-cyan-accent flex-shrink-0" />
                  ) : (
                    <Square className="w-4 h-4 text-muted flex-shrink-0" />
                  )}
                  <span className="text-[13px] font-medium">{sub.name}</span>
                </div>
                <span className="text-[11px] font-mono text-muted">{sub.code}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accordion: Full Academic Syllabus Tree (Semesters 1 - 8) */}
      <div className="glass-panel p-4 rounded-xl border border-border flex flex-col gap-3">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center space-x-2 text-[16px] font-bold text-ghost">
            <Layers className="w-4 h-4 text-indigo-accent" />
            <h2>Semester Syllabus Tree (Sem 1-8)</h2>
          </div>
          <button
            onClick={onResetFilters}
            className="text-[11px] text-muted hover:text-ghost transition-colors underline"
          >
            Reset
          </button>
        </div>

        <div className="flex flex-col gap-2 max-h-[460px] overflow-y-auto pr-1">
          {semesters.map((sem) => {
            const isOpen = openSemesters[sem.id];
            const semActiveCount = sem.subjects.filter((s) => activeSubjectNames.includes(s.name)).length;
            const isAllSemSelected = semActiveCount === sem.subjects.length && sem.subjects.length > 0;

            return (
              <div key={sem.id} className="border border-border rounded-lg bg-card/60 overflow-hidden">
                {/* Semester Accordion Header with 1-Click Select All Controls */}
                <div
                  onClick={() => toggleSemester(sem.id)}
                  className="w-full flex items-center justify-between p-3 text-left hover:bg-border/30 transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    {isOpen ? (
                      <ChevronDown className="w-4 h-4 text-indigo-accent" />
                    ) : (
                      <ChevronRight className="w-4 h-4 text-muted" />
                    )}
                    <span className="text-[13px] font-semibold text-ghost">{sem.title}</span>
                  </div>

                  <div className="flex items-center space-x-2">
                    {/* Semester Quick Toggle Buttons */}
                    <button
                      onClick={(e) => isAllSemSelected ? handleClearSem(e, sem) : handleSelectAllInSem(e, sem)}
                      title={isAllSemSelected ? "Clear all in this sem" : "Select all in this sem"}
                      className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-canvas hover:bg-indigo-accent/20 border border-border text-indigo-accent hover:border-indigo-accent/40 transition-all"
                    >
                      {isAllSemSelected ? 'Clear' : 'Select All'}
                    </button>

                    {semActiveCount > 0 && (
                      <span className="px-2 py-0.5 rounded-full bg-indigo-accent/20 border border-indigo-accent/40 text-indigo-accent font-mono text-[11px] font-bold">
                        {semActiveCount}/{sem.subjects.length}
                      </span>
                    )}
                  </div>
                </div>

                {isOpen && (
                  <div className="p-3 pt-0 flex flex-col gap-2 border-t border-border/40 bg-canvas/30">
                    {sem.subjects.map((sub) => {
                      const isChecked = activeSubjectNames.includes(sub.name);
                      return (
                        <div
                          key={sub.id}
                          onClick={() => onToggleSubject(sub.name)}
                          className={`flex items-center justify-between p-2 rounded-md cursor-pointer transition-all ${
                            isChecked
                              ? 'bg-indigo-accent/15 border border-indigo-accent/40 text-ghost'
                              : 'hover:bg-border/30 text-readable'
                          }`}
                        >
                          <div className="flex items-center space-x-2.5">
                            {isChecked ? (
                              <CheckSquare className="w-4 h-4 text-indigo-accent flex-shrink-0" />
                            ) : (
                              <Square className="w-4 h-4 text-muted flex-shrink-0" />
                            )}
                            <span className="text-[13px] font-medium">{sub.name}</span>
                          </div>
                          <span className="text-[11px] font-mono text-muted">{sub.code}</span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Elective Bucket (PE & OE Pools) */}
      <div className="glass-panel p-4 rounded-xl border border-border flex flex-col gap-3">
        <div className="flex items-center space-x-2 text-[14px] font-semibold text-ghost">
          <Tag className="w-4 h-4 text-emerald-accent" />
          <span>Elective Bucket (PE & OE Pools)</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {allElectives.map((elec) => {
            const isSelected = activeSubjectNames.includes(elec.name);
            return (
              <button
                key={elec.id}
                onClick={() => onToggleSubject(elec.name)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-mono text-left transition-all ${
                  isSelected
                    ? 'bg-emerald-accent text-canvas font-bold border border-emerald-accent shadow-glow'
                    : 'bg-card border border-border text-muted hover:text-ghost hover:border-border/80'
                }`}
              >
                {elec.electiveType === 'PE' ? '[PE] ' : '[OE] '}
                {elec.name.replace(/Professional Elective \d+ \(/, '').replace(/Open Elective \d+ \(/, '').replace(/\)/, '')}
              </button>
            );
          })}
        </div>
      </div>

      {/* Industry Domain Filters */}
      <div className="glass-panel p-4 rounded-xl border border-border flex flex-col gap-3">
        <div className="flex items-center space-x-2 text-[14px] font-semibold text-ghost">
          <Filter className="w-4 h-4 text-indigo-accent" />
          <span>Industry Domain Filter</span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {DOMAIN_OPTIONS.map((domain) => {
            const isSelected = selectedDomain === domain;
            return (
              <button
                key={domain}
                onClick={() => onSelectDomain(domain)}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-mono font-medium transition-all ${
                  isSelected
                    ? 'bg-indigo-accent text-white shadow-glow border border-indigo-accent'
                    : 'bg-card border border-border text-muted hover:text-ghost hover:border-border/80'
                }`}
              >
                {domain}
              </button>
            );
          })}
        </div>
      </div>

      {/* Difficulty Selector */}
      <div className="glass-panel p-4 rounded-xl border border-border flex flex-col gap-3">
        <div className="flex items-center space-x-2 text-[14px] font-semibold text-ghost">
          <Sparkles className="w-4 h-4 text-cyan-accent" />
          <span>Difficulty Level</span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {DIFFICULTY_OPTIONS.map((diff) => {
            const isSelected = selectedDifficulty === diff;
            return (
              <button
                key={diff}
                onClick={() => onSelectDifficulty(diff)}
                className={`px-3 py-2 rounded-lg text-[12px] font-mono font-medium text-center transition-all ${
                  isSelected
                    ? 'bg-cyan-accent/20 border border-cyan-accent text-cyan-accent font-semibold'
                    : 'bg-card border border-border text-muted hover:text-ghost'
                }`}
              >
                {diff}
              </button>
            );
          })}
        </div>
      </div>

    </aside>
  );
};
