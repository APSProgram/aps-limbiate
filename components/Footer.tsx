import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/57575e5a-4fd1-41fb-8a99-f8311024a59f-c9PQXhk56r0PSu7c2qMyp4gPurQCS7.jpeg"
              alt="APS Limbiate Logo"
              width={200}
              height={60}
              className="h-16 w-auto mb-4"
            />
            <p className="text-sm">Assistenza Pratiche e Servizi</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Orari di Apertura</h3>
            <p className="text-sm">Lunedì - Venerdì: 9:00 - 12:00, 15:00 - 18:00</p>
            <p className="text-sm">Sabato: Chiuso</p>
          </div>
          <div>
            <h3 className="font-bold mb-4">Contatti</h3>
            <p className="text-sm">Tel: 327 889 0277</p>
            <p className="text-sm">Tel alternativo: 389 007 4228</p>
            <p className="text-sm">Via Raffaello Sanzio, 7</p>
            <p className="text-sm">20812 Limbiate MB</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-secondary text-center">
          <p>&copy; {new Date().getFullYear()} APS Limbiate. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  )
}

