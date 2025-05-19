import { useState } from 'react';
import FormButtons from './FormButtons';

export default function NoteForm() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ title, text });
    alert('Заметка добавлена!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Заголовок</label>
        <input
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Текст</label>
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={4}
          required
        />
      </div>
      <FormButtons />
    </form>
  );
}
