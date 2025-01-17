import opensky from "../assets/projects/opensky.jpg";
import x86 from "../assets/projects/x86.png";
import reddit from "../assets/projects/reddit.png";
import vertex_ai from "../assets/projects/vertexai.jpg";
import glasses from "../assets/projects/glasses.png";
import plane from "../assets/projects/plane_icon.jpg";
import mfd_img from "../assets/projects/food_donation_png.png";

export const HERO_CONTENT = `Hello world! I am currently finishing my undergraduate degree and am considering full-time roles, master's programs, or a 2025 summer internship. I've been programming since high school and have gained experience in both academic and industrial contexts, primarily in Python, C/C++, and GoLang. I've used the MERN stack and cloud-computing technologies to create front-end, back-end, and full-stack web applications for company and personal projects. At college, I've completed coursework in Network Security, Operating Systems, Databases, Data Structures and Algorithms. This semester I'll be studying Application Security, Blockchain technology, Cloud Computing, and Open-source/Professional Software development.`;

export const ABOUT_TEXT_P1 = `I've also been a part of Robomasters Ultraviolet: NYU's robotics team that designs three robots geared towards competitive play. Specifically, I was part of the computer vision team, working on our fully autonomous robot (the Sentry). We use Intel's RealSense camera, OpenCV, and YOLOv5 (running on a Jetson Nano) for real-time object detection. Geometric transformations are used to calculate the distance and angle of the target, which is then used to control the robot's movement and firing speed.`;
export const ABOUT_TEXT_P2 = `When I'm not coding, I enjoy, FPS games, photography, the outdoors, and being active in any way possible. One of my passion projects was a 2001 Mazda Miata MX-5 NB which I shared with a couple friends from my hometown. We installed a removable steering wheel, cold air intake, a straight-piped exhaust, and custom fitted bucket seats. Unfortunately, we had to sell the car at the end of the summer but I gained valuable experience for my future ride!`;
export const EXPERIENCES = [
  {
    year: "September 2024 - Present",
    role: "Course Assistant",
    company: "NYU Tandon School of Engineering",
    company_description: "",
    description: `Instructed undergraduate students in Python and facilitated Computer Science lab assignments and exams. Evaluated assignments and offered constructive feedback, while holding office hours for extra guidance. Maintained expertise in Python to deliver comprehensive support and aid in coursework.`,
    technologies: ["Python", "NYU Brightspace LMS", "Gradescope"],
  },
  {
    year: "June 2024 - Present",
    role: "Software Engineering Intern",
    company: "Procyon.ai",
    company_description: "IAM Solution for Cloud compute providers",
    description: `Architected and implemented an LLM-based agent framework for querying multi-tenant security information and event management (SIEM) logs, enabling efficient resource utilization analysis and summarization. Integrated Amazon Bedrock foundational models (Anthropic Claude V2.1, Anthropic Haiku) with AWS Lambda agent tool deployment via custom-defined OpenAPI schema. Provided scalable integration into production workflow using GoLang and automating deployments with Ansible.`,
    technologies: ["Python", "Go", "AWS", "Ansible"],
  },
  {
    year: "June 2024 - August 2024",
    role: "Software Engineering Intern",
    company: "Portal26",
    company_description: "Award-winning GenAI visibility, AI TRiSM SaaS platform",
    description: `Augmented CloudWatch alarm monitoring with custom metrics and notification system. Queried logs for additional error details and provided real-time Slack and email messages via SNS. Built Terraform scripting for AWS infrastructure and CI/CD pipeline deployment. `,
    technologies: ["Python", "AWS", "Terraform"],
  },
  {
    year: "May 2023 - August 2023",
    role: "Machine Learning Instructor",
    company: "ID Tech Academy",
    company_description: "Industry-leading STEM education provider",
    description: `Designed and taught a thorough, insightful curriculum focused on computer vision with Nvidia’s Jetson Nano. Fostered student engagement and understanding by adapting to individual study techniques and past experience. Ensured 40 students received Jetson AI specialist certifications from Nvidia’s Deep Learning Institute.`,
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    year: "May 2022 - August 2022",
    role: "Software Engineering Intern",
    company: "Oloid.ai",
    company_description: "B2B SaaS platform for advanced physical IAM",
    description: `Built image classifier for 13+ types of RFID badge scanners with 98% accuracy, used for easy identification and integration with Oloid’s trademark keyless scanner. Created Tensorflow-Keras pipeline with data tuning and augmentation, React.js frontend for live image classification.`,
    technologies: ["Python", "React", "TensorFlow", "Keras"],
  },
  {
    year: "May 2021 - August 2021",
    role: "Software Engineering Intern",
    company: "Oloid.ai",
    company_description: "B2B SaaS platform for advanced physical IAM",
    description: `Built AI liveness detection model for user authentication in contactless-identification environment. Leveraged Python, C++, and Google’s MediaPipe facial recognition repository.`,
    technologies: ["Python", "C++", "Google CCS"],
  },
  {
    year: "January 2021 - May 2021",
    role: "Outreach Ambassador - Top 10 Fellow",
    company: "Inspirit AI",
    company_description: "Pre-collegiate AI education provider",
    description: `Conducted outreach providing AI learning resources to multiple schools, clubs and communities over a 5-week period. Presented to 40+ individuals about importance of ethics in AI and diversification of datasets and researchers.`,
    technologies: ["Python", "TensorFlow", "MS PowerPoint"],
  },
];

export const PROJECTS = [
  {
    title: "Mobile Food Drive Platform",
    image: mfd_img,
    description:
      "Designed and implemented a progressive web application using React, ensuring compatibility across mobile and web platforms while adhering to responsive design principle. Developed geolocation-based food donation features by integrating Google Maps API for real-time mapping, geofencing, and proximity-based search functionalities. Designed user-friendly search and filtering capabilities, allowing recipients to locate food drops based on criteria such as proximity, food type, dietary restrictions, and expiration time.",
    technologies: ["MERN", "Mongoose", "Tailwind CSS", "Material UI", "Git"],
  },
  {
    title: "Real-Time Commercial Flight Data Visualization",
    image: opensky,
    description:
      "Monitored and provided metrics for flights over the SF Bay Area using the Opensky Network, Amazon Grafana and Streamlit. Ingested Opensky data into Kafka cluster and delivered via SnowPipe to Snowflake table before dashboarding. Leveraged AWS ECS and Application Load Balancer to host and serve as a web proxy for Streamlit container.",
    technologies: ["Python", "Snowflake", "AWS", "Kafka", "Streamlit"],
  },
  {
    title: "Airline Ticket Reservation System",
    image: plane,
    description:
      "Designed relational database system using ER methodologies. Built dynamic application supporting login, search, flight creation, capacity-based price adjustment, and booking.",
    technologies: ["Python", "Flask", "HTML", "CSS", "JS", "mySQL"],
  },
  {
    title: "Computer Architecture",
    image: x86,
    description:
      "Developed a C++ simulator for the E20 processor to execute machine and assembly code, ensuring accurate output formatting for automated evaluation.",
    technologies: ["C++", "Verilog"],
  },
  {
    title: "Celebrity Face Detection",
    image: vertex_ai,
    description:
      "Fine-tuned Tensorflow ResNet-50 on celebrity dataset to recreate viral TikTok filter. Hosted model on Google Cloud Vertex.ai and fetched bounding boxes from AWS Rekognition.",
    technologies: ["Python", "TensorFlow", "Google CCS", "AWS"],
  },
  {
    title: "Reddit Sentiment Analysis",
    image: reddit,
    description:
      "Fine-tuned a machine-learning pipeline to analyze the sentiment of tweets surrounding a stock ticker.",
    technologies: ["Python", "TensorFlow"],
  },
  {
    title: "BetterVision Glasses",
    image: glasses,
    description:
      "Created a pair of affordable assistive glasses for visually impaired. Hosted model on Google Cloud Vertex.ai and fetched bounding boxes from AWS Rekognition. 3D printed custom frames with Arduino Nano and ultrasonic sensor mounts for live object detection and Bluetooth headset communication.",
    technologies: ["Python", "C++", "Arduino"],
  },
];

const email = "shounak.ghosh@nyu.edu";

export const CONTACT = {
  address: "Brooklyn, NY || San Jose Bay Area, CA",
  phoneNo: "+12 4555 666 00 ",
  email: email,
  emailHref: "mailto:" + email,
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/shounak-ghosh/",
  github: "https://github.com/Shounak-Ghosh",
  instagram: "https://www.instagram.com/shounak_g/",
};
