'use client';

import React from "react";
import { useNotesStore } from "@/store/useNotesStore"; 

export function ArchivedNotes() {
  const archivedNotes = useNotesStore((state) => state.archivedNotes);
  const restoreNote = useNotesStore((state) => state.restoreNote);
  const permanentlyDeleteNote = useNotesStore((state) => state.permanentlyDeleteNote);

  return (
    <>
      <h2>Архив</h2>
      {archivedNotes.length === 0 && <p>Архив пуст.</p>}
      <ul>
        {archivedNotes.map((note) => (
          <li key={note.id}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <button onClick={() => restoreNote(note.id)}>Восстановить</button>
            <button onClick={() => permanentlyDeleteNote(note.id)}>Удалить навсегда</button>
          </li>
        ))}
      </ul>
    </>
  );
}
