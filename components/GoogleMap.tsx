"use client"

import { Button } from "@/components/ui/button"

export default function GoogleMap() {
  return (
    <div className="space-y-4">
      <div className="w-full h-[400px] rounded-lg shadow-md overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2792.3890921072705!2d9.133326776537503!3d45.61960252318894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786a0c4c2e2a6e7%3A0x9b4c5f1f9d0b9b1a!2sVia%20Raffaello%20Sanzio%2C%207%2C%2020812%20Limbiate%20MB%2C%20Italy!5e0!3m2!1sen!2sus!4v1708127547884!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-center">
        <Button
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          onClick={() => window.open("https://maps.app.goo.gl/tuFUjCx", "_blank")}
        >
          Indicazioni
        </Button>
      </div>
    </div>
  )
}

