// protectedRoute.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/lib/database'; // Aggiungi l'importazione dell'oggetto auth

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null); // Stato iniziale null per gestire il loading
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Se non c'è un utente autenticato, reindirizza al login
        router.push('/login');
      } else {
        setIsAuthenticated(true); // Se c'è un utente, aggiorna lo stato
      }
    });

    // Pulizia dell'effetto
    return () => unsubscribe();
  }, [router]);

  // Mostra "Loading..." mentre verifichi l'autenticazione
  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return <>{children}</>; // Renderizza i figli quando autenticato
};

export default ProtectedRoute;
