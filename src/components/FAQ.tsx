import { useState } from 'react';

const faqs = [
  { q: 'How long is the program?', a: 'Four months with hands-on shop time.' },
  { q: 'What welding types are covered?', a: 'TIG and Stick welding - the most in-demand skills in the industry.' },
  { q: 'Do I need experience?', a: 'No, we welcome beginners and start from the basics.' },
  { q: 'Is safety gear provided?', a: 'We guide purchases; some gear available on site.' },
  { q: 'Will I be job-ready?', a: 'We focus on practical, jobsite-ready TIG and Stick welding skills.' },
  { q: 'Where are you located?', a: 'Pasadena, TX. Classes run 5:30 PM - 9:00 PM.' },
];

export default function FAQ() {
  return (
    <section id="faq" className="section">
      <div className="container">
        <h2 className="font-display text-3xl">FAQ</h2>
        <div className="mt-6 space-y-3">
          {faqs.map((f, idx) => (
            <Item key={idx} q={f.q} a={f.a} />)
          )}
        </div>
      </div>
    </section>
  );
}

function Item({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded">
      <button aria-expanded={open} className="w-full text-left p-4 font-semibold hover:bg-white/5" onClick={() => setOpen((v) => !v)}>
        {q}
      </button>
      {open && <div className="p-4 pt-0 text-white/80">{a}</div>}
    </div>
  );
}


