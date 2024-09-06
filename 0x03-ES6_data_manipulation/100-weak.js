export const weakMap = new WeakMap();
export function queryAPI(query) {
  const count = weakMap.get(query) || 0;
  if (count >= 4) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(query, count + 1);
}
