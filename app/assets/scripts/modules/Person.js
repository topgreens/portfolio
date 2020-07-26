//BLUEPRINT WITH CLASS SYNTAX
class Post {
    constructor(author, title, postContent, date) {
        this.author = author;
        this.title = title;
        this.postContent = postContent;
        this.date = date;
    }
    recentPost() {
        console.log("Just Sayhi, I am " + this.author + " ; " + this.title + ".");

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

export default Post