import { create } from 'zustand';

export type Note = {
  id: string;
  title: string;
  content: string;
  archived: boolean;
};

type NotesState = {
  notes: Note[];
  addNote: (note: Note) => void;
  updateNote: (note: Note) => void;
  archiveNote: (id: string) => void;
  restoreNote: (id: string) => void;
  deleteNote: (id: string) => void;
};

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  addNote: (note) =>
    set((state) => ({ notes: [...state.notes, note] })),
  updateNote: (note) =>
    set((state) => ({
      notes: state.notes.map((n) => (n.id === note.id ? note : n)),
    })),
  archiveNote: (id) =>
    set((state) => ({
      notes: state.notes.map((n) =>
        n.id === id ? { ...n, archived: true } : n
      ),
    })),
  restoreNote: (id) =>
    set((state) => ({
      notes: state.notes.map((n) =>
        n.id === id ? { ...n, archived: false } : n
      ),
    })),
  deleteNote: (id) =>
    set((state) => ({ notes: state.notes.filter((n) => n.id !== id) })),
}));
