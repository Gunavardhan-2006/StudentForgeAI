import { Semester, ProjectBlueprint } from '@/types';

// ==========================================
// 1. CSD (CSE - Data Science) [Code 44] Curriculum Data (PVP23 Regulations)
// ==========================================
export const CSD_SEMESTERS: Semester[] = [
  {
    id: 1,
    title: 'Semester 1: Foundation & C Programming',
    shortCode: 'I-I',
    subjects: [
      { id: 'csd-101', name: 'Intro to Programming (C)', code: 'CSD101', semId: 1, type: 'Core' },
      { id: 'csd-102', name: 'Linear Algebra', code: 'MA101', semId: 1, type: 'Core' },
      { id: 'csd-103', name: 'Engineering Physics', code: 'PH101', semId: 1, type: 'Core' },
      { id: 'csd-104', name: 'Basic Electrical Engineering', code: 'EE101', semId: 1, type: 'Core' },
      { id: 'csd-105', name: 'Engineering Graphics', code: 'ME101', semId: 1, type: 'Core' },
    ],
  },
  {
    id: 2,
    title: 'Semester 2: Data Structures & Chemistry',
    shortCode: 'I-II',
    subjects: [
      { id: 'csd-201', name: 'Data Structures', code: 'CSD201', semId: 2, type: 'Core' },
      { id: 'csd-202', name: 'Differential Equations', code: 'MA201', semId: 2, type: 'Core' },
      { id: 'csd-203', name: 'Engineering Chemistry', code: 'CH201', semId: 2, type: 'Core' },
      { id: 'csd-204', name: 'Basic Civil & Mechanical Eng', code: 'CM201', semId: 2, type: 'Core' },
    ],
  },
  {
    id: 3,
    title: 'Semester 3 (II-I): Data Science & OOP Java',
    shortCode: 'II-I',
    subjects: [
      { id: 'csd-301', name: 'Intro to Data Science', code: 'CSD301', semId: 3, type: 'Core', defaultActive: true },
      { id: 'csd-302', name: 'Python Programming', code: 'CSD302', semId: 3, type: 'Core', defaultActive: true },
      { id: 'csd-303', name: 'Object Oriented Programming (Java)', code: 'CSD303', semId: 3, type: 'Core' },
      { id: 'csd-304', name: 'Advanced Data Structures', code: 'CSD304', semId: 3, type: 'Core' },
      { id: 'csd-305', name: 'Discrete Mathematics', code: 'MA301', semId: 3, type: 'Core' },
      { id: 'csd-306', name: 'Universal Human Values', code: 'MC301', semId: 3, type: 'Core' },
    ],
  },
  {
    id: 4,
    title: 'Semester 4 (II-II): Data Engineering & DBMS',
    shortCode: 'II-II',
    subjects: [
      { id: 'csd-401', name: 'Data Engineering', code: 'CSD401', semId: 4, type: 'Core', defaultActive: true },
      { id: 'csd-402', name: 'Database Management Systems (DBMS)', code: 'CSD402', semId: 4, type: 'Core', defaultActive: true },
      { id: 'csd-403', name: 'Probability & Statistics', code: 'MA401', semId: 4, type: 'Core' },
      { id: 'csd-404', name: 'Optimization Techniques', code: 'MA402', semId: 4, type: 'Core' },
      { id: 'csd-405', name: 'Digital Logic & Comp Org', code: 'CSD403', semId: 4, type: 'Core' },
      { id: 'csd-406', name: 'Full Stack Dev - I', code: 'CSD404', semId: 4, type: 'Core' },
    ],
  },
  {
    id: 5,
    title: 'Semester 5 (III-I): Machine Learning & Networks',
    shortCode: 'III-I',
    subjects: [
      { id: 'csd-501', name: 'Machine Learning', code: 'CSD501', semId: 5, type: 'Core', defaultActive: true },
      { id: 'csd-502', name: 'Computer Networks', code: 'CSD502', semId: 5, type: 'Core', defaultActive: true },
      { id: 'csd-503', name: 'Professional Elective 1 (Big Data Analytics / Deep Learning)', code: 'PE501', semId: 5, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
      { id: 'csd-504', name: 'Open Elective 1 (Cloud & IoT Foundations)', code: 'OE501', semId: 5, isElective: true, electiveType: 'OE', type: 'Open Elective' },
    ],
  },
  {
    id: 6,
    title: 'Semester 6 (III-II): Deep Learning & NLP',
    shortCode: 'III-II',
    subjects: [
      { id: 'csd-601', name: 'Deep Learning', code: 'CSD601', semId: 6, type: 'Core' },
      { id: 'csd-602', name: 'Natural Language Processing (NLP)', code: 'CSD602', semId: 6, type: 'Core' },
      { id: 'csd-603', name: 'Web Technologies', code: 'CSD603', semId: 6, type: 'Core' },
      { id: 'csd-604', name: 'Professional Elective 2 (Generative AI / MLOps)', code: 'PE601', semId: 6, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
      { id: 'csd-605', name: 'Open Elective 2 (Cyber Laws & Data Ethics)', code: 'OE601', semId: 6, isElective: true, electiveType: 'OE', type: 'Open Elective' },
    ],
  },
  {
    id: 7,
    title: 'Semester 7 (IV-I): Cloud Computing & AI Ethics',
    shortCode: 'IV-I',
    subjects: [
      { id: 'csd-701', name: 'Cloud Computing & DevOps', code: 'CSD701', semId: 7, type: 'Core' },
      { id: 'csd-702', name: 'AI Ethics & Governance', code: 'CSD702', semId: 7, type: 'Core' },
      { id: 'csd-703', name: 'Professional Elective 3 (Feature Engineering / Reinforcement Learning)', code: 'PE701', semId: 7, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
      { id: 'csd-704', name: 'Professional Elective 4 (Computer Vision)', code: 'PE702', semId: 7, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
      { id: 'csd-705', name: 'Open Elective 3 (Entrepreneurship & IP)', code: 'OE701', semId: 7, isElective: true, electiveType: 'OE', type: 'Open Elective' },
    ],
  },
  {
    id: 8,
    title: 'Semester 8 (IV-II): Major Project & Capstone',
    shortCode: 'IV-II',
    subjects: [
      { id: 'csd-801', name: 'Major Project / Industry Internship', code: 'CSD801', semId: 8, type: 'Core' },
      { id: 'csd-802', name: 'Professional Elective 5 (Quantum AI / Edge Computing)', code: 'PE801', semId: 8, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
    ],
  },
];

// ==========================================
// 2. IT (Information Technology) [Code 12] Curriculum Data (PVP23 Regulations)
// ==========================================
export const IT_SEMESTERS: Semester[] = [
  {
    id: 1,
    title: 'Semester 1: C Programming & Physics',
    shortCode: 'I-I',
    subjects: [
      { id: 'it-101', name: 'C Programming', code: 'IT101', semId: 1, type: 'Core' },
      { id: 'it-102', name: 'Linear Algebra', code: 'MA101', semId: 1, type: 'Core' },
      { id: 'it-103', name: 'Engineering Physics', code: 'PH101', semId: 1, type: 'Core' },
      { id: 'it-104', name: 'Basic Electrical Engineering', code: 'EE101', semId: 1, type: 'Core' },
      { id: 'it-105', name: 'IT Workshop', code: 'IT105', semId: 1, type: 'Core' },
    ],
  },
  {
    id: 2,
    title: 'Semester 2: Data Structures & Logic',
    shortCode: 'I-II',
    subjects: [
      { id: 'it-201', name: 'Data Structures', code: 'IT201', semId: 2, type: 'Core' },
      { id: 'it-202', name: 'Differential Equations', code: 'MA201', semId: 2, type: 'Core' },
      { id: 'it-203', name: 'Engineering Chemistry', code: 'CH201', semId: 2, type: 'Core' },
      { id: 'it-204', name: 'Digital Logic & Comp Org', code: 'EC201', semId: 2, type: 'Core' },
      { id: 'it-205', name: 'Basic Civil & Mechanical Eng', code: 'CM201', semId: 2, type: 'Core' },
    ],
  },
  {
    id: 3,
    title: 'Semester 3 (II-I): Discrete Math & Python',
    shortCode: 'II-I',
    subjects: [
      { id: 'it-301', name: 'Python Programming', code: 'IT301', semId: 3, type: 'Core', defaultActive: true },
      { id: 'it-302', name: 'Object Oriented Programming (Java)', code: 'IT302', semId: 3, type: 'Core' },
      { id: 'it-303', name: 'Advanced Data Structures', code: 'IT303', semId: 3, type: 'Core' },
      { id: 'it-304', name: 'Discrete Mathematics', code: 'MA301', semId: 3, type: 'Core' },
      { id: 'it-305', name: 'Universal Human Values', code: 'MC301', semId: 3, type: 'Core' },
    ],
  },
  {
    id: 4,
    title: 'Semester 4 (II-II): OS, DBMS & Software Eng',
    shortCode: 'II-II',
    subjects: [
      { id: 'it-401', name: 'Operating Systems', code: 'IT401', semId: 4, type: 'Core', defaultActive: true },
      { id: 'it-402', name: 'Database Management Systems (DBMS)', code: 'IT402', semId: 4, type: 'Core', defaultActive: true },
      { id: 'it-403', name: 'Software Engineering', code: 'IT403', semId: 4, type: 'Core' },
      { id: 'it-404', name: 'Full Stack Dev - I', code: 'IT404', semId: 4, type: 'Core' },
      { id: 'it-405', name: 'Probability & Statistics', code: 'MA401', semId: 4, type: 'Core' },
    ],
  },
  {
    id: 5,
    title: 'Semester 5 (III-I): Computer Networks & Web Tech',
    shortCode: 'III-I',
    subjects: [
      { id: 'it-501', name: 'Computer Networks', code: 'IT501', semId: 5, type: 'Core', defaultActive: true },
      { id: 'it-502', name: 'Web Technologies', code: 'IT502', semId: 5, type: 'Core', defaultActive: true },
      { id: 'it-503', name: 'Formal Languages & Automata Theory', code: 'IT503', semId: 5, type: 'Core' },
      { id: 'it-504', name: 'Professional Elective 1 (Microservices Architecture / Distributed Systems)', code: 'PE501', semId: 5, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
      { id: 'it-505', name: 'Open Elective 1 (Enterprise Resource Planning)', code: 'OE501', semId: 5, isElective: true, electiveType: 'OE', type: 'Open Elective' },
    ],
  },
  {
    id: 6,
    title: 'Semester 6 (III-II): Distributed Systems & Cloud',
    shortCode: 'III-II',
    subjects: [
      { id: 'it-601', name: 'Distributed Systems', code: 'IT601', semId: 6, type: 'Core' },
      { id: 'it-602', name: 'Cloud Computing', code: 'IT602', semId: 6, type: 'Core' },
      { id: 'it-603', name: 'Cybersecurity', code: 'IT603', semId: 6, type: 'Core' },
      { id: 'it-604', name: 'Professional Elective 2 (DevOps & CI-CD / Mobile App Dev)', code: 'PE601', semId: 6, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
      { id: 'it-605', name: 'Open Elective 2 (UI/UX Design Systems)', code: 'OE601', semId: 6, isElective: true, electiveType: 'OE', type: 'Open Elective' },
    ],
  },
  {
    id: 7,
    title: 'Semester 7 (IV-I): Information Security & Mobile Dev',
    shortCode: 'IV-I',
    subjects: [
      { id: 'it-701', name: 'Information Security', code: 'IT701', semId: 7, type: 'Core' },
      { id: 'it-702', name: 'Mobile App Development', code: 'IT702', semId: 7, type: 'Core' },
      { id: 'it-703', name: 'Professional Elective 3 (Blockchain Tech / Data Mining)', code: 'PE701', semId: 7, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
      { id: 'it-704', name: 'Professional Elective 4 (Network Defense & PenTesting)', code: 'PE702', semId: 7, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
      { id: 'it-705', name: 'Open Elective 3 (Product Management)', code: 'OE701', semId: 7, isElective: true, electiveType: 'OE', type: 'Open Elective' },
    ],
  },
  {
    id: 8,
    title: 'Semester 8 (IV-II): Major Project & Industrial Training',
    shortCode: 'IV-II',
    subjects: [
      { id: 'it-801', name: 'Major Project / Industrial Training', code: 'IT801', semId: 8, type: 'Core' },
      { id: 'it-802', name: 'Professional Elective 5 (Site Reliability Engineering)', code: 'PE801', semId: 8, isElective: true, electiveType: 'PE', type: 'Professional Elective' },
    ],
  },
];

export const INITIAL_SEMESTERS = CSD_SEMESTERS;

// Helper to generate realistic execution guides
function makeGuide(title: string, platform: string, runtimes: string[], prereqs: string[], script: string) {
  return {
    recommendedPlatform: platform,
    runtimeVersions: runtimes,
    prerequisites: prereqs,
    setupScript: script,
    dayByDayRoadmap: [
      {
        phase: 'Days 1–3: Environment & Toolchain Setup',
        days: 'Days 1–3',
        objective: 'Configure virtual environment, folder structure, Git hooks, dependencies, and environment variable schema.',
        steps: [
          'Initialize Git repository with strict commit message hooks & .gitignore.',
          'Setup virtual environment and lock file (requirements.txt / package.json).',
          'Configure .env.example with secure database & service secrets.'
        ]
      },
      {
        phase: 'Days 4–7: Data Tier & Schema Architecture',
        days: 'Days 4–7',
        objective: 'Design ERD schemas, run database migrations (Alembic/Prisma), configure connection pooling, and write schema unit tests.',
        steps: [
          'Create normalized relational tables or document store schema indexes.',
          'Execute idempotent DDL migrations in dockerized database containers.',
          'Implement connection pool wrapper sustaining peak concurrent checkouts.'
        ]
      },
      {
        phase: 'Days 8–11: Business Logic & Industry Upgrades',
        days: 'Days 8–11',
        objective: 'Implement core async endpoints, JWT auth / RBAC rules, structured logging (structlog), Redis caching, and Docker containerization.',
        steps: [
          'Build non-blocking REST endpoints with request payload validation.',
          'Integrate Redis cache-aside layer with dynamic TTL expiration.',
          'Author multi-stage Dockerfile and docker-compose.yml configuration.'
        ]
      },
      {
        phase: 'Days 12–14: Testing, Benchmarking & Portfolio Polish',
        days: 'Days 12–14',
        objective: 'Perform load testing (Locust/k6), optimize SQL query indexes, author comprehensive README.md, and polish recruiter pitch.',
        steps: [
          'Execute load testing suite verifying latency SLA under 5k concurrent RPS.',
          'Verify logarithmic O(log N) index scan query execution paths.',
          'Publish repository to GitHub with interactive system diagrams.'
        ]
      }
    ]
  };
}

// ==========================================
// 3. Complete Production Project Blueprints (Covering All 6 Domains x 3 Difficulties)
// ==========================================
export const MOCK_PROJECT_BLUEPRINTS: ProjectBlueprint[] = [

  // ----------------------------------------------------
  // FINTECH DOMAIN (Beginner, Intermediate, Capstone)
  // ----------------------------------------------------
  {
    id: 'fintech-beg-1',
    title: 'Ledger Reconciliation Engine',
    domain: 'FinTech',
    difficulty: 'Beginner',
    readinessScore: 92,
    verified2026: true,
    isSingleSubject: true,
    targetSubject: 'Intro to Programming (C)',
    problemStatement: 'Financial double-entry ledgers require transaction checksum verification, balance balance matching, and idempotent audit logs.',
    whyGetsYouHired: 'Demonstrates low-level memory precision, struct serialization, and transactional balance reconciliation in C.',
    p99Benchmark: 'Reconciles 250,000 transaction entries in < 1.8 seconds',
    stack: ['C11', 'POSIX Threads', 'GCC', 'Valgrind', 'Makefile'],
    requiredSubjects: ['Intro to Programming (C)'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Transaction Stream | ---> | Binary Struct      | ---> | Hash Map Reconciliation|
| (Raw CSV / Log)    |      | Parser (C11)       |      | (Debit == Credit Check)|
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Audit Trail Log    | <--- | Discrepancy Alert  | <--- | Idempotent State      |
| (.audit Binary File) |    | Generator          |      | Accumulator           |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Struct Parsing', duration: 'Days 1-2', tasks: ['Parse binary transaction structs in C', 'Validate debit/credit field offsets'] },
      { sprint: 'Sprint 2', title: 'Reconciliation Loop', duration: 'Days 3-4', tasks: ['Build hash table accumulator for accounts', 'Verify zero-sum ledger balance constraint'] },
      { sprint: 'Sprint 3', title: 'Valgrind Audit', duration: 'Days 5-6', tasks: ['Audit memory allocations with Valgrind', 'Package Makefile with warning flags'] }
    ],
    executionGuide: makeGuide(
      'Ledger Reconciliation Engine',
      'VS Code with C/C++ Extensions & Valgrind on Ubuntu/WSL2',
      ['GCC 12+', 'C11 Standard', 'Valgrind 3.19+', 'Make 4.3+'],
      ['WSL2 / Linux Terminal', 'Git 2.40+'],
      `mkdir -p src tests bin && touch src/main.c src/ledger.c Makefile README.md\ngcc -Wall -Wextra -std=c11 -o bin/reconciler src/main.c`
    ),
    recruiterCriteria: ['Enforces double-entry debit == credit ledger equality', 'Zero memory leaks in Valgrind memcheck', 'Processes 250k transactions < 2s'],
    resumeBullet: 'Built a C11 double-entry ledger reconciliation engine; processed 250,000 transaction records in 1.8s with zero memory leaks verified by Valgrind.',
    gitScaffold: {
      tree: `ledger-reconciler/\n├── src/\n│   ├── ledger.c\n│   └── main.c\n├── Makefile\n└── README.md`,
      files: [{ name: 'Makefile', language: 'makefile', content: `CC=gcc\nCFLAGS=-Wall -Wextra -std=c11\nall:\n\t$(CC) $(CFLAGS) -o reconciler src/main.c` }],
      cloneCmd: 'git clone https://github.com/studentforge/ledger-reconciler.git'
    }
  },

  {
    id: 'fintech-beg-2',
    title: 'Double-Entry Bookkeeping Accounting Service',
    domain: 'FinTech',
    difficulty: 'Beginner',
    readinessScore: 91,
    verified2026: true,
    isSingleSubject: true,
    targetSubject: 'Python Programming',
    problemStatement: 'Accounting platforms require idempotent transaction posting and immediate debit/credit validation without Floating Point errors.',
    whyGetsYouHired: 'Demonstrates Python Decimal precision math, SQLite transactions, and unit testing for financial compliance.',
    p99Benchmark: 'Executes 10,000 posting operations/sec with Decimal precision math',
    stack: ['Python 3.12', 'SQLite3', 'PyTest', 'Pydantic'],
    requiredSubjects: ['Python Programming'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Journal Entry POST | ---> | Pydantic Schema    | ---> | SQLite Transaction    |
| (JSON Payload)     |      | (Decimal Math Check)|     | (ACID Begin/Commit)   |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Schema Design', duration: 'Days 1-2', tasks: ['Design SQLite accounting tables', 'Enforce Decimal precision for currency'] },
      { sprint: 'Sprint 2', title: 'Posting Engine', duration: 'Days 3-4', tasks: ['Build atomic journal poster', 'Add unit tests for unbalanced entries'] },
      { sprint: 'Sprint 3', title: 'Export Audit', duration: 'Days 5-6', tasks: ['Export CSV general ledger reports', 'Add CLI interface'] }
    ],
    executionGuide: makeGuide(
      'Double-Entry Bookkeeping Service',
      'VS Code with Python 3.12 & PyTest',
      ['Python 3.12+', 'SQLite 3 font', 'PyTest 8.0+'],
      ['Python Virtualenv', 'Git 2.40+'],
      `mkdir -p src tests && touch src/app.py tests/test_ledger.py requirements.txt\npip install pydantic pytest`
    ),
    recruiterCriteria: ['Uses Python Decimal instead of float for currency', 'Enforces ACID transactions', 'Includes 100% PyTest coverage'],
    resumeBullet: 'Developed a double-entry bookkeeping engine in Python 3.12 using SQLite & Decimal math; guaranteed zero rounding drift across 10,000 ledger transactions.',
    gitScaffold: {
      tree: `bookkeeping-service/\n├── src/\n│   └── app.py\n├── tests/\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Double-Entry Bookkeeping Service` }],
      cloneCmd: 'git clone https://github.com/studentforge/bookkeeping-service.git'
    }
  },

  {
    id: 'fintech-int-1',
    title: 'Payment Gateway Webhook Event Processor',
    domain: 'FinTech',
    difficulty: 'Intermediate',
    readinessScore: 94,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Stripe/Razorpay webhooks emit asynchronous event bursts that require HMAC signature verification, Redis deduplication, and PostgreSQL state machine updates.',
    whyGetsYouHired: 'Demonstrates microservice event handling: HMAC-SHA256 verification, Redis idempotency keys, and FastAPI async worker queues.',
    p99Benchmark: 'Processes 8,000 webhook events/sec with < 4ms latency',
    stack: ['Python 3.12', 'FastAPI', 'Redis 7.2', 'PostgreSQL 16', 'Docker Compose'],
    requiredSubjects: ['Web Technologies', 'Database Management Systems (DBMS)'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Stripe Webhook POST| ---> | HMAC Signature     | ---> | Redis Idempotency     |
| (Payload + Sign)   |      | Validator (SHA256) |      | Key Check (SETNX)     |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Client Response    | <--- | PostgreSQL Event   | <--- | Async Background      |
| (200 OK Accepted)  |      | Journal Update     |      | Task Queue            |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'HMAC Security', duration: 'Days 1-3', tasks: ['Build HMAC-SHA256 webhook signature validator', 'Add replay attack timestamp window check'] },
      { sprint: 'Sprint 2', title: 'Redis Idempotency', duration: 'Days 4-7', tasks: ['Implement Redis SETNX lock for event IDs', 'Prevent duplicate transaction processing'] },
      { sprint: 'Sprint 3', title: 'Postgres & Docker', duration: 'Days 8-14', tasks: ['Store transaction logs in PostgreSQL', 'Containerize stack with docker-compose'] }
    ],
    executionGuide: makeGuide(
      'Payment Gateway Webhook Event Processor',
      'VS Code with Docker & Bruno / Postman API Client',
      ['Python 3.12+', 'FastAPI 0.110+', 'Redis 7.2', 'PostgreSQL 16', 'Docker 24+'],
      ['Docker Desktop / WSL2', 'Git 2.40+'],
      `mkdir -p src/api src/core tests && touch main.py docker-compose.yml .env.example\npip install fastapi uvicorn redis asyncpg pydantic`
    ),
    recruiterCriteria: ['Validates HMAC-SHA256 webhook signatures', 'Prevents duplicate events using Redis SETNX', 'Sustains 8k RPS under 4ms latency'],
    resumeBullet: 'Architected a payment webhook event processor using FastAPI, Redis idempotency keys, and PostgreSQL; processed 8,000 events/sec with HMAC security.',
    gitScaffold: {
      tree: `webhook-processor/\n├── src/\n│   └── main.py\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'docker-compose.yml', language: 'yaml', content: `version: '3.8'\nservices:\n  redis:\n    image: redis:7-alpine\n    ports: ["6379:6379"]` }],
      cloneCmd: 'git clone https://github.com/studentforge/webhook-processor.git'
    }
  },

  {
    id: 'fintech-cap-1',
    title: 'Real-Time Financial Fraud Detection Pipeline',
    domain: 'FinTech',
    difficulty: 'Capstone',
    readinessScore: 97,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Banking systems must evaluate high-velocity credit card transactions against real-time ML rules and velocity counters to block fraudulent charges in milliseconds.',
    whyGetsYouHired: 'Demonstrates enterprise FinTech architecture: Kafka stream processing, Redis sliding window counters, XGBoost ONNX model inference, and Prometheus telemetry.',
    p99Benchmark: 'Evaluates transaction fraud risk score in < 2.5ms @ 15,000 RPS',
    stack: ['Python 3.12', 'Apache Kafka', 'Redis Cluster', 'ONNX Runtime', 'FastAPI', 'Prometheus', 'Docker'],
    requiredSubjects: ['Machine Learning', 'Computer Networks', 'Database Management Systems (DBMS)', 'Web Technologies'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Transaction Stream | ---> | Kafka Event Stream | ---> | Sliding Window        |
| (15k RPS Traffic)  |      | (Multi-Partition)  |      | Velocity Evaluator    |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Risk Score API     | <--- | Prometheus Alert   | <--- | ONNX XGBoost Model    |
| (Approve / Block)  |      | Gateway            |      | Inference Engine      |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Kafka Pipeline', duration: 'Days 1-3', tasks: ['Setup multi-partition Kafka topic for payment stream', 'Implement async Kafka producer in Python'] },
      { sprint: 'Sprint 2', title: 'Velocity Counters', duration: 'Days 4-7', tasks: ['Build Redis sliding-window transaction counters', 'Calculate velocity spikes per credit card'] },
      { sprint: 'Sprint 3', title: 'ONNX Model Inference', duration: 'Days 8-11', tasks: ['Convert XGBoost fraud model to ONNX Runtime', 'Execute non-blocking inference in API'] },
      { sprint: 'Sprint 4', title: 'Observability & SLA', duration: 'Days 12-14', tasks: ['Expose Prometheus metrics for decision latency', 'Run 15,000 RPS load test in Locust'] }
    ],
    executionGuide: makeGuide(
      'Real-Time Financial Fraud Detection Pipeline',
      'VS Code with Docker Desktop, K6 / Locust Load Tester & Grafana',
      ['Python 3.12+', 'Apache Kafka 3.6', 'Redis Cluster 7.2', 'ONNX 1.17+', 'FastAPI', 'Docker 24+'],
      ['Linux / WSL2 (16GB RAM recommended)', 'Docker Compose v2'],
      `mkdir -p src/kafka src/ml src/api config tests && touch docker-compose.yml main.py README.md\npip install fastapi uvicorn aiokafka redis onnxruntime prometheus-client`
    ),
    recruiterCriteria: ['Sub-3ms p99 latency SLA at 15,000 RPS', 'Integrates real-time Kafka event streaming', 'Includes ONNX model deployment with Prometheus telemetry'],
    resumeBullet: 'Architected a real-time financial fraud detection engine using Kafka, Redis sliding-window counters, and ONNX ML inference; evaluated 15,000 transactions/sec at <2.5ms SLA.',
    gitScaffold: {
      tree: `fraud-detection-pipeline/\n├── src/\n│   ├── kafka_consumer.py\n│   └── api.py\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Real-Time Financial Fraud Detection Pipeline` }],
      cloneCmd: 'git clone https://github.com/studentforge/fraud-detection-pipeline.git'
    }
  },

  // ----------------------------------------------------
  // HEALTHCARE DOMAIN (Beginner, Intermediate, Capstone)
  // ----------------------------------------------------
  {
    id: 'health-beg-1',
    title: 'Medical Telemetry Processor',
    domain: 'Healthcare',
    difficulty: 'Beginner',
    readinessScore: 91,
    verified2026: true,
    isSingleSubject: true,
    targetSubject: 'Intro to Programming (C)',
    problemStatement: 'Medical telemetry devices emit continuous heart rate and SpO2 stream packets that must be parsed without buffer overflows.',
    whyGetsYouHired: 'Demonstrates low-level binary buffer parsing, ring buffers, and telemetry threshold monitoring in C.',
    p99Benchmark: 'Parses 100,000 telemetry packets/sec with zero memory leaks',
    stack: ['C11', 'Ring Buffer', 'GCC', 'Valgrind'],
    requiredSubjects: ['Intro to Programming (C)'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| ECG / SpO2 Sensors | ---> | C11 Ring Buffer    | ---> | Threshold Detector    |
| (Raw Packet Stream)|      | (Lock-Free FIFO)   |      | (Heart Rate Spike)    |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Ring Buffer', duration: 'Days 1-2', tasks: ['Build circular ring buffer in C', 'Implement packet header validation'] },
      { sprint: 'Sprint 2', title: 'Threshold Alerts', duration: 'Days 3-4', tasks: ['Detect cardiac arrhythmia anomalies', 'Write alert generator'] },
      { sprint: 'Sprint 3', title: 'Memory Safety', duration: 'Days 5-6', tasks: ['Verify zero buffer overflows in Valgrind', 'Write unit test suite'] }
    ],
    executionGuide: makeGuide(
      'Medical Telemetry Processor',
      'VS Code with GCC & Valgrind',
      ['GCC 12+', 'C11', 'Valgrind'],
      ['WSL2 / Linux'],
      `mkdir -p src tests bin && touch src/main.c src/ringbuffer.c Makefile README.md\ngcc -Wall -Wextra -std=c11 -o bin/telemetry src/main.c`
    ),
    recruiterCriteria: ['Uses lock-free circular ring buffer', 'Zero Valgrind memory errors', 'Parses 100k packets/sec'],
    resumeBullet: 'Developed a C11 medical telemetry processor with circular ring buffers; monitored 100,000 ECG packets/sec with zero memory leaks.',
    gitScaffold: {
      tree: `medical-telemetry/\n├── src/\n│   └── main.c\n├── Makefile\n└── README.md`,
      files: [{ name: 'Makefile', language: 'makefile', content: `all:\n\tgcc -Wall -std=c11 -o telemetry src/main.c` }],
      cloneCmd: 'git clone https://github.com/studentforge/medical-telemetry.git'
    }
  },

  {
    id: 'health-int-1',
    title: 'HIPAA-Compliant Patient Audit Trail Engine',
    domain: 'Healthcare',
    difficulty: 'Intermediate',
    readinessScore: 95,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Healthcare providers require tamper-evident access logs for Electronic Health Records (EHR) with HMAC hash chains to satisfy HIPAA regulations.',
    whyGetsYouHired: 'Demonstrates security engineering: SHA-256 hash chains, PostgreSQL write-once audit logs, and FastAPI RBAC authorization.',
    p99Benchmark: 'Appends and verifies 6,000 audit log entries/sec',
    stack: ['Python 3.12', 'FastAPI', 'PostgreSQL 16', 'Cryptography (SHA-256)', 'Docker'],
    requiredSubjects: ['Database Management Systems (DBMS)', 'Web Technologies'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| EHR Access Request | ---> | RBAC Permission    | ---> | SHA-256 Hash Chain    |
| (Doctor / Staff)   |      | Guard (FastAPI)    |      | Audit Generator       |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| HIPAA Compliance   | <--- | Tamper Verification| <--- | Write-Once Immutable  |
| Report Export      |      | Script             |      | PostgreSQL Audit Log  |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Hash Chain', duration: 'Days 1-3', tasks: ['Build cryptographically linked audit hash chain', 'Verify tamper detection script'] },
      { sprint: 'Sprint 2', title: 'RBAC Enforcement', duration: 'Days 4-7', tasks: ['Implement role-based access control for EHR endpoints', 'Log all reads/writes'] },
      { sprint: 'Sprint 3', title: 'PostgreSQL Store', duration: 'Days 8-14', tasks: ['Store immutable records in PostgreSQL', 'Containerize application with Docker'] }
    ],
    executionGuide: makeGuide(
      'HIPAA-Compliant Patient Audit Trail Engine',
      'VS Code with Docker & PostgreSQL',
      ['Python 3.12+', 'FastAPI', 'PostgreSQL 16', 'Docker'],
      ['Docker Compose v2', 'Git 2.40+'],
      `mkdir -p src/audit src/api tests && touch main.py docker-compose.yml README.md\npip install fastapi uvicorn asyncpg cryptography pydantic`
    ),
    recruiterCriteria: ['Implements SHA-256 hash chain for audit immutability', 'Satisfies HIPAA access control rules', 'Includes tamper-detection verifier'],
    resumeBullet: 'Architected a HIPAA-compliant EHR access audit trail engine in Python with SHA-256 cryptographic hash chains & PostgreSQL write-once tables.',
    gitScaffold: {
      tree: `hipaa-audit-engine/\n├── src/\n│   └── main.py\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# HIPAA-Compliant Patient Audit Trail Engine` }],
      cloneCmd: 'git clone https://github.com/studentforge/hipaa-audit-engine.git'
    }
  },

  {
    id: 'health-cap-1',
    title: 'Distributed ICU Telemetry Analytics & Alert Platform',
    domain: 'Healthcare',
    difficulty: 'Capstone',
    readinessScore: 96,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'ICU monitoring systems must continuously stream patient bed telemetry, detect critical cardiac drops within 50ms, and broadcast immediate socket alerts to nurse station dashboards.',
    whyGetsYouHired: 'Demonstrates full-stack real-time medical architecture: WebSockets, Redis Pub/Sub, PostgreSQL time-series partitioning, and React/Next.js dashboard integration.',
    p99Benchmark: 'Processes 20,000 bed telemetry signals/sec with < 15ms broadcast latency',
    stack: ['Node.js 20', 'TypeScript', 'WebSockets (ws)', 'Redis Pub/Sub', 'TimescaleDB', 'Docker'],
    requiredSubjects: ['Computer Networks', 'Database Management Systems (DBMS)', 'Web Technologies', 'Operating Systems'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| ICU Bed Monitor    | ---> | WebSocket Ingest   | ---> | Redis Pub/Sub         |
| Sensors (20k RPS)  |      | Server (TypeScript)|      | Alert Broadcaster     |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Nurse Dashboard UI | <--- | TimescaleDB Time-  | <--- | Emergency Cardiac     |
| (Real-time Socket) |      | Series Hypertable  |      | Anomaly Rule Engine   |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'WebSocket Ingest', duration: 'Days 1-3', tasks: ['Build high-throughput TypeScript WebSocket server', 'Parse HL7/FHIR telemetry payloads'] },
      { sprint: 'Sprint 2', title: 'TimescaleDB Setup', duration: 'Days 4-7', tasks: ['Configure TimescaleDB hypertable partitioning', 'Optimize time-series insert throughput'] },
      { sprint: 'Sprint 3', title: 'Redis Pub/Sub', duration: 'Days 8-11', tasks: ['Implement Redis Pub/Sub for instant alert broadcast', 'Trigger nurse station alerts < 15ms'] },
      { sprint: 'Sprint 4', title: 'Load Testing', duration: 'Days 12-14', tasks: ['Run 20,000 signal/sec load test with k6', 'Containerize complete multi-service stack'] }
    ],
    executionGuide: makeGuide(
      'Distributed ICU Telemetry Analytics Platform',
      'VS Code with Node.js 20, Docker Desktop & k6 Load Tester',
      ['Node.js 20 LTS', 'TypeScript 5.4+', 'TimescaleDB / Postgres 16', 'Redis 7.2', 'Docker'],
      ['WSL2 / Linux', 'Docker Compose v2'],
      `mkdir -p src/server src/db src/alerts tests && touch package.json tsconfig.json docker-compose.yml README.md\nnpm install express ws ioredis pg dotenv`
    ),
    recruiterCriteria: ['Broadcasting emergency alerts < 15ms latency', 'TimescaleDB time-series hypertable implementation', 'Handles 20,000 telemetry signals/sec'],
    resumeBullet: 'Engineered a distributed ICU telemetry platform using TypeScript, WebSockets, Redis Pub/Sub, and TimescaleDB; streamed 20,000 bed signals/sec at <15ms broadcast SLA.',
    gitScaffold: {
      tree: `icu-telemetry-platform/\n├── src/\n│   └── server.ts\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Distributed ICU Telemetry Platform` }],
      cloneCmd: 'git clone https://github.com/studentforge/icu-telemetry-platform.git'
    }
  },

  // ----------------------------------------------------
  // CYBERSECURITY DOMAIN (Beginner, Intermediate, Capstone)
  // ----------------------------------------------------
  {
    id: 'cyber-beg-1',
    title: 'Network Packet Anomaly Detector',
    domain: 'Cybersecurity',
    difficulty: 'Beginner',
    readinessScore: 93,
    verified2026: true,
    isSingleSubject: true,
    targetSubject: 'Computer Networks',
    problemStatement: 'Detecting SYN floods and port scans requires raw socket sniffing and sliding window IP counter inspections.',
    whyGetsYouHired: 'Demonstrates low-level networking: BSD sockets, IP/TCP header unpacking, and port scan detection algorithms.',
    p99Benchmark: 'Inspects 50,000 raw packets/sec with zero drops',
    stack: ['Python 3.12', 'BSD Sockets', 'Struct', 'PyTest'],
    requiredSubjects: ['Computer Networks'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Raw Network Card   | ---> | Raw Socket Sniffer | ---> | TCP Header Unpacker   |
| (Promiscuous Mode) |      | (AF_PACKET / SOCK) |      | (Struct Module)       |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Security Alert Log | <--- | SYN Flood & Port   | <--- | Sliding IP Window     |
| (JSON Log Output)  |      | Scan Detector      |      | Counter               |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Socket Sniffer', duration: 'Days 1-2', tasks: ['Open raw socket interface in Python', 'Unpack IP/TCP headers with struct.unpack'] },
      { sprint: 'Sprint 2', title: 'SYN Flood Detector', duration: 'Days 3-4', tasks: ['Track TCP SYN vs ACK flags', 'Flag IP addresses exceeding threshold'] },
      { sprint: 'Sprint 3', title: 'Testing Suite', duration: 'Days 5-6', tasks: ['Simulate PCAP file traffic', 'Write unit tests for anomaly rules'] }
    ],
    executionGuide: makeGuide(
      'Network Packet Anomaly Detector',
      'VS Code on Linux / WSL2 with Root / sudo Sockets',
      ['Python 3.12+', 'Linux Kernel (Raw Sockets)', 'PyTest'],
      ['Root / Sudo privileges on Linux'],
      `mkdir -p src tests && touch src/sniffer.py tests/test_sniffer.py README.md\nsudo python src/sniffer.py`
    ),
    recruiterCriteria: ['Parses raw TCP/IP packet headers using C struct unpacking', 'Detects SYN floods and port scans', 'Operates over raw socket interface'],
    resumeBullet: 'Built a raw network packet anomaly detector in Python using BSD sockets & struct header unpacking; inspected 50,000 packets/sec for SYN flood attacks.',
    gitScaffold: {
      tree: `packet-anomaly-detector/\n├── src/\n│   └── sniffer.py\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Network Packet Anomaly Detector` }],
      cloneCmd: 'git clone https://github.com/studentforge/packet-anomaly-detector.git'
    }
  },

  {
    id: 'cyber-int-1',
    title: 'Zero-Trust Token Authentication Guard',
    domain: 'Cybersecurity',
    difficulty: 'Intermediate',
    readinessScore: 95,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Zero-trust network architectures require short-lived RS256 JWT tokens, asymmetric public-key verification, and instant Redis token revocation checks.',
    whyGetsYouHired: 'Demonstrates security best practices: RS256 RSA keys, token revocation blacklists, and Fastify/FastAPI middleware guards.',
    p99Benchmark: 'Validates 14,000 token auth requests/sec with < 2ms overhead',
    stack: ['Node.js 20', 'TypeScript', 'Fastify', 'Redis 7.2', 'JWT (RS256)', 'Docker'],
    requiredSubjects: ['Web Technologies', 'Computer Networks'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| HTTP Request       | ---> | Fastify Token Guard| ---> | RS256 Signature       |
| (Bearer JWT Token) |      | (Middleware)       |      | Public Key Verification|
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Upstream Proxy API | <--- | Downstream Context | <--- | Redis Revocation      |
| (Authorized Request)|     | Injector           |      | Blacklist (EXISTS)    |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'RS256 Keys', duration: 'Days 1-3', tasks: ['Generate RSA 4096-bit public/private keypair', 'Implement asymmetric JWT signing'] },
      { sprint: 'Sprint 2', title: 'Redis Blacklist', duration: 'Days 4-7', tasks: ['Build token revocation endpoint', 'Check Redis blacklist on every request'] },
      { sprint: 'Sprint 3', title: 'Docker Deploy', duration: 'Days 8-14', tasks: ['Benchmark auth middleware overhead in wrk', 'Containerize with Docker Compose'] }
    ],
    executionGuide: makeGuide(
      'Zero-Trust Token Authentication Guard',
      'VS Code with Node.js 20 LTS & OpenSSL',
      ['Node.js 20 LTS', 'Fastify 4.26+', 'Redis 7.2', 'OpenSSL 3.0', 'Docker'],
      ['Linux / WSL2', 'Git 2.40+'],
      `mkdir -p src keys config tests && openssl genrsa -out keys/private.key 4096\nopenssl rsa -in keys/private.key -pubout -out keys/public.key\nnpm install fastify @fastify/jwt ioredis`
    ),
    recruiterCriteria: ['Uses RS256 asymmetric RSA public key verification', 'Instant token revocation via Redis blacklist', '< 2ms authorization overhead'],
    resumeBullet: 'Architected a zero-trust API auth guard using TypeScript, Fastify, RS256 JWT signatures, and Redis token revocation lists; handled 14,000 RPS at <2ms SLA.',
    gitScaffold: {
      tree: `zero-trust-auth-guard/\n├── src/\n│   └── server.ts\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Zero-Trust Token Authentication Guard` }],
      cloneCmd: 'git clone https://github.com/studentforge/zero-trust-auth-guard.git'
    }
  },

  {
    id: 'cyber-cap-1',
    title: 'Autonomous Distributed Intrusion Prevention System (IPS)',
    domain: 'Cybersecurity',
    difficulty: 'Capstone',
    readinessScore: 98,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Enterprise networks require distributed edge agents that ingest raw packet flows, detect zero-day anomaly signatures, and automatically push eBPF/iptables firewall drop rules across cluster nodes.',
    whyGetsYouHired: 'Demonstrates low-level security & distributed systems mastery: C eBPF kernel hooks, gRPC cluster consensus, and real-time threat intelligence feeds.',
    p99Benchmark: 'Applies eBPF packet drop rules in kernel space within < 1ms of threat detection',
    stack: ['C11 / Go', 'eBPF / XDP', 'gRPC', 'Protobuf', 'Docker', 'Prometheus'],
    requiredSubjects: ['Computer Networks', 'Operating Systems', 'Web Technologies', 'Distributed Systems'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Edge Packet Traffic| ---> | Linux Kernel XDP   | ---> | Threat Signature      |
| (10Gbps Network)   |      | eBPF Hook (C11)    |      | Analyzer (Go Agent)   |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Prometheus Metrics | <--- | Kernel XDP Map     | <--- | gRPC Cluster Fire-    |
| (Attack Dashboard) |      | (Instant DROP Rule)|      | wall Broadcast        |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'eBPF Hook', duration: 'Days 1-3', tasks: ['Write C XDP eBPF kernel packet filter', 'Compile BPF bytecode using clang'] },
      { sprint: 'Sprint 2', title: 'Go User-Space Daemon', duration: 'Days 4-7', tasks: ['Load eBPF maps from Go user-space daemon', 'Inspect malicious IP patterns'] },
      { sprint: 'Sprint 3', title: 'gRPC Cluster Sync', duration: 'Days 8-11', tasks: ['Synchronize blocked IP lists across edge nodes via gRPC', 'Update BPF maps dynamically'] },
      { sprint: 'Sprint 4', title: 'Kernel Stress Test', duration: 'Days 12-14', tasks: ['Simulate 10Gbps DDoS attack using pktgen', 'Verify sub-millisecond kernel packet drop SLA'] }
    ],
    executionGuide: makeGuide(
      'Autonomous Distributed Intrusion Prevention System',
      'Ubuntu 22.04 LTS Kernel 5.15+ with Clang/LLVM & Go 1.22',
      ['Linux Kernel 5.15+ (eBPF XDP support)', 'Go 1.22+', 'Clang/LLVM 14', 'gRPC', 'Docker'],
      ['Ubuntu 22.04 VM / Native Linux Kernel with sudo/root'],
      `mkdir -p ebpf daemon proto tests && touch ebpf/filter.c daemon/main.go Makefile README.md\nclang -O2 -target bpf -c ebpf/filter.c -o ebpf/filter.o`
    ),
    recruiterCriteria: ['Executes packet drop in Linux kernel space using eBPF/XDP', 'gRPC cluster node synchronization', 'Sub-millisecond firewall rule activation'],
    resumeBullet: 'Built a distributed Intrusion Prevention System (IPS) in C & Go using Linux eBPF/XDP kernel hooks & gRPC; dropped malicious packets in kernel space at sub-1ms SLA.',
    gitScaffold: {
      tree: `distributed-ebpf-ips/\n├── ebpf/\n│   └── filter.c\n├── daemon/\n│   └── main.go\n├── Makefile\n└── README.md`,
      files: [{ name: 'Makefile', language: 'makefile', content: `all:\n\tclang -O2 -target bpf -c ebpf/filter.c -o ebpf/filter.o` }],
      cloneCmd: 'git clone https://github.com/studentforge/distributed-ebpf-ips.git'
    }
  },

  // ----------------------------------------------------
  // E-COMMERCE DOMAIN (Beginner, Intermediate, Capstone)
  // ----------------------------------------------------
  {
    id: 'ecom-beg-1',
    title: 'Real-Time Cart Reservation System',
    domain: 'E-Commerce',
    difficulty: 'Beginner',
    readinessScore: 92,
    verified2026: true,
    isSingleSubject: true,
    targetSubject: 'Python Programming',
    problemStatement: 'E-commerce flash sales require temporary cart inventory holds with automatic expiration TTLs to prevent stock hoarding.',
    whyGetsYouHired: 'Demonstrates Redis key expiration TTLs, atomic operations, and Python async HTTP API development.',
    p99Benchmark: 'Handles 5,000 cart reservations/sec with automatic 15-min TTL expiry',
    stack: ['Python 3.12', 'FastAPI', 'Redis 7.2', 'PyTest'],
    requiredSubjects: ['Python Programming'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Add to Cart POST   | ---> | FastAPI Endpoint   | ---> | Redis Key Hold        |
| (Item ID + Qty)    |      | (Validation)       |      | (EXPIRE 900s TTL)     |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Redis TTL Hold', duration: 'Days 1-2', tasks: ['Configure Redis key expiration events', 'Implement atomic DECRBY inventory holds'] },
      { sprint: 'Sprint 2', title: 'Cart API', duration: 'Days 3-4', tasks: ['Build REST cart endpoints', 'Handle item expiration webhooks'] },
      { sprint: 'Sprint 3', title: 'Testing', duration: 'Days 5-6', tasks: ['Write PyTest test cases for race conditions', 'Package container'] }
    ],
    executionGuide: makeGuide(
      'Real-Time Cart Reservation System',
      'VS Code with Python 3.12 & Redis',
      ['Python 3.12+', 'FastAPI', 'Redis 7.2'],
      ['Docker / Redis local'],
      `mkdir -p src tests && touch main.py README.md\npip install fastapi uvicorn redis pytest`
    ),
    recruiterCriteria: ['Uses atomic Redis inventory decrements', 'Includes automatic TTL expiration', 'Handles overselling race conditions'],
    resumeBullet: 'Developed a real-time e-commerce cart reservation system in Python & Redis; prevented overselling across 5,000 concurrent cart holds with automatic 15-min TTL expiration.',
    gitScaffold: {
      tree: `cart-reservation/\n├── src/\n│   └── main.py\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Real-Time Cart Reservation System` }],
      cloneCmd: 'git clone https://github.com/studentforge/cart-reservation.git'
    }
  },

  {
    id: 'ecom-int-1',
    title: 'Flash-Sale Inventory Allocation Engine',
    domain: 'E-Commerce',
    difficulty: 'Intermediate',
    readinessScore: 96,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'High-concurrency flash sales (e.g., Black Friday) cause race conditions in database inventory tables, requiring Redis Lua script atomic locks and PostgreSQL async queue workers.',
    whyGetsYouHired: 'Demonstrates high-concurrency systems design: Redis Lua scripts for lock-free atomic stock checks, PostgreSQL row locking, and async worker queues.',
    p99Benchmark: 'Sustains 12,000 checkout attempts/sec without single oversell bug',
    stack: ['Python 3.12', 'FastAPI', 'Redis Lua Scripts', 'PostgreSQL 16', 'Docker'],
    requiredSubjects: ['Database Management Systems (DBMS)', 'Web Technologies'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Flash Sale Checkout| ---> | Redis Lua Script   | ---> | Stock Checked &       |
| (12k RPS Traffic)  |      | (Atomic Inventory) |      | Subtracted Atomically |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Order Confirmation | <--- | Async Worker Queue | <--- | PostgreSQL Order      |
| (200 OK)           |      | (Celery / ARQ)     |      | Record Creation       |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Lua Atomic Script', duration: 'Days 1-3', tasks: ['Author Redis Lua script executing check-and-decrement in single atomic op', 'Prevent race conditions'] },
      { sprint: 'Sprint 2', title: 'FastAPI Router', duration: 'Days 4-7', tasks: ['Build high-throughput checkout route', 'Queue order creation tasks in async pool'] },
      { sprint: 'Sprint 3', title: 'Oversell Stress Test', duration: 'Days 8-14', tasks: ['Simulate 50,000 users attempting to buy 100 inventory items', 'Verify zero overselling in Locust'] }
    ],
    executionGuide: makeGuide(
      'Flash-Sale Inventory Allocation Engine',
      'VS Code with Redis & Locust Load Tester',
      ['Python 3.12+', 'FastAPI', 'Redis 7.2 (Lua)', 'PostgreSQL 16', 'Locust'],
      ['Docker Compose v2', 'Git 2.40+'],
      `mkdir -p src/lua src/api tests && touch main.py docker-compose.yml README.md\npip install fastapi uvicorn redis asyncpg locust`
    ),
    recruiterCriteria: ['Executes atomic check-and-decrement via Redis Lua script', 'Guarantees zero overselling under 12,000 RPS', 'Includes Locust load test benchmark'],
    resumeBullet: 'Engineered a flash-sale inventory engine using FastAPI and Redis Lua scripts; eliminated race conditions across 12,000 concurrent checkouts with zero overselling.',
    gitScaffold: {
      tree: `flash-sale-engine/\n├── src/\n│   ├── lua/check_stock.lua\n│   └── main.py\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Flash-Sale Inventory Allocation Engine` }],
      cloneCmd: 'git clone https://github.com/studentforge/flash-sale-engine.git'
    }
  },

  {
    id: 'ecom-cap-1',
    title: 'High-Throughput Distributed E-Commerce Order Fulfillment Platform',
    domain: 'E-Commerce',
    difficulty: 'Capstone',
    readinessScore: 97,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Global e-commerce platforms must coordinate multi-warehouse inventory reservation, payment processing, shipping dispatch, and notification delivery using Saga pattern orchestrators.',
    whyGetsYouHired: 'Demonstrates distributed microservices mastery: Event-Driven Saga Pattern, RabbitMQ / Kafka queues, Outbox pattern for database consistency, and Docker deployment.',
    p99Benchmark: 'Orchestrates 18,000 end-to-end order workflows/sec with automated Saga rollbacks',
    stack: ['Node.js 20', 'TypeScript', 'RabbitMQ', 'PostgreSQL 16', 'Redis', 'Docker Compose'],
    requiredSubjects: ['Web Technologies', 'Database Management Systems (DBMS)', 'Software Engineering', 'Distributed Systems'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Customer Order POST| ---> | Saga Orchestrator  | ---> | Inventory Service     |
| (Multi-Item Order) |      | (State Machine)    |      | (Stock Reservation)   |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Order Dispatch Log | <--- | Notification Engine| <--- | Payment Gateway       |
| & Inventory Sync   |      | (RabbitMQ Queue)   |      | (Saga Compensate Roll)|
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Saga State Machine', duration: 'Days 1-3', tasks: ['Design Saga transaction orchestrator with rollback compensation hooks', 'Setup RabbitMQ exchanges'] },
      { sprint: 'Sprint 2', title: 'Outbox Pattern', duration: 'Days 4-7', tasks: ['Implement Transactional Outbox pattern in PostgreSQL for 100% data consistency'] },
      { sprint: 'Sprint 3', title: 'Microservice Cluster', duration: 'Days 8-11', tasks: ['Build Inventory, Payment, and Shipping microservices in TypeScript'] },
      { sprint: 'Sprint 4', title: 'Chaos & Failover Test', duration: 'Days 12-14', tasks: ['Inject simulated payment failure to test automated Saga rollbacks', 'Package Docker Compose cluster'] }
    ],
    executionGuide: makeGuide(
      'Distributed E-Commerce Order Fulfillment Platform',
      'VS Code with Docker Desktop & RabbitMQ Management Console',
      ['Node.js 20 LTS', 'TypeScript 5.4', 'RabbitMQ 3.12', 'PostgreSQL 16', 'Docker'],
      ['WSL2 / Linux', 'Docker Compose v2'],
      `mkdir -p services/saga services/inventory services/payment docker && touch docker-compose.yml package.json README.md\nnpm install amqplib pg express dotenv`
    ),
    recruiterCriteria: ['Implements Event-Driven Saga pattern with compensating transactions', 'Transactional Outbox pattern for DB consistency', 'Handles 18,000 order workflows/sec'],
    resumeBullet: 'Architected a distributed e-commerce order fulfillment platform using TypeScript, RabbitMQ, and PostgreSQL; orchestrated 18,000 workflows/sec with automated Saga transaction rollbacks.',
    gitScaffold: {
      tree: `distributed-fulfillment/\n├── services/\n│   ├── saga/\n│   └── inventory/\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Distributed E-Commerce Order Fulfillment Platform` }],
      cloneCmd: 'git clone https://github.com/studentforge/distributed-fulfillment.git'
    }
  },

  // ----------------------------------------------------
  // CLOUD/DEVOPS DOMAIN (Beginner, Intermediate, Capstone)
  // ----------------------------------------------------
  {
    id: 'cloud-beg-1',
    title: 'Multi-Region Load Balancer Simulator',
    domain: 'Cloud/DevOps',
    difficulty: 'Beginner',
    readinessScore: 92,
    verified2026: true,
    isSingleSubject: true,
    targetSubject: 'Operating Systems',
    problemStatement: 'Simulating round-robin, least-connections, and geographic IP routing algorithm performance requires low-level socket proxying.',
    whyGetsYouHired: 'Demonstrates load balancing algorithms: Weighted Round Robin, Least Connections, HTTP health checking, and latency metrics.',
    p99Benchmark: 'Proxies 10,000 HTTP requests/sec across 5 upstream mock servers',
    stack: ['Python 3.12', 'asyncio', 'aiohttp', 'Docker'],
    requiredSubjects: ['Operating Systems'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Client Traffic     | ---> | Async Load Balancer| ---> | Health Checker        |
| (HTTP Requests)    |      | (Round Robin / LC) |      | (Active HTTP Pings)   |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Proxy Response     | <--- | Least Connections  | <--- | Upstream Server Pool  |
| (Returned Payload) |      | Router             |      | (Node 1, Node 2, N3)  |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Algorithms', duration: 'Days 1-2', tasks: ['Implement Round Robin and Least Connections selection', 'Build async proxy router'] },
      { sprint: 'Sprint 2', title: 'Health Checks', duration: 'Days 3-4', tasks: ['Add background periodic HTTP ping checks', 'Auto-remove unhealthy nodes'] },
      { sprint: 'Sprint 3', title: 'Benchmark', duration: 'Days 5-6', tasks: ['Benchmark proxy latency overhead', 'Containerize upstream nodes in Docker'] }
    ],
    executionGuide: makeGuide(
      'Multi-Region Load Balancer Simulator',
      'VS Code with Python 3.12 & Docker',
      ['Python 3.12+', 'asyncio', 'aiohttp', 'Docker'],
      ['Docker Desktop'],
      `mkdir -p src tests && touch main.py README.md\npip install aiohttp pytest`
    ),
    recruiterCriteria: ['Implements Least Connections & Round Robin algorithms', 'Active HTTP healthcheck pool eviction', '< 1ms proxy overhead'],
    resumeBullet: 'Built a multi-region load balancer simulator in Python using asyncio & aiohttp; proxied 10,000 RPS across upstream server pools with dynamic healthcheck node eviction.',
    gitScaffold: {
      tree: `load-balancer-simulator/\n├── src/\n│   └── main.py\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Multi-Region Load Balancer Simulator` }],
      cloneCmd: 'git clone https://github.com/studentforge/load-balancer-simulator.git'
    }
  },

  {
    id: 'cloud-int-1',
    title: 'Automated CI/CD Pipeline Monitor & Infrastructure Drift Detector',
    domain: 'Cloud/DevOps',
    difficulty: 'Intermediate',
    readinessScore: 95,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'DevOps teams require real-time tracking of GitHub Actions CI/CD pipeline failures and automatic Terraform state drift alerts before deploying broken code.',
    whyGetsYouHired: 'Demonstrates SRE practices: GitHub Webhook processing, Terraform state parser, Prometheus alerting, and Slack/Discord webhook bots.',
    p99Benchmark: 'Detects infrastructure drift in < 3 seconds of Terraform state update',
    stack: ['Python 3.12', 'FastAPI', 'Terraform State Parser', 'Prometheus', 'Docker'],
    requiredSubjects: ['Software Engineering', 'Computer Networks'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| GitHub Actions CI  | ---> | Webhook Collector  | ---> | Terraform State       |
| & Terraform State  |      | (FastAPI Endpoint) |      | Drift Parser          |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Discord / Slack    | <--- | Alert Manager      | <--- | Prometheus Metric     |
| Incident Alert     |      | (Rule Evaluator)   |      | Exporter              |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Webhook Ingest', duration: 'Days 1-3', tasks: ['Build FastAPI endpoints ingesting GitHub Actions workflow webhooks', 'Parse job status'] },
      { sprint: 'Sprint 2', title: 'Terraform Drift', duration: 'Days 4-7', tasks: ['Write parser comparing live cloud state vs terraform.tfstate JSON', 'Detect unmanaged resources'] },
      { sprint: 'Sprint 3', title: 'Prometheus & Alert', duration: 'Days 8-14', tasks: ['Export CI failure metrics to Prometheus', 'Trigger instant Slack alert webhooks'] }
    ],
    executionGuide: makeGuide(
      'Automated CI/CD Pipeline Monitor & Drift Detector',
      'VS Code with Terraform CLI & Prometheus',
      ['Python 3.12+', 'FastAPI', 'Terraform 1.7+', 'Prometheus', 'Docker'],
      ['Git 2.40+', 'Docker Compose v2'],
      `mkdir -p src/parser src/api tests && touch main.py docker-compose.yml README.md\npip install fastapi uvicorn prometheus-client requests`
    ),
    recruiterCriteria: ['Parses terraform.tfstate JSON to detect resource drift', 'Exports metrics for Prometheus & Grafana', 'Processes GitHub Actions webhooks'],
    resumeBullet: 'Developed an automated CI/CD pipeline monitor and Terraform drift detector in Python & FastAPI; alerted engineering teams to cloud infrastructure drift within 3 seconds.',
    gitScaffold: {
      tree: `cicd-drift-monitor/\n├── src/\n│   └── main.py\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Automated CI/CD Pipeline Monitor & Infrastructure Drift Detector` }],
      cloneCmd: 'git clone https://github.com/studentforge/cicd-drift-monitor.git'
    }
  },

  {
    id: 'cloud-cap-1',
    title: 'Multi-Tenant Microservices Service Mesh & Traffic Controller',
    domain: 'Cloud/DevOps',
    difficulty: 'Capstone',
    readinessScore: 98,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Cloud-native Kubernetes deployments require custom ingress controllers with dynamic canary deployment traffic splitting, Mutual TLS (mTLS) encryption, and circuit breakers.',
    whyGetsYouHired: 'Demonstrates advanced Cloud/DevOps engineering: Envoy / NGINX proxy control plane, mTLS certificate rotation, Envoy xDS API in Go, and Prometheus telemetry.',
    p99Benchmark: 'Executes canary traffic splitting with < 0.5ms proxy latency @ 25,000 RPS',
    stack: ['Go 1.22', 'Envoy xDS API', 'mTLS (OpenSSL)', 'gRPC', 'Prometheus', 'Docker Compose'],
    requiredSubjects: ['Computer Networks', 'Operating Systems', 'Software Engineering', 'Distributed Systems'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Incoming Ingress   | ---> | Envoy Proxy Data   | ---> | Dynamic Canary Splitter|
| Traffic (25k RPS)  |      | Plane (mTLS Guard) |      | (90% v1 / 10% v2)     |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Prometheus &      | <--- | Circuit Breaker    | <--- | Control Plane Server  |
| Grafana Dashboard  |      | (500 Error Eviction|      | (Go xDS gRPC API)     |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Control Plane xDS', duration: 'Days 1-3', tasks: ['Build Go control plane server implementing Envoy xDS gRPC API', 'Configure dynamic clusters'] },
      { sprint: 'Sprint 2', title: 'Canary Traffic Split', duration: 'Days 4-7', tasks: ['Implement weighted cluster routing for 90/10 canary deployments', 'Add circuit breaker threshold'] },
      { sprint: 'Sprint 3', title: 'mTLS Encryption', duration: 'Days 8-11', tasks: ['Configure mutual TLS certificate authentication between data plane proxy nodes'] },
      { sprint: 'Sprint 4', title: 'Load Test & Metrics', duration: 'Days 12-14', tasks: ['Benchmark proxy throughput at 25,000 RPS', 'Export Envoy telemetry metrics to Grafana'] }
    ],
    executionGuide: makeGuide(
      'Multi-Tenant Microservices Service Mesh & Traffic Controller',
      'VS Code with Go 1.22 & Envoy Proxy Docker Container',
      ['Go 1.22+', 'Envoy Proxy 1.29+', 'gRPC', 'Prometheus', 'Docker'],
      ['WSL2 / Linux', 'Docker Compose v2'],
      `mkdir -p controlplane envoy config certs tests && touch controlplane/main.go docker-compose.yml README.md\ngo mod init service-mesh`
    ),
    recruiterCriteria: ['Implements Envoy xDS gRPC control plane in Go', 'Mutual TLS certificate rotation between proxies', '< 0.5ms proxy latency at 25,000 RPS'],
    resumeBullet: 'Architected a microservices service mesh control plane in Go using Envoy xDS APIs & mTLS; executed 90/10 canary traffic deployments across 25,000 RPS at <0.5ms proxy overhead.',
    gitScaffold: {
      tree: `service-mesh-control-plane/\n├── controlplane/\n│   └── main.go\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Multi-Tenant Microservices Service Mesh & Traffic Controller` }],
      cloneCmd: 'git clone https://github.com/studentforge/service-mesh-control-plane.git'
    }
  },

  // ----------------------------------------------------
  // AI/DATA DOMAIN (Beginner, Intermediate, Capstone)
  // ----------------------------------------------------
  {
    id: 'aidata-beg-1',
    title: 'Automated Dataset Validation Service',
    domain: 'AI/Data',
    difficulty: 'Beginner',
    readinessScore: 92,
    verified2026: true,
    isSingleSubject: true,
    targetSubject: 'Intro to Data Science',
    problemStatement: 'Machine learning pipelines fail when training CSV datasets contain null values, type mismatches, or out-of-bounds outliers.',
    whyGetsYouHired: 'Demonstrates data quality engineering: Great Expectations, Pandas profiling, Pydantic schema validation, and automated CSV checks.',
    p99Benchmark: 'Validates 500,000 CSV rows in < 2.1 seconds',
    stack: ['Python 3.12', 'Pandas', 'Pydantic', 'PyTest'],
    requiredSubjects: ['Intro to Data Science'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| Raw CSV Dataset    | ---> | Pandas Chunking    | ---> | Pydantic Schema       |
| (500k Rows)        |      | Streamer           |      | Data Type Check       |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Cleaned Parquet    | <--- | Outlier Isolation  | <--- | Null Value & Drift    |
| Export File        |      | (IQR Z-Score)      |      | Detector              |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Schema Validator', duration: 'Days 1-2', tasks: ['Build Pandas dataset validator with Pydantic type constraints', 'Check null thresholds'] },
      { sprint: 'Sprint 2', title: 'Outlier Isolation', duration: 'Days 3-4', tasks: ['Implement IQR and Z-Score outlier detection algorithms', 'Export clean Parquet file'] },
      { sprint: 'Sprint 3', title: 'Unit Testing', duration: 'Days 5-6', tasks: ['Write PyTest suite testing invalid CSV payloads', 'Build CLI tool'] }
    ],
    executionGuide: makeGuide(
      'Automated Dataset Validation Service',
      'VS Code with Jupyter Lab & Python 3.12',
      ['Python 3.12+', 'Pandas 2.2+', 'Pydantic 2.6+', 'PyTest'],
      ['Python Virtualenv'],
      `mkdir -p src tests && touch main.py README.md\npip install pandas pydantic pytest pyarrow`
    ),
    recruiterCriteria: ['Validates 500k rows < 2.2s using Pandas chunking', 'Implements IQR outlier detection', 'Includes unit test coverage'],
    resumeBullet: 'Built an automated dataset validation service in Python & Pandas; verified 500,000 CSV records in 2.1s with Pydantic type checks and IQR outlier isolation.',
    gitScaffold: {
      tree: `dataset-validation-service/\n├── src/\n│   └── main.py\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Automated Dataset Validation Service` }],
      cloneCmd: 'git clone https://github.com/studentforge/dataset-validation-service.git'
    }
  },

  {
    id: 'aidata-int-1',
    title: 'Distributed Change Data Capture (CDC) Data Pipeline',
    domain: 'AI/Data',
    difficulty: 'Intermediate',
    readinessScore: 96,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Syncing relational database modifications to data warehouses in real-time requires PostgreSQL Logical Replication WAL streams and Kafka CDC event consumers.',
    whyGetsYouHired: 'Demonstrates Data Engineering expertise: PostgreSQL Write-Ahead Log (WAL) streaming, Debezium CDC, PyArrow Parquet chunking, and DuckDB analytics.',
    p99Benchmark: 'Syncs database inserts to Parquet storage in < 350ms',
    stack: ['Python 3.12', 'PostgreSQL WAL', 'DuckDB', 'PyArrow', 'Kafka', 'Docker'],
    requiredSubjects: ['Data Engineering', 'Database Management Systems (DBMS)'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| PostgreSQL OLTP DB | ---> | WAL Logical        | ---> | PyArrow Parquet       |
| (Insert / Update)  |      | Replication Stream |      | Stream Chunker        |
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Analytical BI Query| <--- | Partitioned Lake   | <--- | DuckDB In-Memory      |
| (DuckDB / SQL)     |      | Storage (.parquet) |      | Schema Validator      |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'WAL Streaming', duration: 'Days 1-3', tasks: ['Configure PostgreSQL logical replication slot (pgoutput)', 'Stream WAL changes in Python'] },
      { sprint: 'Sprint 2', title: 'DuckDB Ingestion', duration: 'Days 4-7', tasks: ['Ingest WAL event tuples into DuckDB', 'Format into partitioned Snappy Parquet files'] },
      { sprint: 'Sprint 3', title: 'Docker Pipeline', duration: 'Days 8-14', tasks: ['Automate pipeline container in Docker Compose', 'Benchmark streaming sync latency < 350ms'] }
    ],
    executionGuide: makeGuide(
      'Distributed CDC Data Pipeline',
      'VS Code with PostgreSQL 16 & DuckDB',
      ['Python 3.12+', 'PostgreSQL 16 (Logical Replication)', 'DuckDB 0.10+', 'PyArrow', 'Docker'],
      ['Docker Desktop / WSL2'],
      `mkdir -p src/cdc src/storage tests && touch main.py docker-compose.yml README.md\npip install psycopg2-binary duckdb pyarrow asyncpg`
    ),
    recruiterCriteria: ['Streams PostgreSQL WAL changes without polling queries', 'Partitioned Parquet file output', 'Sub-350ms streaming sync latency'],
    resumeBullet: 'Architected a Change Data Capture (CDC) pipeline in Python, PostgreSQL WAL, & DuckDB; synced relational updates to partitioned Parquet files in <350ms.',
    gitScaffold: {
      tree: `cdc-data-pipeline/\n├── src/\n│   └── cdc_stream.py\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# Distributed Change Data Capture (CDC) Data Pipeline` }],
      cloneCmd: 'git clone https://github.com/studentforge/cdc-data-pipeline.git'
    }
  },

  {
    id: 'aidata-cap-1',
    title: 'RAG Ingestion Vector Search Engine with Hybrid Search',
    domain: 'AI/Data',
    difficulty: 'Capstone',
    readinessScore: 98,
    verified2026: true,
    isSingleSubject: false,
    problemStatement: 'Enterprise Retrieval-Augmented Generation (RAG) applications require chunking multi-page PDF documents, generating dense vector embeddings, storing vectors in Qdrant/pgvector, and performing Hybrid BM25 + Vector search re-ranking.',
    whyGetsYouHired: 'Demonstrates modern AI Engineering leadership: OpenAI / HuggingFace Embeddings, Qdrant / pgvector vector databases, Reciprocal Rank Fusion (RRF), and FastAPI streaming.',
    p99Benchmark: 'Executes hybrid vector + keyword search re-ranking in < 18ms across 1M vectors',
    stack: ['Python 3.12', 'Qdrant Vector DB', 'FastAPI', 'PyTorch', 'LangChain', 'Docker'],
    requiredSubjects: ['Machine Learning', 'Natural Language Processing (NLP)', 'Database Management Systems (DBMS)', 'Web Technologies'],
    architectureDiagram: `
+--------------------+      +--------------------+      +-----------------------+
| PDF / Text Document| ---> | Recursive Text     | ---> | Embedding Model       |
| Ingestion Upload   |      | Chunker (Token Size|      | (HuggingFace / OpenAI)|
+--------------------+      +--------------------+      +-----------------------+
                                                                    |
                                                                    v
+--------------------+      +--------------------+      +-----------------------+
| Context Payload to | <--- | Reciprocal Rank    | <--- | Qdrant Vector Index   |
| LLM Generator      |      | Fusion (RRF Re-Rank|      | & BM25 Keyword Search |
+--------------------+      +--------------------+      +-----------------------+
    `,
    sprintRoadmap: [
      { sprint: 'Sprint 1', title: 'Text Chunking', duration: 'Days 1-3', tasks: ['Build semantic sentence chunker with token overlap', 'Generate dense vector embeddings'] },
      { sprint: 'Sprint 2', title: 'Qdrant Vector Store', duration: 'Days 4-7', tasks: ['Setup Qdrant vector collection with HNSW index', 'Implement cosine similarity search'] },
      { sprint: 'Sprint 3', title: 'Hybrid RRF Search', duration: 'Days 8-11', tasks: ['Combine BM25 sparse keyword search with dense vector embeddings', 'Re-rank results via RRF algorithm'] },
      { sprint: 'Sprint 4', title: 'FastAPI Streaming', duration: 'Days 12-14', tasks: ['Expose RAG context retrieval API with Server-Sent Events', 'Run 1,000,000 vector benchmark'] }
    ],
    executionGuide: makeGuide(
      'RAG Ingestion Vector Search Engine with Hybrid Search',
      'VS Code with Jupyter Lab, Docker Desktop & Qdrant Dashboard',
      ['Python 3.12+', 'Qdrant 1.8+', 'FastAPI', 'PyTorch / SentenceTransformers', 'Docker'],
      ['WSL2 / Linux (GPU optional but fast)'],
      `mkdir -p src/ingest src/vector src/api tests && touch main.py docker-compose.yml README.md\npip install qdrant-client sentence-transformers fastapi uvicorn pydantic`
    ),
    recruiterCriteria: ['Combines BM25 keyword search with dense HNSW vector search', 'Reciprocal Rank Fusion (RRF) re-ranking', '< 18ms query latency across 1M vectors'],
    resumeBullet: 'Built a production RAG vector search engine using Python, Qdrant, & HuggingFace embeddings; achieved hybrid BM25 + dense vector retrieval across 1M documents at <18ms SLA.',
    gitScaffold: {
      tree: `rag-vector-search-engine/\n├── src/\n│   ├── ingest.py\n│   └── api.py\n├── docker-compose.yml\n└── README.md`,
      files: [{ name: 'README.md', language: 'markdown', content: `# RAG Ingestion Vector Search Engine` }],
      cloneCmd: 'git clone https://github.com/studentforge/rag-vector-search-engine.git'
    }
  }

];
