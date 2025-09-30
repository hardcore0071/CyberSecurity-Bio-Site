"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Linkedin, Github, Send, Terminal, MessageSquare } from "lucide-react"
import { TypingAnimation } from "@/components/typing-animation"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "Umar.Mushtaq46@outlook.com",
      href: "mailto:Umar.Mushtaq46@outlook.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+971 557 221 997",
      href: "tel:+971557221997",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Abu Dhabi, UAE",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/umarmushtaq2/",
      color: "text-blue-600 hover:text-blue-700",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/umarmushtaq",
      color: "text-gray-800 dark:text-gray-200 hover:text-emerald-500",
    },
  ]

  return (
    <section id="contact" className="py-16 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-1/4 w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 right-10 w-2 h-2 bg-emerald-500 rounded-full animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="mb-4 font-mono text-sm text-emerald-500 flex items-center justify-center gap-2">
            <Terminal className="h-4 w-4" />
            <TypingAnimation text=">_$ ./contact.sh --collaborate" speed={120} />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ready to secure your digital assets? Let's collaborate to protect your organization from emerging cyber
            threats.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-emerald-500" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-emerald-500/5 transition-colors"
                  >
                    <info.icon className="h-5 w-5 text-emerald-500" />
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground hover:text-emerald-500 transition-colors font-medium"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-foreground font-medium">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
              <CardHeader>
                <CardTitle>Connect With Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-lg bg-muted hover:bg-emerald-500/10 transition-all duration-300 hover:scale-110 border border-emerald-500/20 ${social.color}`}
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/30">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  Available for Red Team Engagements
                </h3>
                <p className="text-sm text-muted-foreground">
                  Currently available for penetration testing projects, red team operations, and cybersecurity
                  consulting. Based in Abu Dhabi with international project experience.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-emerald-500/20 hover:border-emerald-500/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-emerald-500" />
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium text-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="border-emerald-500/20 focus:border-emerald-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="border-emerald-500/20 focus:border-emerald-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium text-foreground mb-2 block">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Penetration Testing Inquiry"
                    className="border-emerald-500/20 focus:border-emerald-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium text-foreground mb-2 block">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your cybersecurity needs and project requirements..."
                    className="border-emerald-500/20 focus:border-emerald-500"
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" className="w-full group bg-emerald-600 hover:bg-emerald-700">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
