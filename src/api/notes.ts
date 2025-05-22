// src/pages/api/notes.ts

let notes: { id: number; title: string; content: string }[] = [];

export default function handler(req: any, res: any) {
  if (req.method === 'GET') {
    res.status(200).json(notes);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newNote = {
      id: Date.now(),
      title,
      content,
    };

    notes.push(newNote);
    res.status(201).json(newNote);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
