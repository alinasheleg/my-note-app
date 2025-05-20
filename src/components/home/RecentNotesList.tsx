import { useNotesStore } from "@/store/useNotesStore";

export default function RecentNotesList() {
  const notes = useNotesStore((state) => state.notes);
  const recentNotes = [...notes].reverse().slice(0, 2); 
  return (
    <div>
      <h3>Последние заметки</h3>
      <p>Здесь будут отображаться последние добавленные заметки.</p>
      {recentNotes.length === 0 && <p>Заметок пока нет.</p>}
      <ul>
        {recentNotes.map((note) => (
          <li key={note.id} className="border-b py-2">
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
