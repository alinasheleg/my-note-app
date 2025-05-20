'use client';

import { useState } from "react";
import type { Category } from "@/store/useCategoriesStore";

type NoteFormProps = {
  onSubmit: (note: { title: string; content: string; categoryId: number }) => void;
  categories: Category[];
};

export default function NoteForm({ onSubmit, categories }: NoteFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [categoryId, setCategoryId] = useState<number>(categories.length ? categories[0].id : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !categoryId) return;

    onSubmit({
      title: title.trim(),
      content: content.trim(),
      categoryId,
    });

    setTitle("");
    setContent("");
    setCategoryId(categories.length ? categories[0].id : 0);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        required
      />
      <textarea
        placeholder="Содержимое заметки"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full border px-3 py-2 rounded"
        rows={5}
        required
      />
      <select
        value={categoryId}
        onChange={(e) => setCategoryId(Number(e.target.value))}
        className="w-full border px-3 py-2 rounded"
        required
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Сохранить заметку
      </button>
    </form>
  );
}
