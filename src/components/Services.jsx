import React from 'react';
import { Cpu, Trophy, Palette, Briefcase } from 'lucide-react';

const items = [
  {
    icon: Palette,
    title: 'Creativity & Design',
    desc: 'Hands-on workshops to develop art direction, motion, and interactive design skills.',
    color: 'from-pink-500/20 to-purple-500/20',
  },
  {
    icon: Trophy,
    title: 'Esports & Tournaments',
    desc: 'Competitive events, team building, and performance coaching for aspiring players.',
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    desc: 'Learn applied AI — from creative tools to building assistants and smart workflows.',
    color: 'from-emerald-500/20 to-teal-500/20',
  },
  {
    icon: Briefcase,
    title: 'Digital Business',
    desc: 'Launch products, build audiences, and master the business of digital creation.',
    color: 'from-blue-500/20 to-cyan-500/20',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">What we do</p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl">Programs designed for growth</h2>
          </div>
          <p className="max-w-2xl text-white/70">
            We combine creativity, technology, and community to unlock real opportunities for young creators.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div
              key={it.title}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10`}
            >
              <div className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-br ${it.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-white/10 p-3">
                  <it.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-white/70">{it.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
