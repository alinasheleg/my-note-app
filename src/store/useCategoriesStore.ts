// src/store/useCategoriesStore.ts
import { create } from "zustand";

export type Category = {
  id: number;
  name: string;
};

type CategoriesState = {
  categories: Category[];
  addCategory: (name: string) => void;
  editCategory: (id: number, name: string) => void;
  deleteCategory: (id: number) => void;
};

export const useCategoriesStore = create<CategoriesState>((set) => {
  // создаём три начальные категории с уникальными id
  const initialCategories: Category[] = [
    { id: Date.now(), name: "Учеба" },
    { id: Date.now() + 1, name: "Работа" },
  ];

  return {
    categories: initialCategories,

    addCategory: (name) =>
      set((state) => ({
        categories: [...state.categories, { id: Date.now(), name }],
      })),

    editCategory: (id, name) =>
      set((state) => ({
        categories: state.categories.map((cat) =>
          cat.id === id ? { ...cat, name } : cat
        ),
      })),

    deleteCategory: (id) =>
      set((state) => ({
        categories: state.categories.filter((cat) => cat.id !== id),
      })),
  };
});
