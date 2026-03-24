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
  {
    name: "Projects",
    link: "#projects",
  },
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
  { value: 20, suffix: "+", label: "Completed Assignments" },
  { value: 10, suffix: "+", label: "Academic Projects" },
  { value: 15, suffix: "+", label: "Skills Learned" },
  { value: 95, suffix: "%", label: "Consistency in Learning" },
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
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
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
    name: "Tailwind CSS ",
    modelPath: "/models/tailwindcss-logo.glb",
    scale: 60,
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
    review: "Aakash demonstrates strong technical knowledge across frontend and backend technologies. He continuously improves his skills by building modern web applications and exploring new tools.",
    imgPath: "/images/rea.png",
    imgClass: "h-10 md:h-20 w-auto scale-110 origin-left", 
    logoPath: "/images/logos/react.png",
    title: "Technical Skills",
    date: "2023 - Present",
    responsibilities: [
      "Frontend: HTML, CSS, JavaScript, React, Tailwind CSS.",
      "Backend: Node.js, Express.js, MongoDB.",
      "Tools: GitHub, VS Code, Figma, Postman.",
      "Focus on responsive design and clean code practices."
    ],
  },
  {
    review: "Aakash has developed multiple real-world inspired projects that demonstrate strong problem-solving skills and practical development experience.",
    imgPath: "/images/no.png",
    imgClass: "h-10 md:h-12 w-auto", // Keep Node smaller so it doesn't look huge
    logoPath: "/images/logos/node.png",
    title: "Project Experience",
    date: "2023 - Present",
    responsibilities: [
      "Built Movie Booking website with seat selection and booking UI.",
      "Developed responsive portfolio using React and Tailwind.",
      "Created authentication pages with form validation.",
      "Worked on UI components like shopping cart and dashboards."
    ],
  },
  {
    review: "Aakash is passionate about continuous learning and regularly practices new technologies to improve development skills and stay updated with industry trends.",
    imgPath: "/images/db.png",
    imgClass: "h-10 md:h-10 w-auto scale-125 origin-left ml-4", 
    logoPath: "/images/logos/mongodb.png",
    title: "Learning Journey",
    date: "2023 - Present",
    responsibilities: [
      "Learning MERN Stack development through hands-on practice.",
      "Exploring modern UI animation using GSAP and Three.js.",
      "Practicing Data Structures and JavaScript concepts.",
      "Building real-world projects to strengthen problem-solving skills."
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



const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
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
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};