import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  // Trigger search when the button is clicked
  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity(""); // Clear input field
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
