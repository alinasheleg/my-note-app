'use client';

import { useNotesStore } from '@/store/useNotesStore';

export default function ArchivedNotes() {
  const notes = useNotesStore((state) => state.notes.filter((n) => n.archived));
  const restoreNote = useNotesStore((state) => state.restoreNote);
  const deleteNote = useNotesStore((state) => state.deleteNote);

  if (notes.length === 0) {
    return <p>Архив пуст.</p>;
  }

  return (
    <div>
      <h2>Архивные заметки</h2>
      {notes.map((note) => (
        <div key={note.id} className="mb-3 p-3 border rounded">
          <h3>{note.title}</h3>
          <p>{note.content.length > 100 ? note.content.slice(0, 100) + '...' : note.content}</p>
          <button
            className="btn btn-sm btn-primary me-2"
            onClick={() => restoreNote(note.id)}
          >
            Восстановить
          </button>
          <button
            className="btn btn-sm btn-danger"
            onClick={() => deleteNote(note.id)}
          >
            Удалить навсегда
          </button>
        </div>
      ))}
    </div>
  );
}
