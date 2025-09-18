export function maskUsPhone(input: string): string {
  const digits = input.replace(/\D/g, '').slice(0, 10);
  const parts = [digits.slice(0, 3), digits.slice(3, 6), digits.slice(6, 10)];
  if (digits.length <= 3) return parts[0];
  if (digits.length <= 6) return `(${parts[0]}) ${parts[1]}`.trim();
  return `(${parts[0]}) ${parts[1]}-${parts[2]}`.trim();
}

export function toE164(input: string): string | null {
  const digits = input.replace(/\D/g, '');
  if (digits.length === 10) return `+1${digits}`;
  if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
  if (digits.startsWith('+') && /^\+\d{11,15}$/.test(input)) return input;
  return null;
}


