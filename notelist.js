import React from "react";
import API from "../api";

function NoteList({ notes, refreshNotes }) {
  const handleDelete = async (id) => {
    try {
      await API.delete(`/notes/${id}`);
      refreshNotes(); // Refresh notes after deletion
    } catch (error) {
      console.error("Failed to delete note", error);
    }
  };

  return (
    <div>
      {notes.map((note) => (
        <div key={note._id} className="border p-4 mb-2">
          <h3 className="text-lg font-bold">{note.title}</h3>
          <p>{note.description}</p>
          <button onClick={() => handleDelete(note._id)} className="text-red-600">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
