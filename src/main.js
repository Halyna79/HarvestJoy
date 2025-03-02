import './css/styles.css'
import { setupFooterModals } from "./js/footer.js";
import { setupMenuModals } from "./js/menu.js";
import { enableSmoothScroll, updateURLOnScroll } from "./js/smoothScroll.js";


document.addEventListener("DOMContentLoaded", function () {
    setupFooterModals();
});

document.addEventListener("DOMContentLoaded", function () {
    enableSmoothScroll();
    updateURLOnScroll();
});

document.addEventListener("DOMContentLoaded", function (e) {
    setupMenuModals();
});