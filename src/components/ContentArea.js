import React from "react";
import MusicDetails from "./MusicDetails";
import MusicCard from "./MusicCard";

function ContentArea(props) {
  return (
    <div className="contentarea">
      <MusicDetails></MusicDetails>
      <MusicDetails></MusicDetails>
      <MusicDetails></MusicDetails>
    </div>
  );
}

export default ContentArea;
