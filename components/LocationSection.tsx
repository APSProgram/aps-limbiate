import GoogleMap from "./GoogleMap"
import ReviewSection from "./ReviewSection"

export default function LocationSection({ id }: { id?: string }) {
  return (
    <section id={id} className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Dove Siamo</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <GoogleMap />
          <ReviewSection />
        </div>
      </div>
    </section>
  )
}

