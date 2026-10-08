// ✏️ Edit your content here. The whole site updates automatically.

export const profile = {
  name: "Feven Esayas",
  email: "fevaesa82@gmail.com",
  github: "https://github.com/fevenes", // TODO
  linkedin: "https://www.linkedin.com/in/feven-esayas-8ab125438", // TODO
  cv: "/cv.pdf", // put your CV in /public/cv.pdf
  roles: [
    "Frontend Developer",
    "Full-stack Builder",
    "AI & OCR Enthusiast",
    "QA Engineer",
    "Software Engineering Graduate",
  ],
  intro:
    "I build web applications with React, TypeScript and Node.js, and I enjoy the other side too: finding bugs, tracing them in VS Code, and making software more reliable.",
};

export const about = [
    "I'm a Software Engineering graduate from Adama Science and Technology University (ASTU), class of 2026. I build clean, responsive web applications with modern tools.",
  "I'm interested in full-stack development, artificial intelligence, and solving real problems with structured, scalable code.",
  "I'm also moving toward QA engineering. I like hunting down bugs, reproducing them, and debugging until I find the root cause.",
];

export const facts = [
  { label: "Education", value: "BSc Software Engineering, ASTU · Graduated June 2026" },
  { label: "Focus", value: "Full-stack development, frontend, QA and debugging, machine learning with Python" },
  { label: "Open to", value: "Software engineering roles: full-stack, frontend and QA, plus collaborations" },
];
export const skillGroups = [
  { title: "Frontend", items: ["HTML5", "CSS3", "React", "TypeScript", "Tailwind CSS"] },
  { title: "Backend", items: ["Node.js", "Express", "MongoDB"] },
  { title: "QA & debugging", items: ["Bug finding", "Debugging in VS Code", "Test cases", "Bug reports"] },
  { title: "AI & tools", items: ["Python", "YOLO / ML", "OCR", "Google Colab", "CVAT", "Git & GitHub"] },
];

export const experience = [
  {
    role: "Developer & Financial Officer",
    company: "Elovia Solutions",
    period: "2025 – present",
    current: true,
    points: [
      "Develop and maintain web-based systems",
      "Manage financial operations and reporting",
      "Collaborate on system design and implementation",
    ],
  },
    {
    role: "Freelance Web Developer",
    company: "Upwork",
    period: "2025 – present", // TODO
    current: true,
    points: [
      "Build responsive websites and web apps for clients using React, TypeScript and Node.js",
      "Communicate with clients, scope requirements and deliver projects on time",
      "Test and debug work in VS Code before delivery",
    ],
  },
  {
    role: "Intern",
    company: "Menas Cyber Solutions · Addis Ababa",
    period: "Jul – Sep 2025",
    points: [
      "Assessed web security and vulnerabilities",
      "Analyzed web application weaknesses",
      "Improved secure coding practices",
    ],
  },
  {
    role: "Intern",
    company: "Ethiopian AI Institute · Addis Ababa",
    period: "Jun – Aug 2025",
    points: [
      "Prepared OCR data",
      "Handled preprocessing and segmentation",
      "Learned AI pipelines and workflows",
    ],
  },
    {
    role: "Full-stack Developer", // change if your title was different
    company: "Everlink Solutions · Addis Ababa",
    period: "Jul – Sep 2024",
    points: [
      "Built a full-stack lottery web application with React, Node.js and MongoDB",
      "Implemented authentication, ticket management and database operations",
      "Tested and debugged the application before delivery",
    ],
  },
];

export const projects = [
  {
    title: "Amharic OCR",
    year: "2025 – 2026",
    description:
      "A handwritten Amharic OCR system using machine learning and computer vision, with preprocessing and segmentation for reading historical documents.",
    tags: ["Python", "YOLO / ML", "OCR"],
    code: "https://github.com/fevenes", // TODO
    live: "",
  },
  {
    title: "Health Link",
    year: "Project",
    description:
      "A healthcare management system for patient records and prescriptions, with an interface designed around core clinical workflows.",
    tags: ["React", "Node.js", "MongoDB"],
    code: "https://github.com/fevenes", // TODO
    live: "",
  },
  {
    title: "Lottery Web Application",
    year: "2023",
    description:
      "A full-stack lottery platform with user authentication, ticket management and prize handling.",
    tags: ["Full-stack", "Authentication"],
    code: "https://github.com/fevenes", // TODO
    live: "",
  },
];
