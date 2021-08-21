export function Range(start, end, length = end - start) {
  return Array.from({ length }, (_, i) => start + i)
};
