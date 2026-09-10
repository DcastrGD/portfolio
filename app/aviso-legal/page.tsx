import Link from "next/link";
import { siteConfig } from "@/data/site";

export default function AvisoLegalPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
      <article className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="mb-8">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Legal
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Aviso legal
          </h1>
        </div>

        <div className="space-y-8 text-sm leading-7 text-muted-foreground sm:text-base">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              1. Titular del sitio
            </h2>
            <p>
              Este sitio web es propiedad de {siteConfig.fullName}. En adelante,
              el titular del sitio.
            </p>
            <p className="mt-2">
              Puedes contactar conmigo en {siteConfig.email}.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              2. Objeto
            </h2>
            <p>
              El presente sitio tiene como finalidad informar sobre mi actividad
              profesional, proyectos, experiencia y trayectoria como desarrollador.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              3. Propiedad intelectual
            </h2>
            <p>
              Todos los contenidos publicados en este sitio, incluyendo textos,
              códigos, imágenes, diseños, logotipos y elementos gráficos, son
              propiedad del titular salvo que se indique lo contrario. Queda
              prohibida la reproducción, distribución o uso comercial sin
              autorización expresa.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              4. Exclusión de responsabilidad
            </h2>
            <p>
              El titular se esfuerza por mantener la información actualizada y
              correcta, pero no garantiza la ausencia de errores ni interrupciones
              en el servicio. No se responde por daños derivados del uso del sitio,
              salvo que exista responsabilidad legal imperativa.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              5. Protección de datos
            </h2>
            <p>
              Si decides contactar conmigo a través del formulario o por correo
              electrónico, únicamente utilizaré esos datos para responder a tu
              consulta o gestionar la relación profesional que se derive de ella.
            </p>
            <p className="mt-2">
              No comparto tus datos con terceros salvo obligación legal o
              consentimiento expreso.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              6. Cookies
            </h2>
            <p>
              Este sitio no utiliza cookies de seguimiento con fines publicitarios
              ni analítica avanzada. En caso de incorporar herramientas de
              análisis en el futuro, se informará previamente mediante una
              política específica.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              7. Enlaces externos
            </h2>
            <p>
              Este sitio puede enlazar a redes sociales, repositorios o terceros.
              El titular no se hace responsable del contenido, políticas de
              privacidad o servicios ofrecidos por esos sitios externos.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">
              8. Legislación aplicable
            </h2>
            <p>
              Este aviso legal se rige por la normativa aplicable en España. Cualquier
              controversia derivada de su interpretación o uso se someterá, en su
              caso, a los tribunales competentes de la jurisdicción española.
            </p>
          </section>
        </div>

        <div className="mt-10 border-t border-border/60 pt-6">
          <Link
            href="/"
            className="inline-flex items-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
          >
            Volver al inicio
          </Link>
        </div>
      </article>
    </main>
  );
}
