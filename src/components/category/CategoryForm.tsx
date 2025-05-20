'use client';

import { useState } from "react";

type Props = {
  onAddCategory: (name: string) => void;
};

export default function CategoryForm({ onAddCategory }: Props) {
  const [name, setName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAddCategory(name.trim());
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex align-items-center gap-2 mb-4">
      <input
        type="text"
        placeholder="Название категории"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="form-control"
        required
      />
      <button type="submit" className="btn btn-success">
        Добавить
      </button>
    </form>
  );
}
