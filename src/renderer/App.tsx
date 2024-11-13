import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Doc } from 'yjs';
import { BlockEditor } from '@/components/BlockEditor/BlockEditor';

const ydocInstance = new Doc();

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<BlockEditor hasCollab ydoc={ydocInstance} />}
        />
      </Routes>
    </Router>
  );
};

export default App;
