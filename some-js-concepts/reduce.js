let arr=[1,2,3,4,5];
const res= arr.reduce((acc,sum)=> acc+sum,0);
console.log(res);

let obj=[{
    name: "alpha",
    price: 2000
},
{
    name: "beta",
    price: 12000

},
{name: "gamma",
    price: 20000
}
]

const ans= obj.reduce((acc,prod)=> acc + prod.price,0);
console.log(ans);
