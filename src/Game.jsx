import { useNavigate } from 'react-router-dom';
import './Game.css';
import './index.css';

export default function Game() {
  const navigate = useNavigate(); // Hook for navigation

  const handleTitleClick = () => {
    navigate('/bleached'); // Reroutes to the /bleached route
  };

  return (
    <>
      <div className="game-container">
        <h1 className="game-title" onClick={handleTitleClick}>
          Bleached
        </h1>
        <h3 style={{ marginBottom: "25px" }}>A point-and-click story about life and color.</h3>
        <div style={{ width: "1280px", height: "740px", border: "none" }}>
          <iframe
            frameBorder="0"
            src="https://itch.io/embed-upload/12820034?color=ffe7d6"
            allowFullScreen
            width="1280"
            height="740"
          >
            <a href="https://thomas-bringer.itch.io/bleached">Play Bleached on itch.io</a>
          </iframe>
        </div>
        <iframe
          frameBorder="0"
          src="https://itch.io/embed/3328660?border_width=0&amp;bg_color=ffe7d6&amp;fg_color=73464c&amp;link_color=ab5675&amp;border_color=ffe7d6"
          width="550"
          height="165"
        >
          <a href="https://thomas-bringer.itch.io/bleached">Bleached by Thomas Bringer</a>
        </iframe>
      </div>
    </>
  );
}
