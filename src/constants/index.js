import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

import globallogic from "../assets/company/globallogic.png";
import netflix from "../assets/socialmedia/NetFlix12.png";
import emailgenerator from "../assets/socialmedia/EmailGenerator.png";
import dotnet from "../assets/socialmedia/net.png";
import firebase from "../assets/socialmedia/firebase.png";
import ShanuPDF from "../Pdf/Shanu.pdf"
import apple from "../assets/socialmedia/apple.jpg";
import Stackoverflow from "../assets/socialmedia/Stackoverflow.png"
import TreeLink from "../assets/socialmedia/TreeLink.png"
export const navLinks = [
    {
        id: "home",
        title: "Home",
    },
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
    {
        id: "linkedin",
        title: "LinkedIn",
        url: "https://www.linkedin.com/in/shanu-kumar-95b644214/",
        // icon: linkedinIcon,
    },
    {
        id: "github",
        title: "GitHub",
        url: "https://github.com/ShanuXo",
        // icon: githubIcon,
    },
    {
        id: "leetcode",
        title: "Leetcode",
        url: "https://leetcode.com/u/ShanuXo/",
        // icon: leetcodeIcon,
    },
    {
        id: "twitter",
        title: "Twitter/X",
        url: "https://twitter.com/ShanuXo_",
        // icon: twitterIcon,
    },
    {
        id: "downloadCV",
        title: "Download CV",
        url: ShanuPDF,
        // icon: "downloadCV",
    },
];

const services = [
    {
        title: "Full Stack Developer",
        icon: web,
    },
    {
        title: "Backend Developer",
        icon: mobile,
    },
    {
        title: "Database Developer",
        icon: backend,
    },
    {
        title: "Content Creator",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: ".NET",
        icon: dotnet,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [
    {
        title: "Software Engineer",
        company_name: "GlobalLogic",
        icon: globallogic,
        iconBg: "#383E56",
        date: "September 2023",
        points: [
            "Engineered a board management solution for Diligent, a modern governance company that simplifies governance with comprehensive    oftware tools, Improve agenda management and policy publishing by 60%, providing a streamlined experience for users.",
            "Designed, coded, feature empowering local governing bodies across the USA, and Canada. This feature enables seamless employee punch-ins and efficient access to meetings, increasing policy adoption by 50%.",
            "Worked on migrating the product infrastructure from Azure to AWS,taking responsibility for creating S3 buckets and setting up a local-facing database to improve data accessibility for all users. This migration enhanced application scalability, allowing for more seamless handling of user growth and increased traffic.",
            "• Technology Used: .NET,React.js, Redux, Material-UI, MongoDB,Microsoft SQL Server, AWS (S3), GIT",
        ],
    },
    {
        title: "Trainee Software Engineer",
        company_name: "GlobalLogic",
        icon: globallogic,
        iconBg: "#E6DEDD",
        date: "Sep 2023",
        points: [
            "Trained in core technologies including .NET, React.js, and Microsoft SQL Server, and applied this knowledge on internal,industry-level projects.",
            "Implementing and Creating API's and responsive design and ensuring cross-browser compatibility.",
            "Collaborated on milestone projects, gaining practical experience in full-stack development using .NET and React.js.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Siddhant Kashyap",
        designation: "SWE",
        company: "GlobalLogic",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "ChiragRaju S",
        designation: "SWE",
        company: "Globallogic",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Ujjawal jain",
        designation: "SDE",
        company: "Oracle",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Car Rent",
        description:
            "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Netflix",
        description:
            "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: ".NET",
                color: "green-text-gradient",
            },
            {
                name: "mongoDB",
                color: "pink-text-gradient",
            },
        ],
        image: netflix,
        source_code_link: "https://github.com/ShanuXo/Netflix-Clone",
    },
    {
        name: "Apple Store",
        description:
            "Developed a Single Page Application to showcase the new Apple product launch using React.js, Tailwind CSS, GSAP, and Three.js.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "GSAP",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: apple,
        source_code_link: "https://applexo.netlify.app/",        
    },
    {
        name: "Stack Overflow",
        description:
            " Developed a full-stack StackOverflow Clone using the MERN stack (MongoDB, Express.js, React, Node.js) with Redux for state management. This project is an essential build for beginner developers to learn full-stack development.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "Node",
                color: "green-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
            {
                name: "mongoDB",
                color: "blue-text-gradient",
            },
        ],
        image: Stackoverflow,
        source_code_link: "https://github.com/ShanuXo/Netflix-Clone",
    },
    {
        name: "Tree Link of All Profile",
        description:
            "Onelink is an experimental link-in-bio tool, where the data lives in the URL.",
        tags: [
            {
                name: "reactjs and VUEjs",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            }
        ],
        image: TreeLink,
        source_code_link: "https://linktreexo.netlify.app/",
    },
];

export { services, technologies, experiences, testimonials, projects };