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
  deleteNote: (id: number) => void; // удалить из заметок и переместить в архив
  restoreNote: (id: number) => void; // вернуть из архива в заметки
  permanentlyDeleteNote: (id: number) => void; // окончательно удалить из архива
  updateNote: (updatedNote: Note) => void;
}

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  archivedNotes: [],

  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, note],
    })),

  deleteNote: (id) =>
    set((state) => {
      const noteToArchive = state.notes.find((note) => note.id === id);
      if (!noteToArchive) return {};

      return {
        notes: state.notes.filter((note) => note.id !== id),
        archivedNotes: [...state.archivedNotes, noteToArchive],
      };
    }),

  restoreNote: (id) =>
    set((state) => {
      const noteToRestore = state.archivedNotes.find((note) => note.id === id);
      if (!noteToRestore) return {};

      return {
        archivedNotes: state.archivedNotes.filter((note) => note.id !== id),
        notes: [...state.notes, noteToRestore],
      };
    }),

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
