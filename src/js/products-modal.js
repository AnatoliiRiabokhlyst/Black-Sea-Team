(() => {
  const refs = {
    openDescriptionBtn: document.querySelectorAll("[data-description-open]"),
    closeDescriptionBtn: document.querySelector("[data-description-close]"),
    description: document.querySelector("[data-description]"),
  };

  refs.openDescriptionBtn.forEach(btn=>{
    btn.addEventListener("click", toggleDescription);
  })
  refs.closeDescriptionBtn.addEventListener("click", toggleDescription);

  function toggleDescription() {
    document.body.classList.toggle("description-open");
    refs.description.classList.toggle("is-hidden");
  }
})();
