const navBar = ({ dispatch, getState }) => {
  const navLinks = document.querySelector("#nav_links");

  const settingsButton = document.createElement("a");
  settingsButton.id = "settings";
  settingsButton.className = "btn-complement-error mr-2";
  settingsButton.innerHTML = `
    <i class="mr-1 fa fa-cog" aria-hidden="true"></i>Settings
  `;

  const showButton = settingsButton.cloneNode();
  showButton.innerHTML = `
    <label class="d-block">
      <input type="checkbox" name="show-window" /> Не показывать окно    
    </label>
  `;

  navLinks.addEventListener("click", (e) => {
    const { target } = e;
    if (target.id === "settings") {
      dispatch({ type: "TOGGLE" });
      if (getState().isShow) {
        document.querySelector(".modal").classList.add("d-none");
      }
    }
  });

  return {
    showButton,
    settingsButton,
  };
};

export default navBar;
