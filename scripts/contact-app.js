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
    duration: 1,
    ease: "elastic.out(1,0.2)",
  });
});

const homeLink = document.querySelectorAll(".home-link");
homeLink.forEach((link) => {
  link.addEventListener("mouseover", () => {
    gsap.to(cursor, {
      scale: 3,
      ease: "power4.out",
    });
  });

  link.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      ease: "power4.out",
    });
  });
});

const menuSocialLink = document.querySelectorAll("#menu-social-link");
menuSocialLink.forEach((socialLink) => {
  socialLink.addEventListener("mouseover", () => {
    gsap.to(cursor, {
      scale: 3,
      ease: "power4.out",
    });
  });

  socialLink.addEventListener("mouseleave", () => {
    gsap.to(cursor, {
      scale: 1,
      ease: "power4.inOut",
    });
  });
});

const cta = document.querySelector(".cta-button");
cta.addEventListener("mouseover", () => {
  gsap.to(cursor, {
    scale: 0,
    ease: "power4.out",
  });
});

cta.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
    ease: "power4.out",
  });
});

gsap.from(cta, {
  x: 300,
  duration: 2,
  delay: 3.25,
  ease: Expo.easeInOut,
});

gsap.from(".contact-title span", {
  clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
  xPercent: -75,
  rotate: -20,
  delay: 1,
  duration: 1.75,
  stagger: {
    amount: 2,
    from: "random",
  },
  ease: "power2.out",
});

gsap.from("nav .home-link", {
  y: 100,
  duration: 2,
  delay: 3.25,
  ease: Expo.easeInOut,
});

//scrolltrigger

gsap.to("nav .nav-links", {
  x: -90,
  opacity: 0,
  scrollTrigger: {
    trigger: ".contact-section1 .contact-title",
    start: "top 5%",
    end: "bottom 20%",
    scrub: 0.5,
  },
});

gsap.to("nav .nav-links", {
  display: "none",
  scrollTrigger: {
    trigger: ".contact-section1 .contact-title",
    start: "bottom 20%",
    end: "bottom 20%",
    scrub: true,
  },
});

gsap.to("nav .menu-toggle", {
  y: 0,
  scrollTrigger: {
    trigger: ".contact-section1 .contact-title",
    start: "top 0%",
    end: "bottom 15%",
    scrub: 0.5,
  },
});

gsap.to(".progress-bar", {
  y: "900%",
  scrollTrigger: {
    trigger: ".contact-main",
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
  gsap.to(cursor, {
    scale: 3,
    ease: "power4.out",
  });
});

menuToggle.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
    ease: "power4.out",
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
  gsap.to(cursor, {
    scale: 3,
    ease: "power4.out",
  });
});

closeToggle.addEventListener("mouseleave", () => {
  gsap.to(cursor, {
    scale: 1,
    ease: "power4.out",
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
