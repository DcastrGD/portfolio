"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/data/site";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "GitHub",
    href: siteConfig.github,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "LinkedIn",
    href: siteConfig.linkedin,
  },
];

export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Connect to email service (Resend, SendGrid, etc.)
    // Example with Resend:
    // await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    console.log("Form data:", data);

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  const fadeUp = (delay: number) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" as const },
          transition: { duration: 0.5, delay },
        };

  return (
    <section id="contacto" className="bg-muted/30 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos"
        />

        <div className="mx-auto grid max-w-4xl gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div {...fadeUp(0)} className="space-y-6 lg:col-span-2">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Estoy abierto a nuevas oportunidades y colaboraciones. No dudes en
              contactarme si quieres hablar sobre un proyecto o simplemente
              saludar.
            </p>
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    item.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg border border-border/50 bg-card transition-colors group-hover:border-border">
                    <item.icon className="size-4" />
                  </div>
                  <span>{item.value}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div {...fadeUp(0.2)} className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border/50 bg-card p-8 text-center">
                <CheckCircle2 className="mb-3 size-10 text-emerald-500" />
                <h3 className="text-lg font-semibold">¡Mensaje enviado!</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Gracias por contactarme. Te responderé lo antes posible.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4 rounded-xl border border-border/50 bg-card p-6"
                noValidate
              >
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Nombre
                  </label>
                  <Input
                    id="name"
                    placeholder="Tu nombre"
                    aria-invalid={!!errors.name}
                    {...register("name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    aria-invalid={!!errors.email}
                    {...register("email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-sm font-medium"
                  >
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntame sobre tu proyecto..."
                    rows={5}
                    aria-invalid={!!errors.message}
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-destructive">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar mensaje
                      <Send className="size-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

