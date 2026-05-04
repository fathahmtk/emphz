/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Link } from 'react-router-dom';

interface PlaceholderPageProps {
  title: string;
  description: string;
}

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <section className="min-h-[70vh] pt-36 pb-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-screen-lg mx-auto">
        <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold mb-4">EMPHZ</p>
        <h1 className="text-4xl md:text-6xl font-display font-black tracking-tight text-zinc-900 mb-6">{title}</h1>
        <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl mb-10">{description}</p>
        <Link
          to="/contact"
          className="inline-flex items-center bg-zinc-900 text-white px-6 py-3 text-sm uppercase tracking-[0.18em] font-bold hover:bg-accent transition-colors"
        >
          Contact EMPHZ
        </Link>
      </div>
    </section>
  );
}
