export const siteConfig = {
  name: "Harshal Pandit",
  title: "React Full Stack Developer",
  tagline:
    "Senior Software Engineer with 8+ years building cloud-native distributed systems, scalable APIs, and modern React interfaces",
  email: "panditharshal96@gmail.com",
  github: "https://github.com/harshalpandit",
  linkedin: "https://www.linkedin.com/in/pandit-harshal/",
};

export const aboutText = [
  "I'm a Senior Software Engineer with 8+ years of experience building cloud-native distributed systems using Python, Java, and AWS. I specialize in event-driven architectures, scalable backend APIs, and high-availability cloud platforms deployed in containerized environments.",
  "From designing distributed execution platforms at Capital One to delivering healthcare automation systems at Advent Health, I've consistently built reliable systems that scale. My full-stack expertise spans React frontends, Spring Boot backends, and AWS cloud infrastructure.",
  "I'm passionate about observability, CI/CD automation, and mentoring engineers. I thrive in cross-functional teams delivering high-throughput, fault-tolerant systems that make a real impact.",
];

export interface Skill {
  name: string;
  icon: string;
  category: string;
}

export const skills: Skill[] = [
  // Languages
  { name: "Python", icon: "python", category: "Languages" },
  { name: "Java", icon: "java", category: "Languages" },
  { name: "TypeScript", icon: "typescript", category: "Languages" },
  { name: "Bash", icon: "bash", category: "Languages" },

  // Frontend
  { name: "React.js", icon: "react", category: "Frontend" },
  { name: "Material UI", icon: "mui", category: "Frontend" },
  { name: "Tailwind CSS", icon: "tailwind", category: "Frontend" },
  { name: "Storybook", icon: "storybook", category: "Frontend" },

  // Cloud & AWS
  { name: "AWS", icon: "aws", category: "Cloud" },
  { name: "Lambda", icon: "lambda", category: "Cloud" },
  { name: "EKS/ECS", icon: "kubernetes", category: "Cloud" },
  { name: "S3/RDS", icon: "database", category: "Cloud" },

  // DevOps
  { name: "Docker", icon: "docker", category: "DevOps" },
  { name: "Kubernetes", icon: "kubernetes", category: "DevOps" },
  { name: "GitHub Actions", icon: "github", category: "DevOps" },
  { name: "Jenkins", icon: "jenkins", category: "DevOps" },

  // Infrastructure
  { name: "Terraform", icon: "terraform", category: "Infrastructure" },
  { name: "CloudFormation", icon: "aws", category: "Infrastructure" },
  { name: "AWS CDK", icon: "aws", category: "Infrastructure" },

  // APIs & Architecture
  { name: "REST APIs", icon: "api", category: "Architecture" },
  { name: "GraphQL", icon: "graphql", category: "Architecture" },
  { name: "Microservices", icon: "microservices", category: "Architecture" },

  // Security
  { name: "OAuth2/JWT", icon: "security", category: "Security" },
  { name: "AWS IAM", icon: "aws", category: "Security" },
  { name: "RBAC", icon: "security", category: "Security" },

  // Monitoring
  { name: "OpenTelemetry", icon: "monitoring", category: "Monitoring" },
  { name: "Prometheus", icon: "prometheus", category: "Monitoring" },
  { name: "New Relic", icon: "newrelic", category: "Monitoring" },

  // Messaging
  { name: "Kafka", icon: "kafka", category: "Messaging" },
  { name: "SNS/SQS", icon: "aws", category: "Messaging" },
  { name: "ActiveMQ", icon: "messaging", category: "Messaging" },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  github: string;
  live: string;
}

export const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    description:
      "A comprehensive analytics dashboard with interactive charts, real-time stats cards, and a recent orders table. Built with React, TypeScript, and Recharts.",
    tags: ["React", "TypeScript", "Recharts", "Tailwind CSS"],
    github: "#",
    live: "/demo/dashboard",
  },
  {
    title: "REST API Explorer",
    description:
      "A fully functional REST API testing tool. Send GET, POST, PUT, DELETE requests to any endpoint, view formatted responses, and track request history.",
    tags: ["React", "TypeScript", "Fetch API", "JSON"],
    github: "#",
    live: "/demo/api-explorer",
  },
  {
    title: "Contact Manager (CRUD)",
    description:
      "A complete CRUD application with search, pagination, modal forms, and delete confirmation. Demonstrates full data management patterns.",
    tags: ["React", "TypeScript", "Tailwind CSS", "CRUD"],
    github: "#",
    live: "/demo/crud-app",
  },
];

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Capital One",
    location: "McLean, VA",
    period: "Jul 2024 – Present",
    description: [
      "Designed and deployed Python-based cloud-native backend services on AWS, supporting 20+ distributed execution workflows",
      "Implemented event-driven AWS workflows using SQS, SNS, and Lambda, coordinating 50K+ async tasks/day",
      "Built CI/CD pipelines using GitHub Actions, Docker, and Kubernetes, reducing deployment time by 60%",
      "Implemented observability with OpenTelemetry and New Relic, reducing mean time to detect issues by 35%",
      "Achieved 99.9%+ service availability through retries, timeouts, and graceful degradation",
    ],
  },
  {
    role: "Senior Full Stack Developer",
    company: "Advent Health",
    location: "Orlando, FL",
    period: "Feb 2023 – May 2024",
    description: [
      "Delivered cloud-native backend systems supporting healthcare ops, serving 50K+ monthly users",
      "Re-architected scheduling and messaging into event-driven microservices, improving reliability by 30%",
      "Optimized caching with Redis, reducing response latency by 40%",
      "Implemented OAuth2, OpenID Connect, JWT, and RBAC for HIPAA-compliant access controls",
      "Applied BFF patterns reducing authentication-related defects by 25%",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Celekt Gadgets LLP",
    location: "Hyderabad, India",
    period: "Feb 2020 – Jun 2022",
    description: [
      "Built responsive UI components with React.js, Material UI, and custom hooks for enterprise retail apps",
      "Maintained Java-based backend with Spring/Hibernate, exposing RESTful APIs for React clients",
      "Contributed to a Storybook-driven internal React component library",
      "Implemented HTTP/server-side caching, reducing p95 page load by 24%",
    ],
  },
  {
    role: "Software Engineer",
    company: "Juniper Networks",
    location: "Hyderabad, India",
    period: "Jul 2018 – Jan 2020",
    description: [
      "Migrated legacy UIs from JSP/JSF to React.js with TypeScript",
      "Containerized services with Docker, reducing environment drift incidents by 40%",
      "Implemented secure backend workflows via AWS API Gateway, Lambda, and Cognito",
      "Increased Lighthouse accessibility score from 84 to 93 through WCAG fixes",
    ],
  },
  {
    role: "Software Engineer",
    company: "Bectran Inc",
    location: "Hyderabad, India",
    period: "Nov 2016 – Jan 2018",
    description: [
      "Modernized UI layers by introducing React.js components to replace monolithic Java views",
      "Developed backend services using Java (Spring Boot, Struts, Hibernate) with RESTful APIs",
      "Deployed async messaging with ActiveMQ, improving transaction throughput",
      "Migrated batch jobs to event-driven pipelines, cutting processing time by 27%",
    ],
  },
];

export const stats = [
  { value: "8+", label: "Years of Experience" },
  { value: "20+", label: "Completed Projects" },
  { value: "15K+", label: "Hours Worked" },
];

export const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];
