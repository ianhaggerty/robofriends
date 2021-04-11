import React from "react";

const SearchBox = ({ onSearchChange }) => {
  return (
    <div className="pas2 ma3">
      <input
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="search robots"
        onChange={onSearchChange}
      />
    </div>
  );
};

export default SearchBox;
