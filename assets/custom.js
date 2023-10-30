
// Scroll animation
const sections = document.querySelectorAll('.main section');
console.log('get in custom.js')
function callback(entries) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('visible');
        console.log('visible')
      } else {
         entry.target.classList.remove('visible');
         console.log('invisible')
      }
   });
}

if (window.IntersectionObserver) {
   const observer = new IntersectionObserver(callback, {
      root: document.querySelector('.main'),
      rootMargin: '-50% 0px -50% 0px',
   });

   sections.forEach(section => observer.observe(section));
} else {
   sections.forEach(section => section.classList.add('visible'));
}
