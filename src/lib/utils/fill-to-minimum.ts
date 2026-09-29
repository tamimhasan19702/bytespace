const DEFAULT_MIN_ITEMS = 16;

export function fillToMinimum<T>(items: readonly T[], minItems: number = DEFAULT_MIN_ITEMS): T[] {
  if (items.length === 0) return [];
  if (items.length >= minItems) return [...items];

  const copies = Math.ceil(minItems / items.length);
  return Array.from({ length: copies }, () => items).flat();
}
