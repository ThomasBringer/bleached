import { useState, useEffect, useRef } from 'react';
import './Reveal.css';
import { useNavigate } from 'react-router-dom';

const easeInOutQuad = (t) => {
  return t * t * (3. - 2. * t);
};

export default function Reveal() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState(200.0); // Starting circle size
  // eslint-disable-next-line no-unused-vars
  const [circleT, setCircleT] = useState(0.0); // Starting circle size
  const animationRef = useRef(null);

  const navigate = useNavigate();
  const handlePlay = () => {
    navigate('/bleached/play/');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
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
    <div
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--circle-size': `${circleSize}px`, // Use animated circle size here
      }}
    >
      {/* Hidden Layer (Red) */}
      <div className="hidden-layer">
        <h1>Hidden</h1>
        <div>Hidden</div>
        <button onClick={handlePlay}>Play the demo</button>
      </div>

      {/* Visible Layer (Blue with Mask) */}
      <div className="visible-layer">
        <h1>Visible</h1>
        <div>Visible</div>
        <button>Play the demo</button>
      </div>
    </div>
  );
}
