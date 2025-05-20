// src/components/note/NotesList.tsx
'use client';

import { useNotesStore } from "@/store/useNotesStore";

export default function NotesList() {
  const notes = useNotesStore((state) => state.notes);

  if (notes.length === 0) {
    return <p>Заметок пока нет.</p>;
  }

  return (
    <ul>
      {notes.map((note) => (
        <li key={note.id} className="border-b py-2">
          <h3 className="font-bold">{note.title}</h3>
          <p>{note.content}</p>
        </li>
      ))}
    </ul>
  );
}
