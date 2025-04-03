"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ContactIcon } from "@/components/icons/ContactIcon"

export default function ContactSection({ id }: { id?: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  return (
    <section id={id} className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">Contatti</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <ContactInfo icon="location" text="Via Raffaello Sanzio, 7, 20812 Limbiate MB, Italia" />
            <ContactInfo icon="phone" text="327 889 0277" />
            <ContactInfo icon="phone" text="389 007 4228 (Alternativo)" />
            <ContactInfo icon="clock" text="Lun-Ven: 9:00-12:00, 15:00-18:00" />
            <ContactInfo icon="clock" text="Sabato: Chiuso" />
          </div>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nome e Cognome"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Telefono"
              className="w-full p-2 border rounded"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Messaggio"
              rows={4}
              className="w-full p-2 border rounded"
              required
            ></textarea>
            <Button type="submit" className="w-full">
              Invia Messaggio
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

function ContactInfo({ icon, text }: { icon: string; text: string }) {
  return (
    <p className="flex items-center">
      <ContactIcon name={icon} className="w-6 h-6 mr-2 text-primary" />
      {text}
    </p>
  )
}

