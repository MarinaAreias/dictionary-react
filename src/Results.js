import React from "react";
import "./Results.css";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2>{props.results.word}</h2>

          {/* add PHONETICS and sound */}
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetics={phonetic} />
              </div>
            );
          })}
        </section>

        {/* add meanings  */}
        {props.results.meanings.map(function (meaning, index) {
          // API has to many meanins and def to loop through
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
