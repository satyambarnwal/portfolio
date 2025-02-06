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
  y: -25,
  scrollTrigger: {
    trigger: ".section1",
    start: "bottom 80%",
    end: "bottom 50%",
    scrub: true,
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
    trigger: ".section1 .title",
    start: "top 5%",
    end: "bottom 5%",
    scrub: 0.5,
  },
});

gsap.to("nav .menu-toggle", {
  y: 0,
  scrollTrigger: {
    trigger: ".section1 .title",
    start: "top 0%",
    end: "bottom 0%",
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
  yPercent: -120,
  scrollTrigger: {
    trigger: ".title p",
    start: "top 40%",
    end: "bottom 30%",
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
    trigger: ".section6",
    start: "top 35%",
    end: "top 15%",
    scrub: 0.5,
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
    start: "top 30%",
    end: "top 15%",
    scrub: 1.5,
  },
});

gsap.from(".section2 .pulse", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".section2",
    start: "top 15%",
    end: "top 10%",
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
    start: "top 80%",
    end: "top 65%",
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

gsap.from(".section3 .counter1 p", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".section3 .project-container1",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section3 .title1 p", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".section3 .project-container1",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section3 .counter2 p", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".section3 .project-container2",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section3 .title2 p", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".section3 .project-container2",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section3 .counter3 p", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".section3 .project-container3",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section3 .title3 p", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".section3 .project-container3",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section3 .counter4 p", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".section3 .project-container4",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section3 .title4 p", {
  yPercent: 100,
  scrollTrigger: {
    trigger: ".section3 .project-container4",
    start: "top 55%",
    end: "top 35%",
    scrub: 1,
  },
});

gsap.from(".section4 .expertise-heading span", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section4",
    start: "top 35%",
    end: "top 20%",
    scrub: 1,
  },
});

gsap.from(".section4 .expertise-list1 .skill", {
  opacity: 0,
  y: 25,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".section4 .expertise-heading",
    start: "top 55%",
    end: "top 30%",
    scrub: 1.5,
  },
});

gsap.from(".section4 .expertise-list2 .skill", {
  opacity: 0,
  y: 25,
  stagger: 0.15,
  scrollTrigger: {
    trigger: ".section4 .expertise-heading",
    start: "top 55%",
    end: "top 30%",
    scrub: 1.5,
  },
});

gsap.from(".section5 .ending-note span", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section5",
    start: "top 60%",
    end: "top 45%",
    scrub: 0.25,
  },
});

gsap.to(".section5 .ending-note span", {
  color: "#fff",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section5 .ending-note",
    start: "top 20%",
    end: "top 5%",
    scrub: 0.25,
  },
});

gsap.from(".section5 .ending-note2 span", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section6",
    start: "top bottom",
    end: "top 80%",
    scrub: true,
  },
});

gsap.to(".section5 .ending-note2 span", {
  color: "#fff",
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section6",
    start: "top 65%",
    end: "top 40%",
    scrub: 0.25,
  },
});

gsap.from(".section6 .collab-heading span", {
  opacity: 0,
  stagger: 0.05,
  scrollTrigger: {
    trigger: ".section6",
    start: "top 35%",
    end: "top top",
    scrub: 0.5,
  },
});

gsap.from(".footer .footer-heading span", {
  y: -125,
  stagger: 0.04,
  scrollTrigger: {
    trigger: ".section6",
    start: "bottom 50%",
    end: "bottom 10%",
    scrub: 1.5,
  },
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section6",
    start: "bottom 15%",
    toggleActions: "play none none none",
  },
});

tl.to("svg path", {
  strokeDashoffset: 0,
  duration: 3,
  ease: "power1.inOut",
}).to(
  "svg path",
  {
    fill: "white",
    duration: 0.8,
    ease: "power1.inOut",
  },
  ">-0.8"
); // Starts fill animation when stroke is 80% complete (4s * 0.8 = 3.2s)

gsap.to(".progress-bar", {
  y: "900%",
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom 10%",
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

document.querySelectorAll(".skill").forEach((skill) => {
  skill.addEventListener("mouseenter", function () {
    if (this.querySelector(".clone")) return;

    const clone = this.cloneNode(true);
    clone.classList.add("clone");

    gsap.set(clone, {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      yPercent: 100,
      backgroundColor: "#000",
      color: "#fff",
    });

    this.appendChild(clone);

    gsap.to(clone, {
      yPercent: 0,
      duration: 0.35,
      ease: "power1.out",
    });
  });

  skill.addEventListener("mouseleave", function () {
    const clone = this.querySelector(".clone");
    if (!clone) return;

    gsap.to(clone, {
      yPercent: 100,
      duration: 0.35,
      ease: "power1.out",
      onComplete: () => {
        if (clone && clone.parentNode) {
          clone.parentNode.removeChild(clone);
        }
        gsap.set(this, { clearProps: "yPercent" });
      },
    });
  });
});
