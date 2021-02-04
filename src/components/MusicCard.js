import React from "react";
import kolade from "./pami.jpeg";

function MusicCard(props) {
  return (
    <div className="musiccard">
      <img src={kolade}></img>
      <div>
        <p>Cooking Book</p>
        <p>davido</p>
      </div>
    </div>
  );
}

export default MusicCard;
