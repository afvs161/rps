const andrew = document.querySelector('#player2'),
	whoever = document.querySelector('#player1'),
	bot = document.querySelector('#bot'),
	him = document.querySelector('#choose'),
	start = document.querySelector('#start')

const rps = ['paper', 'scissors', 'rock']
let chosen
let player1 = 0
let player2 = 0
// let int = 1
let refreshIcon =
	'<svg height="50px" width="50px" viewBox="0 0 297.001 297.001"><path style="fill: blue"d="M210.159,40.091c50.76,22.91,77.3,78.69,63.09,132.64c-7.74,29.4-26.47,54.02-52.74,69.33 c-26.26,15.31-56.92,19.47-86.31,11.72c-60.31-15.91-96.29-78.5-80.22-139.51l2.62-9.96c0.94-3.58-0.17-7.4-2.9-9.91 c-1.87-1.72-4.3-2.64-6.78-2.64c-1.11,0-2.24,0.18-3.32,0.57l-19.11,6.74l5.03-19.11l44.92-15.41l31.5,35.53l-4.99,18.96 l-12.84-14.95c-2.42-2.82-6.2-4.06-9.83-3.23c-3.62,0.83-6.49,3.61-7.43,7.2l-2.8,10.64c-13.82,52.48,17.63,106.41,70.11,120.23 c25.4,6.69,51.9,3.08,74.63-10.17c22.72-13.25,38.92-34.54,45.6-59.94c5.96-22.61,3.66-46.66-6.47-67.7 c-5.01-10.4-11.77-19.78-19.89-27.73c-8.12-7.96-17.62-14.5-28.08-19.24c-3.51-1.59-5.37-5.39-4.42-9.02 c0.79-2.99,2.93-4.4,4.12-4.97C204.869,39.581,207.319,38.811,210.159,40.091z" /> <path d="M283.749,85.701c13.81,28.63,16.95,61.35,8.84,92.13c-9.1,34.56-31.12,63.52-62,81.52 c-20.73,12.08-43.78,18.25-67.15,18.25c-11.45,0-22.98-1.48-34.35-4.48c-68.25-18.01-110.06-86.74-96.35-155.74l-19.4,6.85 c-3.5,1.23-7.39,0.43-10.11-2.08c-2.73-2.51-3.84-6.32-2.9-9.9l11.21-42.56c0.85-3.24,3.26-5.83,6.43-6.92l56.28-19.31 c3.82-1.31,8.06-0.2,10.73,2.83l39.48,44.52c2.22,2.51,3.04,5.95,2.19,9.19l-11.21,42.56c-0.95,3.59-3.81,6.37-7.43,7.2 c-3.63,0.83-7.41-0.41-9.83-3.23l-12.49-14.55c-2.72,17.68,0.66,35.61,9.79,51.28c10.55,18.09,27.52,30.99,47.77,36.33 c20.24,5.33,41.35,2.45,59.46-8.11s31.01-27.52,36.34-47.75c9.77-37.12-8.46-75.54-43.35-91.36 c-10.21-4.62-16.43-14.6-16.43-25.27c0-2.34,0.3-4.71,0.92-7.06c2.08-7.89,7.49-14.43,14.86-17.94 c7.38-3.52,15.88-3.6,23.34-0.24C246.889,34.721,270.099,57.391,283.749,85.701z M273.249,172.731 c14.21-53.95-12.33-109.73-63.09-132.64c-2.84-1.28-5.29-0.51-6.51,0.07c-1.19,0.57-3.33,1.98-4.12,4.97 c-0.95,3.63,0.91,7.43,4.42,9.02c10.46,4.74,19.96,11.28,28.08,19.24c8.12,7.95,14.88,17.33,19.89,27.73 c10.13,21.04,12.43,45.09,6.47,67.7c-6.68,25.4-22.88,46.69-45.6,59.94c-22.73,13.25-49.23,16.86-74.63,10.17 c-52.48-13.82-83.93-67.75-70.11-120.23l2.8-10.64c0.94-3.59,3.81-6.37,7.43-7.2c3.63-0.83,7.41,0.41,9.83,3.23l12.84,14.95 l4.99-18.96l-31.5-35.53l-44.92,15.41l-5.03,19.11l19.11-6.74c1.08-0.39,2.21-0.57,3.32-0.57c2.48,0,4.91,0.92,6.78,2.64 c2.73,2.51,3.84,6.33,2.9,9.91l-2.62,9.96c-16.07,61.01,19.91,123.6,80.22,139.51c29.39,7.75,60.05,3.59,86.31-11.72 C246.779,226.751,265.509,202.131,273.249,172.731z" /> </svg>'

function shuffle() {
	const rn = Math.floor(Math.random() * 3)
	return rn
}

start.addEventListener('click', e => {
	bot.style.backgroundImage = 'none'

	// hide start
	e.target.classList.add('hide')
	e.target.textContent = ''

	// count
	let i = 3
	const startTime = setInterval(counting, 1000)

	function counting() {
		if (i == 0) {
			clearInterval(startTime)
			e.target.classList.remove('hide')
			bot.innerHTML = ''

			let indexOf = shuffle()
			bot.style.backgroundImage = `url('./images/${rps[indexOf]}.png')`
			bot.dataset.value = indexOf

			if (chosen == undefined) {
				him.innerHTML = '<h2>You Lost</h2>'
				player2++
				andrew.textContent = player2
				start.innerHTML = ''
				start.innerHTML = `${refreshIcon} Restart`
			} else {
				him.innerHTML = ''
				him.append(chosen)

				if (bot.dataset.value == 0 && chosen.dataset.value == 1) {
					player1++
					whoever.textContent = player1
					start.innerHTML = ''
					start.innerHTML += `${refreshIcon} You Won`
				} else if (bot.dataset.value == 0 && chosen.dataset.value == 2) {
					player2++
					andrew.textContent = player2
					start.innerHTML = ''
					start.innerHTML += `${refreshIcon} You Lost`
				} else if (bot.dataset.value == 1 && chosen.dataset.value == 0) {
					player2++
					andrew.textContent = player2
					start.innerHTML = ''
					start.innerHTML += `${refreshIcon} You Lost`
				} else if (bot.dataset.value == 1 && chosen.dataset.value == 2) {
					player1++
					whoever.textContent = player1
					start.innerHTML = ''
					start.innerHTML += `${refreshIcon} You Won`
				} else if (bot.dataset.value == 2 && chosen.dataset.value == 0) {
					player1++
					whoever.textContent = player1
					start.innerHTML = ''
					start.innerHTML += `${refreshIcon} You Won`
				} else if (bot.dataset.value == 2 && chosen.dataset.value == 1) {
					player2++
					andrew.textContent = player2
					start.innerHTML = ''
					start.innerHTML += `${refreshIcon} You Lost`
				} else {
					start.innerHTML = ''
					start.innerHTML += `${refreshIcon} Tie`
				}
			}
		} else {
			i--
			bot.textContent = '0' + i
		}
	}

	// display
	him.innerHTML = ''
	for (let i = 0; i < rps.length; i++) {
		const div = document.createElement('div')
		div.classList.add('nc')
		div.dataset.value = i
		div.style.backgroundImage = `url('./images/${rps[i]}.png')`
		him.append(div)
	}
})

him.addEventListener('click', e => {
	if (e.target.classList.contains('nc')) {
		chosen = e.target
		e.target.classList.add('active')
	}
})
