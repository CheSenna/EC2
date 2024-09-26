/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

// eslint-disable-next-line react/prop-types
const AlbumForm = ({ onSubmit, initialData }) => {
  const [album, setAlbum] = useState(initialData || { name: '', artist: '', releaseDate: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlbum({ ...album, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(album);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-slate-800 rounded">
      <h3 className="text-xl font-bold mb-4">{initialData ? "Edit Album" : "Create Album"}</h3>
      <label className="block mb-2">Album Name</label>
      <input
        type="text"
        name="name"
        value={album.name}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded"
      />
      <label className="block mb-2">Artist</label>
      <input
        type="text"
        name="artist"
        value={album.artist}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded"
      />
      <label className="block mb-2">Release Date</label>
      <input
        type="date"
        name="releaseDate"
        value={album.releaseDate}
        onChange={handleChange}
        className="w-full mb-4 p-2 rounded"
      />
      <button type="submit" className="bg-green-500 p-2 rounded">
        {initialData ? "Update" : "Create"}
      </button>
    </form>
  );
};

export default AlbumForm;
