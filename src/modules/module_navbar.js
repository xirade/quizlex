import getCheckboxes from "@/utils/checkboxes";
const navBar = (store) => {
  const navLinks = document.querySelector("#nav_links");
  const label = document.createElement("label");
  label.className = "d-block";
  label.innerHTML = `
  <input type="checkbox" name="show-window" /> Не показывать окно 
  `;
  navLinks.addEventListener("click", (e) => {
    const { target } = e;
    if (target.id === "settings") {
      target.innerHTML = "";
      target.append(label);
      store.dispatch({ type: "TOGGLE" });
      getCheckboxes(store.getState().isShow);
      if (store.getState().isShow) {
        document.querySelector(".modal").classList.add("d-none");
      }
    }
  });
};

export default navBar;
