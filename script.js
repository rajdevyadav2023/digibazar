// console.log("Jai Sri Krishna")
const navBtn = document.getElementById("navBtn");
const mainNav = document.getElementById("main-nav");

navBtn.addEventListener("click", function () {
    if (mainNav.classList.contains("active-nav")) {
        mainNav.classList.remove("active-nav");
        // console.log("hiding navbar");
    } else {
        mainNav.classList.add("active-nav");
        // console.log("showing navbar");
    }
})