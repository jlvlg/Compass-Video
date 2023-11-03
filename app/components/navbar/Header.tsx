"use client"; // 👈 use it here

import { useState } from "react";
import Link from "next/link";
import "./Header.css";
import Image from "next/image";
import SearchBox from "./SearchBox";
import UserMenu from "./UserMenu";


const Header: React.FC = () => {
  const users = [
    { avatar: "/avatar1.png", username: "Leslie Alexander" },
    { avatar: "/avatar2.png", username: "Ronald Richards" },
    { avatar: "/avatar3.png", username: "Crear perfil" },
  ];
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  const openSearch = () => {
    setIsSearchOpen(true);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const openUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
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
          <img className="logo" src="/icons/home.png" alt="Logo" />
          <Link href="/" className="nav-item">
            Início
          </Link>

          <img className="logo" src="/icons/tv.png" alt="Logo" />
          <Link href="/series" className="nav-item">
            Séries
          </Link>

          <img className="logo" src="/icons/movie.png" alt="Logo" />
          <Link href="/filmes" className="nav-item">
            Filmes
          </Link>
          <div className="centered-item">
          
          <img className="logo" src="/icons/star.png" alt="Logo"/>
          <Link href="/celebridades" className="nav-item" id="celebridades">
            Celebridades
          </Link>

          </div>
        </div>

        <div className="navRight">
          {isSearchOpen ? (
            <SearchBox onSearch={handleSearch} onClose={closeSearch} />
          ) : (
            <div className="search-button" onClick={openSearch}>
              <img className="logo" src="/icons/serach.png" alt="Logo" />
              <p className="nav-item">Buscar</p>

              <img className="logo" src="/icons/plus.png" alt="Logo" />
              <Link href="/minha-lista" className="nav-item" >
                Minha lista
              </Link>
            </div>
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
