import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className="reveal-container"
      style={{
        '--mouse-x': `${mousePos.x}px`,
        '--mouse-y': `${mousePos.y}px`,
      }}
    >
      {/* Hidden Layer (Red) */}
      <div className="hidden-layer" >
        <h1>Hidden</h1>
      </div>

      {/* Visible Layer (Blue with Mask) */}
      <div className="visible-layer" >
        <h1>Visible</h1>
      </div>
    </div>
  );
}
