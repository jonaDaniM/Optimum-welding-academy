import { SITE } from '@/config';

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-graphite/80 backdrop-blur border-b border-white/10">
      <div className="container flex items-center justify-between py-3">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <img src="/Optimum-welding-academy/logo.PNG" alt="Logo" className="w-8 h-8 flex-shrink-0" />
          <span className="font-display text-lg sm:text-xl tracking-wide truncate">{SITE.academyName}</span>
        </a>
        <nav className="hidden md:flex items-center gap-4 text-sm">
          <a href="#about" className="hover:text-spark">About</a>
          <a href="#program" className="hover:text-spark">Program</a>
          <a href="#pricing" className="hover:text-spark">Pricing</a>
          <a href="#faq" className="hover:text-spark">FAQ</a>
          <a href="#apply" className="btn btn-danger">Apply</a>
          <a href={`tel:${SITE.phoneE164}`} className="btn btn-primary">Call {SITE.phoneHuman}</a>
        </nav>
        <div className="md:hidden flex items-center gap-2">
          <a href="#apply" className="btn btn-danger text-xs px-3 py-2">Apply</a>
          <a href={`tel:${SITE.phoneE164}`} className="btn btn-primary text-xs px-3 py-2">Call</a>
        </div>
      </div>
    </header>
  );
}


