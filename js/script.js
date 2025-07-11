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
      const discount = 20;
      prices.forEach(priceEl => {
        const monthly = parseFloat(priceEl.dataset.monthly);
        const yearly = Math.round(monthly * 12 * 0.8);

        if (selectedPlan === 'monthly') {
          priceEl.innerText = `$${monthly}`;
          priceEl.nextElementSibling.innerText = '/Month';
        } else {
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

  //Subjectwise category
  const faqs = [
    { id: 1, category: "general", question: "How can your agency help grow my business?", answer: "We combine data-driven insights with creative strategy to boost your brand visibility, drive more traffic, and convert leads into loyal customers." },
    { id: 2, category: "pricing", question: "How much do your services cost?", answer: "Our pricing plans start at $19/month, with flexible packages tailored to your business goals." },
    { id: 3, category: "process", question: "What is the onboarding process like?", answer: "We start with a discovery call to understand your business, followed by a custom strategy plan." },
    { id: 4, category: "pricing", question: "Do you offer a free trial?", answer: "Yes, we offer a 7-day free trial so you can explore our tools and see the value before committing." },
    { id: 5, category: "general", question: "How do I get started?", answer: "Simply reach out through our contact form or book a free consultation. We’ll assess your needs and propose a custom growth plan." },
    { id: 6, category: "services", question: "What services does your agency offer?", answer: "We offer marketing strategy, branding, SEO, social media management, and lead generation to help businesses grow." },
    { id: 7, category: "services", question: "Do you provide custom growth strategies?", answer: "Yes, we create tailored strategies based on your business goals, industry, and target audience." },
    { id: 8, category: "pricing", question: "Can I change my plan later?", answer: "Absolutely! You can upgrade or downgrade your plan anytime based on your needs." },
    { id: 9, category: "general", question: "Who can benefit from your services?", answer: "Our services are designed for startups, small to medium businesses, and enterprises looking to scale, improve online presence, or optimize operations." },
    { id: 10, category: "general", question: "Is my business too small to work with you?", answer: "Not at all! We work with businesses of all sizes and offer scalable solutions that fit your current stage and future growth." },
    { id: 11, category: "pricing", question: "Do you offer any discount on yearly plans?", answer: "Yes! When you choose a yearly plan, you receive an exclusive discount of up to 20% compared to monthly billing. This allows you to save more while enjoying uninterrupted access to all our premium features." },
    { id: 12, category: "process", question: "Will I get regular updates on progress?", answer: "Yes, we provide weekly reports and monthly strategy calls to review performance." },
    { id: 13, category: "process", question: "Can I be involved in the decision-making process?", answer: "Absolutely. We believe in collaboration and value your input at every stage." },
    { id: 14, category: "process", question: "How long does it take to see results?", answer: "Results typically begin within 4–6 weeks, depending on your goals and industry." },
    { id: 15, category: "services", question: "Do you offer social media marketing services?", answer: "Yes, we manage content creation, scheduling, engagement, and paid ads on platforms like Instagram, Facebook, and LinkedIn." },
    { id: 16, category: "services", question: "What kind of analytics or reporting do you provide?", answer: "We provide monthly performance reports with insights on traffic, conversions, ROI, and suggestions for improvement." },
  ];
  const maxFaqsToShow = 6;
  function renderAllFaqs(category) {
    const accordionFlush = document.getElementById("accordionFlushExample1");
    const selectedFaqs = faqs.filter(f => f.category === category).slice(0, maxFaqsToShow);
    let output = "";

    selectedFaqs.forEach(faq => {
      output += `<div class="accordion-item">
                  <h2 class="accordion-header" id="heading${faq.id}">
                    <button class="accordion-button collapsed justify-content-between" type="button"
                      data-bs-toggle="collapse" data-bs-target="#collapse${faq.id}"
                      aria-expanded="false" aria-controls="collapse${faq.id}">
                      ${faq.question}
                      <div class="toggle-icon">
                        <i class="ri-add-large-fill"></i>
                      </div>
                    </button>
                  </h2>
                  <div id="collapse${faq.id}" class="accordion-collapse collapse"
                    aria-labelledby="heading${faq.id}" data-bs-parent="#accordionFlushExample1">
                      <div class="accordion-body"> ${faq.answer} </div>
                  </div>
                </div> `;
    });
    accordionFlush.innerHTML = output;
  }
  const categoryButtons = document.querySelectorAll('#faq-categories .btn[data-category]');
  categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      renderAllFaqs(category);
    });
  });
  renderAllFaqs("general");
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
});

tl.from(".navbar .navbar-nav .nav-item", {
  y: -40,
  opacity: 0,
  delay: 0.4,
  duration: 0.5,
  stagger: 0.1
}, "0.3");

tl.from(".navbar .mail-id,.hero-section-primary .hero-content", {
  x: -100,
  opacity: 0,
  delay: 0.7,
  duration: 1,
  stagger: 0.3
}, "0.7");

tl.from(".navbar .nav-btn,.navbar .navbar-toggler", {
  x: 100,
  opacity: 0,
  delay: 0.7,
  duration: 1,
  stagger: 0.3
}, "0.7");

tl.from(".hero-section-primary .hero-img", {
  scale: 0,
  opacity: 0,
  delay: 0.7,
  duration: 2,
}, "0.7");

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
});

tl2.from(".service-section .card.service-card", {
  opacity: 0,
  duration: 2,
});

//about us gsap
var tl3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutus-section",
    scroller: "body",
    markers: false,
    start: "top 0%",
    end: "top 30%",

  }
});

tl3.from(".aboutus-section .aboutus-content", {
  x: 100,
  opacity: 0,
  delay: 0.7,
  duration: 2
});

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
});

tl4.from(".partner-section .partner-heading", {
  scale: 0,
  opacity: 0,
  duration: 1
});

tl4.from(".partner-section .partner-swiper", {
  opacity: 0,
  duration: 1
});

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
});

tl5.from(".footer-section .footer-brand-title", {
  x: -100,
  opacity: 0,
  delay: 0.3,
  duration: 1
});

tl5.from(".footer-section .footer-subscribe-box", {
  x: 100,
  opacity: 0,
  delay: 0.3,
  duration: 1
}, -0.1);

tl5.from(".footer-section .footer-title,.footer-section .footer-nav-group .footer-nav-link,.footer-section .contact-info,.footer-section .location-info,.footer-section .mail-info", {
  y: -30,
  opacity: 0,
  delay: 0.3,
  duration: 1,
  stagger: 0.1
});

tl5.from(".store-buttons-wrapper .store-button", {
  opacity: 0,
  delay: 0.1,
  duration: 1,
  stagger: 0.1
});

tl5.from(".footer-tagline .Copyright-section", {
  y: 30,
  opacity: 0,
  duration: 1
});

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
    markers: false,
    start: "top 50%",
    end: "top 80%",
  }
});

tl6.from(".pricing-section .price-card", {
  opacity: 0,
  duration: 1,
  scrollTrigger: {
    trigger: ".pricing-section .price-card",
    scroller: "body",
    markers: false,
    start: "top 50%",
    end: "top 80%",
  }
});

//contactus gsap
var tl8 = gsap.timeline({
  scrollTrigger: {
    trigger: ".contactus-section .contactus-heading",
    scroller: "body",
    markers: false,
    start: "top 50%",
    end: "top 80%",
  }
});

tl8.from(".contactus-section .contactus-heading", {
  x: -100,
  opacity: 0,
  duration: 2,
});

tl8.from(".contactus-section .contactus-form", {
  x: -100,
  opacity: 0,
  duration: 2,
});

tl8.from(".contactus-section .contact-info", {
  x: 100,
  opacity: 0,
  duration: 2,
}, 2);

//faqs
var tl9=gsap.timeline({
  scrollTrigger:{
    trigger: ".faqs-section .faqs-heading",
    scroller: "body",
    markers: true,
    start: "top 50%",
    end: "top 80%",
  }
});

tl9.from(".faqs-section .faqs-heading ,.faqs-section .faqs-filters",{
  scale: 0,
  opacity:0,
  duration: 2,
});

tl9.from(".faqs-section .accordion",{
  x: -100,
  opacity: 0,
  duration: 2,
});

tl9.from(".faqs-section .faqs-img",{
  x: 100,
  opacity: 0,
  duration: 2,
},2);

