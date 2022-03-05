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
var game = true;
window.addEventListener('keyup', (e) => {
	if (game) {
		// why its empty its 100 in css??? => it should be taken from getComputedStyle()
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
			if (pos + parseInt(getComputedStyle(avatar).height.slice(0, -2)) > window.innerHeight) {
				avatar.style.top = '0px';
			} else {
				avatar.style.top = `${pos}px`;
			}
			console.log(pos);
			//avatar.style.top = `${pos}px`;
			console.log(avatar.style.top);
			game = false;
		}
		if (e.key === 'ArrowUp') {
			let pos = parseInt(avatar.style.top.slice(0, -2));
			pos -= 50;
			if (pos < 0) {
				avatar.style.top = `${window.innerHeight - parseInt(getComputedStyle(avatar).height.slice(0, -2))}px`;
			} else {
				avatar.style.top = `${pos}px`;
			}
			game = false;
			console.log(avatar.style.top);
		}
		if (e.key === 'ArrowLeft') {
			let pos = parseInt(avatar.style.left.slice(0, -2));
			pos -= 50;
			if (pos < 0) {
				avatar.style.left = `${window.innerWidth - parseInt(getComputedStyle(avatar).width.slice(0, -2))}px`;
			} else {
				avatar.style.left = `${pos}px`;
			}
			console.log(avatar.style.left);
			game = false;
			avatar.style.transform = 'scale(-1, 1)';
		}
		if (e.key === 'ArrowRight') {
			let pos = parseInt(avatar.style.left.slice(0, -2));
			pos += 50;
			console.log(pos);
			if (pos + parseInt(getComputedStyle(avatar).width.slice(0, -2)) > window.innerWidth) {
				avatar.style.left = '0px';
			} else {
				avatar.style.left = `${pos}px`;
			}
			console.log(avatar.style.left);
			game = false;
			avatar.style.transform = 'scale(1, 1)';
		}
		if (isTouching(coin, avatar)) {
			uniqPos(coin, avatar);
		}
		//sleep(500);
		//game = false;
		window.setTimeout('inputDelay()', 200);
	}
});

const parsePos = (pos) => {
	return parseInt(pos.slice(0, -2));
};

const uniqPos = (coin, avatar) => {
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

//sleep not workig after pressing button it procces all input
// function sleep(milliseconds) {
// 	const date = Date.now();
// 	let currentDate = null;
// 	do {
// 		currentDate = Date.now();
// 	} while (currentDate - date < milliseconds);
// }

// window.setTimeout not working also
function inputDelay() {
	game = true;
	console.log('you can play');
}
