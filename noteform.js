import React, { useState } from "react";
import API from "../api";

function NoteForm({ refreshNotes }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/notes", { title, description });
      setTitle("");
      setDescription("");
      refreshNotes(); // Refresh notes after creation
    } catch (error) {
      console.error("Failed to create note", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Note Title"
        className="border p-2 mb-2 w-full"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Note Description"
        className="border p-2 mb-2 w-full"
      />
      <button type="submit" className="bg-blue-600 text-white py-2 px-4">
        Add Note
      </button>
    </form>
  );
}

export default NoteForm;
