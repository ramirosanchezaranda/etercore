const marqueeItems = document.querySelectorAll(".marquee-item");
const btnPrev = document.querySelector(".arrow-prev");
const btnNext = document.querySelector(".arrow-next");
const conf = { duration: 1, ease: "power.inOut" };

window.addEventListener("load", function () {
  console.log("Window loaded");

  if (typeof gsap === "undefined" || typeof Draggable === "undefined") {
    console.error("GSAP or Draggable is not loaded");
    return;
  }

  const loop = horizontalLoop(marqueeItems, {
    repeat: -1,
    paddingRight: 30,
    speed: 0.2,
    draggable: true
  });

  marqueeItems.forEach(function (item) {
    item.addEventListener("mouseenter", () => {
      console.log("Mouse entered item");
      loop.pause();
    });
    item.addEventListener("mouseleave", () => {
      console.log("Mouse left item");
      loop.play();
    });
  });

  btnPrev.addEventListener("click", () => {
    console.log("Previous button clicked");
    loop.previous(conf);
  });
  btnNext.addEventListener("click", () => {
    console.log("Next button clicked");
    loop.next(conf);
  });
});

function horizontalLoop(items, config) {
  const tl = gsap.timeline({
    repeat: config.repeat,
    paused: config.paused,
    defaults: { ease: "none" }
  });

  const totalWidth = items[0].offsetWidth * items.length;
  const wrapWidth = totalWidth + (parseFloat(config.paddingRight) || 0);

  items.forEach((item, i) => {
    tl.to(item, {
      x: `-=${wrapWidth}`,
      duration: wrapWidth / (config.speed * 100),
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % wrapWidth)
      }
    }, 0);
  });

  tl.to(items, {
    x: `+=${wrapWidth}`,
    duration: 0,
    ease: "none"
  });

  return tl;
}
