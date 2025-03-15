export default function Catalogue() {
  const equipments = [
    {
      id: 1,
      name: "Enceinte Active 1000W",
      description: "Enceinte professionnelle avec amplification intégrée",
      price: "80€/jour",
      image: "/images/speaker.jpg"
    },
    {
      id: 2,
      name: "Table de Mixage 16 Voies",
      description: "Console de mixage numérique professionnelle",
      price: "120€/jour",
      image: "/images/mixer.jpg"
    },
    {
      id: 3,
      name: "Kit Microphones",
      description: "Ensemble de 4 microphones dynamiques avec supports",
      price: "60€/jour",
      image: "/images/mics.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Catalogue des Équipements</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {equipments.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="h-48 bg-gray-200">
              {/* Placeholder pour les images */}
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">{item.price}</span>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Réserver
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
