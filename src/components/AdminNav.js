'use client';
import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

export default function AdminNav() {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-blue-600 text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/admin" className="text-xl font-bold" onClick={closeMenu}>
            Admin Panel
          </Link>

          {/* Menu Hamburger pour mobile */}
          <button 
            className="lg:hidden p-2 hover:bg-blue-700 rounded-lg transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Menu pour desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="hover:text-blue-200 transition-colors">
              Retour au site
            </Link>
            <Link href="/admin/equipements" className="hover:text-blue-200 transition-colors">
              Équipements
            </Link>
            <Link href="/admin/reservations" className="hover:text-blue-200 transition-colors">
              Réservations
            </Link>
            <button 
              onClick={handleLogout}
              className="hover:text-blue-200 transition-colors cursor-pointer"
            >
              Déconnexion
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        <div 
          className={`lg:hidden fixed left-0 right-0 bg-blue-600 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen 
              ? 'opacity-100 max-h-[400px] border-t border-blue-500' 
              : 'opacity-0 max-h-0'
          }`}
          style={{ top: '64px' }}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              href="/" 
              className="hover:text-blue-200 transition-colors py-2"
              onClick={closeMenu}
            >
              Retour au site
            </Link>
            <Link 
              href="/admin/equipements" 
              className="hover:text-blue-200 transition-colors py-2"
              onClick={closeMenu}
            >
              Équipements
            </Link>
            <Link 
              href="/admin/reservations" 
              className="hover:text-blue-200 transition-colors py-2"
              onClick={closeMenu}
            >
              Réservations
            </Link>
            <button 
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
              className="hover:text-blue-200 transition-colors cursor-pointer text-left py-2"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
