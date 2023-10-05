export default function isScrollPositionAtScrollable(scrollable) {
  var scrollHeight = scrollable.scrollHeight,
      scrollTop = scrollable.scrollTop,
      clientHeight = scrollable.clientHeight;
  return scrollHeight - scrollTop === clientHeight;
}