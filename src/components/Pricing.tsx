import { SITE } from '@/config';

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="font-display text-3xl">Pricing</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded">
            <div className="text-4xl font-bold">${SITE.priceUsd.toLocaleString()}</div>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Shop access and materials</li>
              <li>Safety gear guidance</li>
              <li>Certification prep support</li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded">
            <h3 className="font-semibold">What’s included</h3>
            <ul className="mt-2 list-disc list-inside text-white/80">
              <li>Hands-on instruction</li>
              <li>Project-based learning</li>
              <li>Career guidance</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


