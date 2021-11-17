const questionModule = () => {
  function questionCard(card) {
    const cardWrapper = document.createElement("div");
    cardWrapper.id = `card_${card.id}`;
    cardWrapper.className = "col-12-xs col-6-sm col-6-xl";
    cardWrapper.innerHTML = `
          <div class="card">
              <h3 class="card-title">${card.title}</h3>
              <img
              src="${card.img}"
              alt="3d"
              />
              <p class="card-body">${card.description}</p>
          </div>
      `;

    cardWrapper.addEventListener("click", (e) => {
      e.target.closest(`#card_${card.id}`).className = "";
    });
    return cardWrapper;
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
