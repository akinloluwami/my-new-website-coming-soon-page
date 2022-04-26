import { useState } from "react";
import { IoIosArrowDown, IoMdClose } from "react-icons/io";
import "./App.scss";
import { SiTwitter, SiGithub, SiHashnode, SiGmail } from "react-icons/si";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="app">
      <div className="top_bar">
        <h1>Akinkunmi</h1>
      </div>
      <div className="main">
        <h1>Reconstructing...</h1>
      </div>
      <button onClick={handleClick}>
        <IoIosArrowDown />
      </button>
      <div className={`get_in_touch ${isOpen ? "active" : "get_in_touch"}`}>
        <button onClick={handleClick}>
          <IoMdClose />
        </button>
        <h3>Get In Touch</h3>
        <div className="links">
          <a href="https://www.twitter.com/bossoncode" target="_blank">
            <SiTwitter />
          </a>
          <a href="https://www.github.com/bossoncode" target="_blank">
            <SiGithub />
          </a>
          <a href="https://bossoncode.hashnode.dev/" target="_blank">
            <SiHashnode />
          </a>
          <a href="mailto:akinkunmiisrael41@gmail.com" target="_blank">
            <SiGmail />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
