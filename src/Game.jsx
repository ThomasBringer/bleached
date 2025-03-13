import { useNavigate } from 'react-router-dom';
import './Game.css';
import SocialMedia from './SocialMedia';
import { useState } from 'react';

export default function Game() {
  const navigate = useNavigate(); // Hook for navigation

  const handleTitleClick = () => {
    navigate('/bleached/'); // Reroutes to the /bleached route
  };

  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    setPlaying(true)
  };

  return (
    <>
      <div className="game-container">
        <div className="game-container2">
        <h1 className="game-title" onClick={handleTitleClick}>
          Bleached
        </h1>
        <h3>A point-and-click story about life and color.</h3>

        <div style={{ height: '15px' }}></div>

        {!playing && (
          <>
        <button onClick={handlePlay}>Play the demo</button>
        <div style={{ height: '15px' }}></div></>
      )
        }
        {playing && (
          <div>
            <div style={{ width: '1280px', height: '740px', border: 'none' }}>
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
          </div>
        )}

        <SocialMedia></SocialMedia>

        {/* <h3>Bleached is a point-and-click interactive story about life and color.</h3>
        <h3>When every day looks the same, tints slowly fade.</h3>
        <h3>One day, your canvas is empty. Can you paint something new?</h3> */}
        
        {/* <div style={{ height: '25px'}}></div> */}

        <div className='gif-container'>
          <div className='gif-text-container' style = {{textAlign: 'right'}}>
            <h3 className='gif-title'>Recolor the world around you.</h3>
            <div className='gif-text'>Your environment is turning white... and painting new shades isn't so simple. With time, perhaps new strokes can bring new perspectives.</div>
          </div>
          <div style={{ width: '50px'}}></div>
          <img className='gif' src='https://thomasbringer.github.io/bleached/gifs/home.gif' />
        </div>

        <div style={{ height: '35px'}}></div>

        <div className='gif-container'>
          <img className='gif' src='https://thomasbringer.github.io/bleached/gifs/subway.gif' />
          <div style={{ width: '50px'}}></div>
          <div className='gif-text-container' style = {{textAlign: 'left'}}>
            <h3 className='gif-title'>Point and click on anything.</h3>
            <div className='gif-text'>Walk around, talk to friends and colleagues, take care of pets, play minigames. Everything in the scenery is interactive.</div>
          </div>
        </div>

        <div className='gif-container'>
          <div className='gif-text-container' style = {{textAlign: 'right'}}>
            <h3 className='gif-title'>Wake up. Work. Sleep. Repeat.</h3>
            <div className='gif-text'>Each day is the exact same picture, except that your relationships—with yourself and others—evolve.</div>
          </div>
          <div style={{ width: '50px'}}></div>
          <img className='gif' src='https://thomasbringer.github.io/bleached/gifs/work.gif' />
        </div>

        <div style={{ height: '25px'}}></div>
        <h2>Watch the Teaser Trailer for Bleached</h2>
        <div style={{ height: '10px'}}></div>

        <iframe
        width="960"
        height="540"
        src={`https://www.youtube.com/embed/nqyUEa46Dhs`}
        title="Bleached Teaser Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

        <div style={{ height: '25px'}}></div>
        <h2>Play Bleached on itch.io</h2>
        <iframe
          frameBorder="0"
          src="https://itch.io/embed/3328660?border_width=0&amp;bg_color=ffe7d6&amp;fg_color=73464c&amp;link_color=ab5675&amp;border_color=ffe7d6"
          width="550"
          height="165"
        >
          <a href="https://thomas-bringer.itch.io/bleached">Bleached by Thomas Bringer</a>
        </iframe>

      </div></div>
    </>
  );
}
