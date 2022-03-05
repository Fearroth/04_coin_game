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
	sleep(500);
});

const parsePos = (pos) => {
	return parseInt(pos.slice(0, -2));
};

const randomPos = (coin, avatar) => {
	while (isTouching(coin, avatar)) {
		//console.log(getComputedStyle(coin).height.slice(0, -2), 'get copms');

		let randomx = Math.floor(Math.random() * window.innerWidth);
		let randomy = Math.floor(Math.random() * window.innerHeight);
		console.log(getComputedStyle(coin).height.slice(0, -2), 'get copms');
		//console.log(window.innerWidth, 'WIDTH x');
		//console.log(window.innerHeight, 'HEIGHT y');
		//console.log(randomx, 'randomx');
		//console.log(randomy);
		if (randomx > window.innerWidth - parseInt(getComputedStyle(coin).width.slice(0, -2)))
			randomx -= parseInt(getComputedStyle(coin).width.slice(0, -2));
		//console.log(randomx, 'randomx po if');
		if (randomy > window.innerHeight - parseInt(getComputedStyle(coin).height.slice(0, -2)))
			randomy -= parseInt(getComputedStyle(coin).height.slice(0, -2));
		//console.log(randomy, 'randomy po if');

		coin.style.left = `${randomx}px`;
		coin.style.top = `${randomy}px`;

		//console.log(Math.floor(Math.random() * window.innerWidth));
	}

	//coin.style.left = `${randomx}px`;
	//coin.style.top = `${randomy}px`;

	//console.log(getComputedStyle(coin).width);
	//console.log(Math.floor(Math.random() * window.innerWidth));
};

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}
