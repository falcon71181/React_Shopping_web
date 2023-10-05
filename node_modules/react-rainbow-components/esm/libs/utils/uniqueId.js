var idCounter = 0;
export default function uniqueId(prefix) {
  idCounter += 1;
  return prefix ? "".concat(prefix, "-").concat(idCounter) : String(idCounter);
}