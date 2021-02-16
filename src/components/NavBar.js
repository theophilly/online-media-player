import React from "react";

function NavBar(props) {
  return (
    <nav>
      <div className="logo">
        <i class="fab fa-battle-net"></i>
        <span>AfroPlayer</span>
      </div>
      <ul>
        <li>
          Download CV<i class="fas fa-arrow-down"></i>
        </li>
        <li>
          My Profile <i class="fas fa-user"></i>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
