(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-contactsmodal-open]'),
      closeModalBtn: document.querySelector('[data-contactsmodal-close]'),
      modal: document.querySelector('[data-contactsmodal]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();