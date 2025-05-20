'use client';

import { useNotesStore } from "@/store/useNotesStore";

export default function NotesList() {
  const notes = useNotesStore((state) => state.notes);

  if (notes.length === 0) {
    return (
      <p className="text-start text-muted fst-italic py-4 ps-5">
        Заметок пока нет.
      </p>
    );
  }

  return (
    <ul
      className="list-group mb-5"
      style={{
        maxWidth: '1000px', // стало шире
        marginLeft: '4%',
        marginTop: '2rem',
        gap: '1rem',
      }}
    >
      {notes.map((note) => (
        <li
          key={note.id}
          className="list-group-item list-group-item-action border rounded shadow-sm mb-3"
          title={note.title}
        >
          <h5 className="fw-semibold text-primary text-truncate mb-2">
            {note.title}
          </h5>
          <p
            className="text-body"
            style={{ maxHeight: '4.5em', overflow: 'hidden' }}
          >
            {note.content}
          </p>
        </li>
      ))}
    </ul>
  );
}
