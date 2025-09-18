export function nextSixMonthsLabels(locale: string = 'en-US'): string[] {
  const now = new Date();
  const labels: string[] = [];
  for (let i = 0; i < 6; i++) {
    const d = new Date(now.getFullYear(), now.getMonth() + i, 1);
    labels.push(d.toLocaleString(locale, { month: 'long', year: 'numeric' }));
  }
  return labels;
}


