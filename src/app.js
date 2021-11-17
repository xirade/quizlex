import "./styles.scss";
import modalWindow from "./modules/module_window";
import questionModule from "./modules/module_question";

const cards = [
  {
    id: 1,
    title: "Central Quality Architect",
    description: "Senior",
    img: "http://placeimg.com/640/480/abstract",
  },
  {
    id: 2,
    title: "Regional Creative Assistant",
    description: "Dynamic",
    img: "http://placeimg.com/640/480/animals",
  },
];

const container = document.querySelector(".container");
const row = container.querySelector(".row");
const { buttonModal, divModalWindow } = modalWindow();
const { questionCardsRender } = questionModule();

const questionCards = questionCardsRender(cards);
row.append(...questionCards);
container.append(row, buttonModal, divModalWindow);
