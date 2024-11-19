// // function a() {
// //     c();
// //     function c() {
// //     console.log(b);
// //   }
// // }

// // var b = 10;
// // a();


// // {
// //     //compound statements
// //     var a=10;
// //     console.log(a);
// // }


// //block scope- whatever variable and functions we can access inside a block

// {
//     var a=10;
//     let b=20;
//     const c=30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }

//     console.log(a);
//     // console.log(b); //reference error
//     // console.log(c); //reference error



//     // shadowing

//     let x=100;
//     console.log("x before=",x);
    
//     {
//        let x=10;
//         console.log("x inside=", x);
        

//     }
//     console.log("x outside=", x);



    //

    const a=100;
    {
        const a=200;
        {
            const a=300;
            console.log(a);
        }
        console.log(a);
    }
    console.log(a);
        