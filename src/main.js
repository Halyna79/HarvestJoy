import './css/styles.css'
import { setupFooterModals } from "./js/footer.js";
import { setupModalMenu } from "./js/modal.js";

document.addEventListener("DOMContentLoaded", function () {
    setupFooterModals();
});

<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", function () {
    setupModalMenu();
=======
import { enableSmoothScroll } from "./js/smoothScroll.js";

document.addEventListener("DOMContentLoaded", () => {
    enableSmoothScroll();
>>>>>>> 32fca8177382a7535a575d4ff594d78c104c55a9
});