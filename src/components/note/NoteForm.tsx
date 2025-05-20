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
    <form onSubmit={handleSubmit} className="p-4 bg-light border rounded shadow-sm">
      <div className="mb-3">
        <label className="form-label fw-semibold">Заголовок</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
          placeholder="Введите заголовок"
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Содержимое</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control"
          placeholder="Введите текст заметки"
          rows={5}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Категория</label>
        <select
          value={categoryId}
          onChange={(e) => setCategoryId(Number(e.target.value))}
          className="form-select"
          required
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Сохранить заметку
        </button>
      </div>
    </form>
  );
}
