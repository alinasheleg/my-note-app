import NotesList from "@/components/NotesList";

export default function NotesPage() {
  return (
    <div className="container my-4">
      <h2 className="text-2xl font-bold mb-4">Все заметки</h2>
      <NotesList />
    </div>
  );
}