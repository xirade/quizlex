const questionModule = ({ getState }) => {
  const container = document.querySelector(".row");

  function questionCard(card) {
    const cardWrapper = document.createElement("div");
    cardWrapper.id = `card_${card.id}`;
    cardWrapper.className = "col-12-xs col-6-sm col-6-xl mt-2";
    cardWrapper.innerHTML = `
          <div class="card">
              <h3 class="card-title">${card.title}</h3>
              <img
              src="${card.img}"
              alt="3d"
              />
          </div>
      `;

    cardWrapper.addEventListener("click", (e) => {
      const { currentTarget } = e;
      // NUMBER 1 IS AMOUNT OF ELEMENTS THAT MUST BE IN THE CONTAINER
      if (container.childElementCount > 1) {
        container.replaceWith(currentTarget);
        currentTarget.className = "col-10-xl col-10-xs mt-2 ml-auto mr-auto";
        currentTarget.querySelector(".card-title").textContent =
          "What's his/her name?";
        currentTarget.querySelector(".card").append(listQuestions());
        currentTarget.querySelector("#next").addEventListener("click", () => {
          if (getState().isShow) {
            alert("Правильный/Неправильный ответ");
          } else {
            document.querySelector(".modal").classList.toggle("d-none");
          }
        });
      }
    });

    return cardWrapper;
  }

  function nextButton() {
    const buttonModal = document.createElement("a");
    buttonModal.id = "next";
    buttonModal.className = "btn-complement-orange mt-2 ml-auto";
    buttonModal.innerHTML = `
        Next question <i class="ml-1 fa fa-arrow-right" aria-hidden="true"></i>
      `;

    return buttonModal;
  }

  function listQuestions() {
    const list = document.createElement("div");
    list.className = "card-questions-wrapper";
    list.innerHTML = `

    <span class="pr-2 pl-2">
      <label class="btn-purple option text-white">
        <input type="radio" name="option" class="radio" value="optionA" />
        Jovan
      </label>
    </span>

    <span class="pr-2 pl-2">        
        <label class="btn-purple option text-white">
          <input type="radio" name="option" class="radio" value="optionB" />
          Maida
        </label>
    </span>

    <span class="pr-2 pl-2">
        <label class="btn-purple option text-white">
          <input type="radio" name="option" class="radio" value="optionC" />
          Florian
        </label>
    </span>

    <span class="pr-2 pl-2">
        <label class="btn-purple option text-white">
          <input type="radio" name="option" class="radio" value="optionD" />
          Adriana
        </label>
    </span>
    ${nextButton().outerHTML}

    `;
    return list;
  }

  function questionCardsRender(cards) {
    return cards.map((card) => questionCard(card));
  }

  return {
    questionCard,
    questionCardsRender,
  };
};

export default questionModule;
