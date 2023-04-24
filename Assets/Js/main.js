// ----- Hamburger Menu Toggle ----- */
const ham = document.getElementById('ham');
ham.addEventListener('click', function() {
    let menu = document.getElementById("menu");
    menu.classList.toggle('anim');
});