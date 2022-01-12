document.addEventListener('DOMContentLoaded', function() {
	const sections = document.querySelectorAll('section')

	for (const section of sections) {
		const readMoreButton = section.querySelector('.read-more')
		const readMoreText = readMoreButton.querySelector('p')
		const collapsedDiv = section.querySelector('.collapsed')

		let isOpen = false;

		readMoreButton.addEventListener('click', function() {
			isOpen = !isOpen;
			collapsedDiv.classList.toggle('open', isOpen)
			readMoreText.innerText = isOpen ? 'Läs mindre...' : 'Läs mer...'
		})
	}
})
