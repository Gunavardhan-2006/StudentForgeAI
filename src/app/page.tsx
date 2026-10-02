'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/Header';
import { SidebarSyllabus } from '@/components/SidebarSyllabus';
import { ProjectGrid } from '@/components/ProjectGrid';
import { BlueprintModal } from '@/components/BlueprintModal';
import { GitScaffoldModal } from '@/components/GitScaffoldModal';
import { AIMentorDrawer } from '@/components/AIMentorDrawer';
import { CommitVelocityGuard } from '@/components/CommitVelocityGuard';
import { AuthModal } from '@/components/AuthModal';
import { LoginPage } from '@/components/LoginPage';
import { SubjectSelectorModal } from '@/components/SubjectSelectorModal';

import { CSD_SEMESTERS, IT_SEMESTERS, MOCK_PROJECT_BLUEPRINTS } from '@/data/mockData';
import { parseRollNumber } from '@/lib/rollNumberParser';
import { DomainFilter, DifficultyFilter, ProjectBlueprint, StudentProfile, BranchCode } from '@/types';

export default function Home() {
  // Initial Student Profile (Unauthenticated by default to show Login Page first)
  const defaultParsed = parseRollNumber('24501A4420');
  const [profile, setProfile] = useState<StudentProfile>({
    rollNumber: '24501A4420',
    email: '24501a4420@pvpsiddhartha.ac.in',
    parsedMeta: defaultParsed,
    isAuthenticated: false,
  });

  // Current active branch state ('44' CSD vs '12' IT)
  const [activeBranch, setActiveBranch] = useState<BranchCode>(defaultParsed.branchCode);

  // Active curriculum dataset based on activeBranch
  const currentSemesters = useMemo(() => {
    return activeBranch === '12' ? IT_SEMESTERS : CSD_SEMESTERS;
  }, [activeBranch]);

  // Compute default active subject names based on completed semesters + current enrolled sem
  const initialCheckedSubjects = useMemo(() => {
    const semIdsToInclude = [...profile.parsedMeta.completedSemIds, profile.parsedMeta.enrolledSemId];
    return currentSemesters
      .filter((sem) => semIdsToInclude.includes(sem.id))
      .flatMap((sem) => sem.subjects)
      .map((sub) => sub.name);
  }, [currentSemesters, profile.parsedMeta]);

  // Active checked subjects state
  const [activeSubjectNames, setActiveSubjectNames] = useState<string[]>(initialCheckedSubjects);

  // Domain & Difficulty Filters
  const [selectedDomain, setSelectedDomain] = useState<DomainFilter>('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyFilter>('All');

  // Modals & Drawers state
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isSubjectModalOpen, setIsSubjectModalOpen] = useState(false);
  const [activeBlueprint, setActiveBlueprint] = useState<ProjectBlueprint | null>(null);
  const [scaffoldBlueprint, setScaffoldBlueprint] = useState<ProjectBlueprint | null>(null);
  const [isMentorOpen, setIsMentorOpen] = useState(false);
  const [isCommitGuardOpen, setIsCommitGuardOpen] = useState(false);

  // Auth / Login handler
  const handleLoginSuccess = (newProfile: StudentProfile) => {
    setProfile(newProfile);
    setActiveBranch(newProfile.parsedMeta.branchCode);
    
    // Auto-check completed semesters and current enrolled semester subjects
    const newSemesters = newProfile.parsedMeta.branchCode === '12' ? IT_SEMESTERS : CSD_SEMESTERS;
    const semIds = [...newProfile.parsedMeta.completedSemIds, newProfile.parsedMeta.enrolledSemId];
    const autoChecked = newSemesters
      .filter((sem) => semIds.includes(sem.id))
      .flatMap((sem) => sem.subjects)
      .map((sub) => sub.name);

    setActiveSubjectNames(autoChecked);
  };

  // Branch Switcher handler
  const handleSwitchBranch = (code: BranchCode) => {
    setActiveBranch(code);
    const newSemesters = code === '12' ? IT_SEMESTERS : CSD_SEMESTERS;
    const semIds = [...profile.parsedMeta.completedSemIds, profile.parsedMeta.enrolledSemId];
    const autoChecked = newSemesters
      .filter((sem) => semIds.includes(sem.id))
      .flatMap((sem) => sem.subjects)
      .map((sub) => sub.name);

    setActiveSubjectNames(autoChecked);
  };

  // Enrolled Semester Dropdown Handler
  const handleSelectEnrolledSem = (semId: number) => {
    const updatedMeta = {
      ...profile.parsedMeta,
      enrolledSemId: semId,
      enrolledSemester: `Sem ${semId}`,
    };
    setProfile((prev) => ({ ...prev, parsedMeta: updatedMeta }));

    // Auto-add subjects for newly selected semester
    const targetSem = currentSemesters.find((s) => s.id === semId);
    if (targetSem) {
      const semSubNames = targetSem.subjects.map((sub) => sub.name);
      setActiveSubjectNames((prev) => Array.from(new Set([...prev, ...semSubNames])));
    }
  };

  // Subject Toggle Handler
  const handleToggleSubject = (subjectName: string) => {
    setActiveSubjectNames((prev) =>
      prev.includes(subjectName)
        ? prev.filter((s) => s !== subjectName)
        : [...prev, subjectName]
    );
  };

  // Reset Filters Handler
  const handleResetFilters = () => {
    const semIds = [...profile.parsedMeta.completedSemIds, profile.parsedMeta.enrolledSemId];
    const autoChecked = currentSemesters
      .filter((sem) => semIds.includes(sem.id))
      .flatMap((sem) => sem.subjects)
      .map((sub) => sub.name);

    setActiveSubjectNames(autoChecked);
    setSelectedDomain('All');
    setSelectedDifficulty('All');
  };

  // Dynamic project filtering logic
  const filteredBlueprints = useMemo(() => {
    return MOCK_PROJECT_BLUEPRINTS.filter((bp) => {
      // Single-subject project match: matches targetSubject if checked
      if (bp.isSingleSubject && bp.targetSubject) {
        const matchesTarget = activeSubjectNames.includes(bp.targetSubject);
        const matchesDomain = selectedDomain === 'All' || bp.domain === selectedDomain;
        const matchesDifficulty = selectedDifficulty === 'All' || bp.difficulty === selectedDifficulty;
        return matchesTarget && matchesDomain && matchesDifficulty;
      }

      // Multi-subject integrated project match
      const matchesSubject =
        activeSubjectNames.length === 0 ||
        bp.requiredSubjects.some((reqSub) => activeSubjectNames.includes(reqSub));

      const matchesDomain = selectedDomain === 'All' || bp.domain === selectedDomain;
      const matchesDifficulty = selectedDifficulty === 'All' || bp.difficulty === selectedDifficulty;

      return matchesSubject && matchesDomain && matchesDifficulty;
    });
  }, [activeSubjectNames, selectedDomain, selectedDifficulty]);

  // Logout handler
  const handleLogout = () => {
    setProfile((prev) => ({ ...prev, isAuthenticated: false }));
  };

  // Render Login Page first if not authenticated
  if (!profile.isAuthenticated) {
    return <LoginPage onLoginSuccess={handleLoginSuccess} />;
  }

  return (
    <div className="min-h-screen bg-canvas text-ghost font-sans flex flex-col antialiased">
      
      {/* Sticky Header */}
      <Header
        profile={profile}
        onOpenAuthModal={() => setIsAuthModalOpen(true)}
        onSelectEnrolledSem={handleSelectEnrolledSem}
        onOpenMentor={() => setIsMentorOpen(true)}
        onOpenCommitGuard={() => setIsCommitGuardOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Body Content */}
      <div className="max-w-7xl w-full mx-auto px-4 lg:px-8 py-6 flex-1 flex flex-col lg:flex-row gap-6 items-start">
        
        {/* Left Sidebar: Interactive Syllabus Tree & Branch Controls */}
        <SidebarSyllabus
          semesters={currentSemesters}
          activeBranch={activeBranch}
          onSwitchBranch={handleSwitchBranch}
          enrolledSemId={profile.parsedMeta.enrolledSemId}
          activeSubjectNames={activeSubjectNames}
          onToggleSubject={handleToggleSubject}
          onSetSubjectNames={setActiveSubjectNames}
          selectedDomain={selectedDomain}
          onSelectDomain={setSelectedDomain}
          selectedDifficulty={selectedDifficulty}
          onSelectDifficulty={setSelectedDifficulty}
          onResetFilters={handleResetFilters}
          onOpenSubjectSelector={() => setIsSubjectModalOpen(true)}
        />

        {/* Main Content Area: Project Recommendations (Single-Subject & Multi-Subject Integrated) */}
        <ProjectGrid
          blueprints={filteredBlueprints}
          activeSubjectNames={activeSubjectNames}
          selectedDomain={selectedDomain}
          selectedDifficulty={selectedDifficulty}
          onViewBlueprint={(bp) => setActiveBlueprint(bp)}
          onScaffoldRepo={(bp) => setScaffoldBlueprint(bp)}
          onResetFilters={handleResetFilters}
          onOpenSubjectSelector={() => setIsSubjectModalOpen(true)}
        />

      </div>

      {/* Footer */}
      <footer className="w-full border-t border-border bg-card py-4 px-6 text-center text-[12px] font-mono text-muted flex flex-col sm:flex-row items-center justify-between gap-2 max-w-7xl mx-auto">
        <div>
          StudentForge AI © 2026 • Production-Grade Engineering Syllabus Mapper (PVP23 Regulations)
        </div>
        <div className="flex items-center space-x-3 text-cyan-accent">
          <span>PVPSIT Institutional Format (@pvpsiddhartha.ac.in)</span>
        </div>
      </footer>

      {/* Semester-Wise Subject Selector Modal */}
      <SubjectSelectorModal
        isOpen={isSubjectModalOpen}
        onClose={() => setIsSubjectModalOpen(false)}
        semesters={currentSemesters}
        activeBranch={activeBranch}
        enrolledSemId={profile.parsedMeta.enrolledSemId}
        activeSubjectNames={activeSubjectNames}
        onToggleSubject={handleToggleSubject}
        onSetSubjectNames={setActiveSubjectNames}
        onResetFilters={handleResetFilters}
      />

      {/* Auth & Institutional Email Login Modal */}
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLoginSuccess={handleLoginSuccess}
        currentProfile={profile}
      />

      {/* Blueprint Inspection Modal */}
      <BlueprintModal
        blueprint={activeBlueprint}
        onClose={() => setActiveBlueprint(null)}
        onScaffoldRepo={(bp) => setScaffoldBlueprint(bp)}
      />

      {/* GitHub Repo Scaffolding Modal */}
      <GitScaffoldModal
        blueprint={scaffoldBlueprint}
        onClose={() => setScaffoldBlueprint(null)}
      />

      {/* AI Code Mentor Drawer */}
      <AIMentorDrawer
        isOpen={isMentorOpen}
        onClose={() => setIsMentorOpen(false)}
        selectedBlueprint={activeBlueprint || filteredBlueprints[0] || null}
      />

      {/* Commit Velocity Guard Modal */}
      <CommitVelocityGuard
        isOpen={isCommitGuardOpen}
        onClose={() => setIsCommitGuardOpen(false)}
      />

    </div>
  );
}
