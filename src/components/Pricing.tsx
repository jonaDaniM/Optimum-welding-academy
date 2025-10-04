import { SITE } from '@/config';

export default function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <h2 className="font-display text-3xl text-center mb-8">Course Options & Pricing</h2>
        <div className="mt-6 grid lg:grid-cols-3 gap-6">
          <div className="p-6 bg-white/5 border border-white/10 rounded">
            <h3 className="font-semibold text-spark mb-2">Stick Welding Course</h3>
            <div className="text-3xl font-bold text-white">${SITE.stickPrice.toLocaleString()}</div>
            <p className="text-white/70 mt-2">2 Months • Months 1-2</p>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              <li>• Stick basics & fundamentals</li>
              <li>• Advanced stick, plate and pipe</li>
              <li>• All materials included</li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 border border-weldingRed rounded relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-weldingRed text-white px-3 py-1 rounded-full text-sm font-semibold">POPULAR</span>
            </div>
            <h3 className="font-semibold text-spark mb-2">Combo Course</h3>
            <div className="text-3xl font-bold text-white">${SITE.comboPrice.toLocaleString()}</div>
            <p className="text-white/70 mt-2">4 Months • Complete Program</p>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              <li>• All Stick & TIG training</li>
              <li>• Advanced pipe welding</li>
              <li>• Certification prep</li>
              <li>• $500 savings vs separate courses</li>
            </ul>
          </div>
          <div className="p-6 bg-white/5 border border-white/10 rounded">
            <h3 className="font-semibold text-spark mb-2">TIG Welding Course</h3>
            <div className="text-3xl font-bold text-white">${SITE.tigPrice.toLocaleString()}</div>
            <p className="text-white/70 mt-2">2 Months • Months 3-4</p>
            <ul className="mt-4 space-y-2 text-white/80 text-sm">
              <li>• TIG basics and fundamentals</li>
              <li>• Advanced TIG on pipe</li>
              <li>• All materials included</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded">
          <h3 className="font-semibold text-spark mb-4">Payment Plan & Schedule</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Down Payment:</span>
                <span className="font-semibold">${SITE.downPayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Weekly Payment:</span>
                <span className="font-semibold">${SITE.weeklyPayment}/week</span>
              </div>
            </div>
            <div className="text-sm text-white/70">
              <strong>Classes:</strong> {SITE.classSchedule}<br/>
              <strong>Location:</strong> {SITE.location}<br/>
              <strong>Duration:</strong> Choose your path - 2 or 4 months
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


