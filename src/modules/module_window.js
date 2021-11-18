import getCheckboxes from "@/utils/checkboxes";
const modalWindow = (store) => {
  const divModalWindow = document.createElement("div");
  divModalWindow.className = "bg-blue-light-8 modal d-none";
  divModalWindow.innerHTML = `
  <div class="modal-content">
    <i class="close text-hover-gray-dark-6 fa fa-times" aria-hidden="true"></i>
    <p>Вы уверены в Вашем выборе?</p>
    <div class="pt-1 pb-1">
      <a id="btn_1" class="btn-green">Да</a>
      <a id="btn_2" class="btn-error">Heт</a>
    </div>
    <label class="d-block">
      Не показывать окно <input type="checkbox" name="show-window">
    </label>
  </div>
`;

  divModalWindow.addEventListener("click", (e) => {
    if (e.target.classList[0] === "close")
      divModalWindow.classList.toggle("d-none");
    if (e.target.id === "btn_1") {
      divModalWindow.classList.toggle("d-none");
      alert("Правильный ответ");
    }
    if (e.target.id === "btn_2") divModalWindow.classList.toggle("d-none");
    if (e.target.name === "show-window") {
      store.dispatch({ type: "TOGGLE" });
      getCheckboxes(store.getState().isShow);
      divModalWindow.classList.toggle("d-none");
    }
  });

  return {
    divModalWindow,
  };
};

export default modalWindow;
