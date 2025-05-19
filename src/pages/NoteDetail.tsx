import { useParams, useNavigate } from 'react-router-dom';
import { useNotesStore } from '../store/useNotesStore';
import { useState } from 'react';

export const NoteDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const note = useNotesStore((state) => state.notes.find(n => n.id === id));
  const updateNote = useNotesStore((state) => state.updateNote);

  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!title || !content) {
      setError('Все поля обязательны!');
      return;
    }

    updateNote({ id: id!, title, content, archived: false });  // <-- исправлено
    navigate('/');
  };

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
