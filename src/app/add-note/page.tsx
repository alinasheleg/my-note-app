'use client';

import NoteForm from "@/components/note/NoteForm";
import { useNotesStore } from "@/store/useNotesStore";
import { useCategoriesStore } from "@/store/useCategoriesStore"; // импортируем стор категорий
import { useRouter } from "next/navigation";

export default function AddNotePage() {
  const addNote = useNotesStore((state) => state.addNote);
  const categories = useCategoriesStore((state) => state.categories); // получаем категории
  const router = useRouter();

  // Обработчик добавления заметки — теперь с categoryId
  const handleAddNote = (note: { title: string; content: string; categoryId: number }) => {
    addNote(note);
    router.push("/notes"); // возвращаемся на страницу со списком заметок
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
      <h2 className="text-xl font-semibold mb-4">Добавить заметку</h2>
      {/* Передаём категории в NoteForm */}
      <NoteForm onSubmit={handleAddNote} categories={categories} />
    </div>
  );
}
