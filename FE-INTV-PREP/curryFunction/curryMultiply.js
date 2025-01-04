function multiply(a,b){
    return a*b;

}


function curryMultiply(a){
    return function(b){
        return multiply(a,b)
    }
}

const double=curryMultiply(2);
const ten=double(5);
console.log(ten);