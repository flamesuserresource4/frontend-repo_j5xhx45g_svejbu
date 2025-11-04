import React from 'react';
import { Users, Star } from 'lucide-react';

const people = [
  { name: 'Alya', role: 'Creative Lead' },
  { name: 'Rian', role: 'Esports Ops' },
  { name: 'Zee', role: 'AI Builder' },
  { name: 'Nara', role: 'Community' },
];

function Avatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
      <span className="text-sm font-semibold">{initials}</span>
    </div>
  );
}

export default function Team() {
  return (
    <section id="team" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">The team</p>
            <h2 className="mt-2 font-heading text-3xl md:text-4xl">Young, passionate, and purpose-driven</h2>
          </div>
          <p className="max-w-2xl text-white/70">
            We are builders, designers, competitors, and community organizers working toward a sustainable digital ecosystem.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {people.map((p) => (
            <div key={p.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex items-center gap-4">
                <Avatar name={p.name} />
                <div>
                  <h3 className="font-semibold">{p.name}</h3>
                  <p className="text-sm text-white/70">{p.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-white/60">
                <Users className="h-4 w-4" />
                Contributor
                <Star className="h-4 w-4 text-amber-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
