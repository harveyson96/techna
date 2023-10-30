
// Scroll animation
var sections = document.querySelectorAll('.main section');
function callback(entries) {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('visible');
        console.log(entry, 'visible')
      } else {
         entry.target.classList.remove('visible');
         console.log(entry, 'invisible')
      }
   });
}

if (window.IntersectionObserver) {
    var observer = new IntersectionObserver(callback, {
      root: null,
      threshold: [0.5, 1],
   });

   sections.forEach(section => observer.observe(section));
} else {
   sections.forEach(section => section.classList.add('visible'));
}
