import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

// dictionary component with state called keyword
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  // it will alert stored keyword when searched
  function search(event) {
    event.preventDefault();
    //
    // API
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
