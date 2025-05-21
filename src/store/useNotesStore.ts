import { create } from "zustand";

interface Note {
  id: number;
  title: string;
  content: string;
  categoryId: number;
}

interface NotesState {
  notes: Note[];
  archivedNotes: Note[];
  addNote: (note: Note) => void;
  deleteNote: (id: number) => void;
  restoreNote: (id: number) => void;
  permanentlyDeleteNote: (id: number) => void;
  updateNote: (updatedNote: Note) => void;
}

export const useNotesStore = create<NotesState>((set, get) => ({
  notes: [

  ],
  archivedNotes: [],

  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, note],
    })),

  deleteNote: (id) => {
    const noteToArchive = get().notes.find((note) => note.id === id);
    if (!noteToArchive) return;
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
      archivedNotes: [...state.archivedNotes, noteToArchive],
    }));
  },

  restoreNote: (id) => {
    const noteToRestore = get().archivedNotes.find((note) => note.id === id);
    if (!noteToRestore) return;
    set((state) => ({
      archivedNotes: state.archivedNotes.filter((note) => note.id !== id),
      notes: [...state.notes, noteToRestore],
    }));
  },

  permanentlyDeleteNote: (id) =>
    set((state) => ({
      archivedNotes: state.archivedNotes.filter((note) => note.id !== id),
    })),

  updateNote: (updatedNote) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === updatedNote.id ? updatedNote : note
      ),
    })),
}));
