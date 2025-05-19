import { useNotesStore } from '../store/useNotesStore';

export const ArchivedNotes = () => {
  const notes = useNotesStore((state) => state.notes.filter(n => n.archived));
  const restoreNote = useNotesStore((state) => state.restoreNote);
  const deleteNote = useNotesStore((state) => state.deleteNote);

  return (
    <div>
      <h2>Архивные заметки</h2>
      {notes.map(note => (
        <div key={note.id}>
          <h3>{note.title}</h3>
          <button onClick={() => restoreNote(note.id)}>Восстановить</button>
          <button onClick={() => deleteNote(note.id)}>Удалить навсегда</button>
        </div>
      ))}
    </div>
  );
};
