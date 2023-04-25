const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const passwordInput = document.querySelector('#password');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const nameValue = nameInput.value.trim();
	const passwordValue = passwordInput.value.trim();
	if (nameValue === '' || passwordValue === '') {
		alert('Please fill in all fields');
	} else if (passwordValue.length < 6) {
		alert('Password must be at least 6 characters');
	} else {
		// Redirect to next page
		window.location.href = 'lastpage.html';
	}
});