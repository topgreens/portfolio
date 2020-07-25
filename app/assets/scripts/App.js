import '../scripts/modules/script.js'

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