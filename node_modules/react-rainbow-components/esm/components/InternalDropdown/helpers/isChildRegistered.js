export default function isChildRegistered(name, activeChildren) {
  return activeChildren.findIndex(function (child) {
    return child.name === name;
  }) !== -1;
}