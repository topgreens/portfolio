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
		document.getElementById('light-mode')
	}

	if (mode == 'blue') {
		document.getElementById('blue-mode')
	}

	if (mode == 'green') {
		document.getElementById('green-mode')
	}

	if (mode == 'purple') {
		document.getElementById('purple-mode')
	}

	localStorage.setItem('theme', mode)
}
setTheme();