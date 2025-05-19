import { Link } from 'react-router-dom';
import { useNotesStore } from '../store/useNotesStore';

export function NotesList() {
  const notes = useNotesStore((state) =>
    state.notes.filter((n) => !n.archived)
  );

  return (
    <div>
      <h2>Все заметки</h2>
      {notes.map((note) => (
        <div key={note.id} className="note-preview">
          <Link to={`/note/${note.id}`}>
            <h3>{note.title}</h3>
            <p>{note.content.slice(0, 100)}...</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
