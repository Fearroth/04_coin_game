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
		avatar.style.top = '100px';
	}
	if (!avatar.style.left) {
		avatar.style.left = '100px';
	}
	console.log(e);
	if (e.key === 'ArrowDown') {
		let pos = parsePos(avatar.style.top);
		console.log(pos);
		pos += 50;
		console.log(pos);
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
		avatar.style.transform = 'scale(-1, 1)';
	}
	if (e.key === 'ArrowRight') {
		let pos = parseInt(avatar.style.left.slice(0, -2));
		pos += 50;
		avatar.style.left = `${pos}px`;
		console.log(avatar.style.left);
		avatar.style.transform = 'scale(1, 1)';
	}
	if (isTouching(coin, avatar)) {
		randomPos(coin, avatar);
	}
});

const parsePos = (pos) => {
	return parseInt(pos.slice(0, -2));
};

const randomPos = (coin, avatar) => {
	while (isTouching(coin, avatar)) {
		coin.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
		coin.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;
		console.log(Math.floor(Math.random() * window.innerWidth));
	}

	//coin.style.left = `${randomx}px`;
	//coin.style.top = `${randomy}px`;

	console.log(Math.floor(Math.random() * window.innerWidth));
};
