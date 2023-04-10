const form = document.querySelector('form');
const entries1 = document.getElementById('entries1');
const entries2 = document.getElementById('entries2');
const entries3 = document.getElementById('entries3');

let currentColumn = entries1; // start adding entries to the first column

form.addEventListener('submit', (event) => {
	event.preventDefault(); // prevent default form submission
	const name = document.getElementById('name').value;
	const message = document.getElementById('message').value;
	const timestamp = new Date();
	const entry = document.createElement('div');
	entry.classList.add('entry');
	entry.innerHTML = `
		<h2>${name}</h2>
		<p>${message}</p>
		<small>${timestamp.toLocaleString()}</small>
	`;
	currentColumn.insertBefore(entry, currentColumn.firstChild); // add new entry to the beginning of the column
	form.reset(); // clear the form
	// switch to the next column
	if (currentColumn === entries1) {
		currentColumn = entries2;
	} else if (currentColumn === entries2) {
		currentColumn = entries3;
	} else {
		currentColumn = entries1;
	}
});
