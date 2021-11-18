function getCheckboxes(checked) {
  const checkboxes = document.getElementsByName("show-window");
  return checkboxes.forEach((checkbox) => (checkbox.checked = checked));
}

export default getCheckboxes;
