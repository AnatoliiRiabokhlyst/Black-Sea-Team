(() => {
  const refs = {
    openDescriptionTwoBtn: document.querySelector("[data-descriptionTwo-open]"),
    closeDescriptionTwoBtn: document.querySelector("[data-descriptionTwo-close]"),
    DescriptionTwo: document.querySelector("[data-descriptionTwo]"),
  };

  refs.openDescriptionTwoBtn.addEventListener("click", toggleDescription);
  refs.closeDescriptionTwoBtn.addEventListener("click", toggleDescription);

  function toggleDescription() {
    document.body.classList.toggle("descriptionTwo-open");
    refs.DescriptionTwo.classList.toggle("is-hidden");
  }
})();