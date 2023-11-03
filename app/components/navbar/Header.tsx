"use client";

import { useState } from "react";
import Link from "next/link";
import "./Header.css";
import Image from "next/image";
import SearchBox from "./SearchBox";
import UserMenu from "./UserMenu";

import NavSection from "./NavSection";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Início");

  const openUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
  };

  const users = [
    { avatar: "/avatar1.png", username: "Leslie Alexander" },
    { avatar: "/avatar2.png", username: "Ronald Richards" },
    { avatar: "/avatar3.png", username: "Criar perfil" },
  ];

  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearch = (term: string) => {
    console.log("Termo de pesquisa:", term);
    setSearchTerm(term);
  };

  return (
    <header className="header-container">
      <nav className="nav">
        <div className="navImage">
          <Image
            src="/compass_logo.png"
            width={200}
            height={68}
            alt="compassLogo"
          />
        </div>
        <div className="navLeft">
          <NavSection
            icon="/icons/home.png"
            text="Início"
            link="/"
            isActive={activeTab === "Início"}
            onClick={() => handleTabClick("Início")}
          />
          <NavSection
            icon="/icons/tv.png"
            text="Séries"
            link="/series"
            isActive={activeTab === "Séries"}
            onClick={() => handleTabClick("Séries")}
          />
          <NavSection
            icon="/icons/movie.png"
            text="Filmes"
            link="/filmes"
            isActive={activeTab === "Filmes"}
            onClick={() => handleTabClick("Filmes")}
          />

          <div className="centered-item">
            <NavSection
              icon="/icons/star.png"
              text="Celebridades"
              link="/celebridades"
              isActive={activeTab === "Celebridades"}
              onClick={() => handleTabClick("Celebridades")}
            />
          </div>
        </div>
        <div className="navRight">
          {isSearchOpen ? (
            <SearchBox onSearch={handleSearch} onClose={closeSearch} />
          ) : (
            <div className="search-button" onClick={openSearch}>
              <img className="logo" src="/icons/serach.png" alt="Logo" />
              <p className="nav-item">Buscar</p>
            </div>
          )}

          {!isSearchOpen && (
            <>
              <img className="logo" src="/icons/plus.png" alt="Logo" />
              <a href="/minha-lista" className="nav-item">
                Minha lista
              </a>
            </>
          )}

          <div className="user-avatar" onClick={openUserMenu}>
            <Image
              src="/avatar.png"
              width={48}
              height={48}
              alt="Picture of the author"
            />
            <UserMenu
              users={users}
              isOpen={isUserMenuOpen}
              onClose={openUserMenu}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
