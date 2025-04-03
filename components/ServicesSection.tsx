import { Card, CardContent } from "@/components/ui/card"
import { ServiceIcon } from "@/components/icons/ServiceIcon"

const services = [
  {
    title: "Servizi CAF",
    items: ["Dichiarazione dei redditi", "ISEE", "IMU", "Modello 730"],
    icon: "document",
  },
  {
    title: "Servizi Patronato",
    items: ["Pensioni", "Invalidità civile", "Disoccupazione", "Assegno unico"],
    icon: "users",
  },
  {
    title: "Altri Servizi",
    items: ["Successioni", "Contratti di locazione", "Visure catastali", "Consulenza fiscale"],
    icon: "folder",
  },
]

export default function ServicesSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">I Nostri Servizi</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-secondary hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <ServiceIcon name={service.icon} className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {service.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

