(() => {
  const refs = {
    openDescriptionThreeBtn: document.querySelector("[data-descriptionThree-open]"),
    closeDescriptionThreeBtn: document.querySelector("[data-descriptionThree-close]"),
    DescriptionThree: document.querySelector("[data-descriptionThree]"),
  };

  refs.openDescriptionThreeBtn.addEventListener("click", toggleDescription);
  refs.closeDescriptionThreeBtn.addEventListener("click", toggleDescription);

  function toggleDescription() {
    document.body.classList.toggle("descriptionThree-open");
    refs.DescriptionThree.classList.toggle("is-hidden");
  }
})();