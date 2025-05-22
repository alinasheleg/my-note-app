"use client";

import { useEffect } from "react";
import { useNotesStore } from "@/store/useNotesStore";

export default function NotesLoader() {
  const setNotes = useNotesStore((state) => state.setNotes);
  const setArchivedNotes = useNotesStore((state) => state.setArchivedNotes);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedNotes = localStorage.getItem("my-note-app-notes");
      const savedArchived = localStorage.getItem("my-note-app-archived");

      if (savedNotes) setNotes(JSON.parse(savedNotes));
      if (savedArchived) setArchivedNotes(JSON.parse(savedArchived));
    }
  }, [setNotes, setArchivedNotes]);

  return null;
}
