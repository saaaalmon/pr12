let accordionItems = Array.from(document.querySelectorAll('.accordeon_items'));
accordionItems.forEach((acc) => {
    acc.addEventListener("click", accHandler);
});
function accHandler(e) {
    e.preventDefault();
    let currentBox = e.target.closest(".accordeon_items");
    let currentContent = e.target.nextElementSibling;
    currentBox.classList.toggle("show");
}