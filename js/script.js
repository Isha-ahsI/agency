var tl=gsap.timeline()

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