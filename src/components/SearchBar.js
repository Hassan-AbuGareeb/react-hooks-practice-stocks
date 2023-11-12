import React from "react";

function SearchBar({ filterValue, onFilterChange, sortValue, onSortChange }) {
  function handleFilterChange(event) {
    onFilterChange(event.target.value);
  }

  function handleSortChange(event) {
    onSortChange(event.target.value);
  }
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="alphabetically"
          name="sort"
          checked={sortValue === "alphabetically"}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="price"
          name="sort"
          checked={sortValue === "price"}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange} value={filterValue}>
          <option value="all">All</option>
          <option value="tech">Tech</option>
          <option value="sportswear">Sportswear</option>
          <option value="finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
