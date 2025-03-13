import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from './Game';
import Reveal from './Reveal';

export default function App() {
  return (
    <Router>
        <Routes>
          {/* Main route */}
          <Route path="/bleached/" element={<Reveal />} />
          
          {/* /play route */}
          <Route path="/bleached/play" element={<Game />} />
        </Routes>
    </Router>
  );
}
