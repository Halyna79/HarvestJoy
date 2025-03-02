
export function setupModalMenu () {

const mobMenu = document.querySelector(".mob-menu");
const closeBtn = document.querySelector(".btn-close");
const openBtn = document.querySelector(".header-btn");

openBtn.addEventListener ("click", () => {
    mobMenu.classList.add('.is-open')
})

closeBtn.addEventListener ("click", () => {
    mobMenu.classList.remove('.is-open')
})
}

  