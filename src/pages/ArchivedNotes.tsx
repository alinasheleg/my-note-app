import { useNotesStore } from '../store/useNotesStore';

export function ArchivedNotes() {
  const notes = useNotesStore((s) => s.notes.filter((n) => n.archived));
  const restore = useNotesStore((s) => s.restoreNote);
  const deleteNote = useNotesStore((s) => s.deleteNote);

  return (
    <div>
      <h2>Архивные заметки</h2>
      {notes.map((note) => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content.slice(0, 100)}...</p>
          <button onClick={() => restore(note.id)}>Восстановить</button>
          <button onClick={() => deleteNote(note.id)}>Удалить навсегда</button>
        </div>
      ))}
    </div>
  );
}
