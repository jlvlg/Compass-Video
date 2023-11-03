import React from "react";
import "./NavSection.css";

interface NavSectionProps {
  icon: string;
  text: string;
  link: string;
  isActive: boolean; // New prop for active state
  onClick: () => void; // Callback function for handling clicks
}

const NavSection: React.FC<NavSectionProps> = ({
  icon,
  text,
  link,
  isActive,
  onClick,
}) => {
  return (
    <div className={`sections ${isActive ? "active" : ""}`}>
      <img
        className={`logo ${isActive ? "active" : ""}`}
        src={icon}
        alt="Logo"
      />
      <a
        href={link}
        className={`nav-item ${isActive ? "active" : ""}`}
        onClick={onClick}
      >
        {text}
      </a>
    </div>
  );
};

export default NavSection;
