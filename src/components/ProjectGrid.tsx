'use client';

import React from 'react';
import { ProjectBlueprint, DomainFilter, DifficultyFilter } from '@/types';
import { ProjectCard } from './ProjectCard';
import { 
  ShieldCheck, 
  Sparkles, 
  AlertCircle, 
  RefreshCw, 
  Layers, 
  CheckCircle2, 
  Zap, 
  SlidersHorizontal,
  BookOpen
} from 'lucide-react';

interface ProjectGridProps {
  blueprints: ProjectBlueprint[];
  activeSubjectNames: string[];
  selectedDomain: DomainFilter;
  selectedDifficulty: DifficultyFilter;
  onViewBlueprint: (blueprint: ProjectBlueprint) => void;
  onScaffoldRepo: (blueprint: ProjectBlueprint) => void;
  onResetFilters: () => void;
  onOpenSubjectSelector?: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  blueprints,
  activeSubjectNames,
  selectedDomain,
  selectedDifficulty,
  onViewBlueprint,
  onScaffoldRepo,
  onResetFilters,
  onOpenSubjectSelector,
}) => {
  // Split blueprints into Single-Subject Foundation Projects & Integrated Projects
  const singleSubjectProjects = blueprints.filter((bp) => bp.isSingleSubject);
  const integratedProjects = blueprints.filter((bp) => !bp.isSingleSubject);

  return (
    <main className="flex-1 flex flex-col gap-6 w-full">
      
      {/* Top Banner: 2026 Industry Screening & Architecture Upgrade */}
      <div className="relative rounded-2xl glass-panel p-6 border border-indigo-accent/40 bg-gradient-to-r from-card via-card to-canvas overflow-hidden shadow-glow">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-indigo-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-10 w-48 h-48 bg-cyan-accent/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-accent/15 border border-indigo-accent/30 text-indigo-accent text-[12px] font-mono font-semibold">
              <ShieldCheck className="w-4 h-4 text-cyan-accent" />
              <span>2026 Industry Screening & Architecture Upgrade</span>
            </div>
            <h1 className="text-[20px] font-bold text-ghost tracking-tight">
              Curriculum-Matched Production Blueprints
            </h1>
            <p className="text-[14px] text-readable leading-relaxed">
              Every checked subject displays isolated starter foundation projects, and multi-subject combinations generate 2026 industry-screened microservice architectures (Docker, async APIs, connection pooling, and Prometheus metrics).
            </p>
          </div>

          <div className="flex flex-row md:flex-col items-center md:items-end justify-between w-full md:w-auto pt-2 md:pt-0 border-t md:border-t-0 border-border/60 gap-2">
            <div className="text-left md:text-right">
              <div className="text-[12px] font-mono text-muted">Active Recommendations</div>
              <div className="text-[20px] font-mono font-bold text-ghost">{blueprints.length} Ready</div>
            </div>

            {onOpenSubjectSelector && (
              <button
                onClick={onOpenSubjectSelector}
                className="px-3 py-1.5 rounded-xl bg-indigo-accent hover:bg-indigo-hover text-white font-mono text-xs font-semibold shadow-glow flex items-center space-x-1.5 transition-all"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Select Subjects (Sem 1-8)</span>
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Active Filter Strip */}
      <div className="flex flex-wrap items-center justify-between gap-2 px-1 text-[13px]">
        <div className="flex items-center space-x-2 text-readable flex-wrap gap-y-1">
          <span className="text-muted">Active Filters:</span>
          <button
            onClick={onOpenSubjectSelector}
            className="font-mono text-indigo-accent font-semibold hover:underline flex items-center gap-1 bg-indigo-accent/10 px-2 py-0.5 rounded border border-indigo-accent/30"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>{activeSubjectNames.length} Subjects Checked</span>
          </button>
          <span className="text-muted">•</span>
          <span className="font-mono text-cyan-accent font-semibold">
            Domain: {selectedDomain}
          </span>
          <span className="text-muted">•</span>
          <span className="font-mono text-ghost font-semibold">
            Level: {selectedDifficulty}
          </span>
        </div>

        {blueprints.length === 0 && (
          <button
            onClick={onResetFilters}
            className="flex items-center space-x-1.5 text-indigo-accent hover:underline font-mono text-[12px]"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        )}
      </div>

      {/* SECTION 1: Single-Subject Foundation Projects */}
      <div className="space-y-4">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/30">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-ghost">
                1. Single-Subject Foundation Projects
              </h2>
              <p className="text-[12px] text-muted">
                Isolated starter projects to test fundamental competence for each checked core subject
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-cyan-accent/10 text-cyan-accent font-mono text-[12px] font-semibold border border-cyan-accent/30">
            {singleSubjectProjects.length} Starter Projects
          </span>
        </div>

        {singleSubjectProjects.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {singleSubjectProjects.map((blueprint) => (
              <ProjectCard
                key={blueprint.id}
                blueprint={blueprint}
                onViewBlueprint={onViewBlueprint}
                onScaffoldRepo={onScaffoldRepo}
              />
            ))}
          </div>
        ) : (
          <div className="p-5 rounded-xl bg-card/60 border border-border text-center text-[13px] text-muted font-mono flex flex-col items-center gap-2">
            <span>No single-subject foundation projects match current domain/difficulty filter.</span>
            {onOpenSubjectSelector && (
              <button
                onClick={onOpenSubjectSelector}
                className="text-cyan-accent hover:underline text-xs flex items-center gap-1 font-mono"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Open Semester-Wise Subject Manager to pick required subjects</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* SECTION 2: Integrated Industry-Screened Projects */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between pb-2 border-b border-border">
          <div className="flex items-center space-x-2.5">
            <div className="p-1.5 rounded-lg bg-indigo-accent/10 text-indigo-accent border border-indigo-accent/30">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-[18px] font-bold text-ghost">
                2. Integrated Industry-Screened Projects (Multi-Subject)
              </h2>
              <p className="text-[12px] text-muted">
                Advanced architectures combining 2+ checked subjects with 2026 industry screening constraints
              </p>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-indigo-accent/10 text-indigo-accent font-mono text-[12px] font-semibold border border-indigo-accent/30">
            {integratedProjects.length} Production Architectures
          </span>
        </div>

        {integratedProjects.length > 0 ? (
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
            {integratedProjects.map((blueprint) => (
              <ProjectCard
                key={blueprint.id}
                blueprint={blueprint}
                onViewBlueprint={onViewBlueprint}
                onScaffoldRepo={onScaffoldRepo}
              />
            ))}
          </div>
        ) : (
          <div className="p-5 rounded-xl bg-card/60 border border-border text-center text-[13px] text-muted font-mono flex flex-col items-center gap-2">
            <span>Check 2 or more core subjects to unlock advanced integrated industry-screened project recommendations.</span>
            {onOpenSubjectSelector && (
              <button
                onClick={onOpenSubjectSelector}
                className="text-indigo-accent hover:underline text-xs flex items-center gap-1 font-mono"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Open Semester Subject Selector</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Empty state if total blueprints is 0 */}
      {blueprints.length === 0 && (
        <div className="glass-panel rounded-2xl p-12 text-center flex flex-col items-center justify-center border border-border my-6">
          <AlertCircle className="w-12 h-12 text-indigo-accent/60 mb-3 animate-bounce" />
          <h3 className="text-[18px] font-bold text-ghost mb-2">No Matching Blueprints Found</h3>
          <p className="text-[14px] text-readable max-w-md mb-6 leading-relaxed">
            There are no project blueprints matching the currently selected subject combination, industry domain, or difficulty level.
          </p>
          <div className="flex items-center space-x-3">
            <button
              onClick={onResetFilters}
              className="flex items-center space-x-2 px-4 py-2.5 bg-card hover:bg-border border border-border text-ghost rounded-lg font-medium text-xs transition-all"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Reset Filters</span>
            </button>
            {onOpenSubjectSelector && (
              <button
                onClick={onOpenSubjectSelector}
                className="flex items-center space-x-2 px-4 py-2.5 bg-indigo-accent hover:bg-indigo-hover text-white rounded-lg font-medium text-xs shadow-glow transition-all"
              >
                <SlidersHorizontal className="w-4 h-4" />
                <span>Manage Required Subjects</span>
              </button>
            )}
          </div>
        </div>
      )}

    </main>
  );
};
