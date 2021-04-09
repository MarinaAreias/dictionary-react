import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

//
// dictionary component with state called keyword
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  // use this Hook to store the def and update the state when we get the def fro a diferent word
  let [results, setResults] = useState("");

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions);
    setResults(response.data[0]);
  }

  // it will alert stored keyword when searched
  function search(event) {
    event.preventDefault();
    //
    // API
    // doc: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      {/* eventListener so when it gets submited it will call a fucntion search */}
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            onChange={handleKeywordChange}
            autoFocus={true}
            placeholder="search away..."
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
