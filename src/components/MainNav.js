'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function MainNav() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setIsAdmin(!!session?.user);
    };

    checkUser();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session?.user);
    });

    return () => subscription.unsubscribe();
  }, []);

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
    <nav className="bg-black text-white relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold" onClick={closeMenu}>
            Sono Location
          </Link>
          
          {/* Menu Hamburger pour mobile */}
          <button 
            className="lg:hidden p-2 hover:bg-gray-800 rounded-lg transition-colors"
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
          <div className="hidden lg:flex space-x-8">
            <Link href="/catalogue" className="hover:text-blue-200 transition-colors">
              Catalogue
            </Link>
            <Link href="/reservations" className="hover:text-blue-200 transition-colors">
              Réservations
            </Link>
            <Link href="/contact" className="hover:text-blue-200 transition-colors">
              Contact
            </Link>
            {isAdmin ? (
              <>
                <Link href="/admin" className="hover:text-blue-200 transition-colors">
                  Admin
                </Link>
                <button 
                  onClick={handleLogout}
                  className="hover:text-blue-200 transition-colors cursor-pointer"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link href="/login" className="hover:text-blue-200 transition-colors">
                Connexion
              </Link>
            )}
          </div>
        </div>

        {/* Menu mobile */}
        <div 
          className={`lg:hidden absolute top-16 left-0 right-0 bg-black transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link 
              href="/catalogue" 
              className="hover:text-blue-200 transition-colors py-2"
              onClick={closeMenu}
            >
              Catalogue
            </Link>
            <Link 
              href="/reservations" 
              className="hover:text-blue-200 transition-colors py-2"
              onClick={closeMenu}
            >
              Réservations
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-blue-200 transition-colors py-2"
              onClick={closeMenu}
            >
              Contact
            </Link>
            {isAdmin ? (
              <>
                <Link 
                  href="/admin" 
                  className="hover:text-blue-200 transition-colors py-2"
                  onClick={closeMenu}
                >
                  Admin
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
              </>
            ) : (
              <Link 
                href="/login" 
                className="hover:text-blue-200 transition-colors py-2"
                onClick={closeMenu}
              >
                Connexion
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
