'use client';

import React, { useState, useMemo } from 'react';
import { parseRollNumber, validateInstitutionalEmail } from '@/lib/rollNumberParser';
import { StudentProfile } from '@/types';
import { ShieldCheck, UserCheck, Mail, ArrowRight, AlertCircle, CheckCircle2, Cpu, X, BookOpen } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLoginSuccess: (profile: StudentProfile) => void;
  currentProfile?: StudentProfile;
}

export const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  onLoginSuccess,
  currentProfile,
}) => {
  const [rollInput, setRollInput] = useState(currentProfile?.rollNumber || '24501A4420');
  const [emailInput, setEmailInput] = useState(
    currentProfile?.email || '24501a4420@pvpsiddhartha.ac.in'
  );
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

  const parsedMeta = useMemo(() => parseRollNumber(rollInput), [rollInput]);
  const isEmailValid = useMemo(() => validateInstitutionalEmail(emailInput), [emailInput]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!parsedMeta.isValid || !isEmailValid) {
      return;
    }

    const profile: StudentProfile = {
      rollNumber: parsedMeta.rawInput,
      email: emailInput.trim().toLowerCase(),
      parsedMeta,
      isAuthenticated: true,
    };

    onLoginSuccess(profile);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-canvas/85 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-xl glass-panel rounded-2xl border border-indigo-accent/40 shadow-2xl overflow-hidden text-ghost bg-card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-border bg-gradient-to-r from-card to-canvas flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-indigo-accent/15 border border-indigo-accent/30 text-indigo-accent shadow-glow">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="text-[20px] font-bold text-ghost tracking-tight">Student Authentication</h2>
                <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent">
                  PVPSIT PVP23
                </span>
              </div>
              <p className="text-[13px] text-muted font-mono">
                Enter your Roll Number & Institutional Email to auto-load curriculum
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-card hover:bg-border text-muted hover:text-ghost transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          
          {/* Roll Number Input */}
          <div className="space-y-2">
            <label className="block text-[13px] font-mono font-medium text-readable flex items-center justify-between">
              <span className="flex items-center space-x-1.5">
                <UserCheck className="w-4 h-4 text-indigo-accent" />
                <span>Student Roll Number</span>
              </span>
              <span className="text-[11px] text-muted">e.g., 24501A4420 or 25501A1201</span>
            </label>
            <input
              type="text"
              value={rollInput}
              onChange={(e) => setRollInput(e.target.value)}
              placeholder="e.g., 24501A4420"
              className={`w-full px-4 py-2.5 bg-canvas border rounded-xl font-mono text-[14px] text-ghost placeholder-muted focus:outline-none transition-all ${
                attemptedSubmit && !parsedMeta.isValid
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-border focus:border-indigo-accent focus:ring-1 focus:ring-indigo-accent'
              }`}
            />
          </div>

          {/* Institutional Email Input */}
          <div className="space-y-2">
            <label className="block text-[13px] font-mono font-medium text-readable flex items-center justify-between">
              <span className="flex items-center space-x-1.5">
                <Mail className="w-4 h-4 text-cyan-accent" />
                <span>College Institutional Email</span>
              </span>
              <span className="text-[11px] text-cyan-accent font-mono">@pvpsiddhartha.ac.in</span>
            </label>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="studentroll@pvpsiddhartha.ac.in"
              className={`w-full px-4 py-2.5 bg-canvas border rounded-xl font-mono text-[14px] text-ghost placeholder-muted focus:outline-none transition-all ${
                attemptedSubmit && !isEmailValid
                  ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                  : 'border-border focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent'
              }`}
            />
            {attemptedSubmit && !isEmailValid && (
              <p className="text-[12px] text-red-400 font-mono flex items-center space-x-1 mt-1">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>Email must end with @pvpsiddhartha.ac.in format</span>
              </p>
            )}
          </div>

          {/* Live Regex Parser Preview Box */}
          <div className="p-4 rounded-xl bg-canvas border border-border space-y-3">
            <div className="flex items-center justify-between border-b border-border/60 pb-2">
              <span className="text-[12px] font-mono text-muted uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-accent" />
                <span>Roll Number Regex Parser Inspection</span>
              </span>
              <span className={`px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                parsedMeta.isValid ? 'bg-emerald-accent/15 text-emerald-accent border border-emerald-accent/30' : 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
              }`}>
                {parsedMeta.isValid ? 'Format Valid' : 'Format Invalid'}
              </span>
            </div>

            {parsedMeta.isValid ? (
              <div className="grid grid-cols-2 gap-2 text-[12px] font-mono">
                <div className="p-2 rounded bg-card border border-border/80">
                  <span className="text-muted">Academic Status:</span>{' '}
                  <span className="text-ghost font-bold">{parsedMeta.year}</span>
                </div>
                <div className="p-2 rounded bg-card border border-border/80">
                  <span className="text-muted">Current Semester:</span>{' '}
                  <span className="text-cyan-accent font-bold">{parsedMeta.enrolledSemester}</span>
                </div>
                <div className="p-2 rounded bg-card border border-border/80 col-span-2">
                  <span className="text-muted">Detected Branch:</span>{' '}
                  <span className="text-indigo-accent font-bold">{parsedMeta.branchName}</span> (Code #{parsedMeta.branchCode})
                </div>
                <div className="p-2 rounded bg-card border border-border/80 col-span-2 flex items-center justify-between">
                  <span className="text-muted">Auto-Completed Semesters:</span>{' '}
                  <span className="text-emerald-accent font-bold">
                    {parsedMeta.completedSemIds.length > 0
                      ? `Semesters ${parsedMeta.completedSemIds.join(', ')} Auto-Checked`
                      : 'Fresher (Sem 1 Enrolled)'}
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-[12px] text-muted font-mono p-2">
                Enter roll number like <span className="text-ghost">24501A4420</span> (CSD Year 3) or <span className="text-ghost">25501A1201</span> (IT Year 2)
              </div>
            )}
          </div>

          {/* Quick Preset Buttons for Testing */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono text-muted uppercase">Quick Demo Profiles</div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => {
                  setRollInput('24501A4420');
                  setEmailInput('24501a4420@pvpsiddhartha.ac.in');
                }}
                className="px-2.5 py-1 rounded bg-card hover:bg-border border border-border text-[11px] font-mono text-readable hover:text-ghost transition-colors"
              >
                24501A4420 (CSD Year 3 / Sem 5)
              </button>
              <button
                type="button"
                onClick={() => {
                  setRollInput('25501A1201');
                  setEmailInput('25501a1201@pvpsiddhartha.ac.in');
                }}
                className="px-2.5 py-1 rounded bg-card hover:bg-border border border-border text-[11px] font-mono text-readable hover:text-ghost transition-colors"
              >
                25501A1201 (IT Year 2 / Sem 3)
              </button>
              <button
                type="button"
                onClick={() => {
                  setRollInput('26501A4405');
                  setEmailInput('26501a4405@pvpsiddhartha.ac.in');
                }}
                className="px-2.5 py-1 rounded bg-card hover:bg-border border border-border text-[11px] font-mono text-readable hover:text-ghost transition-colors"
              >
                26501A4405 (CSD Year 1 / Sem 1)
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded-xl bg-indigo-accent hover:bg-indigo-hover text-white font-medium text-xs shadow-glow transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Authenticate & Pre-Load Branch Curriculum</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
          </div>

        </form>

      </div>
    </div>
  );
};
