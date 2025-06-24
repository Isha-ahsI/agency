document.addEventListener("DOMContentLoaded", function () {
  //counting of metric
  const counters = document.querySelectorAll('.counter');
  
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const current = +counter.innerText;
      const increment = target / 200;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, 15);
      } else {
        counter.innerText = "20k+";
      }
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(updateCount, 2000);
        observer.unobserve(counter);
      }
    });
    observer.observe(counter);
  });

  //sticky navbar
   const navbar = document.getElementById("mainNavbar");

    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
});


//gsap
var tl=gsap.timeline()

//navbar/hero section
tl.from(".nav-item",{
    y:-40,
    opacity:0,
    delay:0.4,
    duration:0.5,
    stagger:0.1
})

tl.from(".mail-id,.hero-content",{
    x:-100,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.2
},"0.5")

tl.from(".profile-icon,.navbar-toggler,.hero-img",{
    x:100,
    opacity:0,
    delay:0.5,
    duration:1,
    stagger:0.2
},"0.5")