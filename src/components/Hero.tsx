import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="top" className="section relative overflow-hidden">
      <div className="container grid lg:grid-cols-2 items-center gap-8 lg:gap-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Forge Your Future. <span className="text-spark">Master the Arc.</span>
          </h1>
          <p className="mt-4 text-white/80 text-base sm:text-lg">Hands-on welding programs designed for real-world work.</p>
          <p className="mt-2 text-white/70 text-sm sm:text-base">Choose your path: 2-month TIG/Stick courses or 4-month combo • Small cohorts • Safety-first shop</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#apply" className="btn btn-danger text-center">Apply / Reserve Spot</a>
            <a href="tel:+17134194148" className="btn btn-primary text-center">Call 713-419-4148</a>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative order-first lg:order-last">
          <div className="w-full aspect-video rounded-lg overflow-hidden border border-white/10">
            <img 
              src="/Optimum-welding-academy/hero-image.jpg" 
              alt="Welder in action with sparks" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TorchWithSparks() {
  return (
    <div className="relative group">
      <svg width="220" height="220" viewBox="0 0 220 220" aria-hidden>
        <rect x="40" y="80" width="80" height="60" rx="8" fill="#1F2937" stroke="#9CA3AF"/>
        <rect x="120" y="100" width="30" height="8" fill="#9CA3AF"/>
        <rect x="150" y="100" width="18" height="8" fill="#F59E0B"/>
      </svg>
      <img src="/Optimum-welding-academy/spark.svg" className="absolute -top-3 -right-3 w-5 opacity-0 group-hover:opacity-100 transition" alt="spark" />
      <img src="/Optimum-welding-academy/spark.svg" className="absolute top-6 -right-6 w-4 opacity-0 group-hover:opacity-100 transition delay-100" alt="spark" />
      <img src="/Optimum-welding-academy/spark.svg" className="absolute -top-6 right-6 w-4 opacity-0 group-hover:opacity-100 transition delay-200" alt="spark" />
    </div>
  );
}


