// firebaseService.ts
import { db } from '@/lib/database'; // importa la configurazione di Firebase
import { collection, addDoc } from 'firebase/firestore';

const addNews = async (title: string, date: string, excerpt: string) => {
  try {
    // Collezione in cui vuoi aggiungere il documento
    const newsCollection = collection(db, 'news');
    
    // Aggiungi il nuovo documento
    const docRef = await addDoc(newsCollection, {
      title: title,
      date: date,
      excerpt: excerpt,
    });

    console.log('Notizia aggiunta con ID:', docRef.id);
  } catch (e) {
    console.error('Errore nell\'aggiungere la notizia:', e);
  }
};

export { addNews };
