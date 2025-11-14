function openModal(imageSrc) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "block"; // Mostrar el modal
    modalImg.src = imageSrc; // Establecer la fuente de la imagen en el modal
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Ocultar el modal
}