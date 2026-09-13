// src/data/portfolioData.ts

export const personalInfo = {
  name: "Vraj Shah",
  role: "AI / Python Engineer",
  location: "Ahmedabad, India",
  email: "vrajshah2442@gmail.com",
  github: "https://github.com/VrajAshah",
  linkedin: "https://www.linkedin.com/in/vraj-shah-b68359262/",
  bio: "AI Engineer specializing in intelligent agents, LLM pipelines, and automated developer tooling. Experienced in building robust Python backends and full-stack AI workflows.",
};

export const projects = [
  {
    "title": "AI Agent Framework",
    "tagline": "A provider-independent Python framework, grown from AI Study Buddy.",
    "description": "A reusable agent framework built from scratch with Clean Architecture. It routes questions between chat, document retrieval, and deterministic tools while keeping providers, memory, stores, and workflows independently replaceable.",
    "tags": [
      "Python",
      "ChromaDB",
      "Gemini / Ollama",
      "Sentence Transformers",
      "MMR"
    ],
    "github": "https://github.com/VrajAshah/AI-Study-Buddy",
    "metrics": [
      {
        "label": "Workflows",
        "value": "Chat · RAG · Tools"
      },
      {
        "label": "Retrieval",
        "value": "MMR + relevance checks"
      },
      {
        "label": "Storage",
        "value": "Persistent ChromaDB"
      }
    ],
    "features": [
      "Processes multiple PDFs with document IDs, content hashes, duplicate detection, and sentence-based chunking.",
      "Uses semantic search and Maximum Marginal Relevance to retrieve useful, less-redundant context.",
      "Checks retrieval relevance before choosing RAG or general chat; executes calculations through a deterministic tool.",
      "Separates conversation memory, prompt factories, workflow registration, and Gemini/Ollama provider adapters."
    ],
    "roadmap": "Advanced routing, multi-step planning, richer memory, hybrid retrieval, and an eventual API platform.",
    "steps": [
      "Process & index PDFs",
      "Retrieve & check relevance",
      "Route to RAG, chat, or tools"
    ],
    "label": "THE AGENT ARCHITECT",
    "type": "AI / FRAMEWORK",
    "summary": "From Study Buddy to a reusable agent framework. Documents, tools, and conversations, connected by a modular Python core."
  },
  {
    "title": "RepoSense",
    "tagline": "Codebase intelligence with hybrid retrieval and bug investigation.",
    "description": "A React and FastAPI platform for exploring repositories, asking grounded code questions, and investigating bugs. Its retrieval pipeline combines lexical and semantic search before a LangGraph loop gathers evidence and proposes a root cause and code fix.",
    "tags": [
      "Python",
      "LangGraph",
      "Qdrant",
      "BM25 / FlashRank",
      "React / FastAPI"
    ],
    "github": "https://github.com/VrajAshah/RepoSense",
    "metrics": [
      {
        "label": "Search",
        "value": "Dense + BM25 + RRF"
      },
      {
        "label": "Reranking",
        "value": "FlashRank cross-encoder"
      },
      {
        "label": "Evaluation",
        "value": "RAG Triad + citations"
      }
    ],
    "features": [
      "Ingests source files through the GitHub Tree API, alongside commit diffs and issue discussions.",
      "Combines local Sentence Transformer embeddings in Qdrant with BM25 exact-symbol search, reciprocal rank fusion, and FlashRank reranking.",
      "Rewrites conversational follow-ups into standalone queries while preserving recent context.",
      "Runs a LangGraph investigation loop that refines searches when evidence is insufficient and exposes execution traces in the UI.",
      "Includes evaluation for faithfulness, context relevance, answer relevance, and cited file-path accuracy."
    ],
    "roadmap": null,
    "steps": [
      "Index code, commits & issues",
      "Fuse & rerank search results",
      "Gather evidence & explain the fix"
    ],
    "label": "THE CODE DETECTIVE",
    "type": "AI / DEVELOPER TOOLS",
    "summary": "Follow the evidence through a codebase. Hybrid search and a looping bug investigator turn scattered code into grounded answers."
  },
  {
    "title": "VoCSynapse",
    "tagline": "Voice of Customer intelligence, from inbox to actionable issues.",
    "description": "An AI-powered customer-feedback workflow that processes email through FastAPI, LangGraph, and MCP. It screens noise, adds business context, checks active issues for duplicates, records structured issues in SQLite, and prepares reply drafts and labels.",
    "tags": [
      "Python",
      "LangGraph",
      "MCP",
      "FastAPI",
      "SQLite"
    ],
    "github": "https://github.com/VrajAshah/VoCSynapse",
    "metrics": [
      {
        "label": "Orchestration",
        "value": "LangGraph workflow"
      },
      {
        "label": "Integration",
        "value": "Email via MCP"
      },
      {
        "label": "Resilience",
        "value": "Retries + dead-letter queue"
      }
    ],
    "features": [
      "Fetches unread messages through Email MCP and processes each email independently within a batch.",
      "Screens noise, enriches customer context, deduplicates against active issues, and synthesizes structured issue records.",
      "Creates reply drafts and labels through MCP, then acknowledges processed email with timestamp tracking.",
      "Persists failures in a retry queue, tracks attempts, and sends repeated failures to dead-letter handling.",
      "Provides API endpoints for individual emails, unread batches, retries, and MCP tools, plus a recurring scheduler foundation."
    ],
    "roadmap": "Semantic duplicate detection, embeddings and hybrid retrieval, deterministic priority scoring, Slack approvals, Jira integration, and expansion toward a true multi-agent workflow.",
    "steps": [
      "Screen & enrich feedback",
      "Deduplicate & record issues",
      "Draft, label & acknowledge"
    ],
    "label": "THE FEEDBACK CONNECTOR",
    "type": "AI / CUSTOMER INTELLIGENCE",
    "summary": "Every customer message has a signal. An orchestrated email workflow turns feedback into structured issues and thoughtful reply drafts."
  }
];

export const experience = [
  {
    role: "Python Developer Intern",
    company: "Intellial Solutions Pvt. Ltd.",
    period: "Nov 2024 — July 2026",
    points: [
      "Engineered and maintained production-grade Python backend services and automated pipelines.",
      "Optimized data parsing routines and integrated internal APIs to improve application performance.",
      "Collaborated with engineering teams to deploy, monitor, and debug scalable client solutions.",
    ],
  },
];

export const education = {
  institution: "LJ University",
  location: "Ahmedabad, Gujarat",
  degree: "Bachelor of Technology / Computer Science",
  period: "2022 — 2026",
};

export const skills = {
  "AI & Machine Learning": ["RAG Architecture", "LLMs (OpenAI / Gemini)", "LangChain", "Vector Databases", "Embeddings", "PyTorch"],
  "Backend & Data": ["Python", "FastAPI", "Flask", "REST APIs", "SQL / PostgreSQL", "Data Structures"],
  "Developer Tooling": ["Git / GitHub", "Docker", "Linux / Bash", "CI/CD", "Vercel"],
};