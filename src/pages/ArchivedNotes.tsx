import { create } from "zustand";

export type Note = {
  id: number;
  title: string;
  content: string;
  archived?: boolean;
  deleted?: boolean;
};

type NotesState = {
  notes: Note[];
  addNote: (note: Omit<Note, "id">) => void;
  archiveNote: (id: number) => void;
  deleteNote: (id: number) => void;
  restoreNote: (id: number) => void;
  deletePermanently: (id: number) => void;
};

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],

  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, { id: Date.now(), ...note }],
    })),

  archiveNote: (id) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note
      ),
    })),

  deleteNote: (id) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, deleted: true } : note
      ),
    })),

  restoreNote: (id) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, archived: false, deleted: false } : note
      ),
    })),

  deletePermanently: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),
}));
