import { Link } from 'react-router-dom';
import { useNotesStore } from '../store/useNotesStore';
import { useMemo } from 'react';

export function NotesList() {
  const allNotes = useNotesStore((state) => state.notes);

  const notes = useMemo(
    () => allNotes.filter((n) => !n.archived),
    [allNotes]
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
