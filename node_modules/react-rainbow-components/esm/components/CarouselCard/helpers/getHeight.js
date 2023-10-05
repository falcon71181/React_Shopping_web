var getHeight = function getHeight(ref) {
  return ref && ref.parentNode && ref.parentNode.style.height ? '100%' : 340;
};

export default getHeight;