let isOpen = false;
function toggleMenu() {
  const menuContent = document.querySelector('.menu-content');

  if (isOpen) {
    menuContent.style.animation = 'fadeOut 0.5s ease-in-out forwards';
    setTimeout(() => {
      menuContent.style.display = 'none';
    }, 500);
  } else {
    menuContent.style.display = 'flex';
    menuContent.style.animation = 'fadeIn 0.5s ease-in-out forwards';
  }

  isOpen = !isOpen;
}
