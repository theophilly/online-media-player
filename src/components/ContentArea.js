import React from "react";
import MusicDetails from "./MusicDetails";
import MusicCard from "./MusicCard";
import NavBar from "./NavBar";

function ContentArea(props) {
  return (
    <div className="wholewrapper">
      <NavBar></NavBar>
      <div className="contentarea">
        <div className="contentareacontainer">
          <div className="intro">
            <p id="intro">My Playlist </p>
            <p id="introsub">I dont just code, I enjoy good music</p>
          </div>

          <button>
            <i class="fas fa-play"></i>Play
          </button>

          <MusicDetails></MusicDetails>
          <MusicDetails></MusicDetails>
          <MusicDetails></MusicDetails>
        </div>
      </div>
    </div>
  );
}

export default ContentArea;
