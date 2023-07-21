"use strict";
const openModal = document.querySelectorAll(".modalBtn");
const closeModal = document.querySelector(".close-modal");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".closeBtn");

const showModal = function () {
    closeModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
}

const hideModal = function () {
    closeModal.classList.add("hidden");
    overlay.classList.add("hidden");
}

for (let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener('click', showModal);
}
closeBtn.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && !closeModal.classList.contains('hidden')) {
        hideModal();
    }
})