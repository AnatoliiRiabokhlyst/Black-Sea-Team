(() => {
  const refs = {
    openDescriptionBtn: document.querySelector("[data-description-open]"),
    closeDescriptionBtn: document.querySelector("[data-description-close]"),
    Description: document.querySelector("[data-description]"),
  };

  refs.openDescriptionBtn.addEventListener("click", toggleDescription);
  refs.closeDescriptionBtn.addEventListener("click", toggleDescription);

  function toggleDescription() {
    document.body.classList.toggle("description-open");
    refs.Description.classList.toggle("is-hidden");
  }
})();
