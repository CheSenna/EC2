/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import SongList from './SongList';
import AlbumList from './AlbumList';
import ArtistList from './ArtistList';
import SongForm from './SongForm';
import AlbumForm from './AlbumForm';
import ArtistForm from './ArtistForm';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/songs" element={<SongList />} />
      <Route path="/admin/albums" element={<AlbumList />} />
      <Route path="/admin/artists" element={<ArtistList />} />
      {/* For adding new albums, songs, and artists */}
      <Route path="/admin/songs/new" element={<SongForm />} />
      <Route path="/admin/albums/new" element={<AlbumForm />} />
      <Route path="/admin/artists/new" element={<ArtistForm />} />
      {/* For editing existing songs, albums, and artists */}
      <Route path="/admin/songs/edit/:id" element={<SongForm />} />
      <Route path="/admin/albums/edit/:id" element={<AlbumForm />} />
      <Route path="/admin/artists/edit/:id" element={<ArtistForm />} />
    </Routes>
  );
};

export default AdminRoutes;
