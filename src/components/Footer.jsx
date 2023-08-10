import React from "react";
import { FaLinkedin, FaGithub, FaDiscord, FaPhone, FaEnvelope } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto flex justify-between items-center">
                <div className="contact-info">
                    <p className="flex items-center">
                        <FaPhone className="mr-2" /> Your Phone Number
                    </p>
                    <p className="flex items-center">
                        <FaEnvelope className="mr-2" /> Your Gmail Address
                    </p>
                </div>
                <div className="social-links flex space-x-4">
                    <a href="https://www.linkedin.com/your-profile-link" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-xl" />
                    </a>
                    <a href="https://github.com/your-profile-link" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-xl" />
                    </a>
                    <a href="https://discordapp.com/your-profile-link" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="text-xl" />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
