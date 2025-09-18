import { SITE } from '@/config';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-graphite/80 backdrop-blur border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo" className="w-9 h-9" />
          <span className="font-display text-xl tracking-wide">{SITE.academyName}</span>
        </a>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="hover:text-spark">About</a>
          <a href="#program" className="hover:text-spark">Program</a>
          <a href="#pricing" className="hover:text-spark">Pricing</a>
          <a href="#faq" className="hover:text-spark">FAQ</a>
          <a href="#apply" className="btn btn-danger">Apply</a>
          <a href={`tel:${SITE.phoneE164}`} className="btn btn-primary">Call {SITE.phoneHuman}</a>
        </nav>
      </div>
    </header>
  );
}


