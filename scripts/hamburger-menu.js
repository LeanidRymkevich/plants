// hamburger-menu animation

const hamburgerIcon = document.querySelector('.hamburger');
const headerNav = document.querySelector('.header__nav');
const body = document.querySelector('body');

if(hamburgerIcon && headerNav){
  hamburgerIcon.addEventListener('click', function(e) {
    document.body.classList.toggle('_lock');
    hamburgerIcon.classList.toggle('_active');
    headerNav.classList.toggle('_active');

    e.stopPropagation();
    body.addEventListener("click", (event) => {
      if (!event.target.closest(".header__nav")) {
        document.body.classList.remove('_lock');
        hamburgerIcon.classList.remove('_active');
        headerNav.classList.remove('_active');
      };
    });
  });
}

headerNav.querySelectorAll('.header__list-item').forEach(item => {
  item.addEventListener('click', () => {
    document.body.classList.remove('_lock');
    hamburgerIcon.classList.remove('_active');
    headerNav.classList.remove('_active');
  });
});

// smooth scroll

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const blockID = anchor.getAttribute('href').substring(1);
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });
});
