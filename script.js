
document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.carousel-item');
  let current = 0;

  document.querySelector('.next').addEventListener('click', () => {
    items[current].classList.remove('active');
    current = (current + 1) % items.length;
    items[current].classList.add('active');
  });

  document.querySelector('.prev').addEventListener('click', () => {
    items[current].classList.remove('active');
    current = (current - 1 + items.length) % items.length;
    items[current].classList.add('active');
  });
});