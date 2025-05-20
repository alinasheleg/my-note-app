import Link from "next/link";
import NotesList from "@/components/NotesList";

export default function NotesPage() {
  return (
    <div className="container my-3">
      <div className="d-flex justify-content-start align-items-center mb-3">
        <h2 className="text-2xl font-bold m-0 me-2">Все заметки</h2>
        <Link href="/add-note" className="btn btn-success">
          + Добавить заметку
        </Link>
      </div>
      <NotesList />
    </div>
  );
}
