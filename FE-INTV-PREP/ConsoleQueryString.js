
const url = new URL("https://example.com?page=2&sort=desc&filter=active");

const params=new URLSearchParams(url.search);

console.log(params)

params.forEach((value,key)=>{
    console.log(`${key}, ${value}`)

})