export type DomainFilter = 
  | 'All' 
  | 'FinTech' 
  | 'Healthcare' 
  | 'Cybersecurity' 
  | 'E-Commerce' 
  | 'Cloud/DevOps' 
  | 'AI/Data';

export type DifficultyFilter = 
  | 'All' 
  | 'Beginner' 
  | 'Intermediate' 
  | 'Capstone';

export type BranchCode = '44' | '12';
export type BranchName = 'CSE (Data Science) - CSD' | 'Information Technology - IT';

export interface RollNumberMeta {
  rawInput: string;
  year: string;
  enrolledSemester: string;
  enrolledSemId: number;
  completedSemIds: number[];
  batch: string;
  collegeCode: string;
  degreeCode: string;
  degreeName: string;
  branchCode: BranchCode;
  branchName: BranchName;
  studentId: string;
  isValid: boolean;
  errorMessage?: string;
}

export interface StudentProfile {
  rollNumber: string;
  email: string;
  parsedMeta: RollNumberMeta;
  isAuthenticated: boolean;
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  semId: number;
  isElective?: boolean;
  electiveType?: 'PE' | 'OE';
  type?: 'Core' | 'Professional Elective' | 'Open Elective';
  defaultActive?: boolean;
}

export interface Semester {
  id: number;
  title: string;
  shortCode: string;
  subjects: Subject[];
}

export interface SprintPhase {
  sprint: string;
  title: string;
  duration: string;
  tasks: string[];
}

export interface RoadmapPhase {
  phase: string;
  days: string;
  objective: string;
  steps: string[];
}

export interface ExecutionGuide {
  recommendedPlatform: string;
  runtimeVersions: string[];
  prerequisites: string[];
  setupScript: string;
  dayByDayRoadmap: RoadmapPhase[];
}

export interface ScaffoldFile {
  name: string;
  language: string;
  content: string;
}

export interface GitScaffold {
  tree: string;
  files: ScaffoldFile[];
  cloneCmd: string;
}

export interface ProjectBlueprint {
  id: string;
  title: string;
  domain: DomainFilter;
  difficulty: DifficultyFilter;
  readinessScore: number;
  verified2026: boolean;
  isSingleSubject?: boolean;
  targetSubject?: string;
  problemStatement: string;
  whyGetsYouHired: string;
  p99Benchmark: string;
  stack: string[];
  requiredSubjects: string[];
  architectureDiagram: string;
  sprintRoadmap: SprintPhase[];
  executionGuide?: ExecutionGuide;
  recruiterCriteria: string[];
  resumeBullet: string;
  gitScaffold: GitScaffold;
}

export interface MentorMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
  codeSnippet?: string;
  codeLanguage?: string;
}
