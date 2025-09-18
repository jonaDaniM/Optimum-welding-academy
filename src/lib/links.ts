type Lead = {
  name: string;
  dob: string;
  phone: string;
  email: string;
  experience: string;
  startMonth: string;
  hearAbout: string;
  message?: string;
};

function buildMessage(data: Lead): string {
  const lines = [
    'New Welding Lead',
    `Name: ${data.name}`,
    `DOB: ${data.dob}`,
    `Phone: ${data.phone}`,
    `Email: ${data.email}`,
    `Experience: ${data.experience}`,
    `Preferred Start: ${data.startMonth}`,
    `Heard About: ${data.hearAbout}`,
  ];
  if (data.message?.trim()) lines.push(`Message: ${data.message.trim()}`);
  return lines.join('\n');
}

export function buildWhatsAppLink(data: Lead, phoneE164: string): string {
  const text = encodeURIComponent(buildMessage(data));
  const digits = phoneE164.replace(/\D/g, '');
  return `https://wa.me/${digits}?text=${text}`;
}

export function buildSmsLink(data: Lead, phoneE164: string): string {
  const body = encodeURIComponent(buildMessage(data));
  const digits = phoneE164.replace(/\D/g, '');
  return `sms:+${digits}?&body=${body}`;
}


