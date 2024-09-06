export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || startString.length === 0 ) return '';

  let result = '';
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      result += `${value.slice(startString.length)}-`;
    }
  });

  return result ? result.slice(0, -1) : '';
}
