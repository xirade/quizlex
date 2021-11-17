const modalWindow = () => {
  // потом заменить на нажатый вариант ответа:
  const buttonModal = document.createElement("button");
  buttonModal.id = "idBtn";
  buttonModal.className = "btn"
  buttonModal.textContent = "Ответ на вопрос";

  const divModalWindow = document.createElement("div");
  divModalWindow.className = "bg-blue-light-8 modal d-none";
  divModalWindow.innerHTML = `
  <div class="modal-content">
    <i class="close text-hover-gray-dark-6 fa fa-times" aria-hidden="true"></i>
    <p>Вы уверены в Вашем выборе?</p>
    <a id="btn_1" class="btn-green">Да</a>
    <a id="btn_2" class="btn-error">Heт</a>
  </div>
`;

  buttonModal.onclick = () => divModalWindow.classList.toggle("d-none");

  divModalWindow.addEventListener("click", (e) => {
    if (e.target.classList[0] === "close")
      divModalWindow.classList.toggle("d-none");
    if (e.target.id === "btn_1") {
      divModalWindow.classList.toggle("d-none");
      alert("Правильный ответ");
    }
    if (e.target.id === "btn_2") divModalWindow.classList.toggle("d-none");
  });

  return {
    buttonModal,
    divModalWindow,
  };
};

export default modalWindow;
