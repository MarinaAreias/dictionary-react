import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics) {
    return (
      <div className="phonetics">
        {/* MAYBE USE HTML5 API to play audio  */}
        <a href={props.phonetics.audio} target="_black">
          LISTEN
        </a>
        <span className="text">{props.phonetics.text}</span>
      </div>
    );
  } else {
    return null;
  }
}
