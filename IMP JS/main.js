/**
 * INTERNSHIP MANAGEMENT PORTAL - CORE DATA & GLOBAL UTILITIES
 * University CSE Project Prototype
 */

// Default Seed Datasets (Stored in localStorage for full persistence across pages)
const SEED_INTERNSHIPS = [
  {
    id: "int-101",
    title: "Frontend Developer Intern",
    company: "TechNova Solutions",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    category: "Software & Development",
    department: "Engineering",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "3 Months",
    stipend: "৳ 25,000 / month",
    stipendAmount: 25000,
    openings: 3,
    postedDate: "2026-08-20",
    deadline: "2026-09-25",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
    featured: true,
    description: "Join our fast-paced product engineering team to build scalable, reactive web portals for enterprise fintech clients. You will work closely with senior engineers and UI/UX designers.",
    responsibilities: [
      "Develop modular React components following modern state management best practices.",
      "Collaborate with UI/UX designers to translate Figma prototypes into pixel-perfect responsive layouts.",
      "Optimize frontend performance and browser compatibility across desktop and mobile devices.",
      "Participate in daily standups and weekly peer code reviews."
    ],
    qualifications: [
      "Currently pursuing B.Sc in CSE, SWE, or related disciplines (3rd/4th year).",
      "Strong foundation in HTML5, modern ES6+ JavaScript, and responsive CSS/Tailwind.",
      "Hands-on project experience with React.js or Vue.js.",
      "Familiarity with Git and modern collaborative workflows."
    ],
    preferredSkills: ["TypeScript", "Next.js", "RESTful API Integration", "Figma"],
    benefits: ["Certificate of Completion", "Full-time Job Offer upon performance", "Mentorship from Senior Architects", "Free Snacks & Catered Lunches", "Flexible Working Hours"],
    companyInfo: {
      name: "TechNova Solutions",
      industry: "Software & Cloud Services",
      size: "150-500 Employees",
      website: "https://technova.example.com",
      email: "careers@technova.example.com",
      location: "Gulshan-2, Dhaka",
      about: "TechNova Solutions is a leading digital transformation firm specializing in high-performance cloud platforms and enterprise web applications."
    }
  },
  {
    id: "int-102",
    title: "Backend Developer Intern (Node.js/Python)",
    company: "ByteCraft",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80",
    category: "Software & Development",
    department: "Backend Engineering",
    location: "Remote",
    workMode: "Remote",
    type: "Full-time",
    duration: "6 Months",
    stipend: "৳ 28,000 / month",
    stipendAmount: 28000,
    openings: 2,
    postedDate: "2026-08-25",
    deadline: "2026-09-30",
    skills: ["Node.js", "Python", "SQL", "Express", "REST API"],
    featured: true,
    description: "Work on mission-critical microservices and database pipelines. You will architect high-throughput APIs, optimize database queries, and implement authentication systems.",
    responsibilities: [
      "Build and document robust RESTful & GraphQL endpoints.",
      "Design relational schemas and write optimized SQL queries.",
      "Integrate automated unit and integration test suites.",
      "Monitor API latency and optimize backend response times."
    ],
    qualifications: [
      "Undergraduate student in Computer Science or Software Engineering.",
      "Proficient in Node.js (Express) or Python (FastAPI/Django).",
      "Solid understanding of relational databases (PostgreSQL/MySQL).",
      "Knowledge of basic security best practices (JWT, hashing, CORS)."
    ],
    preferredSkills: ["Docker", "Redis", "PostgreSQL", "AWS S3"],
    benefits: ["Remote work stipend", "Course reimbursement", "Weekly 1-on-1 mentorship", "Recommendation Letter"],
    companyInfo: {
      name: "ByteCraft",
      industry: "Fintech & Developer Tools",
      size: "50-100 Employees",
      website: "https://bytecraft.example.com",
      email: "talent@bytecraft.example.com",
      location: "Banani, Dhaka",
      about: "ByteCraft builds modern developer tooling and fintech payment gateways serving clients across South Asia."
    }
  },
  {
    id: "int-103",
    title: "Data Analyst & BI Intern",
    company: "DataSphere Analytics",
    logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=100&auto=format&fit=crop&q=80",
    category: "Data & AI",
    department: "Business Intelligence",
    location: "Dhaka, Bangladesh",
    workMode: "On-site",
    type: "Full-time",
    duration: "3 Months",
    stipend: "৳ 22,000 / month",
    stipendAmount: 22000,
    openings: 4,
    postedDate: "2026-08-22",
    deadline: "2026-09-28",
    skills: ["Python", "SQL", "Tableau", "Power BI", "Excel"],
    featured: true,
    description: "Transform complex operational data into actionable visual dashboards. Assist stakeholders in making data-driven strategic decisions.",
    responsibilities: [
      "Extract and clean large datasets using SQL and Python pandas.",
      "Design interactive dashboards in Power BI and Tableau for executive reviews.",
      "Perform exploratory data analysis to identify operational bottlenecks.",
      "Automate recurring weekly KPI reports."
    ],
    qualifications: [
      "Student in CSE, Data Science, Statistics, or Information Systems.",
      "Strong command of SQL queries (JOINs, Window functions, Aggregations).",
      "Experience with Python data libraries (pandas, numpy, matplotlib).",
      "Detail-oriented with strong analytical and communication skills."
    ],
    preferredSkills: ["Statistical Modeling", "R", "ETL Pipelines", "Google BigQuery"],
    benefits: ["Mentorship by Lead Data Scientists", "Paid overtime & travel allowance", "Intern project showcase"],
    companyInfo: {
      name: "DataSphere Analytics",
      industry: "Big Data & AI Consulting",
      size: "80-200 Employees",
      website: "https://datasphere.example.com",
      email: "hr@datasphere.example.com",
      location: "Mohakhali DOHS, Dhaka",
      about: "DataSphere powers automated business intelligence and predictive analytics for international telecom and retail enterprises."
    }
  },
  {
    id: "int-104",
    title: "Machine Learning / AI Intern",
    company: "AI Vision Labs",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&auto=format&fit=crop&q=80",
    category: "Data & AI",
    department: "AI Research",
    location: "Hybrid",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "4 Months",
    stipend: "৳ 30,000 / month",
    stipendAmount: 30000,
    openings: 2,
    postedDate: "2026-08-28",
    deadline: "2026-10-05",
    skills: ["Python", "PyTorch", "TensorFlow", "Computer Vision", "NLP"],
    featured: true,
    description: "Work on cutting-edge neural architectures for computer vision and generative multimodal LLM pipelines.",
    responsibilities: [
      "Fine-tune vision transformer models on proprietary image recognition datasets.",
      "Build preprocessing and data augmentation pipelines.",
      "Benchmark model inference speeds and optimize weights with ONNX/TensorRT.",
      "Document experimental results for academic and internal research publications."
    ],
    qualifications: [
      "CSE/ECE undergraduate with coursework in Machine Learning & Linear Algebra.",
      "Strong Python coding skills with PyTorch or TensorFlow.",
      "Understanding of CNNs, Transformers, and optimization techniques."
    ],
    preferredSkills: ["HuggingFace", "OpenCV", "CUDA", "FastAPI"],
    benefits: ["Co-authorship on research papers", "High-performance GPU access", "Opportunity for full-time AI Engineer role"],
    companyInfo: {
      name: "AI Vision Labs",
      industry: "Artificial Intelligence & Robotics",
      size: "40 Employees",
      website: "https://aivisionlabs.example.com",
      email: "research@aivisionlabs.example.com",
      location: "Dhanmondi, Dhaka",
      about: "AI Vision Labs is an innovation lab developing vision-based inspection and automated medical diagnostic software."
    }
  },
  {
    id: "int-105",
    title: "UI/UX Product Design Intern",
    company: "DesignNest Interactive",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&auto=format&fit=crop&q=80",
    category: "Design",
    department: "Product Design",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "3 Months",
    stipend: "৳ 20,000 / month",
    stipendAmount: 20000,
    openings: 3,
    postedDate: "2026-08-18",
    deadline: "2026-09-22",
    skills: ["Figma", "UI/UX", "Wireframing", "User Research", "Prototyping"],
    featured: true,
    description: "Design clean, empathetic, and intuitive user experiences for SaaS applications, consumer mobile apps, and design systems.",
    responsibilities: [
      "Create high-fidelity wireframes, interactive user flows, and Figma components.",
      "Conduct usability testing and synthesize qualitative feedback.",
      "Maintain and expand our internal design tokens and component libraries.",
      "Work alongside frontend developers to verify design handoffs."
    ],
    qualifications: [
      "Portfolio showcasing UI/UX case studies or web/mobile mockups.",
      "Proficient in Figma (Auto-layout, Components, Variants).",
      "Understanding of typography, color theory, spacing, and accessibility guidelines."
    ],
    preferredSkills: ["Design Systems", "Micro-interactions", "HTML/CSS basics"],
    benefits: ["Figma Enterprise License", "Portfolio review with Design Director", "Weekly design critiques"],
    companyInfo: {
      name: "DesignNest Interactive",
      industry: "Digital Product Studio",
      size: "35 Employees",
      website: "https://designnest.example.com",
      email: "hello@designnest.example.com",
      location: "Uttara, Dhaka",
      about: "DesignNest is an award-winning design agency crafting world-class digital brands and UI/UX solutions."
    }
  },
  {
    id: "int-106",
    title: "Cybersecurity & SOC Analyst Intern",
    company: "CyberShield Defence",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&auto=format&fit=crop&q=80",
    category: "Cybersecurity",
    department: "Security Operations",
    location: "On-site",
    workMode: "On-site",
    type: "Full-time",
    duration: "6 Months",
    stipend: "৳ 26,000 / month",
    stipendAmount: 26000,
    openings: 2,
    postedDate: "2026-08-26",
    deadline: "2026-10-02",
    skills: ["Network Security", "Wireshark", "Linux", "Ethical Hacking", "SIEM"],
    featured: false,
    description: "Monitor threat alerts, perform vulnerability scans, and assist with incident response protocols in our 24/7 Security Operations Center.",
    responsibilities: [
      "Triage SIEM alerts and investigate potential anomalous security events.",
      "Perform routine automated vulnerability assessments across internal subnets.",
      "Assist in drafting security incident reports and remediation guidelines.",
      "Participate in regular Red/Blue team capture-the-flag exercises."
    ],
    qualifications: [
      "Student in CSE, Cybersecurity, or Networking with strong networking fundamentals (TCP/IP, DNS, VPN).",
      "Hands-on familiarity with Linux terminal and security utilities.",
      "Knowledge of OWASP Top 10 vulnerabilities."
    ],
    preferredSkills: ["Splunk / ELK", "Burp Suite", "Bash Scripting", "CompTIA Security+ basics"],
    benefits: ["Sponsored Security Certification Exam", "Hardware access & dedicated lab sandbox"],
    companyInfo: {
      name: "CyberShield Defence",
      industry: "Cybersecurity & Managed Security",
      size: "60 Employees",
      website: "https://cybershield.example.com",
      email: "soc@cybershield.example.com",
      location: "Niketan, Dhaka",
      about: "CyberShield is a leading threat intelligence and SOC services provider safeguarding banking and telecom infrastructure."
    }
  },
  {
    id: "int-107",
    title: "Full Stack Engineer Intern",
    company: "CloudCore Systems",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80",
    category: "Software & Development",
    department: "Platform Engineering",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "3 Months",
    stipend: "৳ 27,000 / month",
    stipendAmount: 27000,
    openings: 3,
    postedDate: "2026-08-24",
    deadline: "2026-09-29",
    skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    featured: true,
    description: "End-to-end full stack development for high-scale enterprise cloud applications. Build frontend views, backend services, and database schemas.",
    responsibilities: [
      "Develop responsive client-facing modules in React and TypeScript.",
      "Implement REST endpoints and database schemas in Node.js & MongoDB.",
      "Write unit tests and automate deployment scripts.",
      "Collaborate with QA to triage bugs and verify patch releases."
    ],
    qualifications: [
      "3rd or 4th-year student in Computer Science or Software Engineering.",
      "Demonstrated ability to build full stack web applications.",
      "Strong problem-solving and algorithmic thinking."
    ],
    preferredSkills: ["Next.js", "Tailwind CSS", "Docker", "Git"],
    benefits: ["Full-time placement potential", "Festival bonuses", "Modern laptop provided"],
    companyInfo: {
      name: "CloudCore Systems",
      industry: "Cloud Infrastructure & SaaS",
      size: "120 Employees",
      website: "https://cloudcore.example.com",
      email: "hr@cloudcore.example.com",
      location: "Kawran Bazar, Dhaka",
      about: "CloudCore Systems develops multi-tenant cloud orchestration and disaster recovery software."
    }
  },
  {
    id: "int-108",
    title: "Mobile App Developer Intern (Flutter/React Native)",
    company: "NextGen Labs",
    logo: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=100&auto=format&fit=crop&q=80",
    category: "Software & Development",
    department: "Mobile Engineering",
    location: "Remote",
    workMode: "Remote",
    type: "Full-time",
    duration: "4 Months",
    stipend: "৳ 24,000 / month",
    stipendAmount: 24000,
    openings: 2,
    postedDate: "2026-08-21",
    deadline: "2026-09-27",
    skills: ["Flutter", "Dart", "React Native", "Mobile UI", "REST API"],
    featured: false,
    description: "Develop cross-platform mobile apps for iOS and Android. Implement smooth 60fps animations, offline caching, and biometric authentication.",
    responsibilities: [
      "Build cross-platform screens in Flutter or React Native.",
      "Integrate state management (Bloc, Provider, or Redux).",
      "Connect native device APIs (Camera, Geolocation, Push Notifications).",
      "Test on various device screen sizes and OS versions."
    ],
    qualifications: [
      "CSE student with projects published on GitHub or App Store/Play Store.",
      "Proficiency in Dart/Flutter or JavaScript/React Native.",
      "Experience connecting mobile apps to RESTful backends."
    ],
    preferredSkills: ["Firebase", "State Management", "CI/CD for Mobile"],
    benefits: ["Remote work flexibility", "App Store developer account support", "Letter of Recommendation"],
    companyInfo: {
      name: "NextGen Labs",
      industry: "Mobile Applications & IoT",
      size: "45 Employees",
      website: "https://nextgenlabs.example.com",
      email: "jobs@nextgenlabs.example.com",
      location: "Mirpur DOHS, Dhaka",
      about: "NextGen Labs is a mobile-first product development studio building consumer utilities and on-demand mobility apps."
    }
  },
  {
    id: "int-109",
    title: "Digital Marketing & SEO Intern",
    company: "MarketPro Digital",
    logo: "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=100&auto=format&fit=crop&q=80",
    category: "Marketing",
    department: "Growth & Marketing",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Part-time",
    duration: "3 Months",
    stipend: "৳ 16,000 / month",
    stipendAmount: 16000,
    openings: 3,
    postedDate: "2026-08-19",
    deadline: "2026-09-24",
    skills: ["SEO", "Content Marketing", "Google Analytics", "Social Media", "Copywriting"],
    featured: false,
    description: "Drive organic search visibility, manage social media campaigns, and craft engaging tech marketing content.",
    responsibilities: [
      "Conduct keyword research and optimize website content for search engines.",
      "Create weekly social media calendars and publish engaging posts.",
      "Track traffic metrics and conversion funnels using Google Analytics.",
      "Write technical blog articles highlighting product features."
    ],
    qualifications: [
      "Student in Marketing, CSE, English, or Business Administration.",
      "Strong written English communication and copywriting skills.",
      "Basic understanding of SEO principles (On-page, Off-page, Meta tags)."
    ],
    preferredSkills: ["Canva", "Google Search Console", "WordPress", "Email Marketing"],
    benefits: ["Flexible part-time schedule for students", "Paid certifications", "Monthly performance bonus"],
    companyInfo: {
      name: "MarketPro Digital",
      industry: "Digital Growth & Agency",
      size: "30 Employees",
      website: "https://marketpro.example.com",
      email: "hr@marketpro.example.com",
      location: "Gulshan-1, Dhaka",
      about: "MarketPro helps B2B tech firms scale customer acquisition through data-driven SEO and brand storytelling."
    }
  },
  {
    id: "int-110",
    title: "Financial Analyst & Fintech Intern",
    company: "FinTechHub Capital",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=100&auto=format&fit=crop&q=80",
    category: "Finance",
    department: "Financial Strategy",
    location: "Dhaka, Bangladesh",
    workMode: "On-site",
    type: "Full-time",
    duration: "3 Months",
    stipend: "৳ 23,000 / month",
    stipendAmount: 23000,
    openings: 2,
    postedDate: "2026-08-23",
    deadline: "2026-09-30",
    skills: ["Financial Modeling", "Excel", "Data Analysis", "Accounting", "Fintech"],
    featured: false,
    description: "Conduct financial modeling, analyze market trends in digital payments, and assist with investor pitch decks.",
    responsibilities: [
      "Build dynamic financial spreadsheets and DCF valuation models in Excel.",
      "Analyze competitor unit economics and fee structures.",
      "Assist in preparing board meeting decks and investor reports.",
      "Track daily transactional reconciliation reports."
    ],
    qualifications: [
      "Major in Finance, Accounting, Economics, or Dual CSE-BBA.",
      "Advanced Microsoft Excel skills (VLOOKUP, INDEX/MATCH, Pivot Tables, Macros).",
      "Solid understanding of financial statements and SaaS metrics."
    ],
    preferredSkills: ["Power BI", "Python for Finance", "Bloomberg Terminal basics"],
    benefits: ["Direct mentorship with CFO", "Networking with VC partners", "Corporate lunch included"],
    companyInfo: {
      name: "FinTechHub Capital",
      industry: "Fintech & Venture Investment",
      size: "75 Employees",
      website: "https://fintechhub.example.com",
      email: "careers@fintechhub.example.com",
      location: "Motijheel, Dhaka",
      about: "FinTechHub invests in and incubates next-generation micro-lending and digital wallet solutions."
    }
  },
  {
    id: "int-111",
    title: "Human Resources & Talent Acquisition Intern",
    company: "SoftPeak Technologies",
    logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    category: "HR",
    department: "People Operations",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "3 Months",
    stipend: "৳ 18,000 / month",
    stipendAmount: 18000,
    openings: 2,
    postedDate: "2026-08-25",
    deadline: "2026-10-01",
    skills: ["Recruitment", "HR Management", "Communication", "Screening", "LinkedIn"],
    featured: false,
    description: "Assist with university outreach, applicant screening, interview scheduling, and employee onboarding experiences.",
    responsibilities: [
      "Source candidate profiles on LinkedIn and university placement portals.",
      "Conduct initial phone screens and coordinate technical interview slots.",
      "Help organize campus career fairs and hackathon sponsorship booths.",
      "Maintain applicant records and update ATS status logs."
    ],
    qualifications: [
      "Student in HRM, Management, Psychology, or related fields.",
      "Outgoing personality with exceptional interpersonal skills.",
      "Strong written and verbal English communication."
    ],
    preferredSkills: ["Applicant Tracking Systems", "Event Management", "Google Workspace"],
    benefits: ["Certificate of experience", "Networking with university placement cells", "Team outing events"],
    companyInfo: {
      name: "SoftPeak Technologies",
      industry: "IT Staffing & Enterprise Software",
      size: "200 Employees",
      website: "https://softpeak.example.com",
      email: "people@softpeak.example.com",
      location: "Baridhara, Dhaka",
      about: "SoftPeak Technologies provides custom software development and dedicated tech talent teams to European clients."
    }
  },
  {
    id: "int-112",
    title: "Business Development & Operations Intern",
    company: "PixelWorks Creative",
    logo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=100&auto=format&fit=crop&q=80",
    category: "Business",
    department: "Business Operations",
    location: "Dhaka, Bangladesh",
    workMode: "On-site",
    type: "Full-time",
    duration: "3 Months",
    stipend: "৳ 20,000 / month",
    stipendAmount: 20000,
    openings: 3,
    postedDate: "2026-08-20",
    deadline: "2026-09-26",
    skills: ["Client Communication", "Market Research", "B2B Sales", "Presentation", "CRM"],
    featured: false,
    description: "Identify new client verticals, prepare RFP responses, and build long-lasting business partnerships.",
    responsibilities: [
      "Research prospective B2B clients in e-commerce and retail sectors.",
      "Draft customized pitch decks and business proposals.",
      "Coordinate client onboarding meetings and gather requirements.",
      "Track leads and deal pipelines in HubSpot CRM."
    ],
    qualifications: [
      "Student in BBA, Economics, or CSE with an interest in tech sales.",
      "Persuasive verbal and written communication.",
      "Proficient in PowerPoint/Google Slides and presentation delivery."
    ],
    preferredSkills: ["HubSpot", "Negotiation", "Cold Email Outreach"],
    benefits: ["Uncapped sales commission bonus", "Transport allowance", "Letter of Recommendation"],
    companyInfo: {
      name: "PixelWorks Creative",
      industry: "Digital Media & Brand Solutions",
      size: "50 Employees",
      website: "https://pixelworks.example.com",
      email: "biz@pixelworks.example.com",
      location: "Tejgaon Commercial Area, Dhaka",
      about: "PixelWorks is a creative media house delivering high-end 3D graphics, commercial video, and branding."
    }
  },
  {
    id: "int-113",
    title: "Technical Content Writer & Copywriter Intern",
    company: "TechNova Solutions",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    category: "Content & Media",
    department: "Developer Relations",
    location: "Remote",
    workMode: "Remote",
    type: "Part-time",
    duration: "3 Months",
    stipend: "৳ 17,000 / month",
    stipendAmount: 17000,
    openings: 2,
    postedDate: "2026-08-27",
    deadline: "2026-10-04",
    skills: ["Technical Writing", "Markdown", "Documentation", "Copywriting", "SEO"],
    featured: false,
    description: "Author in-depth engineering tutorials, API documentation, and changelog release notes for developers.",
    responsibilities: [
      "Write developer tutorials for REST APIs, JavaScript frameworks, and DevOps tools.",
      "Review and update API reference documentation.",
      "Draft monthly developer newsletters and tech spotlight articles.",
      "Collaborate with engineering leads to explain complex concepts simply."
    ],
    qualifications: [
      "Student in CSE or English with an ability to understand code snippets.",
      "Exceptional grammar and technical writing portfolio.",
      "Familiarity with Markdown and GitHub."
    ],
    preferredSkills: ["Swagger / OpenAPI", "Basic coding knowledge", "SEO optimization"],
    benefits: ["Published articles under your byline", "Flexible remote hours", "Certificate"],
    companyInfo: {
      name: "TechNova Solutions",
      industry: "Software & Cloud Services",
      size: "150-500 Employees",
      website: "https://technova.example.com",
      email: "careers@technova.example.com",
      location: "Gulshan-2, Dhaka",
      about: "TechNova Solutions is a leading digital transformation firm specializing in high-performance cloud platforms."
    }
  },
  {
    id: "int-114",
    title: "DevOps & Cloud Engineering Intern",
    company: "CloudCore Systems",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80",
    category: "Software & Development",
    department: "DevOps & Infrastructure",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "4 Months",
    stipend: "৳ 29,000 / month",
    stipendAmount: 29000,
    openings: 2,
    postedDate: "2026-08-26",
    deadline: "2026-10-03",
    skills: ["Docker", "Linux", "CI/CD", "AWS", "Kubernetes", "Bash"],
    featured: true,
    description: "Automate build and deployment pipelines, manage container orchestration, and monitor production cloud metrics.",
    responsibilities: [
      "Write Dockerfiles and optimize multi-stage container builds.",
      "Maintain GitHub Actions and GitLab CI/CD pipelines.",
      "Configure Prometheus and Grafana dashboards for server monitoring.",
      "Assist in automating infrastructure provisioning with Terraform."
    ],
    qualifications: [
      "CSE/IT student with strong Linux command line skills.",
      "Understanding of networking, DNS, SSL certificates, and HTTP/HTTPS.",
      "Familiarity with Docker containerization."
    ],
    preferredSkills: ["AWS / GCP", "Terraform", "Kubernetes", "Nginx"],
    benefits: ["Cloud certifications voucher", "Direct mentorship by DevOps Principal", "Full-time conversion chance"],
    companyInfo: {
      name: "CloudCore Systems",
      industry: "Cloud Infrastructure & SaaS",
      size: "120 Employees",
      website: "https://cloudcore.example.com",
      email: "hr@cloudcore.example.com",
      location: "Kawran Bazar, Dhaka",
      about: "CloudCore Systems develops multi-tenant cloud orchestration and disaster recovery software."
    }
  },
  {
    id: "int-115",
    title: "QA Automation & Software Testing Intern",
    company: "ByteCraft",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80",
    category: "Software & Development",
    department: "Quality Assurance",
    location: "Remote",
    workMode: "Remote",
    type: "Full-time",
    duration: "3 Months",
    stipend: "৳ 22,000 / month",
    stipendAmount: 22000,
    openings: 3,
    postedDate: "2026-08-22",
    deadline: "2026-09-28",
    skills: ["Selenium", "Cypress", "JavaScript", "Manual Testing", "Postman", "Jest"],
    featured: false,
    description: "Write end-to-end automated tests, perform manual regression suites, and ensure zero-bug delivery across web applications.",
    responsibilities: [
      "Write automated end-to-end test scripts in Cypress or Playwright.",
      "Execute functional and regression test plans prior to major sprint releases.",
      "Perform API testing with Postman and automate validation scripts.",
      "Log detailed bug tickets in Jira with reproduction steps."
    ],
    qualifications: [
      "CSE/SWE student with foundational programming skills (JavaScript or Python).",
      "Analytical mindset with high attention to detail.",
      "Familiarity with web technologies and browser debugging tools."
    ],
    preferredSkills: ["Playwright", "Jira", "Performance Testing (JMeter)"],
    benefits: ["Flexible remote hours", "Letter of Recommendation", "QA training modules"],
    companyInfo: {
      name: "ByteCraft",
      industry: "Fintech & Developer Tools",
      size: "50-100 Employees",
      website: "https://bytecraft.example.com",
      email: "talent@bytecraft.example.com",
      location: "Banani, Dhaka",
      about: "ByteCraft builds modern developer tooling and fintech payment gateways."
    }
  },
  {
    id: "int-116",
    title: "Video Editor & Motion Graphics Intern",
    company: "PixelWorks Creative",
    logo: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=100&auto=format&fit=crop&q=80",
    category: "Content & Media",
    department: "Creative Studio",
    location: "Dhaka, Bangladesh",
    workMode: "On-site",
    type: "Part-time",
    duration: "3 Months",
    stipend: "৳ 18,000 / month",
    stipendAmount: 18000,
    openings: 2,
    postedDate: "2026-08-24",
    deadline: "2026-10-01",
    skills: ["Premiere Pro", "After Effects", "Motion Design", "Photoshop", "Video Editing"],
    featured: false,
    description: "Create engaging promotional videos, animated UI explainer videos, and social media reels for brand campaigns.",
    responsibilities: [
      "Edit high-energy product teaser videos and customer interviews in Premiere Pro.",
      "Create 2D motion graphics and kinetic typography in After Effects.",
      "Perform color grading and audio mixing for final deliveries.",
      "Archive and organize raw footage and project asset files."
    ],
    qualifications: [
      "Showreel or portfolio demonstrating video editing and motion graphics capability.",
      "Proficient in Adobe Premiere Pro and Adobe After Effects.",
      "Creative sense of pacing, rhythm, sound design, and color."
    ],
    preferredSkills: ["Blender 3D", "Illustrator", "Sound Design"],
    benefits: ["High-end workstation provided", "Hands-on commercial video shoots", "Certificate"],
    companyInfo: {
      name: "PixelWorks Creative",
      industry: "Digital Media & Brand Solutions",
      size: "50 Employees",
      website: "https://pixelworks.example.com",
      email: "biz@pixelworks.example.com",
      location: "Tejgaon Commercial Area, Dhaka",
      about: "PixelWorks is a creative media house delivering high-end 3D graphics, commercial video, and branding."
    }
  },
  {
    id: "int-117",
    title: "Product Management Intern",
    company: "TechNova Solutions",
    logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    category: "Business",
    department: "Product Management",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "4 Months",
    stipend: "৳ 25,000 / month",
    stipendAmount: 25000,
    openings: 2,
    postedDate: "2026-08-28",
    deadline: "2026-10-06",
    skills: ["Agile/Scrum", "Product Roadmap", "User Stories", "Wireframing", "Jira"],
    featured: true,
    description: "Work with engineering, design, and business leads to define product roadmaps, write PRDs, and manage sprint backlogs.",
    responsibilities: [
      "Write detailed user stories with clear acceptance criteria.",
      "Facilitate sprint planning, grooming, and retrospective meetings.",
      "Analyze product analytics to measure feature adoption and retention.",
      "Conduct customer discovery interviews and benchmark competitive features."
    ],
    qualifications: [
      "Student in CSE, BBA, or dual degrees with a passion for software products.",
      "Strong critical thinking and communication skills.",
      "Familiarity with Agile frameworks and product lifecycle concepts."
    ],
    preferredSkills: ["Jira / Linear", "Mixpanel / Amplitude", "Figma"],
    benefits: ["Mentorship by VP of Product", "Opportunity for Associate PM offer", "Flexible hybrid schedule"],
    companyInfo: {
      name: "TechNova Solutions",
      industry: "Software & Cloud Services",
      size: "150-500 Employees",
      website: "https://technova.example.com",
      email: "careers@technova.example.com",
      location: "Gulshan-2, Dhaka",
      about: "TechNova Solutions is a leading digital transformation firm specializing in high-performance cloud platforms."
    }
  },
  {
    id: "int-118",
    title: "AI Research & NLP Intern",
    company: "AI Vision Labs",
    logo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&auto=format&fit=crop&q=80",
    category: "Data & AI",
    department: "AI Research",
    location: "Hybrid",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "4 Months",
    stipend: "৳ 32,000 / month",
    stipendAmount: 32000,
    openings: 2,
    postedDate: "2026-08-29",
    deadline: "2026-10-08",
    skills: ["Python", "Transformers", "NLP", "PyTorch", "LangChain", "RAG"],
    featured: true,
    description: "Build Retrieval-Augmented Generation (RAG) pipelines and fine-tune multilingual language models for South Asian dialects.",
    responsibilities: [
      "Implement vector search and RAG systems using embeddings and vector databases.",
      "Fine-tune open-source LLMs (Llama, Mistral) on domain-specific corpora.",
      "Evaluate hallucination metrics and prompt engineering workflows.",
      "Deploy inference endpoints with vLLM and FastAPI."
    ],
    qualifications: [
      "Undergraduate student in CSE, EEE, or Data Science.",
      "Strong coding proficiency in Python and familiarity with PyTorch or JAX.",
      "Understanding of transformer architectures, attention mechanisms, and embeddings."
    ],
    preferredSkills: ["ChromaDB / Pinecone", "LangChain / LlamaIndex", "HuggingFace Transformers"],
    benefits: ["Compute credits on high-end clusters", "Research publication mentorship", "High stipend"],
    companyInfo: {
      name: "AI Vision Labs",
      industry: "Artificial Intelligence & Robotics",
      size: "40 Employees",
      website: "https://aivisionlabs.example.com",
      email: "research@aivisionlabs.example.com",
      location: "Dhanmondi, Dhaka",
      about: "AI Vision Labs is an innovation lab developing vision-based inspection and automated diagnostic software."
    }
  },
  {
    id: "int-119",
    title: "Cloud Security & Ethical Hacking Intern",
    company: "CyberShield Defence",
    logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=100&auto=format&fit=crop&q=80",
    category: "Cybersecurity",
    department: "Offensive Security",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Full-time",
    duration: "4 Months",
    stipend: "৳ 27,000 / month",
    stipendAmount: 27000,
    openings: 2,
    postedDate: "2026-08-27",
    deadline: "2026-10-05",
    skills: ["Penetration Testing", "Burp Suite", "Cloud Security", "OWASP", "Python"],
    featured: false,
    description: "Conduct authorized web application penetration testing, API vulnerability assessments, and cloud misconfiguration audits.",
    responsibilities: [
      "Perform vulnerability assessments on client web applications and mobile backends.",
      "Assist in developing automated security testing scripts in Python.",
      "Document technical findings with proof-of-concept exploits and remediation advice.",
      "Review IAM policies and security groups in AWS/GCP environments."
    ],
    qualifications: [
      "Student in CSE/Cybersecurity with proven CTF or Bug Bounty experience.",
      "Deep understanding of web vulnerabilities (XSS, SQLi, SSRF, CSRF, IDOR).",
      "Proficient in tools like Burp Suite, Nmap, Metasploit, and Kali Linux."
    ],
    preferredSkills: ["AWS Security", "Docker Security", "Python scripting"],
    benefits: ["Hardware tokens & lab access", "Sponsored certification (e.g. eJPT / OSCP prep)", "Certificate"],
    companyInfo: {
      name: "CyberShield Defence",
      industry: "Cybersecurity & Managed Security",
      size: "60 Employees",
      website: "https://cybershield.example.com",
      email: "soc@cybershield.example.com",
      location: "Niketan, Dhaka",
      about: "CyberShield is a leading threat intelligence and SOC services provider."
    }
  },
  {
    id: "int-120",
    title: "Social Media & Brand Marketing Intern",
    company: "DesignNest Interactive",
    logo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&auto=format&fit=crop&q=80",
    category: "Marketing",
    department: "Brand & Creative",
    location: "Dhaka, Bangladesh",
    workMode: "Hybrid",
    type: "Part-time",
    duration: "3 Months",
    stipend: "৳ 17,500 / month",
    stipendAmount: 17500,
    openings: 2,
    postedDate: "2026-08-25",
    deadline: "2026-09-30",
    skills: ["Social Media", "Canva", "Brand Strategy", "Content Creation", "Instagram"],
    featured: false,
    description: "Curate creative design posts, write viral reels copy, manage community discussions, and showcase design portfolio highlights.",
    responsibilities: [
      "Plan and execute creative visual campaigns across Instagram, LinkedIn, and Dribbble.",
      "Engage with the design community in comments and DMs.",
      "Track engagement metrics and propose creative experimentations.",
      "Assist in coordinating design webinars and portfolio review events."
    ],
    qualifications: [
      "Passionate student in Marketing, Media, or Design.",
      "Strong visual sense and knack for engaging social media storytelling.",
      "Experience creating content on Instagram or LinkedIn."
    ],
    preferredSkills: ["Canva", "CapCut", "Basic Figma knowledge"],
    benefits: ["Design agency culture", "Flexible schedule", "Performance bonuses"],
    companyInfo: {
      name: "DesignNest Interactive",
      industry: "Digital Product Studio",
      size: "35 Employees",
      website: "https://designnest.example.com",
      email: "hello@designnest.example.com",
      location: "Uttara, Dhaka",
      about: "DesignNest is an award-winning design agency crafting world-class digital brands and UI/UX solutions."
    }
  }
];

// Demo Student Default Profile
const SEED_STUDENT = {
  id: "std-2022001",
  name: "Mehedi Hasan",
  studentId: "CSE-2022-001",
  email: "mehedi.hasan@university.edu",
  phone: "+880 1712-345678",
  location: "Dhaka, Bangladesh",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
  university: "University of Computer Studies & Engineering",
  department: "Computer Science & Engineering",
  semester: "7th Semester",
  cgpa: "3.75",
  graduationYear: "2027",
  bio: "Aspiring Full Stack & Frontend Software Engineer passionate about React, TypeScript, and distributed systems. Built multiple web apps and active competitive programmer with 500+ solved problems.",
  skills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "C++", "SQL", "Tailwind CSS", "Git"],
  languages: ["English (Fluent)", "Bangla (Native)", "Hindi (Conversational)"],
  socials: {
    github: "https://github.com/mehedihasan",
    linkedin: "https://linkedin.com/in/mehedihasan",
    portfolio: "https://mehedihasan.dev"
  },
  education: [
    {
      degree: "B.Sc in Computer Science & Engineering",
      institution: "University of Computer Studies & Engineering",
      year: "2023 - 2027 (Expected)",
      grade: "CGPA: 3.75 / 4.00",
      description: "Dean's List Honoree (Semesters 2, 4, 5). President of CSE Programming & Robotics Club."
    },
    {
      degree: "Higher Secondary Certificate (HSC) - Science",
      institution: "Dhaka City College",
      year: "2020 - 2022",
      grade: "GPA: 5.00 / 5.00",
      description: "Distinction in Higher Mathematics and Physics."
    }
  ],
  experience: [
    {
      role: "Undergraduate Teaching Assistant",
      company: "Department of CSE, University",
      period: "Jan 2026 - Present",
      description: "Conducted lab sessions for Data Structures & Algorithms course. Mentored 40+ junior students."
    }
  ],
  projects: [
    {
      title: "EduPulse - Learning Analytics Portal",
      tech: "React, Node.js, PostgreSQL",
      description: "A centralized dashboard for students and instructors tracking course completions and automated quiz grades.",
      link: "https://github.com/mehedihasan/edupulse"
    },
    {
      title: "DocuSign Secure Vault",
      tech: "TypeScript, Tailwind CSS, Express",
      description: "End-to-end encrypted document storage prototype featuring role-based sharing and audit trails.",
      link: "https://github.com/mehedihasan/docusign-vault"
    }
  ],
  certifications: [
    {
      name: "Meta Front-End Developer Professional Certificate",
      issuer: "Coursera / Meta",
      year: "2025"
    },
    {
      name: "Problem Solving (Advanced) Certificate",
      issuer: "HackerRank",
      year: "2025"
    }
  ],
  resume: {
    fileName: "Mehedi_Hasan_CSE_Resume_2026.pdf",
    fileSize: "1.4 MB",
    uploadDate: "2026-08-15",
    status: "Verified",
    url: "#"
  }
};

// Demo Company Profile
const SEED_COMPANY = {
  id: "comp-technova",
  name: "TechNova Solutions",
  tagline: "Empowering Enterprises with Scalable Cloud & AI Software",
  industry: "Software & Technology",
  companySize: "150-500 Employees",
  website: "https://technova.example.com",
  email: "careers@technova.example.com",
  phone: "+880 2-9876543",
  location: "Gulshan-2, Dhaka, Bangladesh",
  logo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=200&auto=format&fit=crop&q=80",
  coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&auto=format&fit=crop&q=80",
  hrName: "Farhan Ahmed",
  hrEmail: "farhan.hr@technova.example.com",
  hrPhone: "+880 1819-876543",
  founded: "2018",
  description: "TechNova Solutions is an international digital engineering powerhouse with offices in Dhaka and Singapore. We architect cloud-native platforms, AI workflow automation, and enterprise web solutions for Fortune 500 partners.",
  socials: {
    linkedin: "https://linkedin.com/company/technova-solutions",
    facebook: "https://facebook.com/technovasolutions",
    website: "https://technova.example.com"
  }
};

// Seed Applications
const SEED_APPLICATIONS = [
  {
    id: "app-301",
    internshipId: "int-101",
    studentId: "std-2022001",
    studentName: "Mehedi Hasan",
    studentEmail: "mehedi.hasan@university.edu",
    studentPhone: "+880 1712-345678",
    studentUniversity: "University of Computer Studies & Engineering",
    studentDepartment: "Computer Science & Engineering",
    studentCgpa: "3.75",
    studentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    jobTitle: "Frontend Developer Intern",
    company: "TechNova Solutions",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    appliedDate: "2026-08-22",
    status: "Interview", // Applied, Reviewed, Shortlisted, Interview, Selected, Rejected
    resumeName: "Mehedi_Hasan_CSE_Resume_2026.pdf",
    coverLetter: "Dear Hiring Team at TechNova, I have spent the last two years actively building responsive frontend applications in React, TypeScript, and modern CSS. I would love the opportunity to contribute to your enterprise web products while learning under your senior architects.",
    availability: "Immediate (within 1 week)",
    portfolioUrl: "https://mehedihasan.dev",
    timeline: [
      { step: "Applied", date: "2026-08-22", note: "Application submitted with resume and cover letter." },
      { step: "Application Reviewed", date: "2026-08-24", note: "Profile screened by HR Team." },
      { step: "Shortlisted", date: "2026-08-26", note: "Passed initial screening based on CGPA and React skills." },
      { step: "Interview Scheduled", date: "2026-08-29", note: "Technical & Behavioral video interview scheduled for Sep 5, 2026." }
    ]
  },
  {
    id: "app-302",
    internshipId: "int-107",
    studentId: "std-2022001",
    studentName: "Mehedi Hasan",
    studentEmail: "mehedi.hasan@university.edu",
    studentPhone: "+880 1712-345678",
    studentUniversity: "University of Computer Studies & Engineering",
    studentDepartment: "Computer Science & Engineering",
    studentCgpa: "3.75",
    studentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    jobTitle: "Full Stack Engineer Intern",
    company: "CloudCore Systems",
    companyLogo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&auto=format&fit=crop&q=80",
    appliedDate: "2026-08-25",
    status: "Shortlisted",
    resumeName: "Mehedi_Hasan_CSE_Resume_2026.pdf",
    coverLetter: "Hi CloudCore Engineering Team, my background in building end-to-end Node.js and React applications with database modeling aligns directly with your platform stack.",
    availability: "Starting October 1, 2026",
    portfolioUrl: "https://mehedihasan.dev",
    timeline: [
      { step: "Applied", date: "2026-08-25", note: "Application submitted successfully." },
      { step: "Reviewed", date: "2026-08-27", note: "Engineering team reviewed GitHub repos." },
      { step: "Shortlisted", date: "2026-08-30", note: "Shortlisted for Round 1 Technical Assessment." }
    ]
  },
  {
    id: "app-303",
    internshipId: "int-102",
    studentId: "std-2022001",
    studentName: "Mehedi Hasan",
    studentEmail: "mehedi.hasan@university.edu",
    studentPhone: "+880 1712-345678",
    studentUniversity: "University of Computer Studies & Engineering",
    studentDepartment: "Computer Science & Engineering",
    studentCgpa: "3.75",
    studentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    jobTitle: "Backend Developer Intern (Node.js/Python)",
    company: "ByteCraft",
    companyLogo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=100&auto=format&fit=crop&q=80",
    appliedDate: "2026-08-27",
    status: "Applied",
    resumeName: "Mehedi_Hasan_CSE_Resume_2026.pdf",
    coverLetter: "Excited to apply for the Backend position at ByteCraft to write performant microservices and SQL database engines.",
    availability: "Flexible / Immediate",
    portfolioUrl: "https://github.com/mehedihasan",
    timeline: [
      { step: "Applied", date: "2026-08-27", note: "Application submitted and queued for recruiter review." }
    ]
  },
  {
    id: "app-304",
    internshipId: "int-105",
    studentId: "std-2022001",
    studentName: "Mehedi Hasan",
    studentEmail: "mehedi.hasan@university.edu",
    studentPhone: "+880 1712-345678",
    studentUniversity: "University of Computer Studies & Engineering",
    studentDepartment: "Computer Science & Engineering",
    studentCgpa: "3.75",
    studentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    jobTitle: "UI/UX Product Design Intern",
    company: "DesignNest Interactive",
    companyLogo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&auto=format&fit=crop&q=80",
    appliedDate: "2026-08-20",
    status: "Selected",
    resumeName: "Mehedi_Hasan_CSE_Resume_2026.pdf",
    coverLetter: "Excited to combine my coding knowhow with empathetic user experience design in Figma.",
    availability: "Immediate",
    portfolioUrl: "https://mehedihasan.dev",
    timeline: [
      { step: "Applied", date: "2026-08-20", note: "Application submitted." },
      { step: "Reviewed", date: "2026-08-21", note: "Design lead reviewed portfolio case studies." },
      { step: "Shortlisted", date: "2026-08-23", note: "Passed portfolio screening." },
      { step: "Interview", date: "2026-08-26", note: "Completed Design Challenge & behavioral round." },
      { step: "Selected", date: "2026-08-30", note: "Official Internship Offer Letter dispatched via email!" }
    ]
  },
  {
    id: "app-305",
    internshipId: "int-104",
    studentId: "std-2022001",
    studentName: "Mehedi Hasan",
    studentEmail: "mehedi.hasan@university.edu",
    studentPhone: "+880 1712-345678",
    studentUniversity: "University of Computer Studies & Engineering",
    studentDepartment: "Computer Science & Engineering",
    studentCgpa: "3.75",
    studentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    jobTitle: "Machine Learning / AI Intern",
    company: "AI Vision Labs",
    companyLogo: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=100&auto=format&fit=crop&q=80",
    appliedDate: "2026-08-15",
    status: "Rejected",
    resumeName: "Mehedi_Hasan_CSE_Resume_2026.pdf",
    coverLetter: "Application for computer vision researcher.",
    availability: "Immediate",
    portfolioUrl: "https://mehedihasan.dev",
    timeline: [
      { step: "Applied", date: "2026-08-15", note: "Application submitted." },
      { step: "Reviewed", date: "2026-08-18", note: "Reviewed by Research Panel." },
      { step: "Rejected", date: "2026-08-22", note: "Position prioritized candidates with published CVPR/ICCV papers. Feedback: High potential, reapply next cycle." }
    ]
  }
];

// Additional Seed Applicants for TechNova Solutions (Company View)
const SEED_COMPANY_APPLICANTS = [
  {
    id: "app-401",
    internshipId: "int-101",
    studentId: "std-2022001",
    studentName: "Mehedi Hasan",
    studentEmail: "mehedi.hasan@university.edu",
    studentPhone: "+880 1712-345678",
    studentUniversity: "University of Computer Studies & Engineering",
    studentDepartment: "Computer Science & Engineering",
    studentSemester: "7th Semester",
    studentCgpa: "3.75",
    studentPhoto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
    studentSkills: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Python", "C++", "SQL"],
    jobTitle: "Frontend Developer Intern",
    company: "TechNova Solutions",
    appliedDate: "2026-08-22",
    status: "Interview",
    resumeName: "Mehedi_Hasan_CSE_Resume_2026.pdf",
    coverLetter: "Dear Hiring Team at TechNova, I have spent the last two years actively building responsive frontend applications in React, TypeScript, and modern CSS. I would love the opportunity to contribute to your enterprise web products while learning under your senior architects.",
    availability: "Immediate (within 1 week)",
    portfolioUrl: "https://mehedihasan.dev",
    githubUrl: "https://github.com/mehedihasan"
  },
  {
    id: "app-402",
    internshipId: "int-101",
    studentId: "std-2022045",
    studentName: "Ayesha Siddiqua",
    studentEmail: "ayesha.siddiqua@cse.buet.ac.bd",
    studentPhone: "+880 1823-456789",
    studentUniversity: "Bangladesh University of Engineering & Technology",
    studentDepartment: "Computer Science & Engineering",
    studentSemester: "8th Semester",
    studentCgpa: "3.92",
    studentPhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&auto=format&fit=crop&q=80",
    studentSkills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "GraphQL", "Redux"],
    jobTitle: "Frontend Developer Intern",
    company: "TechNova Solutions",
    appliedDate: "2026-08-23",
    status: "Shortlisted",
    resumeName: "Ayesha_Siddiqua_BUET_Resume.pdf",
    coverLetter: "Passionate about creating accessible and ultra-fast web user interfaces. Built multiple campus management portals.",
    availability: "Starting Sep 15, 2026",
    portfolioUrl: "https://ayeshasiddiqua.me",
    githubUrl: "https://github.com/ayeshasid"
  },
  {
    id: "app-403",
    internshipId: "int-101",
    studentId: "std-2022088",
    studentName: "Tanvir Rahman",
    studentEmail: "tanvir.rahman@northsouth.edu",
    studentPhone: "+880 1911-223344",
    studentUniversity: "North South University",
    studentDepartment: "ECE / CSE",
    studentSemester: "6th Semester",
    studentCgpa: "3.60",
    studentPhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
    studentSkills: ["HTML5", "CSS3", "JavaScript", "Vue.js", "Bootstrap"],
    jobTitle: "Frontend Developer Intern",
    company: "TechNova Solutions",
    appliedDate: "2026-08-26",
    status: "Applied",
    resumeName: "Tanvir_Rahman_Resume.pdf",
    coverLetter: "Excited to apply for frontend intern opening to advance my Vue and React capabilities in a corporate environment.",
    availability: "Immediate",
    portfolioUrl: "https://tanvir-portfolio.example.com",
    githubUrl: "https://github.com/tanvirdev"
  },
  {
    id: "app-404",
    internshipId: "int-117",
    studentId: "std-2022099",
    studentName: "Nusrat Jahan",
    studentEmail: "nusrat.jahan@iub.edu.bd",
    studentPhone: "+880 1715-998877",
    studentUniversity: "Independent University, Bangladesh",
    studentDepartment: "Computer Science",
    studentSemester: "7th Semester",
    studentCgpa: "3.80",
    studentPhoto: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&auto=format&fit=crop&q=80",
    studentSkills: ["Agile/Scrum", "Product Roadmapping", "User Stories", "Figma", "Jira"],
    jobTitle: "Product Management Intern",
    company: "TechNova Solutions",
    appliedDate: "2026-08-28",
    status: "Selected",
    resumeName: "Nusrat_Jahan_PM_Resume.pdf",
    coverLetter: "Experienced student leader managing university hackathons and agile sprint projects. Looking to accelerate product growth at TechNova.",
    availability: "Immediate",
    portfolioUrl: "https://nusrat.design",
    githubUrl: "https://github.com/nusratj"
  },
  {
    id: "app-405",
    internshipId: "int-113",
    studentId: "std-2022105",
    studentName: "Shakib Al Mahmud",
    studentEmail: "shakib.mahmud@bracu.ac.bd",
    studentPhone: "+880 1688-334455",
    studentUniversity: "BRAC University",
    studentDepartment: "CSE",
    studentSemester: "5th Semester",
    studentCgpa: "3.45",
    studentPhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
    studentSkills: ["Technical Writing", "Markdown", "Python", "Blog Writing"],
    jobTitle: "Technical Content Writer & Copywriter Intern",
    company: "TechNova Solutions",
    appliedDate: "2026-08-27",
    status: "Rejected",
    resumeName: "Shakib_Mahmud_Writer.pdf",
    coverLetter: "Eager to write technical docs and articles.",
    availability: "Part-time",
    portfolioUrl: "https://medium.com/@shakibdev",
    githubUrl: "https://github.com/shakibmahmud"
  }
];

// Seed Interviews
const SEED_INTERVIEWS = [
  {
    id: "intv-501",
    applicationId: "app-301",
    studentId: "std-2022001",
    studentName: "Mehedi Hasan",
    company: "TechNova Solutions",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    position: "Frontend Developer Intern",
    date: "2026-09-05",
    time: "11:00 AM - 11:45 AM (BST)",
    type: "Google Meet (Video Call)",
    meetingLink: "https://meet.google.com/abc-intern-interview",
    status: "Upcoming", // Upcoming, Completed, Cancelled
    interviewer: "Farhan Ahmed (HR) & Tareq Hasan (Lead Frontend Architect)",
    notes: "Please prepare a 5-minute walkthrough of your favorite React project. Technical questions will focus on React hooks, state management, and CSS responsiveness."
  },
  {
    id: "intv-502",
    applicationId: "app-304",
    studentId: "std-2022001",
    studentName: "Mehedi Hasan",
    company: "DesignNest Interactive",
    companyLogo: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=100&auto=format&fit=crop&q=80",
    position: "UI/UX Product Design Intern",
    date: "2026-08-26",
    time: "03:00 PM - 03:45 PM (BST)",
    type: "Zoom Video Meeting",
    meetingLink: "https://zoom.us/j/demo-design-interview",
    status: "Completed",
    interviewer: "Sabrina Noor (Design Director)",
    notes: "Design challenge review and UX thought process discussion. Resulted in official offer selection."
  },
  {
    id: "intv-503",
    applicationId: "app-402",
    studentId: "std-2022045",
    studentName: "Ayesha Siddiqua",
    company: "TechNova Solutions",
    companyLogo: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80",
    position: "Frontend Developer Intern",
    date: "2026-09-06",
    time: "02:30 PM - 03:15 PM (BST)",
    type: "Google Meet",
    meetingLink: "https://meet.google.com/xyz-frontend-eval",
    status: "Upcoming",
    interviewer: "Farhan Ahmed (HR) & Tareq Hasan (Lead Frontend Architect)",
    notes: "Discussion regarding Next.js state management and API integration."
  }
];

// Seed Notifications
const SEED_NOTIFICATIONS = [
  {
    id: "notif-601",
    target: "student",
    title: "Interview Scheduled 🎉",
    message: "TechNova Solutions has scheduled a Technical Interview for the Frontend Developer Intern position on Sep 05, 2026 at 11:00 AM.",
    date: "2026-08-29 04:30 PM",
    read: false,
    type: "interview",
    link: "pages/student/interviews.html"
  },
  {
    id: "notif-602",
    target: "student",
    title: "Offer Received! 🌟",
    message: "Congratulations! DesignNest Interactive has selected you for the UI/UX Product Design Intern position. Check your email for details.",
    date: "2026-08-30 10:15 AM",
    read: false,
    type: "offer",
    link: "pages/student/applications.html"
  },
  {
    id: "notif-603",
    target: "student",
    title: "Application Shortlisted ✨",
    message: "Your application for Full Stack Engineer Intern at CloudCore Systems has been shortlisted by the engineering committee.",
    date: "2026-08-30 02:00 PM",
    read: true,
    type: "status",
    link: "pages/student/applications.html"
  },
  {
    id: "notif-604",
    target: "student",
    title: "New Internship Matching Your Skills 🎯",
    message: "CloudCore Systems just posted 'DevOps & Cloud Engineering Intern' requiring Linux, Docker, and CI/CD.",
    date: "2026-08-26 11:00 AM",
    read: true,
    type: "recommendation",
    link: "pages/student/internship-details.html?id=int-114"
  },
  {
    id: "notif-605",
    target: "student",
    title: "Upcoming Deadline Reminder ⏰",
    message: "The deadline for 'Data Analyst & BI Intern' at DataSphere Analytics closes in 3 days (Sep 28).",
    date: "2026-08-25 09:00 AM",
    read: true,
    type: "reminder",
    link: "pages/student/internship-details.html?id=int-103"
  },
  {
    id: "notif-701",
    target: "company",
    title: "New Applicant Applied 📄",
    message: "Mehedi Hasan applied for 'Frontend Developer Intern' with CGPA 3.75 and React portfolio.",
    date: "2026-08-22 03:40 PM",
    read: false,
    type: "applicant",
    link: "pages/company/applicants.html"
  },
  {
    id: "notif-702",
    target: "company",
    title: "New Applicant Applied 📄",
    message: "Ayesha Siddiqua (BUET, CGPA 3.92) applied for 'Frontend Developer Intern'.",
    date: "2026-08-23 05:12 PM",
    read: false,
    type: "applicant",
    link: "pages/company/applicants.html"
  },
  {
    id: "notif-703",
    target: "company",
    title: "Interview Reminder 📅",
    message: "You have an upcoming interview scheduled tomorrow with Mehedi Hasan at 11:00 AM.",
    date: "2026-08-29 09:00 AM",
    read: true,
    type: "interview",
    link: "pages/company/interviews.html"
  },
  {
    id: "notif-704",
    target: "company",
    title: "Internship Post Active 🚀",
    message: "Your job post 'Frontend Developer Intern' is live and receiving student applications.",
    date: "2026-08-20 10:00 AM",
    read: true,
    type: "post",
    link: "pages/company/my-internships.html"
  }
];

// Database Manager Helper Functions
const DB = {
  // Initialize Database in localStorage if not already present
  init() {
    if (!localStorage.getItem('imp_internships')) {
      localStorage.setItem('imp_internships', JSON.stringify(SEED_INTERNSHIPS));
    }
    if (!localStorage.getItem('imp_student_profile')) {
      localStorage.setItem('imp_student_profile', JSON.stringify(SEED_STUDENT));
    }
    if (!localStorage.getItem('imp_company_profile')) {
      localStorage.setItem('imp_company_profile', JSON.stringify(SEED_COMPANY));
    }
    if (!localStorage.getItem('imp_applications')) {
      localStorage.setItem('imp_applications', JSON.stringify(SEED_APPLICATIONS));
    }
    if (!localStorage.getItem('imp_company_applicants')) {
      localStorage.setItem('imp_company_applicants', JSON.stringify(SEED_COMPANY_APPLICANTS));
    }
    if (!localStorage.getItem('imp_interviews')) {
      localStorage.setItem('imp_interviews', JSON.stringify(SEED_INTERVIEWS));
    }
    if (!localStorage.getItem('imp_notifications')) {
      localStorage.setItem('imp_notifications', JSON.stringify(SEED_NOTIFICATIONS));
    }
    if (!localStorage.getItem('imp_saved_internships')) {
      localStorage.setItem('imp_saved_internships', JSON.stringify(["int-101", "int-103", "int-107"]));
    }
    if (!localStorage.getItem('imp_auth')) {
      // Default to demo student logged in for smooth navigation
      localStorage.setItem('imp_auth', JSON.stringify({
        isLoggedIn: true,
        userType: 'student', // 'student' or 'company'
        userName: 'Mehedi Hasan',
        userEmail: 'mehedi.hasan@university.edu'
      }));
    }
  },

  getInternships() {
    return JSON.parse(localStorage.getItem('imp_internships') || '[]');
  },
  saveInternships(data) {
    localStorage.setItem('imp_internships', JSON.stringify(data));
  },
  getInternshipById(id) {
    const list = this.getInternships();
    return list.find(item => item.id === id) || null;
  },

  getStudentProfile() {
    return JSON.parse(localStorage.getItem('imp_student_profile') || JSON.stringify(SEED_STUDENT));
  },
  saveStudentProfile(data) {
    localStorage.setItem('imp_student_profile', JSON.stringify(data));
  },

  getCompanyProfile() {
    return JSON.parse(localStorage.getItem('imp_company_profile') || JSON.stringify(SEED_COMPANY));
  },
  saveCompanyProfile(data) {
    localStorage.setItem('imp_company_profile', JSON.stringify(data));
  },

  getApplications() {
    return JSON.parse(localStorage.getItem('imp_applications') || '[]');
  },
  saveApplications(data) {
    localStorage.setItem('imp_applications', JSON.stringify(data));
  },

  getCompanyApplicants() {
    return JSON.parse(localStorage.getItem('imp_company_applicants') || '[]');
  },
  saveCompanyApplicants(data) {
    localStorage.setItem('imp_company_applicants', JSON.stringify(data));
  },

  getInterviews() {
    return JSON.parse(localStorage.getItem('imp_interviews') || '[]');
  },
  saveInterviews(data) {
    localStorage.setItem('imp_interviews', JSON.stringify(data));
  },

  getNotifications(target = null) {
    const list = JSON.parse(localStorage.getItem('imp_notifications') || '[]');
    if (!target) return list;
    return list.filter(n => n.target === target);
  },
  saveNotifications(data) {
    localStorage.setItem('imp_notifications', JSON.stringify(data));
  },

  getSavedInternships() {
    return JSON.parse(localStorage.getItem('imp_saved_internships') || '[]');
  },
  toggleSaveInternship(id) {
    let saved = this.getSavedInternships();
    let isSaved = false;
    if (saved.includes(id)) {
      saved = saved.filter(item => item !== id);
      isSaved = false;
    } else {
      saved.push(id);
      isSaved = true;
    }
    localStorage.setItem('imp_saved_internships', JSON.stringify(saved));
    return isSaved;
  },
  isInternshipSaved(id) {
    const saved = this.getSavedInternships();
    return saved.includes(id);
  },

  getAuth() {
    return JSON.parse(localStorage.getItem('imp_auth') || JSON.stringify({ isLoggedIn: false, userType: null }));
  },
  setAuth(authObj) {
    localStorage.setItem('imp_auth', JSON.stringify(authObj));
  },
  logout() {
    localStorage.setItem('imp_auth', JSON.stringify({ isLoggedIn: false, userType: null }));
  }
};

// Global Toast Notification Helper
function showToast(message, type = 'success', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const typeStyles = {
    success: 'bg-emerald-600 text-white border-emerald-700',
    error: 'bg-rose-600 text-white border-rose-700',
    info: 'bg-indigo-600 text-white border-indigo-700',
    warning: 'bg-amber-500 text-white border-amber-600'
  };

  const icons = {
    success: '<i class="fa-solid fa-circle-check text-lg"></i>',
    error: '<i class="fa-solid fa-circle-xmark text-lg"></i>',
    info: '<i class="fa-solid fa-circle-info text-lg"></i>',
    warning: '<i class="fa-solid fa-triangle-exclamation text-lg"></i>'
  };

  toast.className = `toast px-4 py-3.5 rounded-xl border flex items-center gap-3 text-sm font-medium shadow-xl transition-all duration-300 ${typeStyles[type] || typeStyles.info}`;
  toast.innerHTML = `
    <span>${icons[type] || icons.info}</span>
    <div class="flex-1">${message}</div>
    <button onclick="this.parentElement.remove()" class="opacity-80 hover:opacity-100 text-sm ml-2">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(50px)';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// Global URL Query Parameter Helper
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Theme Manager (Dark / Light)
function initTheme() {
  const savedTheme = localStorage.getItem('imp_theme');
  if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  if (document.documentElement.classList.contains('dark')) {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('imp_theme', 'light');
    showToast('Switched to Light Mode', 'info', 2000);
  } else {
    document.documentElement.classList.add('dark');
    localStorage.setItem('imp_theme', 'dark');
    showToast('Switched to Dark Mode', 'info', 2000);
  }
  // Trigger custom event so charts can re-render if needed
  window.dispatchEvent(new Event('themeChanged'));
}

// Auto Initialize Core Data on script load
DB.init();
initTheme();