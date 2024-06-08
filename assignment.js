const input =require("readline-sync");
// let n=input.question("Enter the number: ");
// console.log(n);


//Unique Elements: Write a function that takes an array as input and returns a new array containing only the unique elements from the original array (i.e., remove duplicates).

    let n=input.questionInt("Enter the length of the array: ");
    let a=[];
    for (let i=0; i<n; i++){
        a[i]=input.questionInt("Enter the element ");
    }
    // console.log(a)
    // let uniquearr =a.reduce((res,curr) => {
    //     if (!res.includes(curr)){
    //         res.push(curr)
    //     }
    //     return res;
    // },[]);
    // console.log(uniquearr)

//Product of Odd Numbers:

    const oddf=a.filter((k)=>{
      if (k%2!=0){
        return k;
      }     

    })
    console.log(odd);

    // product of the odd numbers from the array

    const oddR=a.reduce((res,curr)=>{
        if (curr%2!=0){
            res=res*curr;
        }
        return res;
    })