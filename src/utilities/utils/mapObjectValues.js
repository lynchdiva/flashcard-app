export default function mapObjectValues(obj, value) {
  return Object.fromEntries(Object.keys(obj).map(key => [key, value]));
}
