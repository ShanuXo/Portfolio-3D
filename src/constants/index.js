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
        url: "https://leetcode.com/shanusah8001/",
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
        title: "Full Stack Developer",
        company_name: "GlobalLogic",
        icon: globallogic,
        iconBg: "#383E56",
        date: "Febuary 2023 - June 2023",
        points: [
            "Developing and maintaining web applications using React.js and .NET .",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing API with responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Software Engineer",
        company_name: "GlobalLogic",
        icon: globallogic,
        iconBg: "#E6DEDD",
        date: "Sep 2023",
        points: [
            "Developing and maintaining web applications using React.js, .NET, SQL,Docker.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing and Creating API's and responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#383E56",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: "OpenAI-Email-Generator",
        description:
            "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [
            {
                name: "reactjs",
                color: "blue-text-gradient",
            },
            {
                name: "node",
                color: "green-text-gradient",
            },
            {
                name: "express",
                color: "green-text-gradient",
            },
            {
                name: "openai-API",
                color: "pink-text-gradient",
            },
        ],
        image: emailgenerator,
        source_code_link: "https://github.com/ShanuXo/OpenAI-SQL-Generator",
    },
];

export { services, technologies, experiences, testimonials, projects };