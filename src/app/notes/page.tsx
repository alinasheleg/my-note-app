import Link from "next/link";
import NotesList from "@/components/NotesList";



export default function NotesPage() {
  return (
    <div className="container my-3">
      <div className="d-flex justify-content-start align-items-center mb-3">
        <h2 className="text-2xl font-bold m-0 me-3">Все заметки</h2>
        <Link href="/add-note" className="btn btn-success me-2">
          + Добавить заметку
        </Link>
        <Link href="/categories" className="btn btn-outline-primary">
          + Добавить категории
        </Link>
      </div>
      <NotesList />
    </div>
  );
}
