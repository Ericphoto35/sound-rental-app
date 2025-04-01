'use client';
import Link from "next/link";
import { Volume2, Mic2, Speaker, Music2, Phone } from "lucide-react";
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

export default function Home() {
  const equipment = [
    {
      title: "Systèmes de sonorisation",
      icon: <Speaker className="w-12 h-12 mb-4" style={{ color: '#1976d2' }} />,
      description:
        "Enceintes actives et passives, caissons de basse, systèmes line array",
    },
    {
      title: "Microphones",
      icon: <Mic2 className="w-12 h-12 mb-4" style={{ color: '#1976d2' }} />,
      description:
        "Microphones filaires et sans fil, systèmes HF professionnels",
    },
    {
      title: "Tables de mixage",
      icon: <Music2 className="w-12 h-12 mb-4" style={{ color: '#1976d2' }} />,
      description: "Consoles numériques et analogiques, interfaces audio",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <MainNav />
      <main className="flex-grow">
        <div
          className="relative flex items-center justify-center min-h-[60vh] text-center px-6 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backgroundBlendMode: 'overlay'
          }}
        >
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Location de Matériel Sonore Professionnel
            </h1>
            <p className="text-xl text-black mb-8">
              Des équipements haut de gamme pour vos événements
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <section id="equipment" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
                Notre Équipement
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {equipment.map((item, index) => (
                  <Link
                    key={index}
                    href="/catalogue"
                    className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border"
                  >
                    <div className="flex flex-col items-center text-center">
                      {item.icon}
                      <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Contactez-nous
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Notre équipe est à votre disposition pour vous aider à choisir le
                matériel adapté à vos besoins.
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="tel:+33123456789"
                  className="flex items-center text-blue-600 hover:text-blue-700"
                >
                  <Phone className="w-6 h-6 mr-2" />
                  <span>01 23 45 67 89</span>
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
