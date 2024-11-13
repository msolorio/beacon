import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import TipTapEditor from '../components/TipTapEditor';
import TestComponent from '../components/TestComponent';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TipTapEditor />} />
      </Routes>
    </Router>
  );
};

export default App;
