// (() => {
    const aboutBtn=document.querySelector('[data-about-open]')
    const aboutText = document.querySelector('[data-about-hidden]')
    // console.log('hello');
    aboutBtn.addEventListener('click', () => {
        aboutText.classList.toggle('is-hidden')
    })
// })