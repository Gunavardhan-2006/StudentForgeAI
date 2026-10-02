'use client';

import React from 'react';
import { ProjectBlueprint } from '@/types';
import { ShieldCheck, Zap, Code, Terminal, ArrowRight, Star } from 'lucide-react';

interface ProjectCardProps {
  blueprint: ProjectBlueprint;
  onViewBlueprint: (blueprint: ProjectBlueprint) => void;
  onScaffoldRepo: (blueprint: ProjectBlueprint) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  blueprint,
  onViewBlueprint,
  onScaffoldRepo,
}) => {
  return (
    <div className="glass-card rounded-xl p-5 flex flex-col justify-between border border-border relative group">
      
      {/* Top Card Header Metrics & Badges */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-1 rounded-md text-[12px] font-mono font-medium bg-indigo-accent/15 border border-indigo-accent/30 text-indigo-accent">
              {blueprint.domain}
            </span>
            <span className="px-2 py-0.5 rounded-md text-[12px] font-mono bg-card border border-border text-muted">
              {blueprint.difficulty}
            </span>
          </div>

          <div className="flex items-center space-x-2">
            {blueprint.verified2026 && (
              <span className="flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-accent/10 border border-emerald-accent/30 text-emerald-accent text-[11px] font-mono font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>2026 Verified</span>
              </span>
            )}
            <span className="flex items-center space-x-1 text-[12px] font-mono font-bold text-cyan-accent bg-cyan-accent/10 border border-cyan-accent/30 px-2 py-0.5 rounded-md">
              <Star className="w-3 h-3 text-cyan-accent fill-cyan-accent" />
              <span>{blueprint.readinessScore}/100</span>
            </span>
          </div>
        </div>

        {/* Project Title & Problem Statement */}
        <h3 className="text-[17px] font-semibold text-ghost mb-2 group-hover:text-indigo-accent transition-colors">
          {blueprint.title}
        </h3>
        <p className="text-[14px] leading-relaxed text-readable mb-4 line-clamp-3">
          {blueprint.problemStatement}
        </p>

        {/* Monospaced Tech Stack Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {blueprint.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded bg-canvas border border-border/80 text-[12px] font-mono text-muted group-hover:border-border transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* "Why this gets you hired in 2026" Callout Box */}
        <div className="p-3.5 rounded-lg bg-card/90 border border-indigo-accent/30 relative overflow-hidden mb-5">
          <div className="flex items-center space-x-2 text-indigo-accent text-[12px] font-mono font-bold mb-1 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5 text-cyan-accent animate-pulse" />
            <span>Why this gets you hired in 2026</span>
          </div>
          <p className="text-[13px] text-readable mb-2">
            {blueprint.whyGetsYouHired}
          </p>
          <div className="flex items-center space-x-2 text-[12px] font-mono text-cyan-accent bg-canvas/80 px-2.5 py-1 rounded border border-cyan-accent/20">
            <span className="text-muted">p99 Metric:</span>
            <span className="font-semibold text-ghost">{blueprint.p99Benchmark}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3 pt-3 border-t border-border/60">
        <button
          onClick={() => onViewBlueprint(blueprint)}
          className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-3 rounded-lg bg-indigo-accent hover:bg-indigo-hover text-white text-[13px] font-medium transition-all shadow-glow"
        >
          <Code className="w-4 h-4" />
          <span>View Blueprint</span>
        </button>

        <button
          onClick={() => onScaffoldRepo(blueprint)}
          className="flex flex-row items-center justify-center space-x-1.5 py-2.5 px-3 rounded-lg bg-card hover:bg-border/60 border border-border text-ghost text-[13px] font-mono font-medium transition-all"
        >
          <Terminal className="w-4 h-4 text-cyan-accent" />
          <span>Scaffold Repo</span>
        </button>
      </div>

    </div>
  );
};
