export default function menu() {
    const menu = document.querySelector(".menu__wrap");
    const btn = document.querySelector(".menu__burger");

    window.addEventListener("click", e => {
        if (!menu.contains(e.target) && !btn.contains(e.target)) {
            menu.classList.remove("open");
            btn.classList.remove("active");
            document.body.style.overflow = "visible";
        }
    });

    btn.addEventListener("click", () => {
        menu.classList.toggle("open");
        btn.classList.toggle("active");

        if (menu.classList.contains("open")) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "visible";
        }
    });
}
