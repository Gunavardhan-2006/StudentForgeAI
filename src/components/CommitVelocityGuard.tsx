'use client';

import React, { useState } from 'react';
import { Activity, ShieldCheck, AlertTriangle, GitCommit, GitPullRequest, Zap, X } from 'lucide-react';

interface CommitVelocityGuardProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommitVelocityGuard: React.FC<CommitVelocityGuardProps> = ({ isOpen, onClose }) => {
  // Slider state: 0 = Monolithic Zip Drop, 100 = 5-Day Atomic Commits
  const [cadenceLevel, setCadenceLevel] = useState(85);

  if (!isOpen) return null;

  // Calculate score based on slider
  const score = Math.round(40 + (cadenceLevel / 100) * 58);
  const isHighQuality = score >= 80;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/80 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-2xl glass-panel rounded-2xl border border-emerald-accent/40 shadow-2xl flex flex-col overflow-hidden text-ghost"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border bg-card">
          <div className="flex items-center space-x-3">
            <div className="p-2 rounded-xl bg-emerald-accent/15 border border-emerald-accent/30 text-emerald-accent">
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[18px] font-bold text-ghost">Commit Velocity & Originality Guard</span>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-emerald-accent/10 border border-emerald-accent/30 text-emerald-accent">
                  Anti-Zip Shield Active
                </span>
              </div>
              <p className="text-[12px] text-muted font-mono">
                Continuous Integration & Recruiter Candidate Ranking Simulator
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-card hover:bg-border/60 text-muted hover:text-ghost transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 bg-canvas/50">
          
          {/* Main Score Gauge */}
          <div className="p-5 rounded-xl bg-card border border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div
                className={`w-20 h-20 rounded-full flex flex-col items-center justify-center border-4 font-mono font-bold ${
                  isHighQuality
                    ? 'border-emerald-accent bg-emerald-accent/10 text-emerald-accent'
                    : 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                }`}
              >
                <span className="text-[22px] leading-none">{score}</span>
                <span className="text-[10px] text-muted">/100</span>
              </div>

              <div>
                <div className="text-[14px] font-semibold text-ghost flex items-center space-x-2">
                  <span>{isHighQuality ? 'Production-Grade Cadence' : 'Warning: High Copy-Paste Risk'}</span>
                  {isHighQuality ? (
                    <ShieldCheck className="w-4 h-4 text-emerald-accent" />
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                  )}
                </div>
                <p className="text-[13px] text-readable max-w-sm">
                  {isHighQuality
                    ? 'Recruiters favor atomic commits spanning multiple days with unit tests over single monolithic zip file uploads.'
                    : 'Single zip dumps raise red flags during recruiter screening. Split work into atomic feature commits.'}
                </p>
              </div>
            </div>

            <div className="px-3 py-1.5 rounded-lg bg-canvas border border-border font-mono text-[12px] text-cyan-accent text-center">
              Recruiter Rank: <span className="font-bold text-ghost">{isHighQuality ? 'Top 5%' : 'Bottom 40%'}</span>
            </div>
          </div>

          {/* Interactive Commit Simulation Slider */}
          <div className="p-4 rounded-xl bg-card border border-border space-y-3">
            <div className="flex items-center justify-between text-[13px]">
              <span className="font-semibold text-ghost flex items-center gap-1.5">
                <GitCommit className="w-4 h-4 text-indigo-accent" />
                <span>Simulate Your Commit Behavior</span>
              </span>
              <span className="font-mono text-cyan-accent font-bold">
                {cadenceLevel < 30 ? '1 Dump Commit' : `${Math.round(cadenceLevel / 7)} Atomic Commits`}
              </span>
            </div>

            <input
              type="range"
              min="0"
              max="100"
              value={cadenceLevel}
              onChange={(e) => setCadenceLevel(parseInt(e.target.value, 10))}
              className="w-full accent-indigo-accent cursor-pointer"
            />

            <div className="flex justify-between text-[11px] font-mono text-muted">
              <span>❌ Single ZIP / 1 Big Commit</span>
              <span>⚡ 5-Day Continuous Atomic Commits</span>
            </div>
          </div>

          {/* Metrics Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 font-mono text-[12px]">
            <div className="p-3 rounded-lg bg-canvas border border-border space-y-1">
              <div className="text-muted flex items-center gap-1">
                <GitCommit className="w-3.5 h-3.5 text-indigo-accent" />
                <span>Atomic Commits</span>
              </div>
              <div className="text-ghost font-bold text-[14px]">
                {Math.round(cadenceLevel / 7)} Commits
              </div>
            </div>

            <div className="p-3 rounded-lg bg-canvas border border-border space-y-1">
              <div className="text-muted flex items-center gap-1">
                <GitPullRequest className="w-3.5 h-3.5 text-cyan-accent" />
                <span>CI Tests Status</span>
              </div>
              <div className="text-emerald-accent font-bold text-[14px]">
                {isHighQuality ? '100% Passing' : 'Skipped'}
              </div>
            </div>

            <div className="p-3 rounded-lg bg-canvas border border-border space-y-1">
              <div className="text-muted flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-yellow-400" />
                <span>Originality Score</span>
              </div>
              <div className="text-cyan-accent font-bold text-[14px]">
                {score}% Original
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t border-border bg-card flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-indigo-accent hover:bg-indigo-hover text-white text-xs font-medium shadow-glow transition-all"
          >
            Got it, Keep Committing
          </button>
        </div>

      </div>
    </div>
  );
};
