import { useState } from "react";
import "./SearchBox.css";


type SearchBoxProps = {
  onSearch: (term: string) => void;
  onClose: () => void;
};

const SearchBox: React.FC<SearchBoxProps> = ({ onSearch, onClose }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedOption, setSelectedOption] = useState("Filmes"); // Definir "Filmes" como a opção inicial
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = ["Tudo", "Filmes", "Coleções", "Séries", "Celebridades"];

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleClose = () => {
    onClose();
  };

  const handleSelectClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="search-box">
      <input
        id="input_nav"
        type="text"
        placeholder="Filme, série ou celebridade"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className="select-nav" id="select" onClick={handleSelectClick}>
        <div className="selected-option">
          <div className="selected-icon">{selectedOption}</div>
          <span className="arrow-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1rem"
              height="1rem"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M13.3535 7.03799L8.35354 12.038C8.3071 12.0845 8.25196 12.1214 8.19126 12.1465C8.13056 12.1717 8.0655 12.1846 7.99979 12.1846C7.93408 12.1846 7.86902 12.1717 7.80832 12.1465C7.74762 12.1214 7.69248 12.0845 7.64604 12.038L2.64604 7.03799C2.55222 6.94417 2.49951 6.81692 2.49951 6.68424C2.49951 6.55156 2.55222 6.42431 2.64604 6.33049C2.73986 6.23667 2.86711 6.18396 2.99979 6.18396C3.13247 6.18396 3.25972 6.23667 3.35354 6.33049L7.99979 10.9774L12.646 6.33049C12.6925 6.28403 12.7476 6.24718 12.8083 6.22204C12.8690 6.19690 12.9341 6.18396 12.9998 6.18396C13.0655 6.18396 13.1305 6.19690 13.1912 6.22204C13.2519 6.24718 13.3071 6.28403 13.3535 6.33049C13.4 6.37694 13.4368 6.43209 13.462 6.49279C13.4871 6.55349 13.5001 6.61854 13.5001 6.68424C13.5001 6.74994 13.4871 6.81499 13.462 6.87569C13.4368 6.93638 13.4 6.99153 13.3535 7.03799Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
        {isDropdownOpen && (
          <ul className="dropdown-options">
            {options.map((option, index) => (
              <li key={index} onClick={() => handleOptionClick(option)}>
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="search-icons">
        <div className="search-icon" onClick={handleSearch}>
          <img src="/icons/serach.png" alt="Buscar" width={24} height={24} />
        </div>
        <div className="close-icon" onClick={handleClose}>
          <img src="/icons/close.png" alt="Fechar" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
