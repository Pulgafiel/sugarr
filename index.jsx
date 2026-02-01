import React from "react";

const services = [
  {
    title: "Photocall premium",
    description:
      "Cabinas de fotos para eventos con acabados en metacrilato o madera, perfectas para bodas y eventos corporativos.",
  },
  {
    title: "Vídeo 360° viral",
    description:
      "Plataforma giratoria para vídeos dinámicos con efectos de cámara lenta y edición automática para compartir al instante.",
  },
  {
    title: "Beauty & glitter bar",
    description:
      "Mesa con maquilladora para aplicar glitter y purpurina para looks festivaleros e instagrameables.",
  },
  {
    title: "Pintacaras infantil",
    description:
      "Animación para niños con diseños coloridos y seguros para que toda la familia disfrute.",
  },
  {
    title: "Carritos gourmet",
    description:
      "Helados, hot dogs, crepes y más, con opciones personalizadas para tu evento.",
  },
  {
    title: "Decoraciones únicas",
    description:
      "Escenografías llamativas y piezas exclusivas para elevar el impacto visual de tu celebración.",
  },
];

const extras = [
  "Flores naturales o artificiales",
  "Iluminación LED",
  "Rótulo personalizado",
  "Cambio de fondo",
  "Cambio de tamaño",
];

const steps = [
  {
    title: "Elige tu experiencia",
    description:
      "Selecciona los servicios y extras. Podemos adaptar tamaños y rotulados según tu marca o temática.",
  },
  {
    title: "Montaje y asistencia",
    description:
      "Nuestro equipo instala todo y, si lo necesitas, un técnico acompaña el servicio para grabación y soporte.",
  },
  {
    title: "Entrega instantánea",
    description:
      "En el 360° grabamos con móvil y entregamos el vídeo editado con efectos predefinidos para compartir al momento.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(236,72,153,0.35),_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full border border-pink-400/40 bg-pink-500/10 px-4 py-1 text-sm font-semibold text-pink-200">
              Alquiler de material para eventos
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Another Great Event
            </h1>
            <p className="max-w-xl text-lg text-slate-200">
              Creamos experiencias instagrameables para bodas y eventos corporativos. Alquila por horas o
              por evento completo, con opciones de personalización y fianza de seguridad.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400">
                Solicitar presupuesto
              </button>
              <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-pink-300 hover:text-pink-200">
                Ver catálogo
              </button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-widest text-pink-200">Personalización</p>
                <p className="mt-2 text-sm text-slate-200">
                  Rotulado, fondos y tamaños a medida según tu evento.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-widest text-pink-200">Staff opcional</p>
                <p className="mt-2 text-sm text-slate-200">
                  Técnicos y asistentes para asegurar una experiencia impecable.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm uppercase tracking-widest text-pink-200">Entrega rápida</p>
                <p className="mt-2 text-sm text-slate-200">
                  Vídeos 360° editados en el momento y listos para compartir.
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-full max-w-md space-y-6 rounded-3xl border border-pink-500/30 bg-gradient-to-br from-pink-500/20 via-transparent to-pink-500/10 p-8 shadow-2xl shadow-pink-500/20">
            <h2 className="text-2xl font-semibold">Lo más solicitado</h2>
            <ul className="space-y-4 text-sm text-slate-200">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                Cabinas Photocall con acabados premium y opciones de branding.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                Plataforma 360° con edición automática y zonas de cámara lenta.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                Decoraciones exclusivas para sorprender y destacar en redes.
              </li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-semibold text-pink-200">Extras disponibles</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {extras.map((extra) => (
                  <span
                    key={extra}
                    className="rounded-full border border-pink-400/30 bg-pink-400/10 px-3 py-1 text-xs text-pink-100"
                  >
                    {extra}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">Servicios</p>
              <h2 className="mt-2 text-3xl font-bold">Material diseñado para brillar en cada evento</h2>
              <p className="mt-4 max-w-2xl text-base text-slate-600">
                Nuestro catálogo combina diseño, tecnología y atención al detalle para que cada invitado se
                lleve un recuerdo inolvidable.
              </p>
            </div>
            <div className="rounded-2xl bg-pink-50 px-6 py-4 text-sm text-pink-900">
              Disponible por horas o evento completo + fianza de seguridad.
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                </div>
                <span className="mt-6 text-xs font-semibold uppercase tracking-widest text-pink-500">
                  Personalizable
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-widest text-pink-300">Vídeo 360°</p>
            <h2 className="text-3xl font-bold">El momento estrella para redes sociales</h2>
            <p className="text-base text-slate-300">
              Grabamos con móvil en una plataforma giratoria tipo Las Vegas o Abu Dhabi. Nuestro equipo
              activa efectos de cámara lenta y plantillas predefinidas para entregar un vídeo listo para
              compartir en minutos.
            </p>
            <div className="rounded-2xl border border-pink-500/30 bg-pink-500/10 p-5 text-sm text-pink-100">
              Opcional: el cliente puede llevarse los archivos originales para editar su propio contenido.
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold">Cómo funciona</h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500/20 text-sm font-semibold text-pink-200">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{step.title}</p>
                    <p className="text-sm text-slate-300">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 text-slate-900">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 rounded-3xl border border-pink-100 bg-gradient-to-r from-pink-50 to-white p-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Hazlo único</h2>
              <p className="text-base text-slate-600">
                Añade branding, cambia fondos, incorpora flores o leds y adapta el tamaño. Creamos
                experiencias a medida para que tu evento sea inolvidable.
              </p>
              <div className="flex flex-wrap gap-3">
                {extras.map((extra) => (
                  <span
                    key={`custom-${extra}`}
                    className="rounded-full border border-pink-200 bg-white px-4 py-2 text-xs font-semibold text-pink-500"
                  >
                    {extra}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-3 rounded-2xl bg-white/80 p-6 shadow-md">
              <p className="text-sm font-semibold uppercase tracking-widest text-pink-500">
                Eventos ideales
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Bodas y pedidas de mano</li>
                <li>• Lanzamientos de marca</li>
                <li>• Eventos corporativos</li>
                <li>• Activaciones en centros comerciales</li>
              </ul>
              <button className="mt-4 w-full rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800">
                Agenda una llamada
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-center">
        <div className="mx-auto max-w-3xl space-y-4 px-6">
          <h2 className="text-3xl font-bold">¿Listo para un evento memorable?</h2>
          <p className="text-base text-slate-300">
            Cuéntanos la fecha, la ciudad y el tipo de evento. Te enviaremos un presupuesto detallado con
            opciones de personalización.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-pink-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-pink-500/30 transition hover:bg-pink-400">
              Reservar ahora
            </button>
            <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-pink-300 hover:text-pink-200">
              Descargar dossier
            </button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© 2024 Another Great Event. Experiencias visuales para eventos inolvidables.</p>
          <p>info@anothergreatevent.com · +34 600 000 000</p>
        </div>
      </footer>
    </main>
  );
}
