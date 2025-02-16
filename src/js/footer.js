export function setupFooterModals() {
    const modalPrivacy = document.getElementById("modal-privacy");
    const modalCookie = document.getElementById("modal-cookie");
    const openPrivacy = document.getElementById("open-privacy");
    const openCookie = document.getElementById("open-cookie");
    const closeButtons = document.querySelectorAll(".close");

    function openModal(modal) {
        modal.classList.add("show");
    }
    function closeModal(modal) {
        modal.classList.remove("show");
    }
    if (openPrivacy) {
        openPrivacy.addEventListener("click", function (event) {
            event.preventDefault();
            openModal(modalPrivacy);
        });
    }
    if (openCookie) {
        openCookie.addEventListener("click", function (event) {
            event.preventDefault();
            openModal(modalCookie);
        });
    }
    closeButtons.forEach(button => {
        button.addEventListener("click", function () {
            closeModal(modalPrivacy);
            closeModal(modalCookie);
        });
    });
    window.addEventListener("click", function (event) {
        if (event.target === modalPrivacy) closeModal(modalPrivacy);
        if (event.target === modalCookie) closeModal(modalCookie);
    });
}