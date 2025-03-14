import { useState, useEffect, useRef } from 'react';
import './Reveal.css';
import SocialMedia from './SocialMedia';
import './Game.css';
// import { useNavigate } from 'react-router-dom';

const easeInOutQuad = (t) => {
  return t * t * (3. - 2. * t);
};

export default function Reveal() {

  const mousePosRef = useRef({ x: 0, y: 0 });
  const mousePosDefRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Function to update mouse position
    const updateMousePosition = (e) => {      
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };

    // Add event listener to track mouse movement
    document.addEventListener('mousemove', updateMousePosition);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  const scrollRef = useRef(null);  // Create a ref for the element
  const handleScroll = () => {
    mousePosDefRef.current =({ x: mousePosRef.current.x, y: scrollRef.current.scrollTop + mousePosRef.current.y });
  };

  useEffect(() => {

    const element = scrollRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);  // Listen for scroll events
    }

    return () => {
      if (element) {
        element.removeEventListener('scroll', handleScroll);  // Cleanup the event listener
      }
    };
  }, []);
  
  // const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState(200.0); // Starting circle size
  // eslint-disable-next-line no-unused-vars
  const [circleT, setCircleT] = useState(0.0); // Starting circle size
  const animationRef = useRef(null);

  // const navigate = useNavigate();
  const [playing, setPlaying] = useState(false);
  const handlePlay = () => {
    setPlaying(true)
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePosDefRef.current = ({ x: e.clientX, y: scrollRef.current.scrollTop + e.clientY });
    };

    // Add event listener for mouse move globally (on the document)
    document.addEventListener('mousemove', handleMouseMove);

    // Animation logic to loop circle size between 250px and 200px
    let dir = 1;
    const animateCircle = () => {
      setCircleT((prevT) => {
        if (dir > 0 && prevT >= 1) {
          dir = -1;
        } else if (dir < 0 && prevT <= 0) {
          dir = 1;
        }
        const t = prevT + 0.005 * dir;
        const easedT = easeInOutQuad(t);
        setCircleSize(easedT * 200 + (1 - easedT) * 250);
        return t;
      });
      animationRef.current = requestAnimationFrame(animateCircle);
    };

    animateCircle(); // Start the animation loop

    return () => {
      document.removeEventListener('mousemove', handleMouseMove); // Clean up the event listener on unmount
      cancelAnimationFrame(animationRef.current); // Clean up animation on unmount
    };
  }, []);

  return (
    <div className='layers' ref={scrollRef}
      style={{
        '--mouse-x': `${mousePosDefRef.current.x}px`,
        '--mouse-y': `${mousePosDefRef.current.y}px`,
        '--circle-size': `${circleSize}px`, // Use animated circle size here
      }}
    >

      <div className='layers2'>

      <div className="hidden-layer">
        <>
        <div className="game-container">
          <div className="game-container2">
            <div style = {{backgroundColor: "#ee6a7c", width: '100%', color: '#ffe7d6', borderRadius: "100px", paddingBottom: "5px"}}>

          <h1 className="game-title" >
            Bleached
          </h1>
          <h3>A point-and-click story about life and color.</h3>
            </div>

          <div style={{ height: '10px' }}></div>

          {!playing && (
            <>
          <button onClick={handlePlay} style={{backgroundColor: "#ffe07e"}}>Play the demo</button>
          <div style={{ height: '15px' }}></div></>
        )
          }
          {playing && (
            <div style={{ height: '740px' }}>
            </div>
          )}
          {/* {playing && (
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
          )} */}

          <button style={{backgroundColor: "#ffe07e"}} className='wishlist-button'
            onClick={() => window.location.href = 'https://store.steampowered.com/app/3589870'}>
            Wishlist Bleached on Steam!</button>
          <div style={{ height: '15px' }}></div>

          <iframe style={{visibility:'hidden'}} src="https://store.steampowered.com/widget/3589870/" 
            frameborder="0" 
            width="646" 
            height="190">
          </iframe>

          <SocialMedia></SocialMedia>

          {/* <h3>Bleached is a point-and-click interactive story about life and color.</h3>
          <h3>When every day looks the same, tints slowly fade.</h3>
          <h3>One day, your canvas is empty. Can you paint something new?</h3> */}
          
          {/* <div style={{ height: '25px'}}></div> */}

          <div className='gif-container'>
            <div className='gif-text-container'
              style = {{textAlign: 'right',  padding:"25px", backgroundColor: "#ffe07e", borderRadius: "50px"}}
            >
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
            <div className='gif-text-container' style = {{textAlign: 'left',  padding:"25px", backgroundColor: "#72dcbb", borderRadius: "50px"}}>
              <h3 className='gif-title'>Point and click on anything.</h3>
              <div className='gif-text'>Walk around, talk to friends and colleagues, take care of pets, play minigames. Everything in the scenery is interactive.</div>
            </div>
          </div>

          <div className='gif-container'>
            <div className='gif-text-container' style = {{textAlign: 'right',  padding:"25px", backgroundColor: "#34acba", color:"#ffe7d6", borderRadius: "50px"}}>
              <h3 className='gif-title'>Wake up. Work. Sleep. Repeat.</h3>
              <div className='gif-text'>Each day is the exact same picture, except that your relationships—with yourself and others—evolve.</div>
            </div>
            <div style={{ width: '50px'}}></div>
            <img className='gif' src='https://thomasbringer.github.io/bleached/gifs/work.gif' />
          </div>

          <div style={{ height: '25px'}}></div>
          <h2>Watch the Teaser Trailer for Bleached</h2>
          <div style={{ height: '10px'}}></div>

          <iframe style={{ visibility: 'hidden' }}
          width="960"
          height="540"
          src={`https://www.youtube.com/embed/Ln_3J-8sE78`}
          title="Bleached Teaser Trailer"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

          <div style={{ height: '25px'}}></div>
          <h2>Play Bleached on itch.io</h2>
          <iframe style={{ visibility: 'hidden' }}
            frameBorder="0"
            src="https://itch.io/embed/3328660?border_width=0&amp;bg_color=ffe7d6&amp;fg_color=73464c&amp;link_color=ab5675&amp;border_color=ffe7d6"
            width="550"
            height="165"
          >
            <a href="https://thomas-bringer.itch.io/bleached">Bleached by Thomas Bringer</a>
          </iframe>

        </div></div>
        </>
      </div>

      <div className="visible-layer">
      <>
      <div className="game-container">
        <div className="game-container2">
        <h1 className="game-title">
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
          <div style={{ height: '740px' }}></div>
          // <div>
          //   <div style={{ width: '1280px', height: '740px', border: 'none' }}>
          //     <iframe
          //       frameBorder="0"
          //       src="https://itch.io/embed-upload/12820034?color=ffe7d6"
          //       allowFullScreen
          //       width="1280"
          //       height="740"
          //     >
          //       <a href="https://thomas-bringer.itch.io/bleached">Play Bleached on itch.io</a>
          //     </iframe>
          //   </div>
          // </div>
        )}

        <button className='wishlist-button' style={{visibility: 'hidden', pointerEvents: 'none'}}
          onClick={() => window.location.href = 'https://store.steampowered.com/app/3589870'}>
          Wishlist Bleached on Steam!</button>
        <div style={{ height: '15px' }}></div>

        <iframe style={{visibility:'hidden'}} src="https://store.steampowered.com/widget/3589870/" 
            frameborder="0" 
            width="646" 
            height="190">
          </iframe>

        <SocialMedia></SocialMedia>


        {/* <h3>Bleached is a point-and-click interactive story about life and color.</h3>
        <h3>When every day looks the same, tints slowly fade.</h3>
        <h3>One day, your canvas is empty. Can you paint something new?</h3> */}
        
        {/* <div style={{ height: '25px'}}></div> */}

        <div className='gif-container'>
          <div className='gif-text-container' style = {{textAlign: 'right',  padding:"25px"}}>
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
          <div className='gif-text-container' style = {{textAlign: 'left',  padding:"25px"}}>
            <h3 className='gif-title'>Point and click on anything.</h3>
            <div className='gif-text'>Walk around, talk to friends and colleagues, take care of pets, play minigames. Everything in the scenery is interactive.</div>
          </div>
        </div>

        <div className='gif-container'>
          <div className='gif-text-container' style = {{textAlign: 'right',  padding:"25px"}}>
            <h3 className='gif-title'>Wake up. Work. Sleep. Repeat.</h3>
            <div className='gif-text'>Each day is the exact same picture, except that your relationships—with yourself and others—evolve.</div>
          </div>
          <div style={{ width: '50px'}}></div>
          <img className='gif' src='https://thomasbringer.github.io/bleached/gifs/work.gif' />
        </div>

        <div style={{ height: '25px'}}></div>
        <h2>Watch the Teaser Trailer for Bleached</h2>
        <div style={{ height: '10px'}}></div>

        <iframe style={{ visibility: 'hidden' }}
        width="960"
        height="540"
        src={`https://www.youtube.com/embed/Ln_3J-8sE78`}
        title="Bleached Teaser Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

        <div style={{ height: '25px'}}></div>
        <h2>Play Bleached on itch.io</h2>
        <iframe style={{ visibility: 'hidden' }}
          frameBorder="0"
          src="https://itch.io/embed/3328660?border_width=0&amp;bg_color=ffe7d6&amp;fg_color=73464c&amp;link_color=ab5675&amp;border_color=ffe7d6"
          width="550"
          height="165"
        >
          <a href="https://thomas-bringer.itch.io/bleached">Bleached by Thomas Bringer</a>
        </iframe>

      </div></div>
    </>
      </div>

      <div className="interactive-layer">
      <>
      <div className="game-container">
        <div className="game-container2">
        <h1 className="game-title" style={{ visibility: 'hidden' }}>
          Bleached
        </h1>
        <h3 style={{ visibility: 'hidden' }}>A point-and-click story about life and color.</h3>

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

        <button className='wishlist-button'
          onClick={() => window.location.href = 'https://store.steampowered.com/app/3589870'}>
          Wishlist Bleached on Steam!</button>
        <div style={{ height: '15px' }}></div>

        <iframe src="https://store.steampowered.com/widget/3589870/" 
          frameborder="0" 
          width="646" 
          height="190">
        </iframe>

        <SocialMedia></SocialMedia>

        {/* <h3>Bleached is a point-and-click interactive story about life and color.</h3>
        <h3>When every day looks the same, tints slowly fade.</h3>
        <h3>One day, your canvas is empty. Can you paint something new?</h3> */}
        
        {/* <div style={{ height: '25px'}}></div> */}

        <div className='gif-container' style={{ visibility: 'hidden' }}>
          <div className='gif-text-container' style = {{textAlign: 'right',  padding:"25px"}}>
            <h3 className='gif-title'>Recolor the world around you.</h3>
            <div className='gif-text'>Your environment is turning white... and painting new shades isn't so simple. With time, perhaps new strokes can bring new perspectives.</div>
          </div>
          <div style={{ width: '50px'}}></div>
          <img className='gif' src='https://thomasbringer.github.io/bleached/gifs/home.gif' />
        </div>

        <div style={{ height: '35px'}}></div>

        <div className='gif-container' style={{ visibility: 'hidden' }}>
          <img className='gif' src='https://thomasbringer.github.io/bleached/gifs/subway.gif' />
          <div style={{ width: '50px'}}></div>
          <div className='gif-text-container' style = {{textAlign: 'left', padding:"25px"}}>
            <h3 className='gif-title'>Point and click on anything.</h3>
            <div className='gif-text'>Walk around, talk to friends and colleagues, take care of pets, play minigames. Everything in the scenery is interactive.</div>
          </div>
        </div>

        <div className='gif-container' style={{ visibility: 'hidden' }}>
          <div className='gif-text-container' style = {{textAlign: 'right',  padding:"25px"}}>
            <h3 className='gif-title'>Wake up. Work. Sleep. Repeat.</h3>
            <div className='gif-text'>Each day is the exact same picture, except that your relationships—with yourself and others—evolve.</div>
          </div>
          <div style={{ width: '50px'}}></div>
          <img className='gif' src='https://thomasbringer.github.io/bleached/gifs/work.gif' />
        </div>

        <div style={{ height: '25px'}}></div>
        <h2 style={{ visibility: 'hidden' }}>Watch the Teaser Trailer for Bleached</h2>
        <div style={{ height: '10px'}}></div>

        <iframe
        width="960"
        height="540"
        src={`https://www.youtube.com/embed/Ln_3J-8sE78`}
        title="Bleached Teaser Trailer"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

        <div style={{ height: '25px'}}></div>
        <h2 style={{ visibility: 'hidden' }}>Play Bleached on itch.io</h2>
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
      </div>

      </div>
    </div>
  );
}
