'use client';

import React, { useState, useMemo } from 'react';
import { parseRollNumber, validateInstitutionalEmail } from '@/lib/rollNumberParser';
import { StudentProfile } from '@/types';
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
    <div className="min-h-screen bg-[#F7F8FC] text-slate-800 font-sans flex flex-col antialiased selection:bg-[#5B5CEB] selection:text-white">
      
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Logo & College Badge */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-[12px] bg-[#5B5CEB] flex items-center justify-center text-white shadow-sm">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-slate-900 tracking-tight">
                  StudentForge<span className="text-[#5B5CEB]">.AI</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-indigo-50 text-[#5B5CEB] border border-indigo-100">
                  PVPSIT Portal
                </span>
              </div>
              <p className="text-[11px] text-slate-500 hidden sm:block">
                Prasad V. Potluri Siddhartha Institute of Technology
              </p>
            </div>
          </div>

          {/* Right Header Navigation Pill */}
          <div className="flex items-center space-x-2 text-xs text-slate-600 font-medium">
            <span className="hidden md:inline-flex items-center px-3 py-1.5 rounded-full bg-slate-100 text-slate-700">
              PVP23 Regulations (CSD & IT)
            </span>
          </div>

        </div>
      </header>

      {/* Main Hero & Auth Section */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Left Column: Hero Section */}
        <div className="flex-1 space-y-8 text-left max-w-2xl">
          
          <div className="space-y-5">
            {/* Clean Student-Friendly Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-[#5B5CEB] text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Smart Curriculum to Project Mapper</span>
            </div>

            {/* Requirement 1: Large Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-slate-900 tracking-tight leading-[1.12]">
              Bridge Your College Learning <br />
              <span className="text-[#5B5CEB]">to Real Projects & Careers</span>
            </h1>

            {/* Requirement 1: Small Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Select your completed subjects and instantly discover industry-ready project ideas, learning paths and GitHub starter kits.
            </p>
          </div>

          {/* Requirement 1: Call to Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={handleStartExploring}
              className="px-7 py-3.5 rounded-[12px] bg-[#5B5CEB] hover:bg-[#4E4FD6] text-white font-semibold text-sm sm:text-base shadow-sm hover:shadow transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Start Exploring</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleLearnMore}
              className="px-6 py-3.5 rounded-[12px] bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm sm:text-base border border-slate-200 transition-all inline-flex items-center gap-1.5 cursor-pointer"
            >
              <span>Learn More</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </button>
          </div>

          {/* Value Props Strip */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>PVP23 Curriculum Aligned</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>CSE (Data Science) & IT Branches</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Zero Setup Friction</span>
            </div>
          </div>

        </div>

        {/* Right Column: Simplified Authentication Card */}
        <div className="w-full max-w-md flex-shrink-0">
          
          {/* Requirement 3: Simpler Authentication Card */}
          <div className="bg-white rounded-[16px] border border-slate-200/80 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.05)] p-6 sm:p-8 space-y-6">
            
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Student Login</h2>
              <p className="text-xs text-slate-500">
                Enter your college details to access personalized projects
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* 1. Roll Number */}
              <div className="space-y-1.5">
                <label htmlFor="roll-input" className="block text-xs font-semibold text-slate-700">
                  Roll Number
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="roll-input"
                    type="text"
                    value={rollInput}
                    onChange={(e) => setRollInput(e.target.value)}
                    placeholder="e.g. 24501A4420"
                    className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-[12px] text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                      attemptedSubmit && !parsedMeta.isValid
                        ? 'border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                        : 'border-slate-200 focus:border-[#5B5CEB] focus:ring-2 focus:ring-[#5B5CEB]/15'
                    }`}
                  />
                </div>
                {attemptedSubmit && !parsedMeta.isValid && (
                  <p className="text-[11px] text-[#EF4444] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Please enter a valid PVPSIT roll number</span>
                  </p>
                )}
              </div>

              {/* 2. Email */}
              <div className="space-y-1.5">
                <label htmlFor="email-input" className="block text-xs font-semibold text-slate-700">
                  College Email
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="email-input"
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="24501a4420@pvpsiddhartha.ac.in"
                    className={`w-full pl-10 pr-3.5 py-2.5 bg-white border rounded-[12px] text-sm text-slate-900 placeholder-slate-400 focus:outline-none transition-all ${
                      attemptedSubmit && !isEmailValid
                        ? 'border-[#EF4444] focus:ring-2 focus:ring-[#EF4444]/20'
                        : 'border-slate-200 focus:border-[#5B5CEB] focus:ring-2 focus:ring-[#5B5CEB]/15'
                    }`}
                  />
                </div>
                {attemptedSubmit && !isEmailValid && (
                  <p className="text-[11px] text-[#EF4444] flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>Email must end with @pvpsiddhartha.ac.in</span>
                  </p>
                )}
              </div>

              {/* 3. Password */}
              <div className="space-y-1.5">
                <label htmlFor="password-input" className="block text-xs font-semibold text-slate-700">
                  Password
                </label>
                <div className="relative">
                  <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    id="password-input"
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    placeholder="••••••••••••"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-[12px] text-sm text-slate-900 placeholder-slate-400 focus:border-[#5B5CEB] focus:ring-2 focus:ring-[#5B5CEB]/15 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* 4. Login Button */}
              <button
                type="submit"
                className="w-full mt-2 py-3 px-4 rounded-[12px] bg-[#5B5CEB] hover:bg-[#4E4FD6] text-white font-semibold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Login</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>

          </div>

          {/* Requirement 3: Move quick login profiles below */}
          <div className="mt-4 p-4 rounded-[16px] bg-white/70 border border-slate-200/70 text-xs text-slate-600 space-y-2.5">
            <div className="font-semibold text-slate-700 flex items-center justify-between">
              <span>Quick Demo Accounts:</span>
              <span className="text-[11px] text-slate-400 font-normal">Click to fill</span>
            </div>
            <div className="flex flex-col gap-1.5">
              <button
                type="button"
                onClick={() => setPresetProfile('24501A4420', '24501a4420@pvpsiddhartha.ac.in')}
                className="w-full text-left px-3 py-2 rounded-[10px] bg-slate-50 hover:bg-indigo-50/60 border border-slate-200/60 hover:border-indigo-200 text-xs text-slate-700 transition-all flex items-center justify-between group"
              >
                <span><strong className="text-slate-900">24501A4420</strong> • CSD (Year 3)</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#5B5CEB] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setPresetProfile('25501A1201', '25501a1201@pvpsiddhartha.ac.in')}
                className="w-full text-left px-3 py-2 rounded-[10px] bg-slate-50 hover:bg-sky-50/60 border border-slate-200/60 hover:border-sky-200 text-xs text-slate-700 transition-all flex items-center justify-between group"
              >
                <span><strong className="text-slate-900">25501A1201</strong> • IT (Year 2)</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0EA5E9] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                type="button"
                onClick={() => setPresetProfile('26501A4405', '26501a4405@pvpsiddhartha.ac.in')}
                className="w-full text-left px-3 py-2 rounded-[10px] bg-slate-50 hover:bg-emerald-50/60 border border-slate-200/60 hover:border-emerald-200 text-xs text-slate-700 transition-all flex items-center justify-between group"
              >
                <span><strong className="text-slate-900">26501A4405</strong> • CSD (Year 1)</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#10B981] group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </main>

      {/* Requirement 4: Feature Cards (Use only 3) */}
      <section id="features-section" className="w-full bg-white border-t border-slate-200/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Everything You Need to Build Portfolio-Ready Projects
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Designed specifically for engineering students to transform textbook knowledge into production code.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: AI Recommendations */}
            <div className="p-7 rounded-[16px] bg-[#F7F8FC] border border-slate-200/70 shadow-sm hover:shadow transition-all space-y-4">
              <div className="w-12 h-12 rounded-[12px] bg-indigo-50 border border-indigo-100 flex items-center justify-center text-[#5B5CEB]">
                <Sparkles className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">AI Recommendations</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Get personalized project ideas dynamically matched to your completed semesters, core courses, and engineering branch.
                </p>
              </div>
            </div>

            {/* Card 2: Project Blueprints */}
            <div className="p-7 rounded-[16px] bg-[#F7F8FC] border border-slate-200/70 shadow-sm hover:shadow transition-all space-y-4">
              <div className="w-12 h-12 rounded-[12px] bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0EA5E9]">
                <BookOpen className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">Project Blueprints</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Clear step-by-step roadmaps, system architectures, and modern technology choices to guide your project from start to finish.
                </p>
              </div>
            </div>

            {/* Card 3: GitHub Starter Kits */}
            <div className="p-7 rounded-[16px] bg-[#F7F8FC] border border-slate-200/70 shadow-sm hover:shadow transition-all space-y-4">
              <div className="w-12 h-12 rounded-[12px] bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#10B981]">
                <FolderGit2 className="w-6 h-6" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-slate-900">GitHub Starter Kits</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ready-to-use repository templates with folder structures, configuration files, and setup instructions ready to clone and run.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Clean Minimal Footer */}
      <footer className="w-full border-t border-slate-200 bg-white py-6 px-4 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            StudentForge AI © 2026 • Prasad V. Potluri Siddhartha Institute of Technology
          </div>
          <div className="flex items-center space-x-4 text-slate-600">
            <span>PVP23 Autonomous Curriculum</span>
            <span>•</span>
            <span className="text-[#5B5CEB] font-medium">CSD & IT Departments</span>
          </div>
        </div>
      </footer>

    </div>
  );
};
