'use client';

import { useParams, useRouter } from 'next/navigation';
import { useNotesStore } from '@/store/useNotesStore';
import { useCategoriesStore } from '@/store/useCategoriesStore';
import { useState, useEffect } from 'react';

export const NoteDetail = () => {
  const params = useParams();
  const router = useRouter();
  const id = Number(params?.id);

  const note = useNotesStore((state) => state.notes.find(n => n.id === id));
  const updateNote = useNotesStore((state) => state.updateNote);
  const categories = useCategoriesStore((state) => state.categories);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState<number>(0);
  const [error, setError] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setCategoryId(note.categoryId);
    }
  }, [note]);

  const handleSave = () => {
    if (!title.trim() || !content.trim() || !categoryId) {
      setError('Все поля обязательны!');
      return;
    }

    updateNote({
      ...note!,
      title: title.trim(),
      content: content.trim(),
      categoryId,
    });

    router.push('/notes');
  };

  if (!note) return <p>Заметка не найдена</p>;

  return (
    <div className="p-4 bg-light rounded shadow-sm">
      <h2 className="mb-3">Редактировать заметку</h2>
      {error && <p className="text-danger">{error}</p>}

      <div className="mb-3">
        <label className="form-label fw-semibold">Заголовок</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Содержимое</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control"
          rows={5}
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

      <button onClick={handleSave} className="btn btn-primary">
        Сохранить
      </button>
    </div>
  );
};
