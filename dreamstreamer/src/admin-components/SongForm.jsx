/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SongForm = ({ onSubmit, initialData }) => {
  const [song, setSong] = useState(initialData || { name: '', duration: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSong({ ...song, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(song);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-800 rounded">
      <h3 className="text-xl font-bold mb-4">{initialData ? "Edit Song" : "Create Song"}</h3>
      <label className="block mb-2">Song Title</label>
      <input
        type="text"
        name="name"
        value={song.name}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded"
      />
      <label className="block mb-2">Duration</label>
      <input
        type="text"
        name="duration"
        value={song.duration}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded"
      />
      <button type="submit" className="bg-green-500 p-2 rounded">
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default SongForm;
