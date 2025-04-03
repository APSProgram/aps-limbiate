'use client';

import ProtectedRoute from '../ProtectedRoute';
import { useState } from 'react';
import { addNews } from '@/components/AddNews';

const FormPage = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [submittedData, setSubmittedData] = useState<{
    title: string;
    date: string;
    excerpt: string;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      // Invia i dati a Firestore
      await addNews(title, date, excerpt);
      setTitle('');  // Resetta i campi del form
      setDate('');
      setExcerpt('');
    } catch (err) {
      console.error('Errore nell\'aggiungere la notizia:', err);
    }
  };

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Crea una Nuova Notizia</h1>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">
              Titolo
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Data
            </label>
            <input
              type="text"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
              placeholder="Inserisci una data come stringa"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700">
              Excerpt
            </label>
            <textarea
              id="excerpt"
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              rows={4}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Invia
          </button>
        </form>

        {submittedData && (
          <div className="mt-8 p-4 border border-gray-300 rounded-md">
            <h2 className="text-xl font-semibold">Notizia Inviata:</h2>
            <p><strong>Titolo:</strong> {submittedData.title}</p>
            <p><strong>Data:</strong> {submittedData.date}</p>
            <p><strong>Excerpt:</strong> {submittedData.excerpt}</p>
          </div>
        )}
      </div>
    </ProtectedRoute>
  );
};

export default FormPage;
