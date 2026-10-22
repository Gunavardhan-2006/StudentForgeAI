'use client';

import React, { useState, useMemo } from 'react';
import { parseRollNumber, validateInstitutionalEmail } from '@/lib/rollNumberParser';
import { StudentProfile } from '@/types';
import { ThemeToggle } from '@/components/ThemeToggle';
import { 
  Sparkles, 
  BookOpen, 
  FolderGit2, 
  ArrowRight, 
  AlertCircle, 
  Lock, 
  Mail, 
  User, 
  GraduationCap, 
  ChevronRight,
  CheckCircle2
} from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (profile: StudentProfile) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [rollInput, setRollInput] = useState('24501A4420');
  const [emailInput, setEmailInput] = useState('24501a4420@pvpsiddhartha.ac.in');
  const [passwordInput, setPasswordInput] = useState('••••••••••••');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);

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

  const handleStartExploring = () => {
    // If current inputs are valid, log in directly; otherwise focus form
    if (parsedMeta.isValid && isEmailValid) {
      onLoginSuccess({
        rollNumber: parsedMeta.rawInput,
        email: emailInput.trim().toLowerCase(),
        parsedMeta,
        isAuthenticated: true,
      });
    } else {
      const el = document.getElementById('roll-input');
      el?.focus();
    }
  };

  const handleLearnMore = () => {
    const el = document.getElementById('features-section');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background text-text-primary font-sans flex flex-col antialiased selection:bg-primary selection:text-white transition-colors duration-250 ease-in-out">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full glass-panel border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & College Badge */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-[12px] bg-primary flex items-center justify-center text-white shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-text-primary tracking-tight">
                  StudentForge<span className="text-primary">.AI</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-primary/10 text-primary border border-primary/20">
                  PVPSIT Portal
                </span>
              </div>
              <p className="text-[11px] text-text-muted hidden sm:block">
                Prasad V. Potluri Siddhartha Institute of Technology
              </p>
            </div>
          </div>

          {/* Right Header: Theme Toggle & Regulations Badge */}
          <div className="flex items-center space-x-3 text-xs text-text-secondary font-medium">
            <span className="hidden md:inline-flex items-center px-3 py-1.5 rounded-full bg-surface text-text-secondary border border-border">
              PVP23 Regulations (CSD & IT)
            </span>
            <ThemeToggle />
          </div>

        </div>
      </header>

      {/* Main Hero & Auth Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Hero Section */}
        <div className="flex-1 space-y-8 text-left max-w-2xl">
          
          <div className="space-y-5">
            {/* Clean Student-Friendly Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Curriculum to Project Mapper</span>
            </div>

            {/* Requirement 1: Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-text-primary tracking-tight leading-[1.12]">
              Bridge Your College Learning <br />
              <span className="text-primary">to Real Projects & Careers</span>
            </h1>

            {/* Requirement 1: Small Subtitle */}
            <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
              Select your completed subjects and instantly discover industry-ready project ideas, learning paths and GitHub starter kits.
            </p>
          </div>

          {/* Requirement 1: Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={handleStartExploring}
              className="px-7 py-3.5 rounded-[12px] bg-primary hover:bg-primary-hover text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Start Exploring</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleLearnMore}
              className="px-6 py-3.5 rounded-[12px] bg-card hover:bg-surface text-text-primary font-semibold text-sm sm:text-base border border-border transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4 text-text-muted" />
            </button>
          </div>

          {/* Value Props Strip */}
          <div className="pt-6 border-t border-border flex flex-wrap items-center gap-6 text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>PVP23 Curriculum Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>CSE (Data Science) & IT Branches</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-success" />
              <span>Zero Setup Friction</span>
            </div>
          </div>

        </div>

        {/* Right Column: Simplified Authentication Card */}
        <div className="w-full max-w-md flex-shrink-0">
          
          {/* Requirement 3: Simpler Authentication Card */}
          <div className="bg-card rounded-[16px] border border-border shadow-[var(--shadow-card)] p-6 sm:p-8 space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-text-primary tracking-tight">Student Login</h2>
              <p className="text-xs text-text-muted">
                Enter your college details to access personalized projects
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* 1. Roll Number */}
              <div className="space-y-1.5">
                <label htmlFor="roll-input" className="block text-xs font-semibold text-text-primary">
                  Roll Number
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="roll-input"
                    type="text"
                    value={rollInput}
                    onChange={(e) => setRollInput(e.target.value)}
                    placeholder="e.g. 24501A4420"
                    className={`w-full pl-10 pr-3.5 py-2.5 bg-surface border rounded-[12px] text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-all ${
                      attemptedSubmit && !parsedMeta.isValid
                        ? 'border-danger focus:ring-2 focus:ring-danger/20'
                        : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/15'
                    }`}
                  />
                </div>
                {attemptedSubmit && !parsedMeta.isValid && (
                  <p className="text-[11px] text-danger flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Please enter a valid PVPSIT roll number</span>
                  </p>
                )}
              </div>

              {/* 2. Email */}
              <div className="space-y-1.5">
                <label htmlFor="email-input" className="block text-xs font-semibold text-text-primary">
                  College Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="email-input"
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="24501a4420@pvpsiddhartha.ac.in"
                    className={`w-full pl-10 pr-3.5 py-2.5 bg-surface border rounded-[12px] text-sm text-text-primary placeholder:text-text-muted focus:outline-none transition-all ${
                      attemptedSubmit && !isEmailValid
                        ? 'border-danger focus:ring-2 focus:ring-danger/20'
                        : 'border-border focus:border-primary focus:ring-2 focus:ring-primary/15'
                    }`}
                  />
                </div>
                {attemptedSubmit && !isEmailValid && (
                  <p className="text-[11px] text-danger flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Email must end with @pvpsiddhartha.ac.in</span>
                  </p>
                )}
              </div>

              {/* 3. Password */}
              <div className="space-y-1.5">
                <label htmlFor="password-input" className="block text-xs font-semibold text-text-primary">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-text-muted absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="password-input"
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-surface border border-border rounded-[12px] text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:ring-2 focus:ring-primary/15 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* 4. Login Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-[12px] bg-primary hover:bg-primary-hover text-white font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>

          </div>

          {/* Requirement 3: Move quick login profiles below */}
          <div className="mt-4 p-4 rounded-[16px] bg-card border border-border text-xs text-text-secondary space-y-2.5 shadow-sm">
            <div className="font-semibold text-text-primary flex items-center justify-between">
              <span>Quick Demo Accounts:</span>
              <span className="text-[11px] text-text-muted font-normal">Click to fill</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => setPresetProfile('24501A4420', '24501a4420@pvpsiddhartha.ac.in')}
                className="w-full text-left px-3 py-2 rounded-[10px] bg-surface hover:bg-primary/10 border border-border hover:border-primary/40 text-xs text-text-secondary transition-all flex items-center justify-between group cursor-pointer"
              >
                <span><strong className="text-text-primary">24501A4420</strong> • CSD (Year 3)</span>
                <ChevronRight className="w-3.5 h-3.5 text-text-muted group-hover:text-primary group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setPresetProfile('25501A1201', '25501a1201@pvpsiddhartha.ac.in')}
                className="w-full text-left px-3 py-2 rounded-[10px] bg-surface hover:bg-accent/10 border border-border hover:border-accent/40 text-xs text-text-secondary transition-all flex items-center justify-between group cursor-pointer"
              >
                <span><strong className="text-text-primary">25501A1201</strong> • IT (Year 2)</span>
                <ChevronRight className="w-3.5 h-3.5 text-text-muted group-hover:text-accent group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setPresetProfile('26501A4405', '26501a4405@pvpsiddhartha.ac.in')}
                className="w-full text-left px-3 py-2 rounded-[10px] bg-surface hover:bg-success/10 border border-border hover:border-success/40 text-xs text-text-secondary transition-all flex items-center justify-between group cursor-pointer"
              >
                <span><strong className="text-text-primary">26501A4405</strong> • CSD (Year 1)</span>
                <ChevronRight className="w-3.5 h-3.5 text-text-muted group-hover:text-success group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </main>

      {/* Requirement 4: Feature Cards (Use only 3) */}
      <section id="features-section" className="w-full bg-card border-t border-border py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary tracking-tight">
              Everything You Need to Build Portfolio-Ready Projects
            </h2>
            <p className="text-sm sm:text-base text-text-secondary">
              Designed specifically for engineering students to transform textbook knowledge into production code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: AI Recommendations */}
            <div className="p-7 rounded-[16px] bg-surface border border-border shadow-[var(--shadow-card)] hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-[12px] bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-text-primary">AI Recommendations</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Get personalized project ideas dynamically matched to your completed semesters, core courses, and engineering branch.
                </p>
              </div>
            </div>

            {/* Card 2: Project Blueprints */}
            <div className="p-7 rounded-[16px] bg-surface border border-border shadow-[var(--shadow-card)] hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-[12px] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-text-primary">Project Blueprints</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Clear step-by-step roadmaps, system architectures, and modern technology choices to guide your project from start to finish.
                </p>
              </div>
            </div>

            {/* Card 3: GitHub Starter Kits */}
            <div className="p-7 rounded-[16px] bg-surface border border-border shadow-[var(--shadow-card)] hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-[12px] bg-success/10 border border-success/20 flex items-center justify-center text-success">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-text-primary">GitHub Starter Kits</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Ready-to-use repository templates with folder structures, configuration files, and setup instructions ready to clone and run.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Clean Minimal Footer */}
      <footer className="w-full border-t border-border bg-card py-6 px-4 text-center text-xs text-text-muted">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            StudentForge AI © 2026 • Prasad V. Potluri Siddhartha Institute of Technology
          </div>
          <div className="flex items-center space-x-4 text-text-secondary">
            <span>PVP23 Autonomous Curriculum</span>
            <span>•</span>
            <span className="text-primary font-medium">CSD & IT Departments</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
