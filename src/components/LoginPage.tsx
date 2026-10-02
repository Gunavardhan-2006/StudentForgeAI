'use client';

import React, { useState, useMemo } from 'react';
import { parseRollNumber, validateInstitutionalEmail } from '@/lib/rollNumberParser';
import { StudentProfile } from '@/types';
import { 
  Cpu, 
  ShieldCheck, 
  UserCheck, 
  Mail, 
  ArrowRight, 
  AlertCircle, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  Code2, 
  GraduationCap, 
  Layers, 
  GitBranch, 
  Terminal,
  Building2,
  Check
} from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (profile: StudentProfile) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [rollInput, setRollInput] = useState('24501A4420');
  const [emailInput, setEmailInput] = useState('24501a4420@pvpsiddhartha.ac.in');
  const [passwordInput, setPasswordInput] = useState('••••••••••••');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const parsedMeta = useMemo(() => parseRollNumber(rollInput), [rollInput]);
  const isEmailValid = useMemo(() => validateInstitutionalEmail(emailInput), [emailInput]);

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
  };

  const setPresetProfile = (roll: string, email: string) => {
    setRollInput(roll);
    setEmailInput(email);
  };

  return (
    <div className="min-h-screen bg-canvas text-ghost font-sans flex flex-col relative overflow-hidden selection:bg-indigo-accent selection:text-white">
      
      {/* Dynamic Background Glow & Grid Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-accent/15 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-cyan-accent/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-emerald-accent/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Subtle Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#CBD5E1 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      ></div>

      {/* Top Navbar */}
      <header className="relative z-10 w-full border-b border-border/80 bg-card/60 backdrop-blur-md px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-indigo-accent/15 border border-indigo-accent/30 text-indigo-accent shadow-glow">
              <Cpu className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-[20px] font-bold tracking-tight text-ghost">
                  StudentForge<span className="text-indigo-accent">.AI</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent font-semibold">
                  PVPSIT PVP23 Portal
                </span>
              </div>
              <p className="text-[12px] text-muted font-mono hidden sm:block">
                Prasad V. Potluri Siddhartha Institute of Technology
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-3 text-xs font-mono text-muted">
            <span className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card border border-border">
              <Building2 className="w-3.5 h-3.5 text-indigo-accent" />
              <span>Dept. of CSD & IT</span>
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-accent/10 border border-emerald-accent/30 text-emerald-accent font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Production Screening 2026</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="relative z-10 flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left Column: Portal Information & Feature Highlights */}
        <div className="flex-1 space-y-8 text-left max-w-2xl">
          
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-accent/10 border border-indigo-accent/30 text-indigo-accent text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Automated Roll Number Curriculum Engine</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ghost tracking-tight leading-[1.15]">
              Bridge College Syllabus to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-accent via-cyan-accent to-emerald-accent">Production Architecture</span>
            </h1>
            <p className="text-sm sm:text-base text-readable leading-relaxed font-sans">
              Enter your PVPSIT Roll Number to automatically parse completed academic semesters, unlock branch-specific curriculum blueprints, and generate production-grade capstone architectures.
            </p>
          </div>

          {/* Key Feature Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl glass-card border border-border space-y-2">
              <div className="p-2 w-fit rounded-lg bg-indigo-accent/15 text-indigo-accent border border-indigo-accent/20">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-ghost">PVP23 Curriculum Mapping</h3>
              <p className="text-xs text-muted leading-relaxed">
                Smart parsing for CSE (Data Science) and IT regulations. Auto-selects active academic subjects.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-card border border-border space-y-2">
              <div className="p-2 w-fit rounded-lg bg-cyan-accent/15 text-cyan-accent border border-cyan-accent/20">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-ghost">P99 Blueprint Generator</h3>
              <p className="text-xs text-muted leading-relaxed">
                Single & Multi-subject integrated project designs with recruiter evaluation criteria & 2026 tech stacks.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-card border border-border space-y-2">
              <div className="p-2 w-fit rounded-lg bg-emerald-accent/15 text-emerald-accent border border-emerald-accent/20">
                <GitBranch className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-ghost">One-Click Git Scaffolder</h3>
              <p className="text-xs text-muted leading-relaxed">
                Generate production folder structures, Dockerfiles, and shell setup scripts ready for GitHub push.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-card border border-border space-y-2">
              <div className="p-2 w-fit rounded-lg bg-purple-500/15 text-purple-400 border border-purple-500/20">
                <Terminal className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-ghost">Commit Velocity Guard</h3>
              <p className="text-xs text-muted leading-relaxed">
                Monitors organic code commit cadence, preventing copy-paste dumps while calculating developer score.
              </p>
            </div>
          </div>

          {/* Quick Institutional Stats */}
          <div className="pt-2 border-t border-border/60 grid grid-cols-3 gap-4 text-left font-mono">
            <div>
              <div className="text-xl sm:text-2xl font-bold text-ghost">100%</div>
              <div className="text-[11px] text-muted">PVP23 Compliance</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-accent">32+</div>
              <div className="text-[11px] text-muted">Academic Subjects</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-indigo-accent">16</div>
              <div className="text-[11px] text-muted">Integrated Blueprints</div>
            </div>
          </div>

        </div>

        {/* Right Column: High-Aesthetic Glassmorphic Login Form Card */}
        <div className="w-full max-w-md flex-shrink-0">
          <div className="w-full glass-panel rounded-2xl border border-indigo-accent/30 shadow-2xl overflow-hidden bg-card/90">
            
            {/* Card Top Title Banner */}
            <div className="p-6 border-b border-border bg-gradient-to-r from-card via-canvas to-card">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl font-bold text-ghost tracking-tight">Student Authentication</h2>
                  <p className="text-xs text-muted font-mono mt-0.5">
                    Enter your college credentials to unlock portal
                  </p>
                </div>
                <div className="p-2 rounded-xl bg-indigo-accent/15 border border-indigo-accent/30 text-indigo-accent">
                  <Lock className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-5">
              
              {/* Roll Number Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-medium text-readable flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <UserCheck className="w-4 h-4 text-indigo-accent" />
                    <span>Student Roll Number</span>
                  </span>
                  <span className="text-[11px] text-muted">Format: 24501A4420</span>
                </label>
                <input
                  type="text"
                  value={rollInput}
                  onChange={(e) => setRollInput(e.target.value)}
                  placeholder="e.g., 24501A4420"
                  className={`w-full px-4 py-2.5 bg-canvas border rounded-xl font-mono text-sm text-ghost placeholder-muted focus:outline-none transition-all ${
                    attemptedSubmit && !parsedMeta.isValid
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-border focus:border-indigo-accent focus:ring-1 focus:ring-indigo-accent'
                  }`}
                />
              </div>

              {/* Institutional Email Input */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-medium text-readable flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Mail className="w-4 h-4 text-cyan-accent" />
                    <span>College Email</span>
                  </span>
                  <span className="text-[11px] text-cyan-accent font-mono">@pvpsiddhartha.ac.in</span>
                </label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="24501a4420@pvpsiddhartha.ac.in"
                  className={`w-full px-4 py-2.5 bg-canvas border rounded-xl font-mono text-sm text-ghost placeholder-muted focus:outline-none transition-all ${
                    attemptedSubmit && !isEmailValid
                      ? 'border-red-500 focus:ring-1 focus:ring-red-500'
                      : 'border-border focus:border-cyan-accent focus:ring-1 focus:ring-cyan-accent'
                  }`}
                />
                {attemptedSubmit && !isEmailValid && (
                  <p className="text-xs text-red-400 font-mono flex items-center space-x-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Must end with @pvpsiddhartha.ac.in domain</span>
                  </p>
                )}
              </div>

              {/* Security Password Field (Simulated Portal Auth) */}
              <div className="space-y-1.5">
                <label className="block text-xs font-mono font-medium text-readable flex items-center justify-between">
                  <span className="flex items-center space-x-1.5">
                    <Lock className="w-4 h-4 text-emerald-accent" />
                    <span>Portal Passcode</span>
                  </span>
                  <span className="text-[11px] text-muted">Institutional PIN</span>
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full px-4 py-2.5 bg-canvas border border-border rounded-xl font-mono text-sm text-ghost focus:border-emerald-accent focus:outline-none focus:ring-1 focus:ring-emerald-accent transition-all"
                />
              </div>

              {/* Dynamic Regex Parsing Inspection Card */}
              <div className="p-3.5 rounded-xl bg-canvas border border-border/80 space-y-2 text-xs font-mono">
                <div className="flex items-center justify-between border-b border-border/60 pb-1.5">
                  <span className="text-[11px] text-muted uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-indigo-accent" />
                    <span>Live Roll Number Regex Inspection</span>
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                    parsedMeta.isValid 
                      ? 'bg-emerald-accent/15 text-emerald-accent border border-emerald-accent/30' 
                      : 'bg-yellow-500/15 text-yellow-400 border border-yellow-500/30'
                  }`}>
                    {parsedMeta.isValid ? 'Valid PVPSIT Format' : 'Invalid Format'}
                  </span>
                </div>

                {parsedMeta.isValid ? (
                  <div className="grid grid-cols-2 gap-1.5 text-[11px]">
                    <div className="p-1.5 rounded bg-card border border-border/60">
                      <span className="text-muted">Academic:</span> <span className="text-ghost font-semibold">{parsedMeta.year}</span>
                    </div>
                    <div className="p-1.5 rounded bg-card border border-border/60">
                      <span className="text-muted">Enrolled:</span> <span className="text-cyan-accent font-semibold">{parsedMeta.enrolledSemester}</span>
                    </div>
                    <div className="p-1.5 rounded bg-card border border-border/60 col-span-2 truncate">
                      <span className="text-muted">Branch:</span> <span className="text-indigo-accent font-semibold">{parsedMeta.branchName}</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-[11px] text-muted">
                    Enter valid roll number e.g. <span className="text-ghost font-bold">24501A4420</span>
                  </div>
                )}
              </div>

              {/* Quick Demo Test Accounts Presets */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-mono text-muted uppercase tracking-wide">Quick Test Login Profiles:</span>
                <div className="flex flex-col gap-1.5">
                  <button
                    type="button"
                    onClick={() => setPresetProfile('24501A4420', '24501a4420@pvpsiddhartha.ac.in')}
                    className="w-full text-left px-3 py-1.5 rounded-lg bg-card hover:bg-indigo-accent/10 border border-border hover:border-indigo-accent/40 text-xs font-mono transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-ghost font-bold">24501A4420</span>{' '}
                      <span className="text-indigo-accent">(CSD Year 3 / Sem 5)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-indigo-accent group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setPresetProfile('25501A1201', '25501a1201@pvpsiddhartha.ac.in')}
                    className="w-full text-left px-3 py-1.5 rounded-lg bg-card hover:bg-cyan-accent/10 border border-border hover:border-cyan-accent/40 text-xs font-mono transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-ghost font-bold">25501A1201</span>{' '}
                      <span className="text-cyan-accent">(IT Year 2 / Sem 3)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-cyan-accent group-hover:translate-x-0.5 transition-all" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setPresetProfile('26501A4405', '26501a4405@pvpsiddhartha.ac.in')}
                    className="w-full text-left px-3 py-1.5 rounded-lg bg-card hover:bg-emerald-accent/10 border border-border hover:border-emerald-accent/40 text-xs font-mono transition-all flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-ghost font-bold">26501A4405</span>{' '}
                      <span className="text-emerald-accent">(CSD Year 1 / Sem 1)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-muted group-hover:text-emerald-accent group-hover:translate-x-0.5 transition-all" />
                  </button>
                </div>
              </div>

              {/* Submit / Authenticate Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-indigo-accent to-indigo-hover hover:from-indigo-hover hover:to-indigo-accent text-white font-medium text-sm shadow-glow flex items-center justify-center space-x-2 transition-all group cursor-pointer"
              >
                <UserCheck className="w-4 h-4" />
                <span>Authenticate & Launch Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

            </form>

            {/* Footer Notice */}
            <div className="px-6 py-3 border-t border-border/80 bg-canvas/40 text-center text-[11px] font-mono text-muted">
              PVP23 Autonomous Syllabus & Production Mapper • PVPSIT 2026
            </div>

          </div>
        </div>

      </main>

      {/* Footer Bar */}
      <footer className="relative z-10 w-full border-t border-border/80 bg-card/60 backdrop-blur-md py-4 px-6 text-center text-xs font-mono text-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            StudentForge AI © 2026 • Prasad V. Potluri Siddhartha Institute of Technology
          </div>
          <div className="flex items-center space-x-4 text-readable">
            <span>PVP23 Regulations</span>
            <span>•</span>
            <span className="text-cyan-accent">CSD & IT Curriculum Engine</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
