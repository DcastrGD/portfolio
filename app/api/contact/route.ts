import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Introduce un email válido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: "Datos inválidos", details: result.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message } = result.data;

    // Las credenciales y claves de API privadas (como RESEND_API_KEY)
    // se procesan exclusivamente en este servidor backend.
    // NUNCA son visibles por el usuario ni se envían al navegador.
    const resendApiKey = process.env.RESEND_API_KEY;
    const recipient = process.env.CONTACT_EMAIL || "dcastrgd@gmail.com";

    if (resendApiKey) {
      // Cuando tengas configurada tu clave privada en .env.local:
      // await fetch("https://api.resend.com/emails", {
      //   method: "POST",
      //   headers: {
      //     Authorization: `Bearer ${resendApiKey}`,
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     from: "Portfolio <onboarding@resend.dev>",
      //     to: [recipient],
      //     subject: `Nuevo mensaje de ${name} (${email})`,
      //     text: message,
      //   }),
      // });
    }

    // Registramos en el servidor (solo visible en tus logs internos)
    console.log(`[Contacto recibido] De: ${name} <${email}> - Longitud: ${message.length} chars. Receptor: ${recipient}`);

    return NextResponse.json(
      { success: true, message: "Mensaje recibido correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error en contacto:", error);
    return NextResponse.json(
      { error: "Error interno al procesar el mensaje" },
      { status: 500 }
    );
  }
}

