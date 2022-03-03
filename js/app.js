

const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener('click', e => {
    const nav = document.querySelector("nav");

    nav.style.display = nav.style.display === "none" ? "block" : "none";
}); 