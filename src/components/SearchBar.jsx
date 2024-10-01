import "../style/SearchBar.css";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className="SearchBar">
      <input className="search-input" type="text" placeholder="검색" />
      <button className="search-button">
        <IoSearch className="search-icon" size={16} />
      </button>
    </div>
  );
};

export default SearchBar;
