import { Inter } from 'next/font/google'
import './globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Location de Matériel Sonorisation',
  description: 'Location professionnelle de matériel de sonorisation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <nav className="bg-black text-white">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-xl font-bold">
                Sono Location
              </Link>
              
              <div className="flex space-x-4">
                <Link href="/catalogue" className="hover:text-blue-200">
                  Catalogue
                </Link>
                <Link href="/reservations" className="hover:text-blue-200">
                  Réservations
                </Link>
                <Link href="/contact" className="hover:text-blue-200">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}

        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Sono Location</h3>
                <p className="text-gray-300">
                  Location professionnelle de matériel de sonorisation pour vos événements
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
                <p className="text-gray-300">
                  123 Rue de la Musique<br />
                  75000 Paris<br />
                  Tél: 01 23 45 67 89<br />
                  Email: contact@sono-location.fr
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Horaires</h3>
                <p className="text-gray-300">
                  Lundi - Vendredi: 9h00 - 18h00<br />
                  Samedi: 10h00 - 16h00<br />
                  Dimanche: Fermé
                </p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
