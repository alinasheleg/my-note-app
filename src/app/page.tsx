'use client';

import RecentNotesList from "@/components/home/RecentNotesList";
import WelcomeBanner from "@/components/home/WelcomeBanner";


export default function NotesPage() {
  return (
    <div className="max-w-2xl mx-auto py-6">
      <WelcomeBanner />

      <RecentNotesList />

    </div>
  );
}
