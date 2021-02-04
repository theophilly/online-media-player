import React from "react";
import kolade from "./kolade.jfif";

function MusicDetails(props) {
  return (
    <div className="musicdetails">
      <span>01</span>
      <img src={kolade}></img>
      <div className="musicdetailsinner">
        <p>Gods Kingdom rules</p>
        <div className="musicdetailsinner2">
          <p className="label">sony music</p>
          <p>3:20</p>
        </div>
      </div>
    </div>
  );
}

export default MusicDetails;
