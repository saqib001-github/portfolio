const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  // {
  //   name: "Testimonials",
  //   link: "#testimonials",
  // },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/learn.webp", // Replace with your actual image path
    title: "Fast Learner",
    desc: "Quickly adapts to new technologies and tools to stay ahead in development.",
  },
  {
    imgPath: "/images/solve.png", // Replace with your actual image path
    title: "Problem Solver",
    desc: "Efficiently identifies issues and crafts effective solutions in high-pressure situations.",
  },
  {
    imgPath: "/images/team.jpg", // Replace with your actual image path
    title: "Team Player",
    desc: "Collaborates effectively within teams, contributing positively and supporting shared goals.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Docker",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Docker",
    modelPath: "/models/python-transformed.glb",
    scale: 1.2,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Saqib contributed significantly to our backend infrastructure, optimizing APIs and improving data access performance. His ability to debug and scale services was crucial to our success.",
    imgPath: "/images/kickr-tech.png",
    logoPath: "/images/kickr-tech.png",
    title: "Jr. Node.js Developer",
    date: "Nov 2024 – Present",
    responsibilities: [
      "Designed and optimized backend APIs using Node.js and Express.",
      "Enhanced database performance with efficient MongoDB queries.",
      "Collaborated across teams to ensure seamless backend/frontend integration.",
    ],
  },
  {
    review: "At College Counsel, Saqib showcased reliability and backend expertise in building RESTful services for scalable platforms.",
    // imgPath: "/images/college-counsel.png",
    // logoPath: "/images/cc-logo.png",
    title: "Backend Development Intern",
    date: "Sep – Oct 2024",
    responsibilities: [
      "Built RESTful APIs using Next.js and MongoDB.",
      "Implemented secure, maintainable backend workflows.",
      "Worked with Next.js for server-side rendered components and API routing.",
    ],
  },
  {
    review: "The blog platform Saqib built demonstrates his end-to-end development skills, including user auth, frontend design, and backend logic.",
    // imgPath: "/images/logo4.png",
    logoPath: "/images/logo4.png",
    title: "Full Stack Developer – Blog App",
    date: "Mar 2024 – July 2024",
    responsibilities: [
      "Developed a secure blog platform with user authentication and content management.",
      "Used React.js and Tailwind CSS for a modern, responsive UI.",
      "Integrated Redux for efficient state management and Express backend for API logic.",
    ],
  },
  {
    review: "Saqib's document editor project showed his talent for real-time systems and frontend architecture using Next.js and Web Sockets.",
    imgPath: "/images/image.png",
    logoPath: "/images/image.png",
    title: "Collaborative Document Editor – Personal Project",
    date: "July – Aug 2024",
    responsibilities: [
      "Built a real-time collaborative editor using Web Sockets and Liveblocks.",
      "Integrated Clerk for user authentication and implemented version control APIs.",
      "Created a responsive UI using Tailwind and Next.js.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    url: "https://github.com/saqib001-github",
    name: "github",
    class: "w-8 h-8",
    imgPath: "/images/github.png",
  },
  {
    url: "https://www.linkedin.com/in/saqib001/",
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
