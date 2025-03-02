

export function setupMenuModals () {

const btnClose = document.querySelector(".btn-close");
const btnOpen = document.querySelector(".header-btn");
const menu = document.querySelector(".mob-menu");

btnOpen.addEventListener ('click', (e) => {
    menu.classList.add('is-open');
})

btnClose.addEventListener ('click', (e) => {
    menu.classList.remove('is-open');
})
}
