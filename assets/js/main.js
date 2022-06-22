/*
Inspired by https://twitter.com/argyleink/status/1408184587885309952
*/

const motion = window.matchMedia("(prefers-reduced-motion: no-preference)");

// Check if users don't have a preference for reduced motion
if (motion.matches) {
  let scheme = document.querySelector('meta[name="theme-color"]')
  let hue = 0
  let color

  setInterval(() => {
    color = `hsl(${hue+=5} 50% 30%)`
    document.body.style.background = color;
    scheme.setAttribute('content', color)
  }, 50)
} 
