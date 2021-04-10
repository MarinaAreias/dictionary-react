import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

//
// dictionary component with state called keyword
export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  // use this Hook to store the def and update the state when we get the def fro a diferent word
  let [results, setResults] = useState("");
  // pexels
  let [photos, setPhotos] = useState("");

  // call the Dictionary api
  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  // call the pexels img api
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  // it will alert stored keyword when searched
  function search(event) {
    event.preventDefault();
    //
    // API
    // doc: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    // pexels apiKey to get imgs
    const pexelsApiKey = `563492ad6f9170000100000160ce5c8ce9ac42c88900b97711c6084b`;
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
      <Photos photos={photos} />
    </div>
  );
}
