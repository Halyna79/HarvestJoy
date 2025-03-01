import './css/styles.css'
import { setupFooterModals } from "./js/footer.js";
import { setupMenuModals } from "./js/menu.js"

document.addEventListener("DOMContentLoaded", function () {
    setupFooterModals();
});

import { enableSmoothScroll } from "./js/smoothScroll.js";

document.addEventListener("DOMContentLoaded", (e) => {
    enableSmoothScroll();
});

document.addEventListener("DOMContentLoaded", function (e) {
    setupMenuModals();
});