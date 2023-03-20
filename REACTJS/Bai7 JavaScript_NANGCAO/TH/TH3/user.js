var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, username, password) {
        this.name = name;
        this.username = username;
        this.password = password;
    }
    User.prototype.login = function (username, password) {
        if (this.username === username && this.password === password) {
            console.log("Login Successfull");
        }
        else {
            console.log("Login Failed");
        }
    };
    User.prototype.setPassword = function (Newpassword) {
        this.password = Newpassword;
    };
    return User;
}());
var user1 = new User('user1', 'user1', '123456');
console.log(user1.name);
user1.login('user1', '1234556');
var Author = /** @class */ (function (_super) {
    __extends(Author, _super);
    function Author(name, username, password, numOfPost, email) {
        var _this = _super.call(this, name, username, password) || this;
        _this.numOfPost = numOfPost;
        _this.email = email;
        return _this;
    }
    Author.prototype.creataPost = function () {
        this.numOfPost++;
    };
    Author.prototype.getNumOfPost = function () {
        return this.numOfPost;
    };
    return Author;
}(User));
var author = new Author('author', 'author', '123456', 0, '123@gmmail');
console.log(author);
