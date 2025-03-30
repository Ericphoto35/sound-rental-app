'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { supabase } from '../utils/supabase';
import { useRouter } from 'next/navigation';

export default function MainNav() {
  const [isAdmin, setIsAdmin] = useState(false);
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

  return (
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
            {isAdmin ? (
              <>
                <Link href="/admin" className="hover:text-blue-200">
                  Admin
                </Link>
                <button 
                  onClick={handleLogout}
                  className="hover:text-blue-200 cursor-pointer"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link href="/login" className="hover:text-blue-200">
                Connexion
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
