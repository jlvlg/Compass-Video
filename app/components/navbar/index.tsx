"use client";

import { useState } from "react";
import Link from "next/link";
import "./index.css";
import Image from "next/image";
import SearchBox from "./SearchBox";
import UserMenu from "./UserMenu";
import NavSection from "./NavSection";

const Header: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState<string | null>(null);
  const [selectedUsername, setSelectedUsername] = useState<string | null>(null);

  const handleAvatarChange = (newAvatar: string) => {
    setSelectedAvatar(newAvatar);
  
    if (selectedAvatar === null) {
      setSelectedUsername("David Anderson");
    }
  
    closeUserMenu();
  };

  const closeUserMenu = () => {
    setIsUserMenuOpen(false);
  };

  const openUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const users = [
    { avatar: "/avatar1.png", username: "Leslie Alexander" },
    { avatar: "/avatar2.png", username: "Ronald Richards" },
    {
      avatar: selectedAvatar ? "/avatar.png" : "/avatar3.png",
      username: selectedAvatar ? "David Anderson" : "Criar perfil",
    },
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
    <header className="headerContainer">
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
          <NavSection icon="/icons/home.png" text="Início" link="/home" />
          <NavSection icon="/icons/tv.png" text="Séries" link="/series" />
          <NavSection
            icon="/icons/movie.png"
            text="Filmes"
            link="/playermedia"
          />

          <div className="centeredItem">
            <NavSection
              icon="/icons/star.png"
              text="Celebridades"
              link="/celebridades"
            />
          </div>
        </div>
        <div className="navRight">
          {isSearchOpen ? (
            <SearchBox onSearch={handleSearch} onClose={closeSearch} />
          ) : (
            <div className="searchButton" onClick={openSearch}>
              <img className="logo" src="/icons/serach.png" alt="Logo" />
              <p className="navItem">Buscar</p>
            </div>
          )}

          {!isSearchOpen && (
            <>
              <img className="logo" src="/icons/plus.png" alt="Logo" />
              <a href="/minha-lista" className="navItem">
                Minha lista
              </a>
            </>
          )}

          <div className="userAvatar" onClick={openUserMenu}>
            <Image
              src={selectedAvatar || "/avatar.png"}
              width={48}
              height={48}
              alt="Picture of the author"
            />
            <UserMenu
              users={users}
              isOpen={isUserMenuOpen}
              onClose={closeUserMenu}
              onAvatarChange={handleAvatarChange}
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
