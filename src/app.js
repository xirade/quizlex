// STORE
import reducer from "@/store/reducer";
import createStore from "@/store/store";

// STYLES
import "./styles.scss";

// UTILS
import getCheckboxes from "@/utils/checkboxes";

// MODALS
import modalWindow from "@/modules/module_window";
import questionModule from "@/modules/module_question";
import navBar from "@/modules/module_navbar";

// IMPORT ALL IMAGES FROM IMAGES FOLDER
const images = importAll(
  require.context("@/assets/images", false, /\.(png|jpe?g|svg)$/)
);
function importAll(image) {
  return image.keys().map(image);
}

const cards = [
  {
    id: 1,
    title: "Central Quality Architect",
    description: "Senior",
    img: images[0],
  },
  {
    id: 2,
    title: "Regional Creative Assistant",
    description: "Dynamic",
    img: images[1],
  },
];

// INIT STORE
const store = createStore(reducer, {
  isShow: false,
});

const { showButton, settingsButton } = navBar(store);
const { divModalWindow } = modalWindow(store);
const { questionCardsRender } = questionModule(store);

const container = document.querySelector(".container");
const row = container.querySelector(".row");

store.subscribe(() => {
  const state = store.getState();
  const buttonSettings = document.querySelector("#settings");
  const parentNav = buttonSettings.parentNode;

  if (state.isShow) {
    parentNav.replaceChild(showButton, buttonSettings);
    getCheckboxes(state.isShow);
  } else {
    parentNav.replaceChild(settingsButton, buttonSettings);
    getCheckboxes(state.isShow);
  }
});

const questionCards = questionCardsRender(cards);
row.append(...questionCards);
container.append(row, divModalWindow);
