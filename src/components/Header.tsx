'use client';

import React from 'react';
import { StudentProfile } from '@/types';
import { Cpu, ShieldCheck, Bot, Activity, UserCheck, LogIn, LogOut, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeaderProps {
  profile: StudentProfile;
  onOpenAuthModal: () => void;
  onSelectEnrolledSem: (semId: number) => void;
  onOpenMentor: () => void;
  onOpenCommitGuard: () => void;
  onLogout?: () => void;
}

const ENROLLED_SEM_OPTIONS = [
  { id: 1, label: 'Sem 1 / I-I' },
  { id: 2, label: 'Sem 2 / I-II' },
  { id: 3, label: 'Sem 3 / II-I' },
  { id: 4, label: 'Sem 4 / II-II' },
  { id: 5, label: 'Sem 5 / III-I' },
  { id: 6, label: 'Sem 6 / III-II' },
  { id: 7, label: 'Sem 7 / IV-I' },
  { id: 8, label: 'Sem 8 / IV-II' },
];

export const Header: React.FC<HeaderProps> = ({
  profile,
  onOpenAuthModal,
  onSelectEnrolledSem,
  onOpenMentor,
  onOpenCommitGuard,
  onLogout,
}) => {
  const { parsedMeta, email } = profile;

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-border px-4 lg:px-8 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Brand Logo */}
        <div className="flex items-center space-x-3 w-full md:w-auto justify-between md:justify-start">
          <div className="flex items-center space-x-2.5">
            <div className="relative p-2 rounded-xl bg-indigo-accent/10 border border-indigo-accent/30 text-indigo-accent shadow-glow">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[20px] font-semibold tracking-tight text-ghost">
                  StudentForge<span className="text-indigo-accent">.AI</span>
                </span>
                <span className="text-[12px] font-mono font-medium px-2 py-0.5 rounded-full bg-cyan-accent/10 text-cyan-accent border border-cyan-accent/30">
                  PVP23 Screening
                </span>
              </div>
              <p className="text-[12px] text-muted hidden sm:block">
                Academic Curriculum to 2026 Production Architecture Engine
              </p>
            </div>
          </div>
          
          {/* Mobile buttons */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onOpenAuthModal}
              className="p-2 rounded-lg bg-card border border-border text-xs flex items-center gap-1"
            >
              <UserCheck className="w-4 h-4 text-cyan-accent" />
            </button>
            <button
              onClick={onOpenMentor}
              className="p-2 rounded-lg bg-indigo-accent/10 text-indigo-accent border border-indigo-accent/30 text-xs flex items-center gap-1.5"
            >
              <Bot className="w-4 h-4" />
            </button>
            {onLogout && (
              <button
                onClick={onLogout}
                className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/30 text-xs flex items-center"
                title="Log Out to Login Screen"
              >
                <LogOut className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Authenticated Student Info & Enrolled Semester Dropdown */}
        <div className="flex-1 max-w-2xl w-full flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
          
          {/* Student Profile Card */}
          <div
            onClick={onOpenAuthModal}
            className="flex items-center space-x-3 bg-card hover:bg-border/40 border border-border px-3.5 py-2 rounded-xl text-xs cursor-pointer transition-all flex-1"
            title="Click to Switch Student or Re-authenticate"
          >
            <UserCheck className="w-4 h-4 text-indigo-accent flex-shrink-0" />
            <div className="flex-1 min-w-0 text-left">
              <div className="flex items-center space-x-2">
                <span className="font-mono font-bold text-ghost text-[13px]">{parsedMeta.rawInput}</span>
                <span className="text-[11px] font-mono text-emerald-accent bg-emerald-accent/10 px-1.5 py-0.2 rounded border border-emerald-accent/20">
                  {parsedMeta.branchCode === '12' ? 'IT' : 'CSD'}
                </span>
              </div>
              <div className="text-[11px] text-muted truncate">
                {email} • {parsedMeta.branchName}
              </div>
            </div>
            <span className="text-[11px] font-mono text-cyan-accent underline hidden lg:inline">
              Switch
            </span>
          </div>

          {/* Enrolled Semester Selector Dropdown */}
          <div className="relative flex-shrink-0">
            <div className="flex items-center space-x-1.5 bg-canvas border border-border px-3 py-2 rounded-xl text-xs font-mono">
              <span className="text-muted">Enrolled:</span>
              <select
                value={parsedMeta.enrolledSemId}
                onChange={(e) => onSelectEnrolledSem(parseInt(e.target.value, 10))}
                className="bg-transparent text-cyan-accent font-bold focus:outline-none cursor-pointer pr-1"
              >
                {ENROLLED_SEM_OPTIONS.map((sem) => (
                  <option key={sem.id} value={sem.id} className="bg-card text-ghost font-mono">
                    {sem.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

        </div>

        {/* Top Header Actions (Commit Guard, AI Mentor, Log Out) */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={onOpenCommitGuard}
            className="flex items-center space-x-2 px-3 py-1.5 bg-card hover:bg-border/50 border border-border rounded-xl transition-all text-xs group"
            title="View Commit Velocity & Originality Score"
          >
            <Activity className="w-4 h-4 text-emerald-accent group-hover:scale-110 transition-transform" />
            <div className="text-left">
              <div className="text-[11px] text-muted">Commit Guard</div>
              <div className="text-[12px] font-mono font-semibold text-ghost">96/100 Cadence</div>
            </div>
          </button>

          <button
            onClick={onOpenMentor}
            className="flex items-center space-x-2 px-3.5 py-2 bg-indigo-accent hover:bg-indigo-hover text-white rounded-xl transition-all shadow-glow font-medium text-xs"
          >
            <Bot className="w-4 h-4" />
            <span>AI Code Mentor</span>
          </button>

          {onLogout && (
            <button
              onClick={onLogout}
              className="flex items-center space-x-1.5 px-3 py-2 bg-card hover:bg-red-500/10 text-muted hover:text-red-400 border border-border hover:border-red-500/30 rounded-xl transition-all font-mono text-xs"
              title="Log out and return to Login Screen"
            >
              <LogOut className="w-4 h-4" />
              <span>Log Out</span>
            </button>
          )}
        </div>

      </div>
    </header>
  );
};
