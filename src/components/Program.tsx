export default function Program() {
  return (
    <section id="program" className="section border-t border-white/10">
      <div className="container">
        <h2 className="font-display text-3xl">Program: 3 Months</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-5 bg-white/5 border border-white/10 rounded">
            <h3 className="font-semibold">Month 1</h3>
            <p className="text-white/80">Safety, fundamentals, MIG</p>
          </div>
          <div className="p-5 bg-white/5 border border-white/10 rounded">
            <h3 className="font-semibold">Month 2</h3>
            <p className="text-white/80">TIG, materials, joints</p>
          </div>
          <div className="p-5 bg-white/5 border border-white/10 rounded">
            <h3 className="font-semibold">Month 3</h3>
            <p className="text-white/80">Stick, projects, prep</p>
          </div>
        </div>
      </div>
    </section>
  );
}


