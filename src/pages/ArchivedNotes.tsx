'use client';

import React from "react";
import { useNotesStore } from "@/store/useNotesStore";

export function ArchivedNotes() {
  const archivedNotes = useNotesStore((state) => state.archivedNotes);
  const restoreNote = useNotesStore((state) => state.restoreNote);
  const permanentlyDeleteNote = useNotesStore((state) => state.permanentlyDeleteNote);

  return (
    <div className="container mt-4" style={{ maxWidth: "600px" }}>
      <h2 className="mb-4 text-center">Архив</h2>

      {archivedNotes.length === 0 ? (
        <div className="alert alert-secondary text-center fst-italic">
          Архив пуст.
        </div>
      ) : (
        <div className="d-flex flex-column gap-3">
          {archivedNotes.map((note) => (
            <div key={note.id} className="card border-0 shadow-sm rounded-4">
              <div className="card-body">
                <h5 className="card-title text-primary fw-semibold">{note.title}</h5>
                <p className="card-text">{note.content}</p>
                <div className="d-flex justify-content-end gap-2 mt-3">
                  <button
                    className="btn btn-outline-success btn-sm"
                    onClick={() => restoreNote(note.id)}
                  >
                    Восстановить
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() =>
                      confirm("Удалить эту заметку навсегда?") &&
                      permanentlyDeleteNote(note.id)
                    }
                  >
                    Удалить навсегда
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
