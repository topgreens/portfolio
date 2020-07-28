console.log('Its works')

let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('light')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	console.log('theme changed')
	if (mode == 'light') {
		document.getElementById('light-mode').src = './default.css'
	}

	if (mode == 'blue') {
		document.getElementById('blue-mode').src = '../modules/blue.css'
	}

	if (mode == 'green') {
		document.getElementById('green-mode').src = '../modules/green.css'
	}

	if (mode == 'purple') {
		document.getElementById('purple-mode').src = './modules/purple.css'
	}

	localStorage.setItem('theme', mode)
}
setTheme();