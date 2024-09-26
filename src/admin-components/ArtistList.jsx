/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { artistsData } from '../assets/assets'; // Replace with API call in future

const ArtistList = () => {
  const [artists, setArtists] = useState(artistsData);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setArtists(artists.filter(artist => artist.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Artists</h2>
      <button className="bg-green-500 p-2 rounded mb-4" onClick={() => navigate('/admin/artists/new')}>Add New Artist</button>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="p-2">#</th>
            <th className="p-2">Artist Name</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {artists.map((artist, index) => (
            <tr key={artist.id} className="text-center">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{artist.name}</td>
              <td className="p-2">
                <button className="bg-blue-500 p-1 rounded mx-1" onClick={() => navigate(`/admin/artists/edit/${artist.id}`)}>Edit</button>
                <button className="bg-red-500 p-1 rounded mx-1" onClick={() => handleDelete(artist.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArtistList;
