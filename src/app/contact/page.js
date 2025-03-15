'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici nous ajouterons la logique d'envoi du message
    console.log('Message envoyé:', formData);
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
      <h1 className="text-4xl font-bold mb-8">Contactez-nous</h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Nos Coordonnées</h2>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-900">Adresse</h3>
              <p className="text-gray-600">123 Rue de la Musique<br />75000 Paris</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Téléphone</h3>
              <p className="text-gray-600">01 23 45 67 89</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Email</h3>
              <p className="text-gray-600">contact@sono-location.fr</p>
            </div>
            
            <div>
              <h3 className="font-medium text-gray-900">Horaires</h3>
              <p className="text-gray-600">
                Lundi - Vendredi: 9h00 - 18h00<br />
                Samedi: 10h00 - 16h00
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Envoyez-nous un message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Nom</label>
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

            <div>
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

            <div>
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Sujet</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
