import defaultTheme from '../defaultTheme';
export default function getTheme(props) {
  return props.theme.rainbow || defaultTheme;
}