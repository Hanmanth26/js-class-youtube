// 2 types of memory
//stack(Primitive), Heap (Non primitive)

let myYoutubename= "Hanmanthk"

let anothername=myYoutubename
anothername="Ajaykumbar"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@google.com",
    upi:"ajay@ybl"
}

let userTwo = userOne

userTwo.email = "ajay@google.com"

console.log(userOne.email);
console.log(userTwo.email);