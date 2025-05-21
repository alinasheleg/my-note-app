'use client';

import { useState } from "react";
import { useNotesStore } from "@/store/useNotesStore";
import { useCategoriesStore } from "@/store/useCategoriesStore";

export default function NotesList() {
  const notes = useNotesStore((state) => state.notes);
  const categories = useCategoriesStore((state) => state.categories);
  const deleteNote = useNotesStore((state) => state.deleteNote);
  const updateNote = useNotesStore((state) => state.updateNote);

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | "all">("all");

  const filteredNotes = selectedCategoryId === "all"
    ? notes
    : notes.filter((note) => note.categoryId === selectedCategoryId);

  // Пример функции для редактирования (показываю простой prompt)
  const handleEdit = (note: typeof notes[0]) => {
    const newTitle = prompt("Измените заголовок заметки", note.title);
    const newContent = prompt("Измените содержимое заметки", note.content);
    if (newTitle !== null && newContent !== null) {
      updateNote({ ...note, title: newTitle, content: newContent });
    }
  };

  return (
    <div>
      {/* Фильтр по категориям */}
      <div className="mb-4 ps-5">
        <label className="form-label fw-semibold me-2">Фильтр по категории:</label>
        <select
          value={selectedCategoryId}
          onChange={(e) =>
            setSelectedCategoryId(e.target.value === "all" ? "all" : Number(e.target.value))
          }
          className="form-select w-auto d-inline-block"
        >
          <option value="all">Все категории</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {/* Список заметок */}
      {filteredNotes.length === 0 ? (
        <p className="text-start text-muted fst-italic py-4 ps-5">
          Заметок нет для выбранной категории.
        </p>
      ) : (
        <ul
          className="list-group mb-5"
          style={{
            maxWidth: '1000px',
            marginLeft: '4%',
            marginTop: '2rem',
            gap: '1rem',
          }}
        >
          {filteredNotes.map((note) => {
            const category = categories.find((c) => c.id === note.categoryId);
            return (
              <li
                key={note.id}
                className="list-group-item list-group-item-action border rounded shadow-sm mb-3"
                title={note.title}
              >
                <h5 className="fw-semibold text-primary text-truncate mb-2">
                  {note.title}
                </h5>
                <p className="text-body" style={{ maxHeight: '4.5em', overflow: 'hidden' }}>
                  {note.content}
                </p>
                <small className="text-muted">
                  Категория: <strong>{category?.name || "Без категории"}</strong>
                </small>

                <div className="mt-3">
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => handleEdit(note)}
                  >
                    Редактировать
                  </button>
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteNote(note.id)}
                  >
                    Удалить
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
