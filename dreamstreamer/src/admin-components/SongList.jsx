/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { songsData } from '../assets/assets'; // Replace with API call in future

const SongList = () => {
  const [songs, setSongs] = useState(songsData);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Songs</h2>
      <button className="bg-green-500 p-2 rounded mb-4" onClick={() => navigate('/admin/songs/new')}>Add New Song</button>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="p-2">#</th>
            <th className="p-2">Song Name</th>
            <th className="p-2">Artist</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song, index) => (
            <tr key={song.id} className="text-center">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{song.name}</td>
              <td className="p-2">{song.artist}</td>
              <td className="p-2">
                <button className="bg-blue-500 p-1 rounded mx-1" onClick={() => navigate(`/admin/songs/edit/${song.id}`)}>Edit</button>
                <button className="bg-red-500 p-1 rounded mx-1" onClick={() => handleDelete(song.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongList;
