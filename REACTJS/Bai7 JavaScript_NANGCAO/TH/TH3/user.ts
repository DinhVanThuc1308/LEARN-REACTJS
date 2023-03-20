class User{
    name: string;
    username: string;
    password: string;
    constructor(name: string, username: string, password: string){
        this.name = name;
        this.username = username;
        this.password = password;
    }
    login(username:string ,password:string){
        if(this.username === username && this.password === password){
            console.log("Login Successfull");
            
        }
        else{
            console.log("Login Failed");
        }
    }
    setPassword(Newpassword:string){
        this.password = Newpassword;
    }
}


let user1 = new User('user1', 'user1','123456');
console.log(user1.name);
user1.login('user1','1234556');

class Author extends User {
    numOfPost: number;
    email:string;
    constructor(name: string, username: string, password: string, numOfPost: number, email:string){
        super(name, username, password);
        this.numOfPost = numOfPost;
        this.email = email;
    }
    creataPost(){
        this.numOfPost++;
    }
    getNumOfPost(){
        return this.numOfPost;
    }

}
let author = new Author('author', 'author', '123456', 0,'123@gmmail');
console.log(author);

