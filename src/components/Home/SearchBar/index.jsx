import React from "react";
import "./styles.css";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
const SearchBar = ({ value, changeInput }) => (
  <div className="searchBar-wrap">
    <Link to={`/`}>
      <i class="fas fa-home"></i>
    </Link>
    <SearchIcon className="searchBar-icon" />
    <input
      type="text"
      placeholder="Tìm Kiếm "
      value={value}
      onChange={changeInput}
    />
  </div>
);

export default SearchBar;
