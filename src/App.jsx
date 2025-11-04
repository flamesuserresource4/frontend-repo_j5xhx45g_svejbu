import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Programs from './components/Programs';
import Team from './components/Team';
import { ShoppingBag } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero />
      <Services />
      <Programs />

      {/* Marketplace CTA */}
      <section className="w-full bg-gradient-to-b from-[#07070a] to-black py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-white/10 bg-white/5 p-8 md:flex-row md:items-center">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-white/70">
                <ShoppingBag className="h-4 w-4" />
                Upcoming
              </div>
              <h3 className="font-heading text-2xl">Marketplace for digital assets & creative works</h3>
              <p className="mt-2 max-w-2xl text-white/70">
                A launchpad for creators to sell 3D models, textures, motion assets, overlays, UI kits, plugins, and more.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
            >
              Get early access
            </a>
          </div>
        </div>
      </section>

      <Team />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black py-10 text-white/70">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <p className="text-sm">© {new Date().getFullYear()} Hxvastore — Building a productive digital ecosystem.</p>
            <nav className="flex gap-6 text-sm">
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#programs" className="hover:text-white">Programs</a>
              <a href="#team" className="hover:text-white">Team</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
