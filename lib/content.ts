export const GITHUB_USER = "meetsutariya4448";

export const profile = {
  name: "Meet Sutariya",
  initials: "MS",
  headline: "Software Engineering Intern · Platform/Cloud · Backend · AI/ML",
  status: "SEEKING SUMMER 2027",
  location: "TEMPE, AZ",
  school: "CS + DATA SCIENCE @ ASU '27",
  tagline: "Systems that survive the unhappy path.",
  intro:
    "I'm Meet Sutariya, a computer science and data science undergraduate at Arizona State. I build across distributed transactions, storage and networking, resilient gateways, and applied retrieval — making failure boundaries explicit, then proving the guarantees hold.",
  method:
    "The common thread is proof: make state and failure boundaries explicit, test the guarantees against real infrastructure, then measure before making a performance claim.",
  links: {
    github: "https://github.com/meetsutariya4448",
    linkedin: "https://www.linkedin.com/in/meetssutariya",
    email: "meetsutariya5930@gmail.com",
  },
};

export const domains = [
  "Distributed Systems",
  "Platform · Cloud",
  "Storage & Networking",
  "Applied AI · Retrieval",
  "Backend Engineering",
  "Observability",
];

export const education = {
  school: "Arizona State University",
  college: "Ira A. Fulton Schools of Engineering",
  degree: "B.S. Computer Science",
  minor: "Minor, Data Science — College of Liberal Arts and Sciences",
  period: "Jan 2024 — Dec 2027",
  gpa: "3.82",
  honors: "Dean's List",
  coursework: [
    "Data Structures & Algorithms (A+)",
    "Intro to Software Engineering (A)",
  ],
  progressStart: new Date("2024-01-15").getTime(),
  progressEnd: new Date("2027-12-15").getTime(),
};

export type Role = {
  company: string;
  position: string;
  location: string;
  type: string;
  start: string;
  end: string;
  duration: string;
  current?: boolean;
  summary: string;
  points: string[];
  stack: string[];
};

export const roles: Role[] = [
  {
    company: "Arizona State University",
    position: "Engineering Technical Services — Classroom Support",
    location: "Tempe, Arizona",
    type: "Part-time · On-site",
    start: "Feb 2025",
    end: "Present",
    duration: "1 yr 8 mos",
    current: true,
    summary:
      "Imaging, deployment and diagnostics automation for the engineering lab fleet.",
    points: [
      "Authored PowerShell automation for OS imaging across 8 engineering labs, cutting provisioning time 30% and eliminating manual per-machine setup.",
      "Engineered deployment pipelines with SCCM and Windows Deployment Services, holding consistent build environments across 200+ systems on infrastructure-as-code principles.",
      "Automated network diagnostics, reducing escalation tickets 20% and sustaining 99% uptime for lab infrastructure serving 500+ students.",
    ],
    stack: ["PowerShell", "SCCM", "WDS", "Windows", "Automation"],
  },
  {
    company: "Bigscal Technologies",
    position: "AI Engineer Intern",
    location: "Surat, Gujarat, India",
    type: "Internship",
    start: "May 2026",
    end: "Aug 2026",
    duration: "4 mos",
    summary:
      "An evaluation platform measuring how accurately and efficiently LLM agents complete tasks and use tools.",
    points: [
      "Built a platform to evaluate how accurately and efficiently LLM agents complete tasks and use tools across different models.",
      "Created a 600-task human-reviewed benchmark with automated regression testing and failure analysis.",
      "Improved task success from 72% to 86% and cut average token usage 24% by refining tool selection, retrieval, and structured outputs.",
    ],
    stack: ["Python", "LLM Evaluation", "RAG", "Benchmarking", "Tool Use"],
  },
  {
    company: "Digit Software Solutions",
    position: "Software Engineer Intern",
    location: "Surat, Gujarat, India",
    type: "Internship · Remote",
    start: "May 2025",
    end: "Dec 2025",
    duration: "8 mos",
    summary:
      "A distributed workflow engine in Go running multi-step background jobs across Kafka workers.",
    points: [
      "Built a distributed workflow engine in Go for multi-step background jobs across Kafka workers.",
      "Added scheduling, worker leases, heartbeats, persistent state, retries, timeouts and idempotency so jobs recover from worker crashes and message redelivery.",
      "Deployed Docker workers on Kubernetes with OpenTelemetry, Prometheus and Grafana monitoring for throughput, latency, failures and worker health.",
    ],
    stack: ["Go", "Kafka", "Kubernetes", "Docker", "OpenTelemetry", "Prometheus", "Grafana"],
  },
];

export type Project = {
  n: string;
  name: string;
  kind: string;
  year: string;
  tagline: string;
  description: string;
  stack: string[];
  evidence: string[];
  repo: string;
  extra?: { label: string; href: string }[];
  accent: "sage" | "clay" | "indigo" | "moss" | "amber";
};

export const featured: Project = {
  n: "01",
  name: "EventForge",
  kind: "DISTRIBUTED SYSTEMS · JAVA",
  year: "2026",
  tagline: "Distributed transactions, with the failure semantics made explicit.",
  description:
    "Four Spring Boot services own separate PostgreSQL databases and coordinate through Kafka. Transactional outboxes remove the database/broker dual write, idempotent consumers absorb redelivery, a persisted saga compensates partial failure, and trace context continues across HTTP, outbox relay and asynchronous consumers.",
  stack: ["Java 21", "Spring Boot", "Kafka", "PostgreSQL", "Testcontainers", "OpenTelemetry", "Flyway"],
  evidence: [
    "89 tests against real PostgreSQL and Kafka",
    "Fault injection at commit and ack boundaries",
    "Six-job CI green on the current commit",
    "22 ADRs documenting decisions and limits",
  ],
  repo: "https://github.com/meetsutariya4448/EventForge",
  extra: [
    { label: "Architecture", href: "https://github.com/meetsutariya4448/EventForge/blob/main/docs/architecture.md" },
    { label: "CI run", href: "https://github.com/meetsutariya4448/EventForge/actions/runs/34058193491" },
  ],
  accent: "sage",
};

export const projects: Project[] = [
  {
    n: "02",
    name: "ForgeKV",
    kind: "SYSTEMS · C++20",
    year: "2026",
    tagline: "A persistent key-value server built below the framework line.",
    description:
      "A versioned binary protocol feeds a bounded TCP server and sharded in-memory index backed by checksummed, append-only segments. The engine handles TTL expiry, compaction, truncated-tail recovery, corruption detection, and process-level ownership of the data directory.",
    stack: ["C++20", "CMake", "GoogleTest", "TCP", "Sanitizers", "libFuzzer"],
    evidence: [
      "130 tests per Release and sanitizer configuration",
      "Two parser fuzzers at 10,000 runs each",
      "A focused TCP fix moved median p99 batch latency from 49.2 ms to 0.99 ms on the documented loopback benchmark",
    ],
    repo: "https://github.com/meetsutariya4448/ForgeKV",
    extra: [
      { label: "Storage format", href: "https://github.com/meetsutariya4448/ForgeKV/blob/main/docs/STORAGE_FORMAT.md" },
    ],
    accent: "clay",
  },
  {
    n: "03",
    name: "TalentScope",
    kind: "DATA · RETRIEVAL",
    year: "2026",
    tagline: "A search and retrieval service measured under a fixed CPU budget.",
    description:
      "Celery workers ingest and embed job postings into PostgreSQL; FastAPI combines GIN full-text search with pgvector HNSW retrieval through Reciprocal Rank Fusion. Redis coordinates queues, in-flight claims, answer caching and spend controls, while readiness gates model-backed routes until the per-process encoder is warm.",
    stack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "Celery", "Redis", "Prometheus"],
    evidence: [
      "171 hosted-CI tests",
      "Fixed-2-CPU A/B lifted successful throughput from 20.7 to 100.1 req/s and cut p95 latency from 9,239 ms to 665 ms across ten alternating trials",
      "Kubernetes and Terraform exercised locally with kind and LocalStack — not claimed as a cloud deployment",
    ],
    repo: "https://github.com/meetsutariya4448/talentscope",
    extra: [
      { label: "Measurement", href: "https://github.com/meetsutariya4448/talentscope/blob/main/evals/thread-ab.md" },
    ],
    accent: "indigo",
  },
  {
    n: "04",
    name: "Portcullis",
    kind: "PLATFORM · GO · SECURITY",
    year: "2026",
    tagline: "A resilient MCP gateway with content-bound admission enforcement.",
    description:
      "The Go data plane handles protocol validation, legacy translation, safe retries, circuit breaking, bulkheads, backpressure, multi-tenant policy, SSE streaming, failover, metrics and tracing. Its admission gate reads content-hashed verdicts from PostgreSQL before routing; an out-of-band Python worker scans newly discovered tool descriptions, keeping a multi-second classifier off the request path.",
    stack: ["Go", "Python", "PostgreSQL", "OpenTelemetry", "Prometheus", "Docker"],
    evidence: [
      "Native path added p50 +0.80 ms in the documented local benchmark",
      "Circuit breaker opened and recovered in 6 seconds around a real upstream stop/restart",
      "An audit found the earlier scanner headline depended on near-duplicate family leakage; the split was rebuilt around held-out families and runs are now fingerprinted",
    ],
    repo: "https://github.com/meetsutariya4448/portcullis",
    extra: [
      { label: "Architecture", href: "https://github.com/meetsutariya4448/portcullis/blob/main/ARCHITECTURE.md" },
      { label: "Results", href: "https://github.com/meetsutariya4448/portcullis/blob/main/bench/results.md" },
    ],
    accent: "moss",
  },
  {
    n: "05",
    name: "FitForge",
    kind: "FULL-STACK · APPLIED AI",
    year: "2026",
    tagline: "A product with concurrency-safe auth and a typed API boundary.",
    description:
      "A React/TypeScript client builds and tracks workout plans through a FastAPI/PostgreSQL backend. Refresh-token redemption is a single conditional database update, so concurrent tabs produce exactly one winner; zod validates responses at runtime and CI checks those schemas against the backend's generated OpenAPI contract. Plan generation retrieves from a ten-document knowledge base with BM25 and vector search fused by RRF.",
    stack: ["TypeScript", "React", "FastAPI", "PostgreSQL", "pgvector", "zod", "Playwright", "pytest"],
    evidence: [
      "Five green CI jobs on the current commit",
      "113 backend tests including real-PostgreSQL integration and eight-thread refresh redemption",
      "25 component tests · 17 browser tests",
    ],
    repo: "https://github.com/meetsutariya4448/fitforge",
    accent: "amber",
  },
];

export const toolkit = [
  {
    group: "Systems",
    items: ["C++20", "TCP protocols", "Concurrent servers", "Persistence", "Crash recovery", "Sanitizers", "Fuzzing"],
  },
  {
    group: "Platform / Cloud",
    items: ["Go", "Java 21", "Spring Boot", "Kafka", "Kubernetes", "Docker", "Terraform", "OpenTelemetry", "Prometheus", "Grafana"],
  },
  {
    group: "AI / Data",
    items: ["Python", "FastAPI", "pgvector", "Celery", "Redis", "Hybrid retrieval", "RAG", "Evaluation", "sentence-transformers"],
  },
  {
    group: "Product",
    items: ["TypeScript", "React", "Next.js", "PostgreSQL", "SQLAlchemy", "zod", "Playwright", "GitHub Actions"],
  },
];

export const workingSet = [
  {
    project: "Portcullis",
    note: "Enforcing content-bound scanner verdicts while keeping evaluation splits leakage-resistant and reproducible.",
  },
  {
    project: "FitForge",
    note: "Tightening authentication races, runtime response validation, browser behavior, and frontend/backend contract checks.",
  },
  {
    project: "TalentScope",
    note: "Operating the retrieval service under explicit CPU, readiness, recovery, spend and infrastructure constraints.",
  },
];

export const stats = [
  { value: "5", label: "Systems shipped" },
  { value: "5", label: "Languages in production code" },
  { value: "500+", label: "Tests across repositories" },
  { value: "3.82", label: "GPA at ASU" },
];
