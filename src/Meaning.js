import React from "react";
import "./Meaning.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {/* definition */}
            <dive className="definition">{definition.definition}</dive>
            {/* example */}
            <div className="example">
              <em>{definition.example}</em>
            </div>

            {/* because not everyword has synonyms */}
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
