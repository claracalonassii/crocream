function scrollToSabores() {
    document.getElementById("sabores").scrollIntoView({
        behavior: "smooth"
    });
}

function showFlavor(flavor) {
    const modal = document.getElementById("flavorModal");
    const modalFlavor = document.getElementById("modalFlavor");

    modalFlavor.textContent = flavor;

    modal.classList.add("active");
}

function closeModal() {
    const modal = document.getElementById("flavorModal");

    modal.classList.remove("active");
}

document.getElementById("flavorModal").addEventListener("click", function(event) {

    if (event.target === this) {
        closeModal();
    }

});

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeModal();
    }

});
