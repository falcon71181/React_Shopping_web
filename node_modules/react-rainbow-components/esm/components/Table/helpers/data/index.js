export function normalizeData(data) {
  if (Array.isArray(data)) {
    return data;
  }

  return [];
}