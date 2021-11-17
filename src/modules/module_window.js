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
    <a id="btn_2" class="btn-error">Heт</a><br />
    <input type="checkbox" id="btn_3" value ="W">
    <label>Не показывать окно</label>
  </div>
`;
const buttonSettings = document.querySelector('#settings');
 buttonSettings.addEventListener("click", (e) =>{
  buttonSettings.innerHTML = `<input type="checkbox" id="btn_4" value ="W">
  <label>Не показывать окно</label>`;
  if (e.target.id === "btn_4") {
    buttonModal.onclick = () => alert("Правильный/Неправильный ответ");
    buttonSettings.innerHTML = `<input type="checkbox" id="btn_5" value ="W" checked>
    <label>Не показывать окно</label>`;
  }
  if (e.target.id === "btn_5") {
    buttonModal.onclick = () => divModalWindow.classList.toggle("d-none");
    buttonSettings.innerHTML = `<i class="mr-1 fa fa-cog" aria-hidden="true" id = "i-settings"></i>Settings`;
  }
 })

  buttonModal.onclick = () => divModalWindow.classList.toggle("d-none");

  divModalWindow.addEventListener("click", (e) => {
    if (e.target.classList[0] === "close")
      divModalWindow.classList.toggle("d-none");
    if (e.target.id === "btn_1") {
      divModalWindow.classList.toggle("d-none");
      alert("Правильный ответ");
    }
    if (e.target.id === "btn_2") divModalWindow.classList.toggle("d-none");
    if (e.target.id === "btn_3") {
      console.log(e.target)
      buttonSettings.innerHTML = `<input type="checkbox" id="btn_5" value ="W" checked>
    <label>Не показывать окно</label>`;
      buttonModal.onclick = () => alert("Правильный/Неправильный ответ");
      divModalWindow.classList.toggle("d-none");
      e.target.checked = false
    }
  });

  return {
    buttonModal,
    divModalWindow,
  }
};

export default modalWindow;
