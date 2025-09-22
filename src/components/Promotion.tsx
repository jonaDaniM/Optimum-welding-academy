import { SITE } from '@/config';

export default function Promotion() {
  return (
    <section id="promotion" className="section bg-gradient-to-r from-blueDeep to-steelGray border-t border-white/10">
      <div className="container text-center">
        <h2 className="font-display text-3xl mb-4">Referral Special</h2>
        <div className="max-w-2xl mx-auto">
          <div className="p-6 bg-white/10 border border-spark/30 rounded-lg">
            <div className="text-2xl font-bold text-spark mb-2">
              Bring a Friend & Save!
            </div>
            <p className="text-white/90 text-lg mb-4">
              Refer someone to join the program and you both get the course for just
            </p>
            <div className="text-4xl font-bold text-white mb-4">
              ${SITE.referralPrice.toLocaleString()}
            </div>
            <p className="text-white/80 mb-4">
              That's a <span className="text-spark font-semibold">$500 savings</span> for each of you!
            </p>
            <div className="text-sm text-white/70">
              *Both students must enroll together. Valid for new enrollments only.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
