import { create } from "zustand";

export type Note = {
  id: number;
  title: string;
  content: string;
  categoryId: number;
};

export type Category = {
  id: number;
  name: string;
};

type NotesState = {
  notes: Note[];
  categories: Category[];
  addNote: (note: Omit<Note, "id">) => void;
  addCategory: (name: string) => void;
  editCategory: (id: number, name: string) => void;
  deleteCategory: (id: number) => void;
};

export const useNotesStore = create<NotesState>((set) => ({
  notes: [],
  categories: [],
  addNote: (note) => {
    const newNote = { id: Date.now(), ...note };
    set((state) => ({ notes: [...state.notes, newNote] }));
  },
  addCategory: (name) => {
    const newCategory = { id: Date.now(), name };
    set((state) => ({ categories: [...state.categories, newCategory] }));
  },
  editCategory: (id, name) =>
    set((state) => ({
      categories: state.categories.map((cat) =>
        cat.id === id ? { ...cat, name } : cat
      ),
    })),
  deleteCategory: (id) =>
    set((state) => ({
      categories: state.categories.filter((cat) => cat.id !== id),
      notes: state.notes.filter((note) => note.categoryId !== id), // удалить заметки с удалённой категорией (опционально)
    })),
}));
