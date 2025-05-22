// services/notesApi.ts

export async function getNotes() {
  const res = await fetch('/api/notes');
  if (!res.ok) throw new Error('Не удалось загрузить заметки');
  return res.json();
}

export async function deleteNoteApi(id: number) {
  const res = await fetch(`/api/notes/${id}`, {
    method: 'DELETE',
  });
  if (!res.ok) throw new Error('Ошибка удаления заметки');
  return true;
}

export async function updateNoteApi(note: any) {
  const res = await fetch(`/api/notes/${note.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  if (!res.ok) throw new Error('Ошибка обновления заметки');
  return res.json();
}

export async function createNoteApi(note: any) {
  const res = await fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  if (!res.ok) throw new Error('Ошибка создания заметки');
  return res.json();
}
