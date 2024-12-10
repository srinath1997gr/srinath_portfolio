import {
    mobile,
    backend,
    creator,
    web,
    project1,
    project2,
    project3,
    accenture,
    UCD,
    UCD1,
    BIT,
  } from "../assets";
  import { RiReactjsLine } from "react-icons/ri";
import { SiMongodb, SiPython, SiHtml5, SiCss3, SiDocker, SiKubernetes, SiSpringboot, SiMysql, SiRedux, SiNextdotjs, SiFlask } from "react-icons/si";
import { DiJava, DiJavascript1, DiRedis } from "react-icons/di";
import { FaNodeJs, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { SiJenkins, SiApachekafka,  SiApachespark } from "react-icons/si";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Tech",
    },
    {
      id: "project",
      title: "Project",
    },
    {
      id: "education",
      title: "Education",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  
  const services = [
    {
      title: "Software Development",
      icon: web,
    },
    {
      title: "Cloud Knowledge",
      icon: backend,
    },
    {
      title: "Data Engineering/Data Science",
      icon: creator,
    },
    {
      title: "Full Stack Engineer",
      icon: mobile,
    },
  ];
  

  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Accenture",
      icon: accenture,
      iconBg: "#E6DEDD",
      date: "October 2019 - August 2022",
      points: [
        "Developed and enhanced a financial services application in alignment with industry standards and Agile methodologies, achieving a 20% increase in deployment efficiency and a  30% reduction in maintenance costs.",
        "Designed, implemented, and tested RESTful APIs using Java, Spring Boot, and Spring MVC, contributing to scalable web solutions that boosted performance and accelerated market delivery.",
        "Skilled in microservice environments and cloud-native CI/CD processes using tools such as Git, Jenkins, PCF, and databases like Postgres and MongoDB. Followed Agile methodologies and applied Design Patterns throughout the development lifecycle.",
        "Played a pivotal role in the architectural evolution from microservices to micro frontend design, enhancing scalability, modularity, and system resilience, leading to faster feature development.",
        "Participated in software design, architecture reviews, and code reviews, ensuring scalability, reuse, and adherence to best practices.",
        "Optimized backend by transitioning from Java to Kotlin and Node.js, and revamped UI with React.js on AWS S3 and Lambda, enhancing deployment processes and user experience.",
      ],
    },
    {
      title: "Teaching Assitant",
      company_name: "University of Colorado Denver",
      icon: UCD,
      iconBg: "#E6DEDD",
      date: "August 2023 - Dec 2024",
      points: [
        "Worked as a Graduate Teaching Assistant under Professor Rina Roy, helping students with the course Management of Business Capital.",
      ],
    },
    {
      title: "Research Assitant",
      company_name: "University of colorado",
      icon: UCD,
      iconBg: "#383E56",
      date: "Jan 2024 - May 2024",
      points: [
        "Led the design and development of an innovative end-to-end solution for converting medical images into 3D models for printing, utilizing Python, Flask, and ReactJS, focused on enhancing medical treatment planning and patient outcomes.",
        "Engineered a scalable and secure web application for medical image processing, employing Flask for backend operations and ReactJS for interactive 3D model visualization, streamlining the workflow from image acquisition to 3D printing.",
        "Implemented advanced image processing algorithms and integrated 3D modeling tools within a Python-based framework, creating a user-friendly platform for medical professionals to generate precise 3D prints from DICOM images.",
      ],
    },
  ];
  
  
  const projects = [
    {
      name: "3D Medical Imaging",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "vtkjs",
          color: "pink-text-gradient",
        },
      ],
      image: project1,
      source_code_link: "https://github.com/srinath1997gr?tab=repositories",
    },
    {
      name: "Inventory Management System",
      description:
        "This project is a scalable e-commerce application that streamlines end-to-end inventory management, enabling real-time product tracking and efficient operations from acquisition to delivery.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "java",
          color: "green-text-gradient",
        },
      ],
      image: project2,
      source_code_link: "https://github.com/srinath1997gr?tab=repositories",
    },
    {
      name: " Protein NLP Analysis",
      description:
        "This project leverages fine-tuned BERT-based models for advanced protein sequence analysis, achieving high accuracy in classification tasks using innovative NLP techniques in bioinformatics.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "machine learning",
          color: "green-text-gradient",
        },
        {
          name: "NLp",
          color: "pink-text-gradient",
        },
      ],
      image: project3,
      source_code_link: "https://github.com/srinath1997gr/Protein-NLP-Analysis",
    },
  ];
  
  export const Education = [
    {
      title: "University Of Colorado Denver",
      image: UCD,
      description:
        "Courses: Algorithms, Software Architecture, Computer Vision, Big Data Systems, Machine Learning, Operating Systems.",
        courses: [
          "Courses",
          "Algorithms",
          "Software Architecture",
          "Computer Vision",
          "Big Data Systems",
          "Machine Learning",
          "Operating Systems",
        ],
    },
    {
      title: "Bangalore Institute of Technology",
      image: BIT,
      description:
        "Relevant Courses: C++ with Oops, Data Structures, Operating Systems, Computer Networks, Internet of Things.",
        courses: [
          "Relvant Courses",
          "C++ with OOPs",
          "Data Structures",
          "Operating Systems",
          "Computer Networks",
          "Internet of Things",
        ],
    },
  ];

  export const CONTACT = {
    address: "United of States of America",
    phoneNo: "+1 720 691 9549 ",
    email: "srinath1997.gr@gmail.com",
    linkedin: "https://www.linkedin.com/in/srinath-g-r/",
    github: "https://github.com/srinath1997gr",
  };

 export const categories = {
    languages: [
      { Icon: DiJava, name: "Java", color: "text-red-600" },
      { Icon: DiJavascript1, name: "JavaScript", color: "text-yellow-500" },
      { Icon: TbBrandTypescript, name: "TypeScript", color: "text-blue-500" },
      { Icon: SiPython, name: "Python", color: "text-yellow-400" },
      { Icon: SiHtml5, name: "HTML", color: "text-orange-500" },
      { Icon: SiCss3, name: "CSS", color: "text-blue-400" },
    ],
    frameworks: [
      { Icon: SiSpringboot, name: "Spring Boot", color: "text-green-600" },
      { Icon: RiReactjsLine, name: "React", color: "text-cyan-400" },
      { Icon: FaNodeJs, name: "Express", color: "text-green-500" },
      { Icon: SiNextdotjs, name: "Next.js", color: "text-black" },
      { Icon: SiFlask, name: "Flask", color: "text-gray-500" },
      { Icon: SiRedux, name: "Redux", color: "text-purple-600" },
    ],
    Database: [
      { Icon: SiMysql, name: "MySQL", color: "text-blue-600" },
      { Icon: BiLogoPostgresql, name: "PostgreSQL", color: "text-sky-700" },
      { Icon: SiMongodb, name: "MongoDB", color: "text-green-500" },
    ],
    cloud: [
      { Icon: FaAws, name: "AWS", color: "text-orange-400" },
      { Icon: SiDocker, name: "Docker", color: "text-blue-400" },
      { Icon: SiKubernetes, name: "Kubernetes", color: "text-blue-600" },
      { Icon: SiJenkins, name: "Jenkins", color: "text-red-500" },
    ],
    other: [
      { Icon: SiApachekafka, name: "Kafka", color: "text-purple-600" },
      { Icon: DiRedis, name: "Redis", color: "text-red-400" },
      { Icon: SiApachespark, name: "Spark", color: "text-orange-500" },
    ],
  };

  export { services,  experiences,  projects };