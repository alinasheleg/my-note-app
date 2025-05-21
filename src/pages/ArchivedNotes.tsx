'use client';

import { useNotesStore } from "@/store/useNotesStore";

export function ArchivedNotes() {
  const archivedNotes = useNotesStore((state) => state.archivedNotes);
  const restoreNote = useNotesStore((state) => state.restoreNote);
  const permanentlyDeleteNote = useNotesStore((state) => state.permanentlyDeleteNote);

  if (archivedNotes.length === 0) {
    return <p className="text-muted">Архив пуст.</p>;
  }

  return (
    <ul className="list-group mt-4">
      {archivedNotes.map((note) => (
        <li key={note.id} className="list-group-item border rounded shadow-sm mb-3">
          <h5 className="fw-semibold text-secondary">{note.title}</h5>
          <p>{note.content}</p>
          <div className="mt-2">
            <button
              onClick={() => restoreNote(note.id)}
              className="btn btn-sm btn-success me-2"
            >
              Восстановить
            </button>
            <button
              onClick={() => permanentlyDeleteNote(note.id)}
              className="btn btn-sm btn-danger"
            >
              Удалить навсегда
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
