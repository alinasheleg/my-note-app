'use client';

import React from "react";
import { ArchivedNotes } from "@/pages/ArchivedNotes"; 

export default function App() {
  return (
    <div style={{ display: "flex", gap: "3rem", padding: "2rem" }}>
      <ArchivedNotes />
    </div>
  );
}
