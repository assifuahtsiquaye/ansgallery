// Theme switcher
const themeBtn = document.getElementById('theme-btn');

if (localStorage.getItem('theme') === 'dark'){
  document.body.classList.add('dark')
  document.body.classList.remove('light')
  themeBtn.innerText = 'Light Mode';
}

themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.contains('dark');

  if (!isDark) {
    document.body.classList.add('dark');
    document.body.classList.remove('light');
    themeBtn.innerText = 'Light Mode';
    themeBtn.style.color = 'White';
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.body.classList.add('light');
    document.body.classList.remove('dark');
    themeBtn.innerText = 'Dark Mode';
    themeBtn.style.color = 'Black';
    localStorage.setItem('theme', 'light');
  }
});

const slides = document.querySelector('.slides');
const slideCount = slides.children.length;

let current = 0;

function nextSlide() {
  current++;

  if (current >= slideCount){
    current = 0;
  }

slides.style.transform = `translateX(-${current * 100}%)`;
resetSlideTimer();
}

function prevSlide() {
  current--;

  if (current < 0){
    current = slideCount - 1;
  }

slides.style.transform = `translateX(-${current * 100}%)`;
resetSlideTimer();
}

let slideTimer = setInterval(nextSlide, 6000);

function resetSlideTimer(){
  clearInterval(slideTimer)
  slideTimer = setInterval(nextSlide, 6000)
}

