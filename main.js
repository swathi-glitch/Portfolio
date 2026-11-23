const toggle = document.getElementById('themeToggle');

toggle.addEventListener("click", () => {document.body.classList.toggle('dark-mode')});

window.addEventListener('scroll', ()=>{

    const navbar = document.querySelector(".glass-nav");

    if (window.scrollY > 50)
    {
        navbar.style.background = "rgba(0,0,0,0.4)";
    }
    else
    {
        navbar.style.background = "rgb(255,255,255,.08)";
    }
});
