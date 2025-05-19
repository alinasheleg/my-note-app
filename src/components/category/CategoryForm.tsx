'use client';
import { useState } from 'react';

type Props = {
  onAddCategory: (name: string) => void;
};

export default function CategoryForm({ onAddCategory }: Props) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddCategory(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Новая категория"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success">Добавить</button>
      </div>
    </form>
  );
}
