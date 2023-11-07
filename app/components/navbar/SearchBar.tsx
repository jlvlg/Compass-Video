import Caret from "@/public/icons/caret.svg";
import Close from "@/public/icons/close.svg";
import Search from "@/public/icons/search.svg";
import styles from "./SearchBar.module.scss";
import Filter from "./Filter";
import { FormEvent } from "react";

type Props = {
  onClose: () => void;
  openFilter: () => void;
  closeFilter: () => void;
  onSelect: (option: string) => void;
  onSearch: (value: string) => void;
  filter: string;
  isFilterOpen: boolean;
};

export default function SearchBar({
  onClose,
  filter,
  openFilter,
  closeFilter,
  isFilterOpen,
  onSelect,
  onSearch,
}: Props) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    const data = new FormData(event.currentTarget);
    event.preventDefault();
    onSearch(data.get("searchbarinput")?.toString()!);
  }

  return (
    <form
      className={styles.searchbar}
      onSubmit={(event) => handleSubmit(event)}>
      <input
        aria-label="Buscar por filme, série, ou celebridade"
        name="searchbarinput"
        type="text"
        placeholder="Filme, série, ou celebridade"
      />
      <div className={styles.controls}>
        <div style={{ position: "relative" }}>
          <button
            type="button"
            className={styles.select}
            onClick={isFilterOpen ? closeFilter : openFilter}>
            {filter}
            <Caret />
          </button>
          <Filter onSelect={onSelect} isOpen={isFilterOpen} />
        </div>
        <button>
          <Search />
        </button>
        <button onClick={onClose}>
          <Close />
        </button>
      </div>
    </form>
  );
}
