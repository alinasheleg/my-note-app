'use client';

import { useParams, useRouter } from 'next/navigation';
import { useNotesStore } from '../store/useNotesStore';
import { useState, useEffect } from 'react';

export const NoteDetail = () => {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const note = useNotesStore((state) => state.notes.find(n => n.id === id));
  const updateNote = useNotesStore((state) => state.updateNote);

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
    }
  }, [note]);

  const handleSave = () => {
    if (!title || !content) {
      setError('Все поля обязательны!');
      return;
    }

    updateNote({ id, title, content, archived: false });
    router.push('/');
  };

  if (!note) return <p>Заметка не найдена</p>;

  return (
    <div>
      <h2>Редактировать заметку</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      <button onClick={handleSave}>Сохранить</button>
    </div>
  );
};
