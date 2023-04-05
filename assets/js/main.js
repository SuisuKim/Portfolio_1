TweenMax.from(".logo", 1, {
  opacity: 0,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.staggerFrom("nav ul li", 1, {
  opacity: 0,
  x: -20,
  ease: Power3.easeInOut
}, 0.08)



TweenMax.from(".menu", 1, {
  opacity: 0,
  delay: .6,
  x: -20,
  ease: Expo.easeInOut
})

TweenMax.from(".title", 1, {
  opacity: 0,
  delay: 1,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".social", 1, {
  opacity: 0,
  delay: 1.6,
  y: 20,
  ease: Expo.easeInOut
})

TweenMax.from(".line-one", 1, {
  opacity: 0,
  delay: 2,
  y: -800,
  ease: Expo.easeInOut
})
TweenMax.from(".line-two", 1, {
  opacity: 0,
  delay: 2.5,
  y: -800,
  ease: Expo.easeInOut
})

TweenMax.from(".img", 2, {
  opacity: 0,
  delay: 2.9,
  y: -800,
  ease: Expo.easeInOut
})


TweenMax.staggerFrom(".social ul li", 2, {
  opacity: 0,
  delay: 3.2,
  y: 40,
  ease: Expo.easeInOut
}, 0.2)





// Hamburger menu
const toggleBtn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

toggleBtn.addEventListener('click', (event) => {
  event.preventDefault();
  // prevent to open an atucal link

  menu.classList.toggle('active');
})
