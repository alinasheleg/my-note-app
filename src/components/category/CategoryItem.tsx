'use client';

import { useState } from "react";
import { Category } from "@/store/useNotesStore"; 

type Props = {
  category: Category;
  onEditCategory: (id: number, name: string) => void;
  onDeleteCategory: (id: number) => void;
};

export default function CategoryItem({ category, onEditCategory, onDeleteCategory }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(category.name);

  const handleSave = () => {
    if (!editName.trim()) return;
    onEditCategory(category.id, editName.trim());
    setIsEditing(false);
  };

  return (
    <li className="flex items-center justify-between border-b py-2">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
            className="flex-grow border px-2 py-1 rounded mr-2"
          />
          <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 mr-2"
          >
            Сохранить
          </button>
          <button
            onClick={() => setIsEditing(false)}
            className="bg-gray-400 text-white px-3 py-1 rounded hover:bg-gray-500"
          >
            Отмена
          </button>
        </>
      ) : (
        <>
          <span>{category.name}</span>
          <div className="flex gap-2">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
            >
              Редактировать
            </button>
            <button
              onClick={() => onDeleteCategory(category.id)}
              className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
            >
              Удалить
            </button>
          </div>
        </>
      )}
    </li>
  );
}
