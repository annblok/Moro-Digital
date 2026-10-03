gsap.registerPlugin(
    ScrambleTextPlugin, 
    ScrollTrigger, 
    ScrollSmoother,
    DrawSVGPlugin, 
    MorphSVGPlugin
);

// gsap.fromTo(".rotate-shape-2",
   // { rotation: 0 },
   // { rotation: 360, duration: 10, ease: 'none' }
// );

gsap.to(".rotate-shape-2", {
    keyframes: [
        { rotation: 0, duration: 0, opacity: 0 },
        { rotation: 360, duration: 5, opacity: 1 },
        { rotation: 0, duration: 10, ease: 'linear', opacity: 0 },
    ],
    repeat: -1
});

gsap.to(".title-part-2", {
  duration: 1, 
  scrambleText: {
    text: "FULL - STACK", 
    chars: "01", 
    revealDelay: 1, 
    speed: 0.5, 
  }
});

let imgTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".select-thumb",
        start: "top 90%",
        bottom: "bottom 60%",
        toggleActions: "play none none none",
        scrub: true,
        markers: false,
    }
});

gsap.utils.toArray(".select-thumb img").forEach((img, i) => {

    let fromX = i % 2 === 0 ? -100 : 100;

    imgTimeline.from(img, {
        x: fromX,
        opacity: 0,
        scale: 0.9,
        duration: 1,
        ease: "power2.out",
    }, i * 0.2 );
});

ScrollTrigger.matchMedia({
    "(min-width: 992px)": function() {

        const boxAbout = document.querySelector(".about-content-box").offsetHeight;

        ScrollTrigger.create({
            trigger: ".about-six-bottom-wrapper",
            start: "top top",
            end: () => "+=" + boxAbout,
            pin: ".text-sticky",
            pinSpacing: true,
            scrub: true,
            markers: false,
        });

    }
});

ScrollSmoother.create({
    smooth: 1.1, 
    effects: true, 
    smoothTouch: 0.1,
});

gsap.from(".circle-img", {
    scrollTrigger: {
        trigger: ".circle-img",
        start: "top 80%",
        end: "bottom 60%",
        scrub: true
    },
    y: 100,
    opacity: 0,
    duration: 1,
});

let counterTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: ".counter-six-wrapper",
        start: "top 80%",
        end: "bottom 90%",
        scrub: true
    }
});

// counterTimeline
//     .from(".fade-anim:nth-child(1)", {
//         y: 50,
//         opacity: 0,
//         duration: 0.5
//     })
//     .from(".fade-anim:nth-child(2)", {
//         y: 50,
//         opacity: 0,
//         duration: 0.5
//     }, "-=0.3")
//     .from(".fade-anim:nth-child(3)", {
//         y: 50,
//         opacity: 0,
//         duration: 0.5
//     }, "-=0.3")
//     .from(".fade-anim:nth-child(4)", {
//         y: 50,
//         opacity: 0,
//         duration: 0.5
//     }, "-=0.3")
    

gsap.utils.toArray(".fade-anim").forEach((el, i) => {
    counterTimeline.from(el, {
        y: 50,
        opacity: 0,
        duration: 0.5
    }, i * 0.2);
});

gsap.utils.toArray('.blog-post-single').forEach(card => {

    let titleCard = card.querySelector(".blog-six-title");
    let originalText = titleCard.textContent;
    let authorCard = card.querySelector(".avatar-name");
    let textCursor = document.querySelector(".cursor-text");

    card.addEventListener('mouseenter', () => {
        gsap.to(titleCard, { 
            background: "var(--bd-primary)", 
            duration: 0.3, 
            ease: 'power2.out'
        });
        // gsap.to(titleCard, {
        //     scrambleText: {
        //         text: originalText,
        //         chars: "01", 
        //         revealDelay: 0.5, 
        //         speed: 0.5,
        //     },
        //     duration: 2
        // });
        gsap.to(authorCard, { 
            color: "var(--bd-primary)", 
            duration: 0.3, 
            ease: 'power2.out' 
        });
    });
    card.addEventListener('mouseleave', () => {
        gsap.to(titleCard, { 
            background: "var(--bd-white)", 
            duration: 0.3, 
            ease: 'power2.inOut' 
        });
        gsap.to(authorCard, { 
            color: "var(--bd-black)", 
            duration: 0.3, 
            ease: 'power2.inOut' 
        });
    });
    card.addEventListener('mouseenter', () => {
        textCursor.textContent = "Read",
        gsap.to(".custom-cursor", {
            scale: 1.2,
            borderColor: "var(--bd-primary)",
            duration: 0.3,
            ease: 'power2.out' 
        })
    });
    card.addEventListener('mouseleave', () => {
        textCursor.textContent = "",
        gsap.to(".custom-cursor", {
            scale: 1,
            borderColor: "var(--bd-black)",
            duration: 0.3,
            ease: 'power2.out' 
        })
    });
});

gsap.from(".title-anim > div", {
    opacity: 0,
    x: -30,
    duration: 0.4,
    stagger: 0.2,
    scrollTrigger: {
        trigger: ".footer-area",
        start: "top 70%"
    }
});

let workLink = document.querySelector(".work-btn a");
let iconPath = document.getElementById("morph-path");

let circlePath = "M50,10a40,40 0 1,0 0.0001,0";
let starPath = "M48 0L59.5881 14.3354L77.3893 9.54915L78.3381 27.9581L95.5528 34.5491L85.5 50L95.5528 65.4509L78.3381 72.0419L77.3893 90.4509L59.5881 85.6646L48 100L36.4119 85.6646L18.6107 90.4509L17.6619 72.0419L0.447174 65.4509L10.5 50L0.447174 34.5491L17.6619 27.9581L18.6107 9.54915L36.4119 14.3354L48 0Z";

workLink.addEventListener('mouseenter', () => {
    gsap.to(iconPath, {
        morphSVG: starPath,
        duration: 0.5,
        ease: 'power2.out' 
    })
});
workLink.addEventListener('mouseleave', () => {
    gsap.to(iconPath, {
        morphSVG: circlePath,
        duration: 0.5,
        ease: 'power2.out' 
    })
});

gsap.fromTo(".text-slide path",
    {
        drawSVG: "0%"
    },
    {
        drawSVG: "100%",
        duration: 3,
        ease: 'power2.out',
        repeat: -1,
    }
)

document.addEventListener("mousemove", e => {
    gsap.to(".custom-cursor", {
        x: e.clientX,
        y: e.clientY,
        duration: 0.2,
        ease: 'power2.out'
    });
});

let hoverTarget = document.querySelectorAll(".hover-target");

hoverTarget.forEach(hoverTarget => {
    hoverTarget.addEventListener('mouseenter', () => {
        gsap.to(".custom-cursor", {
            scale: 1.2,
            borderColor: "var(--bd-primary)",
            duration: 0.3,
            ease: 'power2.out' 
        })
    });
    hoverTarget.addEventListener('mouseleave', () => {
        gsap.to(".custom-cursor", {
            scale: 1,
            borderColor: "var(--bd-black)",
            duration: 0.3,
            ease: 'power2.out' 
        })
    });
});

