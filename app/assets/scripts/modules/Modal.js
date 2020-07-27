class Modal {
    constructor() {
        this.injectHTML()
        this.modal = document.querySelector(".modal")
        this.closeIcon = document.querySelector(".modal__close")
        this.events()
    }

    events() {
        // listen for close click
        this.closeIcon.addEventListener("click", () => this.closeTheModal())

        // pushes any key
        document.addEventListener("keyup", e => this.keyPressHandler(e))
    }

    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.closeTheModal()
        }
    }

    openTheModal() {
        this.modal.classList.add("modal--is-visible")
    }

    closeTheModal() {
        this.modal.classList.remove("modal--is-visible")
    }

    injectHTML() {
        document.body.insertAdjacentHTML('beforeend', `
    <div class="modal">
		<div class="modal__inner">
			<h2 class="section-title section-title--blue section-title--less-margin"><img
					src="assets/images/icon/mail.svg" class="section-title__icon"> Get in <strong>Touch</strong></h2>
			<div class="wrapper wrapper--narrow">
				<p class="modal__description">I will have a new Post in place soon. Until then, connect with me
					on any of the platforms below!</p>
			</div>

			<div class="social-icons">
				<a href="#" class="social-icons__icon"><img src="assets/images/icon/facebook.svg" alt="Facebook"></a>
                <a href="#" class="social-icons__icon"><img src="assets/images/icon/twitter.svg" alt="Twitter"></a>
                <a href="#" class="social-icons__icon"><img src="assets/images/icon/linkedin.svg" alt="LinkedIn"></a>
				<a href="#" class="social-icons__icon"><img src="assets/images/icon/instagram.svg" alt="Instagram"></a>
			</div>
		</div>
		<div class="modal__close">X</div>
	</div>
    `)
    }
}

export default Modal;