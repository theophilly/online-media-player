import React from "react";
import ReactPlayer from "react-player";
import SideBar from "./components/SideBar";
import ContentArea from "./components/ContentArea";
import MusicPlayer from "./components/MusicPlayer";

function App() {
  return (
    <div className="app">
      {/* <SideBar></SideBar>  */}
      <ContentArea></ContentArea>
      <MusicPlayer></MusicPlayer>
    </div>
  );
}

export default App;
