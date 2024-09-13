import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchData = (value) => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf"
    )
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((title) => {
          return (
            value &&
            original_title &&
            title &&
            title.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Search Movies..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
