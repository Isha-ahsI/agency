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
      576: { slidesPerView: 4 },
      768: { slidesPerView: 6 },
      992: { slidesPerView: 8 },
    },
  });

  const swiper2 = new Swiper("#swiper2", {
    spaceBetween: 50,
    loop: true,
    speed: 3000,
    autoplay: {
      delay: 0,
      reverseDirection: true,
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    breakpoints: {
      0: { slidesPerView: 3 },
      576: { slidesPerView: 4 },
      768: { slidesPerView: 6 },
      992: { slidesPerView: 8 },
    },
  });

  //billing plan js
  const toggleButtons = document.querySelectorAll('.billing-option');
  const prices = document.querySelectorAll('.amount');

  toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
      toggleButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      const selectedPlan = button.getAttribute('data-plan');

      // Update prices
      prices.forEach(priceEl => {
        const monthly = parseFloat(priceEl.dataset.monthly);
        const yearly = parseFloat(priceEl.dataset.yearly);

        if (selectedPlan === 'monthly') {
          priceEl.innerText = `$${monthly}`;
          priceEl.nextElementSibling.innerText = '/Month';
        } else {
          const discount = Math.round(((monthly * 12 - yearly) / (monthly * 12)) * 100);
          priceEl.innerText = `$${yearly}`;
          priceEl.nextElementSibling.innerText = `/Year (Save ${discount}%)`;
        }
      });
    });
  });

  //team-member info
  var data = [
    { name: "Liam Carter", src: "images/user_images/user1.jpg", position: "Data Analyst" },
    { name: "Emma Rivera", src: "images/user_images/user2.jpg", position: "Marketing Analyst" },
    { name: "Isabella Moretti", src: "images/user_images/user3.jpg", position: "SEO Specialist" },
    { name: "Lina Petrov", src: "images/user_images/user4.jpg", position: "Marketing Manager" },
    { name: "Noah Rossi", src: "images/user_images/user5.jpg", position: "Content Strategist" },
    { name: "Sophia Kim", src: "images/user_images/user6.jpg", position: "Growth Marketer" },
    { name: "Aarav Mehta", src: "images/user_images/user7.jpg", position: "Managing Director" },
    { name: "Leo Schneider", src: "images/user_images/user8.jpg", position: "Founder / CEO" },
    { name: "Maya Thompson", src: "images/user_images/user9.jpg", position: "Managing Director" },
    { name: "Olivia Hernández", src: "images/user_images/user10.jpg", position: "Marketing Manager" },
    { name: "Milo Zhang", src: "images/user_images/user11.jpg", position: "SEO Specialist" },
    { name: "Siddharth Nair", src: "images/user_images/user12.jpg", position: "Data Analyst" },
    { name: "Giulia Romano", src: "images/user_images/user13.jpg", position: "Chief Growth Officer" },
    { name: "Samuel Okafor", src: "images/user_images/user14.jpg", position: "Content Strategist" },
    { name: "Yuki Takahashi", src: "images/user_images/user15.jpg", position: "SEO Specialist" },
  ]
  document.querySelectorAll(".view-user").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var index = this.dataset.index;
      var person = data[index];
      var information = `<img src="${person.src}" alt="..." class="img-wrapper mb-2">
                        <h3 class="text-success">${person.name}</h3>
                        <h6 class="text-secondary">${person.position}</h6>
                        <small class="text-secondary">As the ${person.position},I lead our team to deliver smart,
                            growth-driven solutions that create lasting impact.</small>
                        <hr>
                        <h6 class="text-primary">${person.name.toLowerCase().replace(/\s/g, '')}@gmail.com</h6>
                        <div class="d-flex justify-content-center align-items-center overflow-hidden">
                            <a href="#" class="socialContainer insta-icon me-2 my-2">
                                <div class="icon">
                                    <i class="ri-instagram-line fs-6"></i>
                                </div>
                            </a>
                            <a href="#" class="socialContainer twitter-icon me-2 my-2">
                                <div class="icon">
                                    <i class="ri-twitter-line fs-6"></i>
                                </div>
                            </a>
                            <a href="#" class="socialContainer linkedin-icon me-2 my-2">
                                <div class="icon">
                                    <i class="ri-linkedin-fill fs-6"></i>
                                </div>
                            </a>
                            <a href="#" class="socialContainer whatsapp-icon my-2">
                                <div class="icon">
                                    <i class="ri-whatsapp-line fs-6"></i>
                                </div>
                            </a>
                        </div>`;
      document.querySelector(".modal-body").innerHTML = information;

      const modalInstance = bootstrap.Modal.getInstance(document.getElementById("personinfoModal"));
      modalInstance.hide();
    });
  });
});


//gsap
gsap.registerPlugin(ScrollTrigger, CustomEase, CustomBounce);
CustomBounce.create("myBounce", {
  strength: 0.6,
  squash: 3,
  squashID: "myBounce-squash",
});

//navbar/hero section gsap
var tl = gsap.timeline()

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

// service gsap
var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".service-section",
    scroller: "body",
    markers: false,
    end: "top 30%",
    start: 'top 70%',
  }
})
tl2.from(".service-section .service-heading", {
  scale: 0,
  duration: 2,
})

tl2.from(".service-section .card.service-card", {
  opacity: 0,
  duration: 2,
})

//about us gsap
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
}, -0.1)

//partner gsap
var tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".partner-section",
    scroller: "body",
    markers: false,
    start: "top 30%",
    end: "top 30%",
  }
})
tl4.from(".partner-section .partner-heading", {
  scale: 0,
  opacity: 0,
  duration: 1
})
tl4.from(".partner-section .partner-swiper", {
  opacity: 0,
  duration: 1
})

//footer gsap
var tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    scroller: "body",
    markers: false,
    start: "top 80%",
    end: "top 80%",
    toggleActions: "play none none reverse"
  }
})
tl5.from(".footer-section .footer-brand-title", {
  x: -100,
  opacity: 0,
  delay: 0.3,
  duration: 1
})

tl5.from(".footer-section .footer-subscribe-box", {
  x: 100,
  opacity: 0,
  delay: 0.3,
  duration: 1
}, -0.1)

tl5.from(".footer-section .footer-title,.footer-section .footer-nav-group .footer-nav-link,.footer-section .contact-info,.footer-section .location-info,.footer-section .mail-info", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 1,
  stagger: 0.1
})
tl5.from(".store-buttons-wrapper .store-button", {
  opacity: 0,
  delay: 0.1,
  duration: 1,
  stagger: 0.1
})

tl5.from(".footer-tagline .Copyright-section", {
  y: 30,
  opacity: 0,
  delay: 0.1,
  duration: 1
})

tl5.from(".footer-tagline .footer-social-icons .social-media-icon", {
  duration: 2,
  y: -100,
  ease: "myBounce"
});

tl5.to(".footer-tagline .footer-social-icons .social-media-icon", {
  duration: 2,
  scaleX: 1.4,
  scaleY: 0.6,
  transformOrigin: "center bottom",
  ease: "myBounce-squash",
});

//pricing gsap
var tl6 = gsap.timeline()
tl6.from(".pricing-section .pricing-heading", {
  scale: 0,
  duration: 2,
  scrollTrigger: {
    trigger: ".pricing-section .pricing-heading",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 80%",
  }
})
tl6.from(".pricing-section .price-card", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".pricing-section .price-card",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 80%",
  }

})