import { Link } from 'react-router-dom';
import { useNotesStore } from '../store/useNotesStore';

export const NotesList = () => {
  const notes = useNotesStore((state) => state.notes);

  return (
    <div>
      <h2>Все заметки</h2>
      {notes.map(note => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content.slice(0, 100)}...</p>
          <Link to={`/note/${note.id}`}>Открыть</Link>
        </div>
      ))}
    </div>
  );
};
