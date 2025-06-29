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

  //swiper for logos
  const swiper1 = new Swiper("#swiper1", {
    slidesPerView: "auto",
    spaceBetween: 50,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
      0: { slidesPerView: 3 },
      768: { slidesPerView: 5 },
      992: { slidesPerView: 7 },
    },
  });

  const swiper2 = new Swiper("#swiper2", {
    slidesPerView: "auto",
    spaceBetween: 50,
    loop: true,
    speed: 2500,
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
      0: { slidesPerView: 3 },
      768: { slidesPerView: 5 },
      992: { slidesPerView: 7 },
    },
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

// service
var tl2 = gsap.timeline({
   scrollTrigger: {
    trigger: ".service-section",
    scroller: "body",
    markers: true,
    end: "top 30%",
    start: 'top 70%',
   }
})
tl2.from(".service-section .service-title", {
  scale: 0,
  duration: 2,
})

tl2.from(".service-section .card.service-card", {
  opacity: 0,
  duration: 2,
})

//about us
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutus-section",
    scroller: "body",
    markers: false,
    start: "top 0%",
    end: "top 30%",

  }
})
tl3.from(".aboutus-section .aboutus-content", {
  x: 100,
  opacity: 0,
  delay: 0.7,
  duration: 2
})

tl3.from(".aboutus-section .aboutus-img-wrap", {
  scale: 0,
  opacity: 0,
  duration: 2
},-0.1)

//partner
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".partner-section",
    scroller: "body",
    markers: false,
    start: "top 30%",
    end: "top 30%",
  }
})
tl4.from(".partner-section .partner-swiper", {
  opacity: 0,
  duration: 2
})
