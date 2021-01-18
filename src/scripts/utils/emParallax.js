export default function emParallax(elem) {
    let targets = [];
    let idx = 0;

    document.querySelectorAll(elem).forEach(el => {
        let obj = {};

        obj.elem = el;
        obj.top = getCoords(el).top;

        targets.push(obj);
    });

    function getCoords(elem) {
        var box = elem.getBoundingClientRect();

        return {
            top: box.top + pageYOffset,
            left: box.left + pageXOffset
        };

    }

    // let top = getCoords(el).top
    function move() {
        const footer = document.querySelector('.footer')
        targets.forEach(el => {

            if (window.pageYOffset + window.innerHeight / 2 > el.top && window.pageYOffset < document.body.clientHeight - window.innerHeight - 300) {
                el.elem.style.top = `${(window.pageYOffset + window.innerHeight / 2 - el.top - 100)}px`;
            }
        });
    }

    window.addEventListener("scroll", move);
}
