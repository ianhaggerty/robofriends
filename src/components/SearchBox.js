import React from "react";

const SearchBox = ({ onSearchChange, value }) => {
  return (
    <div className="pas2 ma3">
      <input
        type="search"
        className="pa3 ba b--green bg-lightest-blue"
        placeholder="search robots"
        onChange={onSearchChange}
        value={value}
      />
    </div>
  );
};

export default SearchBox;
