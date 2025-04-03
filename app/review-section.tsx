import { Card, CardContent } from "@/components/ui/card"

export function ReviewSection() {
  const reviews = [
    {
      author: "Mario Rossi",
      rating: 5,
      text: "Servizio eccellente e personale molto professionale. Consiglio vivamente!",
      date: "2 settimane fa",
    },
    {
      author: "Laura Bianchi",
      rating: 5,
      text: "Molto competenti e disponibili. Hanno risolto la mia pratica in tempi rapidi.",
      date: "1 mese fa",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-2">
          {Array(5)
            .fill(0)
            .map((_, i) => (
              <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
        </div>
        <p className="text-2xl font-bold">5.0</p>
        <p className="text-gray-600">Basato su 26 recensioni</p>
      </div>
      <div className="space-y-4 max-h-[300px] overflow-y-auto">
        {reviews.map((review, index) => (
          <Card key={index} className="border-secondary">
            <CardContent className="p-4">
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 mr-2">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
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

