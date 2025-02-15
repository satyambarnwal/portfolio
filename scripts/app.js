const lenis = new Lenis({
  autoRaf: true,
});

window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

window.onbeforeunload = function () {
  window.scrollTo(0, 0);
  document.body.classList.remove("loaded");
};

//cursor animations

const cursor = document.querySelector("#cursor");
window.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0,
    ease: Expo.easeInOut,
  });
});

const cursor2 = document.querySelector("#cursor2");
window.addEventListener("mousemove", function (dets) {
  gsap.to(cursor2, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.5,
    ease: Expo.easeOut,
  });
});

const heroImgCursor = document.querySelector("#hero-img-cursor");
window.addEventListener("mousemove", function (dets) {
  gsap.to(heroImgCursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0,
    ease: Expo.easeInOut,
  });
});

const heroImg = document.querySelector(".hero-img");
heroImg.addEventListener("mouseover", () => {
  gsap.set(heroImgCursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor, {
    scale: 0,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 0,
    ease: "power4.inOut",
  });
});

heroImg.addEventListener("mouseleave", () => {
  gsap.set(heroImgCursor, {
    scale: 0,
    ease: "power4.inOut",
  });

  gsap.set(cursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 1,
    ease: "power4.inOut",
  });
});

const homeLink = document.querySelectorAll(".home-link");
homeLink.forEach((link) => {
  link.addEventListener("mouseover", () => {
    gsap.set(cursor, {
      scale: 4.5,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 0,
      ease: "power4.inOut",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.set(cursor, {
      scale: 1,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 1,
      ease: "power4.inOut",
    });
  });
});

const heroSubtitle = document.querySelectorAll("#hero-subtitle p span");
heroSubtitle.forEach((subtitle) => {
  subtitle.addEventListener("mouseover", () => {
    gsap.set(cursor, {
      scale: 6,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 0,
      ease: "power4.inOut",
    });
  });

  subtitle.addEventListener("mouseleave", () => {
    gsap.set(cursor, {
      scale: 1,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 1,
      ease: "power4.inOut",
    });
  });
});

const menuSocialLink = document.querySelectorAll("#menu-social-link");
menuSocialLink.forEach((socialLink) => {
  socialLink.addEventListener("mouseover", () => {
    gsap.set(cursor, {
      scale: 5,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 0,
      ease: "power4.inOut",
    });
  });

  socialLink.addEventListener("mouseleave", () => {
    gsap.set(cursor, {
      scale: 1,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 1,
      ease: "power4.inOut",
    });
  });
});

const cta = document.querySelector(".cta-button");
cta.addEventListener("mouseover", () => {
  gsap.set(cursor, {
    scale: 0,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 0,
    ease: "power4.inOut",
  });
});

cta.addEventListener("mouseleave", () => {
  gsap.set(cursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 1,
    ease: "power4.inOut",
  });
});

const aboutLink = document.querySelector("#about");
aboutLink.addEventListener("mouseover", () => {
  gsap.set(cursor, {
    scale: 6,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 0,
    ease: "power4.inOut",
  });
});

aboutLink.addEventListener("mouseleave", () => {
  gsap.set(cursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 1,
    ease: "power4.inOut",
  });
});

const liveSite = document.querySelectorAll(".section3 .rolling-text");
liveSite.forEach((link) => {
  link.addEventListener("mouseover", () => {
    gsap.set(cursor, {
      scale: 0,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 0,
      ease: "power4.inOut",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.set(cursor, {
      scale: 1,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 1,
      ease: "power4.inOut",
    });
  });
});

const workLink = document.querySelector("#work");
workLink.addEventListener("mouseover", () => {
  gsap.set(cursor, {
    scale: 6,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 0,
    ease: "power4.inOut",
  });
});

workLink.addEventListener("mouseleave", () => {
  gsap.set(cursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 1,
    ease: "power4.inOut",
  });
});

const services = document.querySelectorAll(".service-box");
services.forEach((service) => {
  service.addEventListener("mouseover", () => {
    gsap.set(cursor, {
      scale: 6,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 0,
      ease: "power4.inOut",
    });
  });

  service.addEventListener("mouseleave", () => {
    gsap.set(cursor, {
      scale: 1,
      ease: "power4.inOut",
    });

    gsap.set(cursor2, {
      scale: 1,
      ease: "power4.inOut",
    });
  });
});

const footer = document.querySelector(".collab-box");
footer.addEventListener("mouseover", () => {
  gsap.set(cursor, {
    scale: 2,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 0,
    ease: "power4.inOut",
  });
});

footer.addEventListener("mouseleave", () => {
  gsap.set(cursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 1,
    ease: "power4.inOut",
  });
});

const footerEmail = document.querySelector(".footer-email");
footerEmail.addEventListener("mouseover", () => {
  gsap.set(cursor, {
    scale: 2.5,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 0,
    ease: "power4.inOut",
  });
});

footerEmail.addEventListener("mouseleave", () => {
  gsap.set(cursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 1,
    ease: "power4.inOut",
  });
});

//landing page animation

gsap.from(cta, {
  x: 300,
  duration: 2,
  delay: 6.25,
  ease: Expo.easeInOut,
});

gsap.from(".scroll", {
  opacity: 0,
  delay: 8.5,
  duration: 1,
});

gsap.to(".scroll ion-icon", {
  rotate: 45,
  delay: 9.5,
});

gsap.from(".loading-line1", {
  width: "0%",
  duration: 2.15,
  ease: Expo.easeInOut,
  onStart: () => {
    lenis.stop(); // Lock scrolling
  },
});

gsap.to(".loading-line1", {
  width: "0%",
  duration: 2.15,
  delay: 2.5,
  ease: Expo.easeInOut,
});

gsap.from(".loading-line2", {
  width: "0%",
  duration: 2.15,
  ease: Expo.easeInOut,
});

gsap.to(".loading-line2", {
  width: "0%",
  duration: 2.15,
  delay: 2.5,
  ease: Expo.easeInOut,
});

gsap.from(".title p span", {
  y: -100,
  stagger: 0.05,
  duration: 1.5,
  ease: "power3.inOut",
});

gsap.to(".title p span", {
  y: 35,
  stagger: 0.05,
  duration: 1.5,
  delay: 4,
  ease: "power4.inOut",
});

gsap.set(".title p", {
  overflow: "visible",
  delay: 2,
});

gsap.to(".title p", {
  scale: 6.15,
  duration: 2.15,
  delay: 4,
  ease: "power4.inOut",
});

gsap.from("nav .home-link", {
  y: 100,
  duration: 2,
  delay: 6.25,
  ease: Expo.easeInOut,
});

gsap.set(".title", {
  mixBlendMode: "difference",
  color: "#fff",
  delay: 5,
});

gsap.from("#hero-subtitle p span", {
  y: 100,
  duration: 2,
  delay: 6.25,
  ease: Expo.easeInOut,
});

gsap.to(heroImg, {
  clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
  delay: 6.25,
  duration: 2,
  ease: Expo.easeInOut,
  onComplete: () => {
    lenis.start(); // unlock scrolling
  },
});

//scroll triggers

gsap.to(".scroll-text", {
  yPercent: -100,
  scrollTrigger: {
    trigger: ".section1",
    start: "bottom 80%",
    end: "bottom 50%",
    scrub: 1,
  },
});

gsap.to(".scroll ion-icon", {
  y: -25,
  scrollTrigger: {
    trigger: ".section1",
    start: "bottom 80%",
    end: "bottom 50%",
    scrub: true,
  },
});

gsap.to("nav .nav-links", {
  x: -90,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section2",
    start: "top 60%",
    end: "top 55%",
    scrub: 0.5,
  },
});

gsap.to("nav .nav-links", {
  display: "none",
  scrollTrigger: {
    trigger: ".section2",
    start: "top 55%",
    end: "top 55%",
    scrub: true,
  },
});

gsap.to("nav .menu-toggle", {
  y: 0,
  scrollTrigger: {
    trigger: ".section2",
    start: "top 55%",
    end: "top 50%",
    scrub: 0.5,
  },
});

gsap.to(".title p span", {
  opacity: 0,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".title p",
    start: "top 25%",
    end: "bottom 0%",
    scrub: 1.5,
  },
});

gsap.to("#hero-subtitle p span", {
  yPercent: -100,
  scrollTrigger: {
    trigger: "#hero-subtitle",
    start: "top 12.5%",
    end: "bottom 0%",
    scrub: 0.5,
  },
});

gsap.to(".hero-img img", {
  y: -50,
  clipPath: "polygon(0% 0%, 100% 0%, 100% 85%, 0% 85%)",
  scrollTrigger: {
    trigger: ".hero-img img",
    // markers: true,
    start: "top 5%",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to(cta, {
  y: 392,
  scrollTrigger: {
    trigger: ".section1",
    start: "top top",
    end: "bottom top",
    scrub: 1,
  },
});

gsap.to(cta, {
  xPercent: 125,
  scrollTrigger: {
    trigger: ".section5",
    start: "bottom 40%",
    end: "bottom 20%",
    scrub: 1,
  },
});

gsap.from(".section2 .about-heading span", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section2",
    start: "top 50%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section2 .about-description p", {
  opacity: 0,
  y: 25,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".section2",
    start: "top 40%",
    end: "top 15%",
    scrub: 1,
  },
});

gsap.from(".section3 .projects-heading span", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section3",
    start: "top 50%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section3 .project-container1", {
  y: 75,
  opacity: 0,
  scrollTrigger: {
    trigger: ".section3 .project-container1",
    start: "top 85%",
    end: "top 70%",
    scrub: 1,
  },
});

gsap.to(".section3 .project-container1", {
  scale: 0.9,
  scrollTrigger: {
    trigger: ".section3 .project-container1",
    start: "top 6%",
    end: "bottom 6%",
    scrub: 1,
  },
});

gsap.to(".section3 .project-container2", {
  scale: 0.925,
  scrollTrigger: {
    trigger: ".section3 .project-container2",
    start: "top 10%",
    end: "bottom 10%",
    scrub: 1,
  },
});

gsap.to(".section3 .project-container3", {
  scale: 0.95,
  scrollTrigger: {
    trigger: ".section3 .project-container3",
    start: "top 14%",
    end: "bottom 14%",
    scrub: 1,
  },
});

gsap.to(".section3 .project-container4", {
  scale: 0.975,
  scrollTrigger: {
    trigger: ".section3 .project-container4",
    start: "top 18%",
    end: "bottom 18%",
    scrub: 1,
  },
});

gsap.to(".link-container1", {
  x: -10,
  scrollTrigger: {
    trigger: ".project-container1",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from(".section3 .title1 p", {
  yPercent: 100,
  scale: 0.9,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container1",
    start: "top 65%",
  },
});

gsap.from(".section3 .desc1 div p", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container1",
    start: "top 50%",
  },
});

gsap.from(".section3 .stack1 div p", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container1",
    start: "top 40%",
  },
});

gsap.from(".section3 .link1 a", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container1",
    start: "top 40%",
  },
});

gsap.to(".link-container2", {
  x: -10,
  scrollTrigger: {
    trigger: ".project-container2",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from(".section3 .title2 p", {
  yPercent: 100,
  scale: 0.9,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container2",
    start: "top 55%",
  },
});

gsap.from(".section3 .desc2 div p", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container2",
    start: "top 40%",
  },
});

gsap.from(".section3 .stack2 div p", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container2",
    start: "top 30%",
  },
});

gsap.from(".section3 .link2 a", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container2",
    start: "top 30%",
  },
});

gsap.to(".link-container3", {
  x: -10,
  scrollTrigger: {
    trigger: ".project-container3",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from(".section3 .title3 p", {
  yPercent: 100,
  scale: 0.9,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container3",
    start: "top 55%",
  },
});

gsap.from(".section3 .desc3 div p", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container3",
    start: "top 40%",
  },
});

gsap.from(".section3 .stack3 div p", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container3",
    start: "top 30%",
  },
});

gsap.from(".section3 .link3 a", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container3",
    start: "top 30%",
  },
});

gsap.to(".link-container4", {
  x: -10,
  scrollTrigger: {
    trigger: ".project-container4",
    start: "top 50%",
    end: "top 30%",
    scrub: 1,
  },
});

gsap.from(".section3 .title4 p", {
  yPercent: 100,
  scale: 0.9,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container4",
    start: "top 55%",
  },
});

gsap.from(".section3 .desc4 div p", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container4",
    start: "top 40%",
  },
});

gsap.from(".section3 .stack4 div p", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container4",
    start: "top 30%",
  },
});

gsap.from(".section3 .link4 a", {
  yPercent: 100,
  rotate: 1,
  duration: 0.6,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".section3 .project-container4",
    start: "top 30%",
  },
});

gsap.from(".section5 .services-heading span", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section5",
    start: "top 40%",
    end: "top 15%",
    scrub: 1,
  },
});

gsap.from(".section5 .service-box", {
  yPercent: 80,
  rotate: 5,
  stagger: 0.06,
  scrollTrigger: {
    trigger: ".services-container",
    start: "top bottom",
    end: "top 50%",
    scrub: 1,
  },
});

gsap.from(".section5 .service-box .service-title p", {
  yPercent: -125,
  rotate: 1,
  stagger: 0.1,
  scrollTrigger: {
    trigger: ".section5 .services-container",
    start: "top 80%",
    end: "top 60%",
    scrub: 1,
  },
});

gsap.from(".footer .footer-heading span", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 40%",
    end: "top 15%",
    scrub: 1,
  },
});

gsap.to(".footer .collab-box", {
  clipPath: "inset(6% 2.5% 6% 2.5% round 15px)", // using inset with rounded corners
  scrollTrigger: {
    trigger: ".footer .collab-box",
    start: "top 90%",
    end: "top top",
    scrub: 1,
  },
});

gsap.from(".collab-heading1 p span", {
  yPercent: -120,
  duration: 0.75,
  stagger: 0.015,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".collab-heading1",
    start: "top 50%",
  },
});

gsap.from(".collab-heading2 p span", {
  yPercent: -120,
  duration: 0.75,
  stagger: 0.015,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".collab-heading1",
    start: "top 50%",
  },
});

gsap.to(".amazing", {
  color: "#fff",
  duration: 0.65,
  stagger: 0.08,
  delay: 1.5,
  ease: "power1.out",
  scrollTrigger: {
    trigger: ".collab-heading1",
    start: "top 50%",
  },
});

gsap.to(".progress-bar", {
  y: "900%",
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom bottom",
    scrub: true,
  },
});

const menuToggle = document.querySelector(".menu-toggle");
const closeToggle = document.querySelector(".close-toggle");
const menuContainer = document.querySelector(".menu-container");
const menuBlock = document.querySelectorAll(".menu-block");

menuToggle.addEventListener("mouseover", () => {
  gsap.set(cursor, {
    scale: 4.5,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 0,
    ease: "power4.inOut",
  });
});

menuToggle.addEventListener("mouseleave", () => {
  gsap.set(cursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 1,
    ease: "power4.inOut",
  });
});

menuToggle.addEventListener("click", () => {
  gsap.to(menuContainer, {
    right: "0%",
    duration: 1.25,
    ease: Expo.easeInOut,
    onStart: () => {
      lenis.stop(); // Lock scrolling
    },
  });

  gsap.from(menuBlock, {
    xPercent: 100,
    stagger: 0.1,
    duration: 1.5,
    ease: "power4.inOut",
  });

  gsap.set(".main, .footer, nav", {
    pointerEvents: "none",
  });

  gsap.from("#menu-link a", {
    rotate: 10,
    y: 150,
    duration: 1.25,
    stagger: 0.1,
    delay: 1,
    ease: Expo.easeOut,
  });

  gsap.from("#menu-social-link", {
    y: 150,
    duration: 1,
    stagger: 0.1,
    delay: 1.25,
    ease: "power4.out",
  });

  gsap.from(".navigation-toggle, .socials-toggle", {
    opacity: 0,
    delay: 2,
  });

  gsap.from(".navigation-toggle ion-icon, .socials-toggle ion-icon", {
    rotate: -180,
    delay: 2.4,
  });
});

closeToggle.addEventListener("mouseover", () => {
  gsap.set(cursor, {
    scale: 4.5,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 0,
    ease: "power4.inOut",
  });
});

closeToggle.addEventListener("mouseleave", () => {
  gsap.set(cursor, {
    scale: 1,
    ease: "power4.inOut",
  });

  gsap.set(cursor2, {
    scale: 1,
    ease: "power4.inOut",
  });
});

closeToggle.addEventListener("click", () => {
  gsap.to(menuContainer, {
    right: "-45%",
    duration: 1,
    ease: Expo.easeInOut,
    onComplete: () => {
      lenis.start(); // Unlock scrolling
    },
  });

  gsap.to(menuBlock, {
    xPercent: 0,
    duration: 0,
    delay: 1.25,
  });

  gsap.set(".main, .footer, nav", {
    pointerEvents: "all",
  });
});

const elements = document.querySelectorAll(".rolling-text");
elements.forEach((element) => {
  let inerText = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for (let letter of inerText) {
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContainer.appendChild(span);
  }

  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

elements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    element.classList.remove("play");
  });
});

const buttons = document.querySelectorAll(".text");
buttons.forEach((button) => {
  const text = button.textContent.trim();

  button.textContent = "";

  Array.from(text).forEach((char, index) => {
    const span = document.createElement("span");
    span.classList.add("single-letter");

    if (char === " ") {
      span.textContent = "\u00A0"; // Non-breaking space entity
    } else {
      span.textContent = char; // Set the character text
    }

    span.style.position = "relative";
    span.style.display = "inline-block";
    span.style.transitionDelay = `${0 + index * 0.02}s`; // Increment transition delay for each character

    button.appendChild(span);
  });
});