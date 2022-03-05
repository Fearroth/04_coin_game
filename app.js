function isTouching(a, b) {
	const aRect = a.getBoundingClientRect();
	const bRect = b.getBoundingClientRect();

	return !(
		aRect.top + aRect.height < bRect.top ||
		aRect.top > bRect.top + bRect.height ||
		aRect.left + aRect.width < bRect.left ||
		aRect.left > bRect.left + bRect.width
	);
}

const avatar = document.querySelector('#player');
const coin = document.querySelector('#coin');
coin.style.left = '500px';

window.addEventListener('keydown', (e) => {
	// why its empty its 100 in css??
	if (!avatar.style.top) {
		console.log(avatar.style.top);

		avatar.style.top = '100px';
		avatar.style.left = '100px';
	}
	console.log(e);
	if (e.key === 'ArrowDown') {
		let pos = parseInt(avatar.style.top.slice(0, -2));
		pos += 50;
		avatar.style.top = `${pos}px`;
		console.log(avatar.style.top);
	}
	if (e.key === 'ArrowUp') {
		let pos = parseInt(avatar.style.top.slice(0, -2));
		pos -= 50;
		avatar.style.top = `${pos}px`;
		console.log(avatar.style.top);
	}
	if (e.key === 'ArrowLeft') {
		let pos = parseInt(avatar.style.left.slice(0, -2));
		pos -= 50;
		avatar.style.left = `${pos}px`;
		console.log(avatar.style.left);
	}
	if (e.key === 'ArrowRight') {
		let pos = parseInt(avatar.style.left.slice(0, -2));
		pos += 50;
		avatar.style.left = `${pos}px`;
		console.log(avatar.style.left);
	}
	if (isTouching(avatar, coin)) {
		coin.style.left = '150px';
	}
});
