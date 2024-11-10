import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import CodeMirrorEditor from '../components/CodeMirrorEditor';
import './App.css';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CodeMirrorEditor />} />
      </Routes>
    </Router>
  );
}
