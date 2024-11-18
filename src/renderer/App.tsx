import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Doc } from 'yjs';
import { BlockEditor } from '@/components/BlockEditor/BlockEditor';

const ydocInstance = new Doc();

const App = () => {
  return (
    <Router>
      <div>
        <header>
          <h1>Collaborative Block Editor</h1>
        </header>
        <Routes>
          <Route
            path="/"
            element={<BloZkEditor hasCollab ydoc={ydocInstance} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
