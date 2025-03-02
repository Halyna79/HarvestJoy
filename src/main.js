import './css/styles.css'
import { setupFooterModals } from "./js/footer.js";
import { setupMenuModals } from "./js/menu.js";
import { enableSmoothScroll } from "./js/smoothScroll.js";


document.addEventListener("DOMContentLoaded", function () {
    setupFooterModals();
});

document.addEventListener("DOMContentLoaded", (e) => {
    enableSmoothScroll();
});

document.addEventListener("DOMContentLoaded", function (e) {
    setupMenuModals();
});