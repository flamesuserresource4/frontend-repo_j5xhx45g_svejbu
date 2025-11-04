import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Play, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Cover Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/atN3lqky4IzF-KEP/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays for readability (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs backdrop-blur">
          <Rocket className="h-4 w-4 text-purple-300" />
          <span className="text-white/80">Creative • Esports • AI • Digital Business</span>
        </div>
        <h1 className="font-heading text-4xl leading-tight text-white md:text-6xl">
          Hxvastore empowers young creators in the digital era
        </h1>
        <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">
          Build projects, join tournaments, explore AI, and launch digital ventures with a community that helps you grow.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#programs"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90"
          >
            <Play className="h-4 w-4" />
            Explore Programs
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-5 py-3 font-medium text-white backdrop-blur transition hover:border-white/40"
          >
            Our Services
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
