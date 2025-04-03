import { StarIcon } from "@/components/icons/StarIcon"

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-primary to-secondary text-primary-foreground py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">CAF e Patronato a Limbiate</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Assistenza completa per tutte le tue pratiche fiscali e previdenziali
        </p>
        <div className="flex items-center justify-center space-x-2 text-yellow-400 mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="w-6 h-6" />
          ))}
          <span className="text-white ml-2">(26 recensioni)</span>
        </div>
      </div>
    </section>
  )
}

