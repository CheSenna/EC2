/* eslint-disable no-unused-vars */
// admin-components/AdminSongs.jsx
import React, { useState, useEffect } from 'react';

const AdminSongs = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    // Fetch the list of songs from your backend (dummy data for now)
    const fetchSongs = async () => {
      // Simulate API call
      const songsData = [
        { id: 1, name: 'Song A', album: 'Album A', artist: 'Artist A' },
        { id: 2, name: 'Song B', album: 'Album B', artist: 'Artist B' },
        // Add more songs as needed
      ];
      setSongs(songsData);
    };
    
    fetchSongs();
  }, []);

  const handleEdit = (songId) => {
    // Implement edit functionality here
    console.log('Edit song', songId);
  };

  const handleDelete = (songId) => {
    // Implement delete functionality here
    console.log('Delete song', songId);
  };

  const handleAddNewSong = () => {
    // Implement add new song functionality here
    console.log('Add new song');
  };

  return (
    <div className="w-full p-6 rounded bg-slate-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Manage Songs</h2>
      
      <button 
        onClick={handleAddNewSong} 
        className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded mb-4"
      >
        Add New Song
      </button>
      
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-slate-600">
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Album</th>
            <th className="px-4 py-2">Artist</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <tr key={song.id} className="border-t border-slate-600">
              <td className="px-4 py-2">{song.name}</td>
              <td className="px-4 py-2">{song.album}</td>
              <td className="px-4 py-2">{song.artist}</td>
              <td className="px-4 py-2 flex gap-2">
                <button 
                  onClick={() => handleEdit(song.id)} 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button 
                  onClick={() => handleDelete(song.id)} 
                  className="bg-red-600 hover:bg-red-700 text-white py-1 px-3 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminSongs;
