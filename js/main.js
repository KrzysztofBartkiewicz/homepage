const navLinks = document.querySelectorAll('.navigation__link');
const caption = document.querySelector('.caption');
const captionText = document.querySelector('.caption__text');

navLinks.forEach(el => el.addEventListener('mouseover', e => {
   const captionValue = e.target.dataset.caption;
   captionText.innerText = captionValue;
   caption.style.display = 'block';
}, true));

navLinks.forEach(el => el.addEventListener('mouseout', e => {
   caption.style.display = 'none';
}));