'use client';

import Link from "next/link";
import NoteForm from "@/components/note/NoteForm";
import { useNotesStore } from "@/store/useNotesStore";
import { useCategoriesStore } from "@/store/useCategoriesStore";
import { useRouter } from "next/navigation";

export default function AddNotePage() {
  const addNote = useNotesStore((state) => state.addNote);
  const notes = useNotesStore((state) => state.notes); // получаем текущие заметки
  const categories = useCategoriesStore((state) => state.categories);
  const router = useRouter();

  const handleAddNote = (note: { title: string; content: string; categoryId: number }) => {
    const newId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) + 1 : 1;

    addNote({
      id: newId,
      ...note,
    });

    router.push("/notes");
  };

  return (
    <div className="max-w-2xl mx-auto py-6">
      <h2 className="text-xl font-semibold mb-4">Добавить заметку</h2>
      <NoteForm onSubmit={handleAddNote} categories={categories} />

      <div className="mt-4 d-flex justify-content-end">
        <Link href="/notes" className="btn btn-outline-primary">
          Все заметки
        </Link>
      </div>
    </div>
  );
}
