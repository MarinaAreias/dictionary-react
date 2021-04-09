import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props.phonetics);
  if (props.phonetics) {
    return (
      <div className="phonetics">
        <a href={props.phonetics.audio} target="_black">
          LISTEN
        </a>
        <br></br>
        {props.phonetics.text}
      </div>
    );
  } else {
    return null;
  }
}
