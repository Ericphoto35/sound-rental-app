'use client';

import { useState } from 'react';

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    equipment: '',
    startDate: '',
    endDate: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici nous ajouterons la logique de réservation
    console.log('Données de réservation:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Réservation de Matériel</h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom complet</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="equipment" className="block text-gray-700 font-medium mb-2">Équipement</label>
          <select
            id="equipment"
            name="equipment"
            value={formData.equipment}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionnez un équipement</option>
            <option value="speaker">Enceinte Active 1000W</option>
            <option value="mixer">Table de Mixage 16 Voies</option>
            <option value="mics">Kit Microphones</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-gray-700 font-medium mb-2">Date de début</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="endDate" className="block text-gray-700 font-medium mb-2">Date de fin</label>
          <input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
        >
          Réserver
        </button>
      </form>
    </div>
  );
}
