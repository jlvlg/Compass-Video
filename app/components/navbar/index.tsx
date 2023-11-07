"use client";

import compass from "@/public/compass.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.scss";
import Navlink from "./Navlink";
import home from "@/public/icons/home.svg";
import tv from "@/public/icons/tv.svg";
import movie from "@/public/icons/movie.svg";
import star from "@/public/icons/star.svg";
import plus from "@/public/icons/plus2.svg";
import Search from "@/public/icons/search.svg";
import avatar from "@/public/avatar.png";
import { usePathname, useRouter } from "next/navigation";
import SearchBar from "./SearchBar";
import useLogin from "@/util/hooks/useLogin";

type Props = {};

export default function Navbar({}: Props) {
  const sessionId = useLogin();
  const active = usePathname();
  const router = useRouter();
  const [isSearchOpen, setIsSearchBarOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [filter, setFilter] = useState("Tudo");

  function openFilter() {
    setIsFilterOpen(true);
  }

  function closeFilter() {
    setIsFilterOpen(false);
  }

  function openSearchBar() {
    setIsSearchBarOpen(true);
    closeFilter();
  }

  function closeSearchBar() {
    setIsSearchBarOpen(false);
    closeFilter();
  }

  function filterSelect(option: string) {
    setFilter(option);
    closeFilter();
  }

  function onSearch(value: string) {
    router.replace(`/search?value=${value}&filter=${filter}`);
  }

  return (
    <nav className={styles.toplevel}>
      <Link
        href="/home"
        className={`${styles.logo} ${
          active.startsWith("/home") ? styles.active : ""
        }`}>
        <Image src={compass} alt="Compass Logo" />
      </Link>
      <div className={styles.navleft}>
        <Navlink href="/home" icon={home} current={active}>
          Início
        </Navlink>
        <Navlink href="/series" icon={tv} current={active}>
          Séries
        </Navlink>
        <Navlink href="/movies" icon={movie} current={active}>
          Filmes
        </Navlink>
        <Navlink href="/stars" icon={star} current={active}>
          Celebridades
        </Navlink>
      </div>
      <div className={styles.navright}>
        {isSearchOpen ? (
          <SearchBar
            filter={filter}
            onClose={closeSearchBar}
            openFilter={openFilter}
            closeFilter={closeFilter}
            onSelect={filterSelect}
            isFilterOpen={isFilterOpen}
            onSearch={onSearch}
          />
        ) : (
          <>
            <button
              className={`${styles.navlink} ${styles.search}`}
              onClick={openSearchBar}>
              <Search /> Buscar
            </button>
            {sessionId && (
              <Navlink href="/watchlist" icon={plus} current={active}>
                Minha lista
              </Navlink>
            )}
          </>
        )}
        {sessionId ? (
          <button className={styles.avatar}>
            <Image src={avatar} alt="Avatar" />
          </button>
        ) : (
          <Link href="/" className={styles.navlink}>
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}
