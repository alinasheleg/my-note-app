export async function getNotes() {
  const res = await fetch('/api/notes');
  return res.json();
}

export async function addNote(note: { title: string; content: string }) {
  const res = await fetch('/api/notes', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(note),
  });
  return res.json();
}
