import React from "react";
import "./NavSection.css";
import { useTabContext } from "./TabContext"; // Importe useTabContext


interface NavSectionProps {
  icon: string;
  text: string;
  link: string;
  isActive: boolean; 
  onClick: () => void; 
}

const NavSection: React.FC<NavSectionProps> = ({
  icon,
  text,
  link,
  isActive,
  onClick,
}) => {

  const { activeTab, setActiveTab } = useTabContext(); 

  return (
    <div className={`sections ${isActive ? "active" : ""}`} 
    onClick={() => {
      setActiveTab(text); 
      onClick();
    }}
    >
      
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
