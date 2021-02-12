import React from "react";
import pami from "./omo.jpeg";

function MusicPlayer(props) {
  return (
    <div className="musicplayer">
      <div className="section1">
        <img src={pami}></img>
        <div className="section1inner">
          <p>Lil-Frosh-Omo-Ologo-ft.-Zinoleesky</p>
          <p> Lil Frosh</p>
        </div>
      </div>
      <div className="section2">
        <div className="upper">
          <p id="random">
            <i class="fas fa-random"></i>
          </p>
          <p id="previous">
            <i class="fas fa-step-backward"></i>
          </p>
          <p id="play">
            <i class="fas fa-play"></i>
          </p>
          <p id="next">
            <i class="fas fa-step-forward"></i>
          </p>
          <p id="repeat">
            <i class="fas fa-redo"></i>
          </p>
        </div>
        <div className="lower">
          <span>0:19</span>
          <input type="range" id="vol" name="vol" min="0" max="50"></input>
          <span>5:07</span>
        </div>
      </div>
      <div className="section3"></div>
    </div>
  );
}

export default MusicPlayer;
