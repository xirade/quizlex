import "./styles.scss";
import modalWindow from "./modules/module_window";

const container = document.querySelector(".container");
const { buttonModal, divModalWindow } = modalWindow();

container.append(buttonModal, divModalWindow);
