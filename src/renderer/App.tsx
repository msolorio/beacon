import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import CodeMirrorEditor from '../components/CodeMirrorEditor';
import TipTapEditor from '../components/TipTapEditor';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="card">
              <TipTapEditor />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
