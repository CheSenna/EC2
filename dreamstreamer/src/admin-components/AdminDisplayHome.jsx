/* eslint-disable no-unused-vars */
// admin-components/AdminDisplayHome.jsx
import React from 'react';

const AdminDisplayHome = () => {
  return (
    <div className="w-[100%] m-2 px-6 pt-4 rounded bg-slate-800 text-white overflow-auto lg:w-[75%] lg:ml-0">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Music Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-700 p-4 rounded shadow-lg">
          <h3 className="text-xl font-bold">Total Songs</h3>
          <p className="text-2xl mt-2">250</p>
        </div>
        <div className="bg-slate-700 p-4 rounded shadow-lg">
          <h3 className="text-xl font-bold">Total Albums</h3>
          <p className="text-2xl mt-2">50</p>
        </div>
        <div className="bg-slate-700 p-4 rounded shadow-lg">
          <h3 className="text-xl font-bold">Total Artists</h3>
          <p className="text-2xl mt-2">30</p>
        </div>
      </div>

      {/* User Stats */}
      <div className="bg-slate-700 p-4 rounded shadow-lg mb-8">
        <h3 className="text-xl font-bold">Active Users</h3>
        <p className="text-2xl mt-2">1,200</p>
      </div>

      {/* CRUD Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <button className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">
          Add New Song
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
          Add New Album
        </button>
        <button className="bg-yellow-600 hover:bg-yellow-700 text-white py-2 px-4 rounded">
          Add New Artist
        </button>
      </div>
    </div>
  );
};

export default AdminDisplayHome;
