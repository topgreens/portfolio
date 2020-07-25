//BLUEPRINT WITH CLASS SYNTAX
class Person {
    constructor(name, favoriteColor) {
        this.name = name;
        this.favoriteColor = favoriteColor;
    }
    greet() {
        console.log("Just Sayhi, I am " + this.name + " my favorite color is " + this.favouriteColor + ".");

    }
}

// traditioal way of blueprint
// function Person(fullname, favColor) {
//     this.name = fullname;
//     this.favouriteColor = favColor;
//     this.greet = () => {
//         console.log("Just Sayhi, I am " + this.name + " my favorite color is " + this.favouriteColor + ".");
//     }
// }

export default Person