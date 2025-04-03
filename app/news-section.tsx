import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function NewsSection() {
  const news = [
    {
      title: "Scadenza IMU 2025",
      date: "15 Feb 2025",
      excerpt: "Informazioni importanti sulle prossime scadenze IMU e come prepararsi.",
    },
    {
      title: "Nuovo Bonus Famiglia",
      date: "10 Feb 2025",
      excerpt: "Tutte le informazioni sul nuovo bonus per le famiglie e come richiederlo.",
    },
    {
      title: "Aggiornamenti ISEE",
      date: "5 Feb 2025",
      excerpt: "Modifiche importanti alla documentazione necessaria per l'ISEE 2025.",
    },
  ]

  return (
    <section id="news" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Ultime Notizie</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((post, index) => (
            <Card key={index} className="border-secondary hover:shadow-lg transition-shadow">
              <CardHeader>
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <Button
                  variant="outline"
                  className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Leggi di più
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

