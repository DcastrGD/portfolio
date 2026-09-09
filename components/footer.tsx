import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Separator } from "@/components/ui/separator";
import { siteConfig } from "@/data/site";

const quickLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  {
    icon: GithubIcon,
    label: "GitHub",
    href: siteConfig.github,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    href: siteConfig.linkedin,
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
  },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <span className="text-lg font-bold tracking-tight">
              {siteConfig.name}
              <span className="text-primary">.</span>
            </span>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {siteConfig.title}. Construyendo experiencias web modernas y
              funcionales.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Enlaces rápidos</h4>
            <nav aria-label="Enlaces rápidos del footer">
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-3 text-sm font-semibold">Conecta conmigo</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={
                    link.href.startsWith("mailto")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={link.label}
                  className="flex size-9 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-border hover:text-foreground"
                >
                  <link.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {currentYear} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p className="text-xs text-muted-foreground">
            Hecho con{" "}
            <span className="inline-block" aria-label="corazón">
              ♥
            </span>{" "}
            y Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

