export default function About() {
  return (
    <section id="about" className="section border-t border-white/10">
      <div className="container grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-display text-3xl">About</h2>
          <p className="mt-2 text-white/80">Safety-first, hands-on training in a real shop environment.</p>
        </div>
        <ul className="md:col-span-2 grid sm:grid-cols-3 gap-4">
          <li className="p-4 bg-white/5 border border-white/10 rounded">Safety & PPE</li>
          <li className="p-4 bg-white/5 border border-white/10 rounded">Hours of shop time</li>
          <li className="p-4 bg-white/5 border border-white/10 rounded">MIG / TIG / Stick</li>
        </ul>
      </div>
    </section>
  );
}


