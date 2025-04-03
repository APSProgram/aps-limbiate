"use client"; // Aggiungi questa direttiva in cima al file

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { collection, getDocs } from 'firebase/firestore'; 
import { db } from "@/lib/database";
import { useEffect, useState } from "react";

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
}

export default function NewsSection({ id }: { id?: string }) {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]); // Stato per le notizie
  const [loading, setLoading] = useState<boolean>(true); // Stato per gestire il caricamento

  useEffect(() => {
    // Recupera le notizie quando il componente è montato
    const loadNews = async () => {
      const news = await fetchNewsFromFirebase();
      console.log("Notizie caricate:", news); // Log dei dati caricati
      setNewsItems(news);
      setLoading(false); // Imposta il caricamento a false
    };

    loadNews();
  }, []);

  const fetchNewsFromFirebase = async (): Promise<NewsItem[]> => {
    try {
      // Riferimento alla collezione 'news' di Firestore
      const colRef = collection(db, 'news');
      
      // Ottieni tutti i documenti dalla collezione
      const snapshot = await getDocs(colRef);

      if (snapshot.empty) {
        console.log("La collezione 'news' è vuota.");
        return [];
      }
      
      // Mappa i documenti e restituisci i dati strutturati in NewsItem
      const newsItems: NewsItem[] = snapshot.docs.map((doc) => {
        const data = doc.data();
        console.log("Dati del documento:", data); // Log dei dati del documento
        return {
          title: data.title,
          date: data.date,
          excerpt: data.excerpt,
        };
      });

      return newsItems;
    } catch (error) {
      console.error('Errore nel recupero delle news da Firestore:', error);
      throw error; // Lancia l'errore in modo che venga gestito in useEffect
    }
  };


  return (
    <section id={id} className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Ultime Notizie</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.length === 0 ? (
            <p>Caricamento delle notizie...</p>
          ) : (
            newsItems.map((post, index) => (
              <Card key={index} className="border-secondary hover:shadow-lg transition-shadow">
                <CardHeader>
                  <h3 className="text-xl font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                </CardContent>
              </Card>
            ))
          )}
        </div>
        <div className="mt-12 text-center">
          <Link href="https://www.agenziaentrate.gov.it/portale/home" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
            >
              Visita il sito dell'Agenzia delle Entrate
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}