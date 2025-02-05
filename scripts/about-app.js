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
  delay: 1.7,
  ease: Expo.easeInOut,
});

gsap.from(".about-title span", {
  yPercent: -100,
  delay: 1,
  duration: 1.4,
  stagger: 0.1,
  ease: Expo.easeOut,
});

gsap.from("nav .home-link", {
  y: 100,
  duration: 2,
  delay: 1.7,
  ease: Expo.easeInOut,
});

//scrolltrigger

gsap.to("nav .nav-links", {
  x: -90,
  opacity: 0,
  scrollTrigger: {
    trigger: ".about-section1 .about-title",
    start: "top 5%",
    end: "bottom 20%",
    scrub: 0.5,
  },
});

gsap.to("nav .menu-toggle", {
  y: 0,
  scrollTrigger: {
    trigger: ".about-section1 .about-title",
    start: "top 0%",
    end: "bottom 15%",
    scrub: 0.5,
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
