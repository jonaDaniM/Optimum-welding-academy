export default function Testimonials() {
  return (
    <section id="testimonials" className="section border-t border-white/10">
      <div className="container">
        <h2 className="font-display text-3xl">Testimonials</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <blockquote key={i} className="p-5 bg-white/5 border border-white/10 rounded text-white/80">
              “Great shop, great training. I landed work fast.”
              <footer className="mt-3 text-white/60">— Student {i}</footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}


