"use client";

import React from "react";
import "./NavSection.css";
import Link from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";

interface NavSectionProps {
  icon: string;
  text: string;
  link: string;
}

const NavSection: React.FC<NavSectionProps> = ({ icon, text, link }) => {
  const isActive = usePathname().startsWith(link);

  return (
    <div className={`sections ${isActive ? "active" : ""}`}>
      <img
        className={`logo ${isActive ? "active" : ""}`}
        src={icon}
        alt="Logo"
      />
      <Link href={link} className={`nav-item ${isActive ? "active" : ""}`}>
        {text}
      </Link>
    </div>
  );
};

export default NavSection;
