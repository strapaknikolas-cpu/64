const yearNode = document.getElementById('year');
const ctaButton = document.getElementById('ctaButton');
const message = document.getElementById('message');

if (yearNode) {
  yearNode.textContent = String(new Date().getFullYear());
}

if (ctaButton && message) {
  ctaButton.addEventListener('click', () => {
    message.textContent = 'Дякуємо! Ми зв’яжемося з вами найближчим часом.';
  });
}
