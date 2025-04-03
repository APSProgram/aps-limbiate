import { Button } from "@/components/ui/button"

export function GoogleMap() {
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
      <div className="flex justify-center space-x-4">
        <Button
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
          onClick={() => window.open("https://maps.app.goo.gl/tuFUjCx", "_blank")}
        >
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          Indicazioni
        </Button>
      </div>
    </div>
  )
}

