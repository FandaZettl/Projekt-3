// Header
const menuIcon = document.querySelector(".menu-icon")
const menuList = document.querySelector("nav")
const hamburgerIcon = document.querySelector(".fa-solid")

menuIcon.addEventListener("click", () => {
	if (hamburgerIcon.classList[1] === "fa-bars") {
		hamburgerIcon.classList.add("fa-xmark")
		hamburgerIcon.classList.remove("fa-bars")
		menuList.style.display = "block"
	} else {
		hamburgerIcon.classList.add("fa-bars")
		hamburgerIcon.classList.remove("fa-xmark")
		menuList.style.display = "none"
	}
})

// Light/Dark Mode Switch
const themeSwitcher = document.getElementById("theme-switcher")
themeSwitcher.addEventListener("click", toggleTheme)

function toggleTheme() {
	const themeLink = document.getElementById("theme-link")
	const currentTheme = themeLink.getAttribute("href")

	if (currentTheme === "light.css") {
		themeLink.href = "dark.css"
	} else {
		themeLink.href = "light.css"
	}
}

// IMG Mouseenter/Mouseleave
const img1 = document.querySelector(".img1")
const img2 = document.querySelector(".img2")
const img3 = document.querySelector(".img3")

img1.addEventListener("mouseenter", () => {
	img1.style.transform = "scale(1.1)"
})
img1.addEventListener("mouseleave", () => {
	img1.style.transform = "scale(1)"
})
img2.addEventListener("mouseenter", () => {
	img2.style.transform = "scale(1.1)"
})
img2.addEventListener("mouseleave", () => {
	img2.style.transform = "scale(1)"
})
img3.addEventListener("mouseenter", () => {
	img3.style.transform = "scale(1.1)"
})
img3.addEventListener("mouseleave", () => {
	img3.style.transform = "scale(1)"
})

// Password Check
const psw1 = document.querySelector(".psw1")
const psw2 = document.querySelector(".psw2")
const pText = document.querySelector(".result-text")

psw1.addEventListener("input", () => {
	const psw1Value = psw1.value
	const psw2Value = psw2.value

	if (psw1Value === psw2Value) {
		pText.textContent = "Passwords match"
		pText.classList.add("valid")
		pText.classList.remove("invalid")
	} else {
		pText.textContent = "Passwords do not match"
		pText.classList.add("invalid")
		pText.classList.remove("valid")
	}
	if (psw1Value === "" && psw2Value === "") {
		pText.textContent = ""
	}
})
psw2.addEventListener("input", () => {
	const psw1Value = psw1.value
	const psw2Value = psw2.value

	if (psw2Value === psw1Value) {
		pText.textContent = "Passwords match"
		pText.classList.add("valid")
		pText.classList.remove("invalid")
	} else {
		pText.textContent = "Passwords do not match"
		pText.classList.add("invalid")
		pText.classList.remove("valid")
	}
	if (psw2Value === "" && psw1Value === "") {
		pText.textContent = ""
	}
})

// Scroll Up Button
window.onscroll = function () {
	scrollFunction()
}

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("scrollUpButton").style.display = "block"
	} else {
		document.getElementById("scrollUpButton").style.display = "none"
	}
}

function scrollToTop() {
	document.body.scrollTop = 0
	document.documentElement.scrollTop = 0
}
