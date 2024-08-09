import opensky from "../assets/projects/opensky.jpg";
import x86 from "../assets/projects/x86.png";
import reddit from "../assets/projects/reddit.png";
import vertex_ai from "../assets/projects/vertexai.jpg";
import glasses from "../assets/projects/glasses.png";
import plane from "../assets/projects/plane_icon.jpg";

export const HERO_CONTENT = `I have over 5 years of programming experience in both academic and industrial contexts, primarily in Python, Java, and C++. I have also used HTML, CSS, and React.js to create front-end web applications for company and personal projects. Currently, I'm studying Data Structures, Algorithms, Object-Oriented Programming, Data Analysis, and Discrete Math.`;

export const ABOUT_TEXT_P1 = `I'm also a part of Robomasters Ultraviolet: NYU's robotics team that designs three robots geared towards competive play. Specifically, I'm a part of the computer vision team, working on our fully autonomous robot (the Sentry). We use Intel's RealSense camera, OpenCV, and YOLOv5 (running on a Jetson Nano) for real-time object detection. Geometric transformations are used to calculate the distance and angle of the target, which is then used to control the robot's movement and firing speed.`;
export const ABOUT_TEXT_P2 = `When I'm not coding, I enjoy photography, the outdoors, and being active in any way possible. I also share a project car (a 2001 Mazda Miata MX-5 NB) with a couple friends from my hometown. Currently, we've installed a removable steering wheel, cold air intake, a straight-piped exhaust, and custom fitted bucket seats. Hopefully, we can turbo it soon and get it on a track!`;
export const EXPERIENCES = [
  {
    year: "May 2024 - Present",
    role: "Software Engineering Intern",
    company: "Procyon.ai",
    description: `Created LLM agent architecture and prompt interface for querying multi-tenant Procyon User Activity Logs. Leveraged Amazon Bedrock Foundational Model access, AWS Lambda, EC2 and OpenSearch data indexing. Provided scalable integration into production workflow using Go and Ansible.`,
    technologies: ["Python", "Go", "AWS", "Ansible"],
  },
  {
    year: "May 2024 - Present",
    role: "Software Engineering Intern",
    company: "Portal26",
    description: `Augmented Cloudwatch alarm monitoring with custom metrics and notification system. Queried logs for additional error details and provided real-time Slack and email messages via SNS. Built Terraform scripting for AWS infrastructure and CI/CD pipeline deployment. `,
    technologies: ["Python", "AWS", "Terraform"],
  },
  {
    year: "May 2023 - Aug 2023",
    role: "Machine Learning Instructor",
    company: "ID Tech Academy",
    description: `Designed and taught a thorough, insightful curriculum focused on computer vision with Nvidia’s Jetson Nano. Fostered student engagement and understanding by adapting to individual study techniques and past experience. Ensured 40 students received Jetson AI specialist certifications from Nvidia’s Deep Learning Institute.`,
    technologies: ["Python", "TensorFlow", "OpenCV"],
  },
  {
    year: "May 2022 - Aug 2022",
    role: "Software Engineering Intern",
    company: "Oloid.ai",
    description: `Built image classifier for 13+ types of RFID badge scanners with 98% accuracy, used for easy identification and
integration with Oloid’s trademark keyless scanner. Created Tensorflow-Keras pipeline with data tuning and augmentation, React.js frontend for live image classification.`,
    technologies: ["Python", "React", "TensorFlow", "Keras"],
  },
  {
    year: "May 2021 - Aug 2021",
    role: "Software Engineering Intern",
    company: "Oloid.ai",
    description: `Built AI liveness detection model for user authentication in contactless-identification environment. Leveraged Python, C++, and Google’s MediaPipe facial recognition repository.`,
    technologies: ["Python", "C++", "Google CCS"],
  },
  {
    year: "Jan 2021 - May 2021",
    role: "Outreach Ambassador - Top 10 Fellow",
    company: "Inspirit AI",
    description: `Conducted outreach providing AI learning resources to multiple schools, clubs and communities over a 5-week period. Presented to 40+ individuals about importance of ethics in AI and diversification of datasets and researchers.`,
    technologies: ["Python", "TensorFlow", "MS PowerPoint"],
  },
];

export const PROJECTS = [
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
      "Simulated x86-esque architecture with access to L1 and L2 cache layers.",
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
  address: "Brooklyn, NY && San Jose Bay Area, CA",
  phoneNo: "+12 4555 666 00 ",
  email: email,
  emailHref: "mailto:" + email,
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/shounak-ghosh/",
  github: "https://github.com/Shounak-Ghosh",
  instagram: "https://www.instagram.com/shounak_g/",
};
