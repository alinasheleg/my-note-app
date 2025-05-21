import { useNotesStore } from "@/store/useNotesStore";

export function ArchivedNotes() {
  const archivedNotes = useNotesStore((state) => state.archivedNotes);
  const restoreNote = useNotesStore((state) => state.restoreNote);
  const permanentlyDeleteNote = useNotesStore((state) => state.permanentlyDeleteNote);

  if (archivedNotes.length === 0) {
    return <p>Архив пуст.</p>;
  }

  return (
    <ul className="list-group">
      {archivedNotes.map((note) => (
        <li key={note.id} className="list-group-item">
          <h5>{note.title}</h5>
          <p>{note.content}</p>
          <div>
            <button onClick={() => restoreNote(note.id)} className="btn btn-success btn-sm me-2">
              Восстановить
            </button>
            <button onClick={() => permanentlyDeleteNote(note.id)} className="btn btn-danger btn-sm">
              Удалить навсегда
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
