import Link from "next/link";
import { Volume2, Mic2, Speaker, Music2, Phone } from "lucide-react";

export default function Home() {
  const equipment = [
    {
      title: "Systèmes de sonorisation",
      icon: <Speaker className="w-12 h-12 mb-4 text-primary" />,
      description:
        "Enceintes actives et passives, caissons de basse, systèmes line array",
    },
    {
      title: "Microphones",
      icon: <Mic2 className="w-12 h-12 mb-4 text-primary" />,
      description:
        "Microphones filaires et sans fil, systèmes HF professionnels",
    },
    {
      title: "Tables de mixage",
      icon: <Music2 className="w-12 h-12 mb-4 text-primary" />,
      description: "Consoles numériques et analogiques, interfaces audio",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div
        className="relative z-10 flex items-center justify-center h-full min-h-screen text-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
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
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Demander un devis
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-4">
          {/* Carte Catalogue */}
          <Link
            href="/catalogue"
            className="flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex-grow mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-4">Catalogue</h2>
            <p className="text-gray-600">
              Découvrez notre gamme complète d'équipements de sonorisation
            </p>
          </Link>

          {/* Carte Réservations */}
          <Link
            href="/reservations"
            className="flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex-grow mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-4">Réservations</h2>
            <p className="text-gray-600">
              Gérez vos réservations et consultez les disponibilités
            </p>
          </Link>

          {/* Carte Contact */}
          <Link
            href="/contact"
            className="flex flex-col bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex-grow mx-auto"
          >
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-600">
              Besoin d'aide ? Contactez notre équipe
            </p>
          </Link>
        </div>
        <section id="equipment" className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Notre Équipement
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {equipment.map((item, index) => (
                <div
                  key={index}
                  className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <section id="contact" className="py-20 px-6 bg-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Contactez-nous
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Notre équipe est à votre disposition pour vous conseiller et
                  vous accompagner dans vos projets.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <span>+33 1 23 45 67 89</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>contact@soundpro.fr</span>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-xl shadow-lg">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full px-4 py-2 rounded-md border border-input bg-background h-32"
                      placeholder="Votre message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Envoyer
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
    </main>
  );
}
