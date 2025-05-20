import { useNotesStore } from "@/store/useNotesStore";

export default function RecentNotesList() {
  const notes = useNotesStore((state) => state.notes);
  const recentNotes = [...notes].reverse().slice(0, 2);

  return (
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow-md p-6">
      <h3 className="text-2xl font-semibold border-b pb-2 text-gray-800 text-center mt-4">
        Последние заметки
      </h3>
      <p className="text-gray-600 text-center mt-1 mb-4">
        Здесь будут отображаться последние добавленные заметки.
      </p>

      {recentNotes.length === 0 ? (
        <p className="text-center text-gray-500 italic">Заметок пока нет.</p>
      ) : (
        <ul className="space-y-4">
          {recentNotes.map((note) => (
            <li
              key={note.id}
              className="border rounded-lg p-4 hover:shadow-lg transition-shadow duration-300 cursor-pointer text-center"
            >
              <h4 className="font-bold text-lg text-indigo-600 mb-1 truncate">
                {note.title}
              </h4>
              <p className="text-gray-700 line-clamp-3">{note.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
