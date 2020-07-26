import throttle from 'lodash/throttle'
import debounce from 'lodash/debounce'

class RevealOnScroll {
    constructor(els, thresholdPercent) {
        this.thresholdPercent = thresholdPercent
        this.itemsToReveal = els
        this.browserHeight = window.innerHeight
        this.hideInitially()
        this.scrollTrottle = throttle(this.calcCaller, 200).bind(this)
        this.events()
    }
    events() {
        window.addEventListener("scroll", this.scrollTrottle)
        window.addEventListener("resize", debounce(() => {
            console.log("resize ran")
            this.browserHeight = window.innerHeight
        }, 333))
    }
    calcCaller() {
        console.log("sccroll function ran")
        this.itemsToReveal.forEach(el => {
            if (el.isRevealed == false) {
                this.calIScrolledTo(el)
            }
        })
    }
    calIScrolledTo(el) {
        if (window.scrollY + this.browserHeight > el.offsetTop) {
            console.log("element was calculated")
            let scrollPercent = (el.getBoundingClientRect().top / this.browserHeight) * 100
            if (scrollPercent < this.thresholdPercent) {
                el.classList.add("reveal-item--is-visible")
                el.isRevealed = true
                if (el.isLastItem) {
                    window.removeEventListener("scroll", this.scrollTrottle)
                }
            }
        }
    }

    hideInitially() {
        this.itemsToReveal.forEach(el => {
            el.classList.add("reveal-item")
            el.isRevealed = false
        })
        this.itemsToReveal[this.itemsToReveal.length - 1].isLastItem = true
    }
}

export default RevealOnScroll;