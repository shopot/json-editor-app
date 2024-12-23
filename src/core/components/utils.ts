export const toPx = (value?: string | number): string | undefined =>
  typeof value === 'number' ? `${value}px` : value || undefined;
