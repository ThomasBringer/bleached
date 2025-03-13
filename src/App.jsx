/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';
import './App.css';

const easeInOutQuad = (t) => {
  return t * t * (3. - 2. * t);
};

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [circleSize, setCircleSize] = useState(200.0); // Starting circle size
  const [circleT, setCircleT] = useState(0.0); // Starting circle size
  const animationRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Animation logic to loop circle size between 250px and 200px
    let dir = 1;
    const animateCircle = () => {
      setCircleT((prevT) => {
        if (dir > 0 && prevT >= 1) {
          dir = -1
        } else if (dir < 0 && prevT <= 0) {
          dir = 1
        }
        const t = prevT + .005 * dir;
        const easedT = easeInOutQuad(t)
        setCircleSize(easedT * 200 + (1 - easedT) * 250)
        return t;
      });
      animationRef.current = requestAnimationFrame(animateCircle);
    };

    animateCircle(); // Start the animation loop

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationRef.current); // Clean up animation on unmount
    };
  }, []);

  return (
    <div
      className="reveal-container"
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
        '--circle-size': `${circleSize}px`, // Use animated circle size here
      }}
    >
      {/* Hidden Layer (Red) */}
      <div className="hidden-layer">
        <h1>Hidden</h1>
      </div>

      {/* Visible Layer (Blue with Mask) */}
      <div className="visible-layer">
        <h1>Visible</h1>
      </div>
    </div>
  );
}
