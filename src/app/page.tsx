'use client';

import { useNotesStore } from "@/store/useNotesStore";

export default function NotesPage() {
  const notes = useNotesStore((state) => state.notes);

  return (
    <div className="max-w-2xl mx-auto py-6">
      <h2 className="text-xl font-semibold mb-4">Все заметки</h2>
      {notes.length === 0 && <p>Заметок пока нет.</p>}
      <ul>
        {notes.map((note) => (
          <li key={note.id} className="border-b py-2">
            <h3 className="font-bold">{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
