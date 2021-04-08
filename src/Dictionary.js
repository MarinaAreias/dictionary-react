import React, { useState } from "react";
import "./Dictionary.css";

// dictionary component with state called keyword
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  // it will alert stored keyword when searched
  function search(event) {
    event.preventDefault();
    alert(`you searched for ${keyword}`);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <header>
        <h1>This is a Dictionary</h1>
      </header>
      {/* eventListener so when it gets submited it will call a fucntion search */}
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          autoFocus={true}
          placeholder="search away"
        />
      </form>
    </div>
  );
}
