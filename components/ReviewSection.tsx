import { Card, CardContent } from "@/components/ui/card"
import { StarIcon } from "@/components/icons/StarIcon"

const reviews = [
  {
    author: "Luca Bianchi",
    rating: 5,
    text: "Ottimo servizio, personale molto competente e disponibile. Ho risolto il mio problema in poco tempo. Consigliato!",
    date: "1 mese fa",
  },
  {
    author: "Maria Rossi",
    rating: 5,
    text: "Servizio eccellente e professionale. Hanno gestito la mia pratica con grande attenzione ai dettagli. Grazie mille!",
    date: "2 settimane fa",
  },
  {
    author: "Giuseppe Verdi",
    rating: 5,
    text: "Personale gentile e preparato. Mi hanno aiutato con la dichiarazione dei redditi in modo rapido ed efficiente. Altamente raccomandato.",
    date: "3 mesi fa",
  },
  {
    author: "Anna Esposito",
    rating: 5,
    text: "Ho trovato grande competenza e cortesia. Mi hanno guidato passo passo nella compilazione dell'ISEE. Tornerò sicuramente!",
    date: "1 mese fa",
  },
  {
    author: "Marco Colombo",
    rating: 5,
    text: "Servizio impeccabile. Hanno risolto una questione complicata con la mia pensione. Sono molto grato per il loro aiuto.",
    date: "2 mesi fa",
  },
]

export default function ReviewSection() {
  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-2">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-6 h-6" />
          ))}
        </div>
        <p className="text-2xl font-bold">5.0</p>
        <p className="text-gray-600">Basato su 26 recensioni</p>
      </div>
      <div className="space-y-4 max-h-[400px] overflow-y-auto pr-4">
        {reviews.map((review, index) => (
          <Card key={index} className="border-secondary">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
              <p className="text-gray-700 mb-2">{review.text}</p>
              <p className="text-sm font-semibold">{review.author}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

