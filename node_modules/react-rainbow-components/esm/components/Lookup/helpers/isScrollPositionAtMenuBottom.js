export default function isScrollPositionAtMenuBottom(menuRef) {
  var scrollHeight = menuRef.scrollHeight,
      scrollTop = menuRef.scrollTop,
      clientHeight = menuRef.clientHeight;
  return scrollHeight - scrollTop === clientHeight;
}