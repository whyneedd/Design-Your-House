const toggle = () => {
    var humbger__btn = document.querySelector(".humbger");
    var humbger__menu = document.querySelector(".humbger__menu");

    humbger__btn.onclick = function() {
        humbger__btn.classList.toggle("active");
        humbger__menu.classList.toggle("active");
    }
}
toggle();