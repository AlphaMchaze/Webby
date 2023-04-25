const sidebar = document.querySelector('.sidebar');
const openButton = document.querySelector('#open-sidebar');
const closeButton = document.querySelector('#close-sidebar');

openButton.addEventListener('click', () => {
  sidebar.classList.add('open');
});

closeButton.addEventListener('click', () => {
  sidebar.classList.remove('open');
});
