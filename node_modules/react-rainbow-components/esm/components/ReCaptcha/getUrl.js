export default function getUrl(lang) {
  if (lang) {
    return "https://www.google.com/recaptcha/api.js?render=explicit&hl=".concat(lang);
  }

  return 'https://www.google.com/recaptcha/api.js?render=explicit';
}