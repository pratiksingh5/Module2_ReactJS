// Aisa function jo ki object return kre use Factory Function Bolte hai

// function createUser(username, email, password) {
//   return {
//     username,
//     email,
//     password,
//     changeUsername() {
//       return this.username.toUpperCase();
//     },
//     encryptPassword(){
//         return "qw" +this.password + "ty"
//     }
//   };
// }

// const newUser = createUser("aman12", "aman@gmail.com", "Aman@123");
// // console.log(newUser);

// const encrptedPassword = newUser.encryptPassword();
// console.log(encrptedPassword)

// Now ES6 Class
// SYNTAX
// class className {

// }

// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     (this.email = email), (this.password = password);
//   }
//   encyptPassword() {
//     return "qw" + this.password + "ty";
//   }
//   changeUsername() {
//     return this.username.toUpperCase();
//   }
// }

// const newUser = new User("hema", "hema123@gmail.com", "Admin@12");

// // const encrptedPassword = newUser.encyptPassword();
// const upper = newUser.changeUsername()
// console.log(upper);


class Test {
   constructor(){
    this.message = "Shhhhhhhh"
   }
   
    intro(){
        return "Hello How are you?"
    }
}

const int = new Test()
console.log(int.message)