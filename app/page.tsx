import { Twitter, Mail, Link as LinkIcon, Newspaper, Rocket, Youtube, Github, MessageCircle, Gamepad2 } from "lucide-react";

const BRAND = {
  bg: "bg-[#0B0D12]",
  card: "bg-white/5 border-white/10",
  accent: "from-amber-400 to-orange-500",
  textSoft: "text-white/80",
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">{children}</div>;
}

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border ${BRAND.card} backdrop-blur ${className}`}>{children}</div>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs tracking-wide">
      {children}
    </span>
  );
}

function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 font-medium text-black shadow-lg transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400 active:scale-100 bg-gradient-to-br from-amber-400 to-orange-500"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <div className={`${BRAND.bg} min-h-screen text-white`}>
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_40%_at_50%_-10%,rgba(251,191,36,0.25),rgba(0,0,0,0))]" />

      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30">
        <Container>
          <div className="flex h-16 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 text-black font-black">P</div>
              <span className="text-lg font-semibold tracking-tight">poksi<span className="text-amber-400">.fr</span></span>
            </a>
            <nav className="hidden gap-6 text-sm sm:flex">
              <a href="#about" className="opacity-80 hover:opacity-100">À propos</a>
              <a href="#posts" className="opacity-80 hover:opacity-100">Threads</a>
              <a href="#tools" className="opacity-80 hover:opacity-100">Outils</a>
              <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <a
                href="https://x.com/Poksicoin"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-sm hover:bg-white/10"
              >
                <span className="inline-flex items-center gap-2"><Twitter className="h-4 w-4" /> Suivre</span>
              </a>
            </div>
          </div>
        </Container>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20" style={{backgroundImage: "url('https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1400&auto=format&fit=crop')", backgroundSize: 'cover', backgroundPosition: 'center'}} />
        <Container>
          <div className="grid items-center gap-8 py-14 sm:grid-cols-[auto_1fr] sm:py-20">
            <div className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-4 ring-white/10 sm:mx-0">
              <img
                src="/logo.svg"
                alt="POKSI avatar"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <Badge>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Disponible pour collabs & projets
              </Badge>
              <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
                POKSI — Tech · Crypto · IA · Pop culture
              </h1>
              <p className={`${BRAND.textSoft} mt-4 max-w-2xl`}>
                Fan de Pokémon, gadgets et culture japonaise. Création d’outils, threads et side projects. Ami TCG Pocket : <span className="font-mono">23889439741819213</span>.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CTAButton href="https://x.com/Poksicoin">
                  <Twitter className="h-4 w-4" /> Suivre sur X
                </CTAButton>
                <a href="#newsletter" className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10">S’abonner à la newsletter</a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-8">
        <Container>
          <div className="grid gap-4 sm:grid-cols-3">
            {[{
              icon: <Rocket className="h-5 w-5" />, title: "Projets", desc: "StarterIA, apps utilitaires, outils crypto."
            },{
              icon: <Newspaper className="h-5 w-5" />, title: "Threads", desc: "Analyses pédagogiques sur blockchains & marchés."
            },{
              icon: <Gamepad2 className="h-5 w-5" />, title: "TCG & Pop culture", desc: "Cartes Pokémon FR, TCG Pocket, tendances."
            }].map((f, i) => (
              <GlassCard key={i} className="p-5">
                <div className="flex items-center gap-3">
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber-400/20 to-orange-500/20 text-amber-300 ring-1 ring-white/10">
                    {f.icon}
                  </div>
                  <h3 className="font-semibold">{f.title}</h3>
                </div>
                <p className={`mt-2 ${BRAND.textSoft}`}>{f.desc}</p>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="posts" className="py-10">
        <Container>
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Derniers highlights</h2>
            <a href="https://x.com/Poksicoin" className="text-sm text-amber-300 hover:underline">Tout voir sur X</a>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[{
              title: "Analyse technique Solana — thread",
              url: "https://x.com/Poksicoin",
              excerpt: "RSI, MM, scénarios — éducatif, pas un conseil financier.",
            },{
              title: "Carte POKSI — fan art TCG",
              url: "https://x.com/Poksicoin/status/",
              excerpt: "Concept card inspirée du style Pokémon FR.",
            }].map((p, i) => (
              <GlassCard key={i} className="p-6">
                <h3 className="text-lg font-semibold">
                  <a href={p.url} className="hover:underline">{p.title}</a>
                </h3>
                <p className={`mt-2 ${BRAND.textSoft}`}>{p.excerpt}</p>
                <div className="mt-4 flex items-center gap-3">
                  <a href={p.url} className="inline-flex items-center gap-2 text-sm text-white/90 hover:underline">
                    <LinkIcon className="h-4 w-4" /> Ouvrir
                  </a>
                </div>
              </GlassCard>
            ))}
          </div>
        </Container>
      </section>

      <section id="tools" className="py-10">
        <Container>
          <h2 className="text-2xl font-bold">Liens & outils</h2>
          <p className={`${BRAND.textSoft} mt-2`}>Raccourcis vers l’écosystème Poksi.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <Twitter className="h-4 w-4" />, label: "X / Twitter", href: "https://x.com/Poksicoin" },
              { icon: <Youtube className="h-4 w-4" />, label: "YouTube (à venir)", href: "#" },
              { icon: <Github className="h-4 w-4" />, label: "Github / open‑source", href: "#" },
              { icon: <Newspaper className="h-4 w-4" />, label: "Blog / Articles", href: "/blog" },
              { icon: <MessageCircle className="h-4 w-4" />, label: "Contact", href: "#contact" },
              { icon: <Gamepad2 className="h-4 w-4" />, label: "Ami TCG Pocket", href: "#tcg-pocket" },
            ].map((l, i) => (
              <a key={i} href={l.href} className="group">
                <GlassCard className="flex items-center justify-between p-5 transition hover:bg-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/5">
                      {l.icon}
                    </div>
                    <span>{l.label}</span>
                  </div>
                  <span className="opacity-60 transition group-hover:translate-x-1">→</span>
                </GlassCard>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section id="newsletter" className="py-10">
        <Container>
          <GlassCard className="p-6 sm:p-8">
            <div className="grid gap-6 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h3 className="text-xl font-semibold">Newsletter Poksi</h3>
                <p className={`${BRAND.textSoft} mt-2`}>Un email concis quand il y a un vrai truc à dire. Zéro spam.</p>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); alert("Merci ! (brancher à Buttondown/ConvertKit)"); }} className="flex items-center gap-2">
                <input type="email" required placeholder="ton@email" className="w-64 rounded-xl border border-white/10 bg-white/5 px-4 py-3 outline-none placeholder:text-white/40 focus:border-amber-400" />
                <button className="rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 px-4 py-3 font-medium text-black">S’inscrire</button>
              </form>
            </div>
          </GlassCard>
        </Container>
      </section>

      <section id="contact" className="py-14">
        <Container>
          <GlassCard className="p-8">
            <h3 className="text-xl font-semibold">Contact</h3>
            <p className={`${BRAND.textSoft} mt-2`}>Pour une collab, un outil à coder, ou un sujet crypto à vulgariser.</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a href="mailto:contact@poksi.fr" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> contact@poksi.fr
              </a>
              <a href="https://x.com/Poksicoin" className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 inline-flex items-center gap-2">
                <Twitter className="h-4 w-4" /> @Poksicoin
              </a>
            </div>
          </GlassCard>
          <p className="mt-8 text-center text-xs opacity-60">© {new Date().getFullYear()} poksi.fr — vibes X, glassmorphism léger, Tailwind.</p>
        </Container>
      </section>
    </div>
  );
}
