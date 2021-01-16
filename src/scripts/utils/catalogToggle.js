export default function catalogToggle() {
    const catalog = document.querySelector(".catalog");
    const btn = document.querySelector(".catalog__btn");

    window.addEventListener("click", e => {
        if (!catalog.contains(e.target)) {
            catalog.classList.remove("open");
        }
    });

    btn.addEventListener("click", () => {
        catalog.classList.toggle("open");
    });
}
