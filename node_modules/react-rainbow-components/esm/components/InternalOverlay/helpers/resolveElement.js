export default function resolveElement(ref) {
  if (typeof ref === 'function') {
    var ret = ref();
    return ret && ret.current;
  }

  return ref && ref.current;
}