import React from 'react';
import { Calendar, Layers, Users, Trophy, ArrowRight } from 'lucide-react';

const programs = [
  {
    badge: 'Projects',
    title: 'Incubator sprints',
    desc: 'Build in public with mentors and peers. Ship creative tools, games, or AI projects in 4–6 weeks.',
    icon: Layers,
    accent: 'from-violet-500/20 to-fuchsia-500/20',
  },
  {
    badge: 'Tournaments',
    title: 'Seasonal esports cups',
    desc: 'Compete, learn strategy, and grow your team brand with community-driven events.',
    icon: Trophy,
    accent: 'from-amber-500/20 to-pink-500/20',
  },
  {
    badge: 'Community',
    title: 'Guilds & learning circles',
    desc: 'Join themed groups — design, AI, business — to collaborate and level up together.',
    icon: Users,
    accent: 'from-emerald-500/20 to-teal-500/20',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative w-full bg-gradient-to-b from-black to-[#07070a] pb-20 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">How we work</p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl">Projects, tournaments, and community</h2>
          </div>
          <div className="hidden text-sm text-white/60 md:flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            New cohorts open monthly
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:bg-white/10"
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative z-10">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">
                  <p.icon className="h-3.5 w-3.5" />
                  {p.badge}
                </div>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-white/70">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
