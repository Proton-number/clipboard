import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Top from "./Components/Top";
import Keep from "./Components/Keep";
import Access from "./Components/Access";
import Super from "./Components/Super";
import Clipboard from "./Components/Clipboard";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Top />
      <Keep />
      <Access />
      <Super />
      <Clipboard />
      <Footer />
    </>
  );
}

export default App;
