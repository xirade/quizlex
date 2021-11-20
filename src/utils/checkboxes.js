function getCheckboxes(checked) {
  const checkboxes = document.getElementsByName("show-window");
  checkboxes.forEach((checkbox, i) => {
    checkboxes[i].checked = checked;
  });
}

export default getCheckboxes;
