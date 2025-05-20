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
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Название категории"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="flex-grow border px-3 py-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Добавить
      </button>
    </form>
  );
}
