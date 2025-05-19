import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotesList } from './components/NotesList';
import { NoteDetail } from './pages/NoteDetail'; 
import { ArchivedNotes } from './pages/ArchivedNotes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NotesList />} />
        <Route path="/note/:id" element={<NoteDetail />} />
        <Route path="/archived" element={<ArchivedNotes />} />
      </Routes>
    </Router>
  );
}

export default App;
