export default function setObjectValues(obj, value) {
  return Object.fromEntries(Object.keys(obj).map(key => [key, value]));
}
