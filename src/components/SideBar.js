import React from "react";
import kolade from "./kolade.jfif";

function SideBar(props) {
  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img src={kolade}></img>
        <p>Adeyemi Kolade</p>
        <span>theophilly20@gmail.com</span>
      </div>

      <ul>
        <li>
          <i class="fas fa-home active"></i>Home
        </li>
        <li>
          <i class="fas fa-th-list"></i>Playlist
        </li>
        <li>
          <i class="fas fa-compact-disc"></i>Album
        </li>
        <li>
          <i class="fas fa-user"></i>Artists
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
