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
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = "20k+";
      }
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setTimeout(updateCount, 2500);
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
gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline()

//navbar/hero section
tl.from(".navbar .nav-logo", {
  scale: 0,
  opacity: 0,
  delay: 0.3,
  duration: 1,
})

tl.from(".navbar .navbar-nav .nav-item", {
  y: -40,
  opacity: 0,
  delay: 0.4,
  duration: 0.5,
  stagger: 0.1
}, "0.3")

tl.from(".navbar .mail-id,.hero-section-primary .hero-content", {
  x: -100,
  opacity: 0,
  delay: 0.7,
  duration: 1,
  stagger: 0.3
}, "0.7")

tl.from(".navbar .nav-btn,.navbar .navbar-toggler", {
  x: 100,
  opacity: 0,
  delay: 0.7,
  duration: 1,
  stagger: 0.3
}, "0.7")

tl.from(".hero-section-primary .hero-img", {
  scale: 0,
  opacity: 0,
  delay: 0.7,
  duration: 2,
}, "0.7")

var tl2 = gsap.timeline()
// service
tl2.from(".service-section .service-title", {
  scale: 0,
  delay: 1,
  duration: 2,
  scrollTrigger: {
    trigger: ".service-section",
    scroller: "body",
    markers: false,
   end:"top 30%",
   start:'top 70%',
    scrub: 2,
  }
})

tl2.from(".service-section .service-card", {
  opacity: 0,
  delay: 2,
  duration: 2,
  scrollTrigger: {
    trigger: ".service-section",
    scroller: "body",
    markers: false,
   end:"top 30%",
   start:'top 70%',
    scrub: 2,
  }

})


