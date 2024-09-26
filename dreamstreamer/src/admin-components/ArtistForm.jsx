// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const ArtistForm = ({ onSubmit, initialData }) => {
  const [artist, setArtist] = useState(initialData || { name: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setArtist({ ...artist, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(artist);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-800 rounded">
      <h3 className="text-xl font-bold mb-4">{initialData ? "Edit Artist" : "Create Artist"}</h3>
      <label className="block mb-2">Artist Name</label>
      <input
        type="text"
        name="name"
        value={artist.name}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded"
      />
      <button type="submit" className="bg-green-500 p-2 rounded">
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default ArtistForm;
