import React, { useEffect, useState } from "react";
import API from "../api";
import NoteForm from "../components/NoteForm";
import NoteList from "../components/NoteList";

function Home() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await API.get("/notes");
        setNotes(data);
      } catch (error) {
        console.error("Failed to fetch notes", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Your Notes</h2>
      <NoteForm refreshNotes={setNotes} />
      <NoteList notes={notes} refreshNotes={setNotes} />
    </div>
  );
}

export default Home;
