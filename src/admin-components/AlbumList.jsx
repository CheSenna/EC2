/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { albumsData } from '../assets/assets'; // Replace with API call in future

const AlbumList = () => {
  const [albums, setAlbums] = useState(albumsData);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setAlbums(albums.filter(album => album.id !== id));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Albums</h2>
      <button className="bg-green-500 p-2 rounded mb-4" onClick={() => navigate('/admin/albums/new')}>Add New Album</button>
      <table className="w-full table-auto">
        <thead>
          <tr className="bg-slate-800 text-white">
            <th className="p-2">#</th>
            <th className="p-2">Album Name</th>
            <th className="p-2">Artist</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album, index) => (
            <tr key={album.id} className="text-center">
              <td className="p-2">{index + 1}</td>
              <td className="p-2">{album.name}</td>
              <td className="p-2">{album.artist}</td>
              <td className="p-2">
                <button className="bg-blue-500 p-1 rounded mx-1" onClick={() => navigate(`/admin/albums/edit/${album.id}`)}>Edit</button>
                <button className="bg-red-500 p-1 rounded mx-1" onClick={() => handleDelete(album.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AlbumList;
