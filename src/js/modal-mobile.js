(() => {
  const refs = {
    openOrderBtn: document.querySelector("[data-order-open]"),
    closeOrderBtn: document.querySelector("[data-order-close]"),
    Order: document.querySelector("[data-order]"),
  };

  refs.openOrderBtn.addEventListener("click", toggleOrder);
  refs.closeOrderBtn.addEventListener("click", toggleOrder);

  function toggleOrder() {
    document.body.classList.toggle("order-open");
    refs.Order.classList.toggle("is-hidden");
  }
})();