'use client';

import { useState, useEffect } from 'react';

type Props = {
  onSubmit?: (data: { title: string; text: string; category: string }) => void;
  initialData?: { title: string; text: string; category: string };
};

export default function NoteForm({ onSubmit, initialData }: Props) {
  const [title, setTitle] = useState(initialData?.title || '');
  const [text, setText] = useState(initialData?.text || '');
  const [selectedCategory, setSelectedCategory] = useState(initialData?.category || '');
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('categories');
    if (saved) {
      setCategories(JSON.parse(saved));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newNote = { title, text, category: selectedCategory };
    if (onSubmit) {
      onSubmit(newNote);
    } else {
      console.log('Заметка:', newNote);
    }
    // тут можно сохранить в localStorage или отправить в API
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Заголовок</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Текст заметки</label>
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          required
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Категория</label>
        <select
          className="form-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          required
        >
          <option value="">Выберите категорию</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn btn-success">
        Сохранить
      </button>
    </form>
  );
}
