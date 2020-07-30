import '../styles/default.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'



let stickyHeader = new StickyHeader()
new MobileMenu()


new RevealOnScroll(document.querySelectorAll("#post-wrapper"), 75)
let modal

document.querySelectorAll(".open-modal").forEach(el => {
    el.addEventListener("click", e => {
        e.preventDefault()
        if (typeof modal == "undefined") {
            import(/*webpackChunkName: "modal" */'./modules/Modal').then(x => {
                modal = new x.default()
                setTimeout(() => modal.openTheModal(), 20)
            }).catch(() => console.log("There was a problem."))
        } else {
            modal.openTheModal()
        }
    })
})

if (module.hot) {
    module.hot.accept()
}

// class Adult extends Person {
//     payTaxes() {
//         console.log(this.name + " now owes zero taxes.")
//     }
// }

// Quick lesson

// let jon = {
//     name: "Jon Gibbs",
//     favouriteColor: "green",
//     greet: function () {
//         console.log("Hi, I am  " + jon.name + " my favorite color is " + jon.favouriteColor + " . ");
//     }
// }

// jon.greet();

// craeting reusable blueprint


// let jon = new Person("Jon Gibbs", "green");
// jon.greet();

// let tyson = new Person("tyson smith", "black")
// tyson.greet();
// tyson.payTaxes();