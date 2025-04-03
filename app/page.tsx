import Header from "@/components/Header"
import Footer from "@/components/Footer"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import NewsSection from "@/components/NewsSection"
import LocationSection from "@/components/LocationSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-roboto">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection id="servizi" />
        <NewsSection id="news" />
        <LocationSection id="dove-siamo" />
        <ContactSection id="contatti" />
      </main>
      <Footer />
    </div>
  )
}

