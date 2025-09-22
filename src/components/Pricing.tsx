import { SITE } from '@/config';

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="font-display text-3xl">Pricing & Schedule</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded">
            <div className="text-4xl font-bold text-spark">${SITE.priceUsd.toLocaleString()}</div>
            <p className="text-white/70 mt-2">Total Course Cost</p>
            <ul className="mt-4 space-y-2 text-white/80">
              <li>Shop access and materials</li>
              <li>Safety gear guidance</li>
              <li>Certification prep support</li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded">
            <h3 className="font-semibold text-spark">Payment Plan</h3>
            <div className="mt-4 space-y-2">
              <div className="flex justify-between">
                <span>Down Payment:</span>
                <span className="font-semibold">${SITE.downPayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Weekly Payment:</span>
                <span className="font-semibold">${SITE.weeklyPayment}/week</span>
              </div>
              <div className="text-sm text-white/70 mt-2">
                Classes: {SITE.classSchedule}<br/>
                Location: {SITE.location}
              </div>
            </div>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded">
            <h3 className="font-semibold">What's included</h3>
            <ul className="mt-2 list-disc list-inside text-white/80">
              <li>Hands-on instruction</li>
              <li>Project-based learning</li>
              <li>Career guidance</li>
              <li>All materials & safety gear</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}


