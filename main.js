btn = document.getElementById("toTop");

function toTopHide() {
    height = window.scrollY
    if (height < 300) {
        btn.style.display = "none";
    }
    else {
        btn.style.display = "block";
    }
}