'use client';

import { NotesList } from "@/components/NotesList";


export default function NotesPage() {
  return (
    <div className="container my-4">
      <h2>Все заметки</h2>
      <NotesList />
    </div>
  );
}
