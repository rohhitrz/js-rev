
function setUsername(username){
    this.username=username;

}

function createUser(username,email,password){
    // this.username=username;
    // setUsername(username);       // this line is not working so for this will use .call() method
   setUsername.call(this,username);
    this.email=email;
    this.password=password;

}

const user=new createUser("chai", "xyz@emaple.com", "123456789");
console.log((user));


console.log("just doing random logs to debug "+user.username);
