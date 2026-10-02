'use client';

import React, { useState } from 'react';
import { ProjectBlueprint } from '@/types';
import { 
  X, 
  Layers, 
  Copy, 
  Check, 
  ShieldCheck, 
  Terminal, 
  Award, 
  Calendar, 
  ChevronRight,
  Monitor,
  Cpu,
  Wrench,
  Play,
  Zap,
  Code2
} from 'lucide-react';

interface BlueprintModalProps {
  blueprint: ProjectBlueprint | null;
  onClose: () => void;
  onScaffoldRepo: (blueprint: ProjectBlueprint) => void;
}

export const BlueprintModal: React.FC<BlueprintModalProps> = ({
  blueprint,
  onClose,
  onScaffoldRepo,
}) => {
  const [copiedResume, setCopiedResume] = useState(false);
  const [copiedScript, setCopiedScript] = useState(false);
  const [activeTab, setActiveTab] = useState<'architecture' | 'execution' | 'recruiter'>('execution');

  if (!blueprint) return null;

  const copyResumeBullet = () => {
    navigator.clipboard.writeText(blueprint.resumeBullet);
    setCopiedResume(true);
    setTimeout(() => setCopiedResume(false), 2000);
  };

  const copySetupScript = () => {
    const script = blueprint.executionGuide?.setupScript || `# Project Directory Setup Script for ${blueprint.title}\nmkdir -p src/api src/core src/db tests config\ntouch .env.example docker-compose.yml README.md`;
    navigator.clipboard.writeText(script);
    setCopiedScript(true);
    setTimeout(() => setCopiedScript(false), 2000);
  };

  const executionGuide = blueprint.executionGuide || {
    recommendedPlatform: 'VS Code with Docker, Python 3.12 Extensions & Bruno API Client',
    runtimeVersions: ['Python 3.12+', 'PostgreSQL 16', 'Redis 7.2', 'Docker Engine 24.0+'],
    prerequisites: ['WSL2 / Linux Kernel', 'Git 2.40+', 'Docker Compose v2'],
    setupScript: `mkdir -p src/api src/core src/db tests config\ntouch .env.example docker-compose.yml README.md\npython -m venv venv && source venv/bin/activate\npip install fastapi uvicorn asyncpg pydantic redis structlog`,
    dayByDayRoadmap: [
      {
        phase: 'Days 1–3: Environment & Toolchain Setup',
        days: 'Days 1–3',
        objective: 'Virtual environment configuration, folder setup, Git initialization, dependencies, and environment variable setup.',
        steps: [
          'Initialize Git repository and configure .gitignore for environment keys.',
          'Setup isolated virtual environment with exact production lockfiles.',
          'Create .env.example file with PostgreSQL, Redis, and secret key placeholders.'
        ]
      },
      {
        phase: 'Days 4–7: Data Tier & Schema Architecture',
        days: 'Days 4–7',
        objective: 'Database ERD design, SQL migrations (Alembic), connection pooling (asyncpg), ORM data access layers, and schema unit tests.',
        steps: [
          'Design 3NF relational database schema or document store indexes.',
          'Execute idempotent Alembic database migrations inside Docker PostgreSQL instance.',
          'Implement async connection pool wrapper sustaining 500+ parallel checkouts.'
        ]
      },
      {
        phase: 'Days 8–11: Business Logic & Industry Upgrades',
        days: 'Days 8–11',
        objective: 'Async API route creation, JWT auth / RBAC integration, structlog structured logging, Redis caching implementation, and containerization.',
        steps: [
          'Build non-blocking REST endpoints with Pydantic request payload validation.',
          'Implement Redis cache-aside strategy with automatic TTL expiration.',
          'Write multi-stage Dockerfile and docker-compose.yml configuration.'
        ]
      },
      {
        phase: 'Days 12–14: Testing, Benchmarking & Portfolio Polish',
        days: 'Days 12–14',
        objective: 'Performance load testing (Locust/k6), SQL indexing optimization, professional README.md with system architecture diagrams, and recruiter pitch.',
        steps: [
          'Benchmark system under 5,000 concurrent RPS using Locust load test script.',
          'Verify logarithmic O(log N) index scan performance on database queries.',
          'Draft recruiters pitch bullet point and post complete code to GitHub.'
        ]
      }
    ]
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-canvas/85 backdrop-blur-md animate-fadeIn">
      <div
        className="w-full max-w-5xl h-[90vh] glass-panel rounded-2xl border border-indigo-accent/40 shadow-2xl flex flex-col overflow-hidden text-ghost bg-card/95"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:p-5 border-b border-border bg-gradient-to-r from-card via-canvas to-card gap-3 flex-shrink-0">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-indigo-accent/15 border border-indigo-accent/30 text-indigo-accent shadow-glow">
              <Layers className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg sm:text-xl font-bold text-ghost tracking-tight">{blueprint.title}</span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-cyan-accent/10 border border-cyan-accent/30 text-cyan-accent font-bold">
                  {blueprint.domain}
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-indigo-accent/10 border border-indigo-accent/30 text-indigo-accent font-bold">
                  {blueprint.difficulty}
                </span>
              </div>
              <p className="text-xs text-muted font-mono mt-0.5">
                P99 Readiness Score: <span className="text-emerald-accent font-bold">{blueprint.readinessScore}/100</span> • 2026 Recruiter Verified
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-canvas hover:bg-border border border-border text-muted hover:text-ghost transition-colors self-end sm:self-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher Tabs */}
        <div className="px-5 pt-3 border-b border-border bg-canvas/40 flex items-center space-x-2 flex-shrink-0">
          <button
            onClick={() => setActiveTab('execution')}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-t-xl border-t border-x transition-all flex items-center gap-1.5 ${
              activeTab === 'execution'
                ? 'bg-card text-cyan-accent border-indigo-accent/40 border-b-card -mb-px'
                : 'text-muted border-transparent hover:text-ghost'
            }`}
          >
            <Zap className="w-3.5 h-3.5 text-cyan-accent" />
            <span>Execution Guide & Roadmap</span>
          </button>

          <button
            onClick={() => setActiveTab('architecture')}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-t-xl border-t border-x transition-all flex items-center gap-1.5 ${
              activeTab === 'architecture'
                ? 'bg-card text-indigo-accent border-indigo-accent/40 border-b-card -mb-px'
                : 'text-muted border-transparent hover:text-ghost'
            }`}
          >
            <Terminal className="w-3.5 h-3.5 text-indigo-accent" />
            <span>System Architecture & Code</span>
          </button>

          <button
            onClick={() => setActiveTab('recruiter')}
            className={`px-4 py-2 text-xs font-mono font-bold rounded-t-xl border-t border-x transition-all flex items-center gap-1.5 ${
              activeTab === 'recruiter'
                ? 'bg-card text-emerald-accent border-indigo-accent/40 border-b-card -mb-px'
                : 'text-muted border-transparent hover:text-ghost'
            }`}
          >
            <Award className="w-3.5 h-3.5 text-emerald-accent" />
            <span>Recruiter Pitch & CV Bullet</span>
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6">
          
          {/* TAB 1: Execution Guide & Day-by-Day Roadmap */}
          {activeTab === 'execution' && (
            <div className="space-y-6">
              
              {/* Development Environment & Platform Setup Box */}
              <div className="p-5 rounded-2xl glass-card border border-indigo-accent/30 space-y-4">
                <div className="flex items-center justify-between border-b border-border/80 pb-3">
                  <h4 className="text-base font-bold text-ghost flex items-center space-x-2">
                    <Monitor className="w-4 h-4 text-cyan-accent" />
                    <span>Development Environment & Toolchain Setup</span>
                  </h4>

                  <button
                    onClick={copySetupScript}
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-accent/15 hover:bg-indigo-accent/30 border border-indigo-accent/40 text-indigo-accent text-xs font-mono font-bold transition-all shadow-glow"
                  >
                    {copiedScript ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-accent" />
                        <span className="text-emerald-accent">Setup Script Copied!</span>
                      </>
                    ) : (
                      <>
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Copy Setup Script</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-canvas border border-border/80 space-y-1.5">
                    <div className="text-muted flex items-center gap-1.5">
                      <Monitor className="w-3.5 h-3.5 text-indigo-accent" />
                      <span>Recommended Platform</span>
                    </div>
                    <div className="text-ghost font-semibold leading-relaxed">
                      {executionGuide.recommendedPlatform}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-canvas border border-border/80 space-y-1.5">
                    <div className="text-muted flex items-center gap-1.5">
                      <Cpu className="w-3.5 h-3.5 text-cyan-accent" />
                      <span>Runtime & Tool Versions</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {executionGuide.runtimeVersions.map((v, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded bg-card border border-border text-cyan-accent font-bold">
                          {v}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-canvas border border-border/80 space-y-1.5">
                    <div className="text-muted flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-emerald-accent" />
                      <span>Prerequisites</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {executionGuide.prerequisites.map((p, i) => (
                        <span key={i} className="px-1.5 py-0.5 rounded bg-card border border-border text-readable">
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Setup Shell Script Preview */}
                <div className="space-y-1.5">
                  <span className="text-xs font-mono text-muted uppercase">Terminal Directory Setup Script:</span>
                  <div className="p-3.5 rounded-xl bg-canvas border border-border font-mono text-xs text-emerald-accent overflow-x-auto shadow-inner">
                    <pre>{executionGuide.setupScript}</pre>
                  </div>
                </div>
              </div>

              {/* Granular Day-by-Day Implementation Roadmap (14 Days) */}
              <div className="space-y-3">
                <h4 className="text-base font-bold text-ghost flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-indigo-accent" />
                  <span>Detailed 14-Day Implementation Roadmap</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {executionGuide.dayByDayRoadmap.map((phase, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-card border border-border space-y-2.5 relative">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="px-2.5 py-0.5 rounded-full bg-indigo-accent/20 border border-indigo-accent/40 text-indigo-accent font-bold">
                          {phase.days}
                        </span>
                        <span className="text-muted font-bold">Phase {idx + 1}</span>
                      </div>

                      <h5 className="text-sm font-bold text-ghost">{phase.phase}</h5>
                      <p className="text-xs text-readable leading-relaxed">{phase.objective}</p>

                      <div className="space-y-1.5 pt-1 border-t border-border/60">
                        {phase.steps.map((step, sidx) => (
                          <div key={sidx} className="flex items-start space-x-2 text-xs text-readable">
                            <ChevronRight className="w-3.5 h-3.5 text-cyan-accent flex-shrink-0 mt-0.5" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: System Architecture & Tech Stack */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              {/* Problem Statement & Value Prop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                  <h4 className="text-xs font-mono text-muted uppercase">Problem Statement</h4>
                  <p className="text-sm text-readable leading-relaxed">{blueprint.problemStatement}</p>
                </div>
                <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                  <h4 className="text-xs font-mono text-muted uppercase">Why It Gets You Hired</h4>
                  <p className="text-sm text-readable leading-relaxed">{blueprint.whyGetsYouHired}</p>
                </div>
              </div>

              {/* System Architecture ASCII Diagram */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-ghost flex items-center space-x-2">
                    <Terminal className="w-4 h-4 text-cyan-accent" />
                    <span>System Architecture Diagram</span>
                  </h4>
                  <span className="text-xs font-mono text-muted">P99 Benchmark: {blueprint.p99Benchmark}</span>
                </div>

                <div className="p-4 rounded-xl bg-canvas border border-border overflow-x-auto font-mono text-xs text-cyan-accent leading-tight shadow-inner">
                  <pre>{blueprint.architectureDiagram}</pre>
                </div>
              </div>

              {/* Technology Stack Tags */}
              <div className="p-4 rounded-xl bg-card border border-border space-y-2">
                <h4 className="text-xs font-mono text-muted uppercase">Production Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {blueprint.stack.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg bg-canvas border border-border font-mono text-xs font-bold text-ghost">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Recruiter Evaluation Criteria & CV Bullet */}
          {activeTab === 'recruiter' && (
            <div className="space-y-6">
              {/* Recruiter Evaluation Criteria */}
              <div className="p-5 rounded-xl bg-card border border-border space-y-4">
                <h4 className="text-base font-bold text-ghost flex items-center space-x-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-accent" />
                  <span>Recruiter Evaluation Criteria (What Interviewers Audit)</span>
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {blueprint.recruiterCriteria.map((crit, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5 p-3 rounded-xl bg-canvas border border-border/80 text-xs text-readable">
                      <span className="text-emerald-accent font-mono font-bold">✓</span>
                      <span className="leading-relaxed">{crit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quantifiable CV/Resume Bullet Point */}
              <div className="p-5 rounded-xl bg-gradient-to-r from-card via-canvas to-card border border-indigo-accent/40 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-ghost flex items-center space-x-2">
                    <Award className="w-4 h-4 text-indigo-accent" />
                    <span>Quantifiable Resume Bullet Point (Copy-Paste Ready)</span>
                  </h4>

                  <button
                    onClick={copyResumeBullet}
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-accent hover:bg-indigo-hover text-white text-xs font-mono font-medium transition-all shadow-glow"
                  >
                    {copiedResume ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Copied to Clipboard!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Resume Bullet</span>
                      </>
                    )}
                  </button>
                </div>

                <p className="p-4 rounded-xl bg-canvas border border-border font-mono text-xs text-ghost leading-relaxed select-all">
                  {blueprint.resumeBullet}
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 border-t border-border bg-card flex flex-col sm:flex-row items-center justify-between gap-3 flex-shrink-0">
          <div className="text-xs font-mono text-muted">
            Required Subjects: <span className="text-cyan-accent font-bold">{blueprint.requiredSubjects.join(', ')}</span>
          </div>

          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-canvas border border-border text-readable text-xs hover:text-ghost transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onScaffoldRepo(blueprint);
              }}
              className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-5 py-2.5 rounded-xl bg-indigo-accent hover:bg-indigo-hover text-white font-medium text-xs shadow-glow transition-all cursor-pointer"
            >
              <Terminal className="w-4 h-4" />
              <span>Scaffold GitHub Repo</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
