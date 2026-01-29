  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll(".dropdown-toggle").forEach(btn => {
    btn.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        btn.parentElement.classList.toggle("open");
      }
    });
  });