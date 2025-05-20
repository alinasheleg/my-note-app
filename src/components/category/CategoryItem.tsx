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
    <li className="list-group-item border rounded mb-3 p-3 shadow-sm">
      {isEditing ? (
        <div className="row gy-2 align-items-center">
          <div className="col-md-6">
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              className="form-control"
              placeholder="Новое название категории"
            />
          </div>
          <div className="col-md-6 d-flex justify-content-md-end gap-2">
            <button onClick={handleSave} className="btn btn-sm btn-primary">
              Сохранить
            </button>
            <button onClick={() => setIsEditing(false)} className="btn btn-sm btn-outline-secondary">
              Отмена
            </button>
          </div>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-medium">{category.name}</span>
          <div className="btn-group btn-group-sm" role="group">
            <button onClick={() => setIsEditing(true)} className="btn btn-warning">
              ✏️ Редактировать
            </button>
            <button onClick={() => onDeleteCategory(category.id)} className="btn btn-danger">
              🗑️ Удалить
            </button>
          </div>
        </div>
      )}
    </li>
  );
}
