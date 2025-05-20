import { useNotesStore } from '../store/useNotesStore';
import { useMemo } from 'react';

export default function ArchivedNotes() {
  const allNotes = useNotesStore((state) => state.notes);
  const restoreNote = useNotesStore((state) => state.restoreNote);
  const deleteNote = useNotesStore((state) => state.deleteNote);

  const notes = useMemo(
    () => allNotes.filter((n) => n.archived),
    [allNotes]
  );

  return (
    <div>
      <h2>Архивированные заметки</h2>
      {notes.length === 0 ? (
        <p>Архив пуст.</p>
      ) : (
        notes.map((note) => (
          <div key={note.id} className="note-preview">
            <h3>{note.title}</h3>
            <p>{note.content.slice(0, 100)}...</p>
            <button onClick={() => restoreNote(note.id)}>Восстановить</button>
            <button onClick={() => deleteNote(note.id)}>Удалить навсегда</button>
          </div>
        ))
      )}
    </div>
  );
}
