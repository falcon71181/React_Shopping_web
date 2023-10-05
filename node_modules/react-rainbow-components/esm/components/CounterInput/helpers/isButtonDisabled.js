var isButtonDisabled = function isButtonDisabled(isMinOrMax, disable, readOnly) {
  if (isMinOrMax || disable || readOnly) {
    return true;
  }

  return false;
};

export default isButtonDisabled;