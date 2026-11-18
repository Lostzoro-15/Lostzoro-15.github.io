/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  title: "Hi, I'm Soham",
  logo_name: "Soham Mahata",
  nickname: "",
  subTitle:
    "MBA student with a B.Tech in Computer Science (AI), passionate about Business Analytics, technology, and problem-solving. Interested in turning data into insights and using technology to solve real-world business challenges.",
  resumeLink: "https://drive.google.com/file/d/16v_mEl3czX2AK39lAf9tXngzPyE69f5z/view?usp=sharing",
  portfolio_repository: "https://github.com/Lostzoro-15/Lostzoro-15.github.io",
  githubProfile: "https://github.com/Lostzoro-15"
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "sohammahata1515@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "AI/ML engineer turned MBA, combining machine learning, data analytics and business thinking to build efficient, data-driven operations.",
  skills: [
    emoji("⚡ Build predictive models with Machine Learning: NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, Random Forest, XGBoost"),
    emoji("⚡ Develop Deep Learning solutions: ANN, CNN, Autoencoders and YOLO for vision and detection tasks"),
    emoji("⚡ Turn raw data into decisions with SQL, Excel and Power BI dashboards"),
    emoji("⚡ Deploy and scale with Docker and AWS")
  ],

  /* Make sure you have the same images and file name in assets/images/skills */
  softwareSkills: [
    { skillName: "Python", fontAwesomeClassname: "simple-icons:python", style: { color: "#3776AB" } },
    { skillName: "Java", fontAwesomeClassname: "simple-icons:openjdk", style: { color: "#ED8B00" } },
    { skillName: "Excel", fontAwesomeClassname: "simple-icons:microsoftexcel", style: { color: "#217346" } },
    { skillName: "SQL", fontAwesomeClassname: "simple-icons:mysql", style: { color: "#4479A1" } },
    { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi", style: { color: "#F2C811" } },
    { skillName: "AWS", fontAwesomeClassname: "simple-icons:amazonaws", style: { color: "#FF9900" } },
    { skillName: "Docker", fontAwesomeClassname: "simple-icons:docker", style: { color: "#1488C6" } },
    { skillName: "NumPy", fontAwesomeClassname: "simple-icons:numpy", style: { color: "#013243" } },
    { skillName: "Pandas", fontAwesomeClassname: "simple-icons:pandas", style: { color: "#150458" } },
    { skillName: "Scikit-learn", fontAwesomeClassname: "simple-icons:scikitlearn", style: { color: "#F7931E" } }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Lovely Professional University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Business Administration",
      duration: "August 2026 - July 2028",
      desc: "Specializing in operations and project management, with a strong finance and analytics base.",
      descBullets: [
        "Published a book chapter on Sources of Finance and Capital Structure of MRF Limited",
        "BrandSell project: built an anime merchandise brand from scratch and generated ₹30K in sales within a week"
      ]
    },
    {
      schoolName: "Techno India University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.Tech in CSE, specialization in AI & ML",
      duration: "October 2022 - July 2026",
      desc: "Ranked in the top 30% of the program. Published 1 research paper in ML.",
      descBullets: [
        "Built an IoT-based agricultural rover that uses field sensors to measure soil nutrients and apply fertilizer in the correct amount",
        "Used a pretrained Qwen LLM to generate detailed field reports, and Autoencoder + YOLO models to detect plant diseases and pests",
        "Coursework: Operating Systems, Development, Image Processing using Python, AI & ML Algorithms, Deep Learning Algorithms"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Python", progressPercentage: "90%" },
    { Stack: "Excel", progressPercentage: "80%" },
    { Stack: "SQL", progressPercentage: "70%" },
    { Stack: "Java", progressPercentage: "60%" }
  ],
  displayCodeRepo: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  
  email_address: "sohammahata1515@gmail.com"
};



export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  contactInfo,
  isHireable,
  resumeSection
};
