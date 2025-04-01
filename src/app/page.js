'use client';
import Link from "next/link";
import { Volume2, Mic2, Speaker, Music2, Phone } from "lucide-react";
import MainNav from '../components/MainNav';
import Footer from '../components/Footer';

export default function Home() {
  const equipment = [
    {
      title: "Systèmes de sonorisation",
      icon: <Speaker className="w-12 h-12 mb-4 transition-transform group-hover:scale-110" style={{ color: '#2563eb' }} />,
      description:
        "Enceintes actives et passives, caissons de basse, systèmes line array",
    },
    {
      title: "Microphones",
      icon: <Mic2 className="w-12 h-12 mb-4 transition-transform group-hover:scale-110" style={{ color: '#2563eb' }} />,
      description:
        "Microphones filaires et sans fil, systèmes HF professionnels",
    },
    {
      title: "Tables de mixage",
      icon: <Music2 className="w-12 h-12 mb-4 transition-transform group-hover:scale-110" style={{ color: '#2563eb' }} />,
      description: "Consoles numériques et analogiques, interfaces audio",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <MainNav />
      <main className="flex-grow">
        <div
          className="relative flex items-center justify-center min-h-[80vh] text-center px-6 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Location de Matériel Sonore Professionnel
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Des équipements haut de gamme pour vos événements
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all hover:scale-105 hover:shadow-lg"
            >
              Demander un devis
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <section id="equipment" className="py-24">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Notre Équipement
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                {equipment.map((item, index) => (
                  <Link
                    key={index}
                    href="/catalogue"
                    className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
                  >
                    <div className="flex flex-col items-center text-center">
                      {item.icon}
                      <h3 className="text-2xl font-semibold mb-4 text-gray-800">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 rounded-3xl my-8">
            <div className="max-w-4xl mx-auto text-center px-6">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
                Contactez-nous
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Notre équipe est à votre disposition pour vous aider à choisir le
                matériel adapté à vos besoins.
              </p>
              <div className="flex justify-center space-x-6">
                <a
                  href="tel:+33123456789"
                  className="flex items-center bg-white px-6 py-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  <Phone className="w-6 h-6 mr-3 text-blue-600" />
                  <span className="text-lg font-medium text-gray-800">01 23 45 67 89</span>
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
