export default function About() {
  return (
    <section id="about" className="section border-t border-white/10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-display text-3xl">About</h2>
            <p className="mt-2 text-white/80">Safety-first, hands-on training in a real shop environment.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <img 
                src="/Optimum-welding-academy/pipe.jpg" 
                alt="Welding pipe work" 
                className="w-full h-32 object-cover rounded-lg border border-white/10 mx-auto"
              />
              <p className="mt-2 text-sm text-white/70">Safety & PPE</p>
            </div>
            <div className="text-center">
              <img 
                src="/Optimum-welding-academy/tools.png" 
                alt="Welding tools and equipment" 
                className="w-full h-32 object-cover rounded-lg border border-white/10 mx-auto"
              />
              <p className="mt-2 text-sm text-white/70">Shop Time</p>
            </div>
            <div className="text-center">
              <img 
                src="/Optimum-welding-academy/structural.jpg" 
                alt="Structural welding work" 
                className="w-full h-32 object-cover rounded-lg border border-white/10 mx-auto"
              />
              <p className="mt-2 text-sm text-white/70">MIG / TIG / Stick</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


