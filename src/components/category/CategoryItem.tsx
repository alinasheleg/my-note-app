'use client';
import { useState } from 'react';

type Props = {
  name: string;
  onEdit: (oldName: string, newName: string) => void;
  onDelete: (name: string) => void;
};

export default function CategoryItem({ name, onEdit, onDelete }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(name);

  const handleSave = () => {
    if (editedName.trim() && editedName !== name) {
      onEdit(name, editedName.trim());
    }
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {isEditing ? (
        <input
          type="text"
          className="form-control me-2"
          value={editedName}
          onChange={(e) => setEditedName(e.target.value)}
        />
      ) : (
        <span>{name}</span>
      )}
      <div className="btn-group">
        {isEditing ? (
          <button className="btn btn-sm btn-success" onClick={handleSave}>
            Сохранить
          </button>
        ) : (
          <button
            className="btn btn-sm btn-primary"
            onClick={() => setIsEditing(true)}
          >
            Редактировать
          </button>
        )}
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(name)}
        >
          Удалить
        </button>
      </div>
    </li>
  );
}
