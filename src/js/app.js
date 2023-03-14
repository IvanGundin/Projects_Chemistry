document.querySelector('.sidebar').onclick = function() {
    event.preventDefault()
    document.querySelector('.side-menu').classList.toggle('hidden');
    let el = document.querySelector('.layers__title');
    el.style.display !== 'none' ? el.style.display = 'none' : el.style.display = 'initial';
}

window.addEventListener('scroll', e => {
	document.documentElement.style.setProperty('--scrollTop', `${this.scrollY}px`) // Update method
})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)
ScrollSmoother.create({
	wrapper: '.wrapper',
	content: '.content'
})

