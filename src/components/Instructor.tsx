export default function Instructor() {
  return (
    <section id="instructor" className="section">
      <div className="container grid md:grid-cols-2 gap-8 items-center">
        <div className="aspect-video bg-white/5 border border-white/10 rounded" aria-label="Samuel portrait placeholder" />
        <div>
          <h2 className="font-display text-3xl">Instructor: Samuel</h2>
          <ul className="mt-4 space-y-2 text-white/80">
            <li>15+ years on the torch</li>
            <li>Real jobsite experience</li>
            <li>Certification prep</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


