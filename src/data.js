export const personal = {
  name: 'Jakaria Ahmed',
  title: 'Software Engineer',
  tagline: 'Crafting intelligent APIs, cloud-native solutions, and automation systems that transform complex challenges into seamless experiences.',
  bio: 'Backend engineer with 2+ years at WPP Media. Building Python APIs, data pipelines, and agentic AI tools on Google Cloud — from full-stack delivery to GenAI.',
  location: 'Gurugram, India',
  email: 'mjahmed1280@gmail.com',
  github: 'https://github.com/mjahmed1280',
  linkedin: 'https://linkedin.com/in/jakaria-ahmed08',
  experience: '2+',
};

export const experiences = [
  {
    id: 1,
    title: 'Software Engineer – Executive',
    company: 'WPP Media',
    logo: '/wpp-logo.jpg',          // replace with /wpp-logo.png
    location: 'Gurugram, IN',
    period: 'July 2024 – Present',
    current: true,
    bullets: [
      'Developed and maintained scalable backend services using Python Flask, following RESTful API design principles.',
      'Built 20+ RESTful APIs to streamline ad performance data from platforms like Google Ads, DV360 & Meta into BigQuery.',
      'Developed Meta Ad Campaign Creation Tool using Meta Graph API to streamline client–business–planning–activation team workflows and reduce ad campaign creation time by ~30%, with a React-based UI for centralised visibility.',
      'Automated Power BI dashboard creation using Microsoft Graph API, cutting manual dashboard creation efforts by ~70%.',
      'Implemented CI/CD pipelines using Cloud Build and Docker to automate testing and deployment of services to Google Cloud Run.',
    ],
  },
  {
    id: 2,
    title: 'Software Engineer – Intern',
    company: 'Group M',
    logo: '/gm-logo.jpg',          // replace with /wpp-logo.png
    location: 'Gurugram, IN',
    period: 'Jan 2024 – June 2024',
    current: false,
    bullets: [
      'Automated manual Excel-based report & dashboard creation using Flask API & openpyxl on GCP Cloud Run, integrated with Power Automate for mail-based triggers — saving ~50 hours/month for the team.',
      'Built and maintained scalable backend services using Python Flask with versioned endpoints and authentication; added unit/integration tests and Postman collections for regression.',
      'Automated daily ad-performance reporting for Meta, Google Ads & DV360 using Python Flask APIs, sending reports to clients\' AWS S3 buckets.',
    ],
  },
  {
    id: 3,
    title: 'Project Intern',
    company: 'Lovely Professional University (LPU)',
    logo: '/lpu logo.png',          // replace with /lpu-logo.png
    location: 'Punjab, IN',
    period: 'Jun 2023 – Sept 2023',
    current: false,
    bullets: [
      'Co-developed an AI-powered web app to evaluate Listening, Speaking, Reading, and Writing (LSRW) skills via interactive modules.',
      'Integrated OpenAI APIs for generative assessments — real-time feedback on spoken and written responses.',
      'Built full-stack using React, Tailwind CSS, and Node.js; deployed on AWS.',
      'Designed UI/UX wireframes and prototypes in Figma before implementation.',
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: 'NutriAI — AI Diet Recommendation App',
    image: 'public/nutri-ai.jpg',
    date: 'Dec 2025',
    bullets: [
      'React AI chatbot for real-time nutritional coaching and diet management',
      'Regex-based parser transforms raw LLM output into interactive Quick Action buttons',
      'Side panel visualises BMI, BMR, and Metabolic Age in real time',
      'Powered by Vertex AI (Gemini 2.5) with streaming SSE support',
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vertex AI', 'Gemini 2.5', 'Vercel Edge Functions', 'Vercel KV', 'Redis'],
    github: 'https://github.com/mjahmed1280/NutriAi',
    demo: 'https://nutri-ai-bot.vercel.app/',
    highlight: 'Live',
  },
  {
    id: 2,
    title: 'AI-Driven Meta Ads MCP Server',
    image: null,
    date: 'Nov 2025',
    bullets: [
      'MCP server using Python & FastMCP exposing Meta Ads as AI-callable tools',
      'Translates natural language → Meta Graph & Marketing API v24 interactions',
      'Enables conversational campaign creation, optimisation, and insights',
    ],
    tech: ['Python', 'FastMCP', 'Vertex AI', 'Gemini 2.5', 'Meta Graph API v24', 'Marketing API'],
    github: 'https://github.com/mjahmed1280/meta-ads-ai-mcp-v1',
    demo: null,
    highlight: 'Open Source',
  },
  {
    id: 3,
    title: 'DB-Scout — Agentic Data Intelligence Layer',
    image: '/db-mini.png',
    date: '2025',
    bullets: [
      'GDG Cloud New Delhi × HackFest 2.0 — reached 4 out of 5 rounds',
      'Transforms legacy databases into searchable knowledge bases via MCP + Vertex AI RAG',
      'Autonomously scouts schemas, maps relationships, and delivers statistical intelligence',
      'Zero-trust, local-first security model — no plaintext credentials',
    ],
    tech: ['Python', 'FastMCP', 'Vertex AI', 'Gemini 2.0 Flash', 'Vertex AI RAG', 'LangGraph', 'Google ADK', 'FastAPI', 'Streamlit', 'Docker'],
    github: 'https://github.com/mjahmed1280/db-scout-zerokelvin',
    demo: null,
    highlight: 'Hackathon',
  },
];

export const skills = [
  {
    category: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'C/C++', 'Java', 'SQL'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['Flask', 'FastAPI', 'React JS', 'Node JS', 'Streamlit', 'Pandas', 'NumPy', 'Scikit-learn'],
  },
  {
    category: 'Databases',
    items: ['MongoDB', 'BigQuery', 'Firestore', 'MySQL', 'Redis'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Google Cloud (GCP)', 'Azure', 'Docker', 'Kubernetes', 'GitHub Actions', 'GCP Cloud Build', 'Cloud Run'],
  },
  {
    category: 'AI & ML',
    items: ['LLMs', 'NLP', 'Agentic AI', 'RAG', 'FastMCP', 'LangChain', 'Gemini', 'Vertex AI'],
  },
  {
    category: 'Tools & Platforms',
    items: ['Git', 'GitHub', 'Postman', 'Figma', 'Power Automate', 'Power Apps', 'MS Graph API'],
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Lovely Professional University',
    location: 'Punjab, IN',
    period: '2022 – 2024',
    grade: 'CGPA: 8.6 / 10',
  },
  {
    degree: 'Bachelor of Science (PCM)',
    institution: 'LM College, Jai Narayan Vyas University',
    location: 'Rajasthan, IN',
    period: '2019 – 2022',
    grade: '65.4%',
  },
];

export const certifications = [
  {
    name: 'Fast Prototyping of GenAI Apps with Streamlit',
    provider: 'DeepLearning.AI / Coursera',
    date: 'Dec 2025',
    url: 'https://www.coursera.org/account/accomplishments/verify/CTUGZCM5YTNP',
  },
  {
    name: 'API Integration — End to End Web Development',
    provider: 'Board Infinity / Coursera',
    date: 'Dec 2025',
    url: 'https://www.coursera.org/account/accomplishments/verify/XAVFIQKLC1X0',
  },
  {
    name: 'Google Vector Search and Embeddings',
    provider: 'Google Cloud / Coursera',
    date: 'Sept 2024',
    url: 'https://www.coursera.org/account/accomplishments/verify/UJPU7XCNB70V',
  },
];

export const achievements = [
  {
    title: 'Runner-up — Smart India Hackathon 2023',
    detail: 'Internal SIH @ LPU, Sept 2023',
  },
  {
    title: 'AFCAT-1 & CDS-1 2023 Shortlisted',
    detail: 'Cleared written exam, shortlisted for SSB Interviews 4 times (April 2023)',
  },
];
