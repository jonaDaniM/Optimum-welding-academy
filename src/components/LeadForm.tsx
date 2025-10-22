import { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GOOGLE_FORM, SITE } from '@/config';
import { maskUsPhone, toE164 } from '@/lib/phone';
import { nextSixMonthsLabels } from '@/lib/months';
import { buildSmsLink, buildWhatsAppLink } from '@/lib/links';
import QRCode from 'react-qr-code';

type FormValues = {
  name: string;
  dob: string;
  phone: string;
  email: string;
  experience: 'New' | 'Some experience' | 'Experienced';
  courseInterest: 'Combo Course (4 months)' | 'Stick Course (6 weeks)' | 'TIG Course (2 months)' | 'Not sure';
  startMonth: string;
  hearAbout: 'Friend' | 'Social' | 'Search' | 'Flyer' | 'Other';
  message?: string;
  consent: boolean;
};

export default function LeadForm() {
  const months = useMemo(() => nextSixMonthsLabels(), []);
  const wRef = useRef<HTMLAnchorElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [wa, setWa] = useState<string | null>(null);
  const [sms, setSms] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormValues>({
    defaultValues: { experience: 'New', courseInterest: 'Combo Course (4 months)', hearAbout: 'Friend' }
  });
  const phoneVal = watch('phone');

  useEffect(() => {
    setValue('phone', maskUsPhone(phoneVal || ''));
  }, [phoneVal, setValue]);

  const onSubmit = (data: FormValues) => {
    const e164 = toE164(data.phone) || SITE.phoneE164;
    const waLink = buildWhatsAppLink(data, SITE.phoneE164);
    const smsLink = buildSmsLink(data, SITE.phoneE164);
    setWa(waLink);
    setSms(smsLink);
    setSubmitted(true);

    // Submit to Google Forms via hidden form + iframe
    const form = document.createElement('form');
    form.action = GOOGLE_FORM.action;
    form.method = 'POST';
    form.target = 'hidden_iframe_target';
    form.style.display = 'none';

    const append = (name: string, value: string) => {
      const input = document.createElement('input');
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    append(GOOGLE_FORM.entries.name, data.name);
    append(GOOGLE_FORM.entries.dob, data.dob);
    append(GOOGLE_FORM.entries.phone, data.phone);
    append(GOOGLE_FORM.entries.email, data.email);
    append(GOOGLE_FORM.entries.experience, data.experience);
    append(GOOGLE_FORM.entries.courseInterest, data.courseInterest);
    append(GOOGLE_FORM.entries.startMonth, data.startMonth);
    append(GOOGLE_FORM.entries.hearAbout, data.hearAbout);
    append(GOOGLE_FORM.entries.message, data.message || '');
    append(GOOGLE_FORM.entries.consent, data.consent ? 'Yes' : 'No');
    if (GOOGLE_FORM.submitName && GOOGLE_FORM.submitValue) {
      append(GOOGLE_FORM.submitName, GOOGLE_FORM.submitValue);
    }

    document.body.appendChild(form);
    const done = () => {
      try { document.body.removeChild(form); } catch {}
      // Focus WhatsApp button for quick send
      setTimeout(() => wRef.current?.focus(), 50);
    };
    const ifr = iframeRef.current;
    if (ifr) {
      const onLoad = () => { done(); ifr.removeEventListener('load', onLoad); };
      ifr.addEventListener('load', onLoad);
    }
    try { form.submit(); } catch { done(); }
  };

  return (
    <section id="apply" className="section border-t border-white/10">
      <div className="container">
        <h2 className="font-display text-3xl">Apply / Interest Form</h2>
        <p className="mt-2 text-white/70 text-sm">We use your info only to contact you about Optimum Welding Academy. No spam.</p>

        <form className="mt-6 grid md:grid-cols-2 gap-6" onSubmit={handleSubmit(onSubmit)} noValidate>
          <Field label="Full Name" error={errors.name?.message}>
            <input id="full-name" aria-invalid={!!errors.name} className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('name', { required: 'Required' })} />
          </Field>

          <Field label="Birthday / Date of Birth">
            <input id="dob" type="date" aria-invalid={!!errors.dob} className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('dob', { required: 'Required' })} />
          </Field>

          <Field label="Phone">
            <input id="phone" inputMode="tel" placeholder="(555) 555-5555" aria-invalid={!!errors.phone} className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('phone', { required: 'Required', validate: (v) => !!toE164(v) || 'Enter a valid US phone' })} />
          </Field>

          <Field label="Email">
            <input id="email" type="email" aria-invalid={!!errors.email} className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('email', { required: 'Required' })} />
          </Field>

          <Field label="Experience Level">
            <select id="experience" className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('experience')}> 
              {['New','Some experience','Experienced'].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </Field>

          <Field label="Course Interest">
            <select id="course-interest" className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('courseInterest')}> 
              {['Combo Course (4 months)','Stick Course (6 weeks)','TIG Course (2 months)','Not sure'].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </Field>

          <Field label="Preferred Start Month">
            <select id="start-month" className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('startMonth', { required: 'Required' })}>
              {months.map((m) => <option key={m} value={m}>{m}</option>)}
            </select>
          </Field>

          <Field label="How did you hear about us?">
            <select id="hear-about" className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('hearAbout')}> 
              {['Friend','Social','Search','Flyer','Other'].map((o) => <option key={o} value={o}>{o}</option>)}
            </select>
          </Field>

          <Field label="Message (optional)">
            <textarea id="message" rows={4} className="w-full p-3 rounded bg-white/5 border border-white/10" {...register('message')} />
          </Field>

          <div className="md:col-span-2 flex items-start gap-3">
            <input id="consent" type="checkbox" aria-invalid={!!errors.consent} className="mt-1" {...register('consent', { required: true })} />
            <label htmlFor="consent" className="text-white/80">I agree to be contacted by phone/text. Msg & data rates may apply.</label>
          </div>

          <div className="md:col-span-2 flex flex-wrap gap-3">
            <button type="submit" className="btn btn-danger">Submit</button>
            <a href={`tel:${SITE.phoneE164}`} className="btn btn-primary">Call Now</a>
          </div>
        </form>

        <iframe name="hidden_iframe_target" ref={iframeRef} title="hidden" className="hidden" />

        {submitted && (
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-white/5 border border-white/10 rounded">
              <h3 className="font-semibold">Success</h3>
              <p className="text-white/80 text-sm">Your info was captured. You can message Samuel instantly:</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {wa && <a ref={wRef} className="btn btn-primary" href={wa} target="_blank" rel="noreferrer">Send via WhatsApp</a>}
                {sms && <a className="btn btn-outline" href={sms}>Send via SMS</a>}
              </div>
            </div>
            <div className="p-5 bg-white/5 border border-white/10 rounded flex items-center gap-4">
              <div>
                <div className="text-sm text-white/70">Scan to call</div>
                <QRCode value={`tel:${SITE.phoneE164}`} size={120} bgColor="transparent" fgColor="#ffffff" />
              </div>
              <div>
                <div className="font-semibold">Call Now</div>
                <a className="btn btn-danger mt-2" href={`tel:${SITE.phoneE164}`}>{SITE.phoneHuman}</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  const id = useMemo(() => label.toLowerCase().replace(/[^a-z0-9]+/g,'-'), [label]);
  return (
    <div>
      <label htmlFor={id} className="block text-sm mb-1 text-white/80">{label}</label>
      {children}
      {error && <div role="alert" className="text-red-400 text-sm mt-1">{error}</div>}
    </div>
  );
}


