// let input = document.getElementById("image");
// let button = document.getElementById("btn");
// let result = document.getElementById("result");

// button.addEventListener("click", () => {
//     console.log("Button Clicked");
// })

// let url=`https://randomfox.ca/floof/`


// let getData=fetch(url);

// getData.then((responce)=>{
//     let data=responce.json();
//     return data;
// }).then((value)=>{
//     console.log(value);
//     result.innerHTML=`<img src=${value.image}>`
// })



let input = document.getElementById("image");
let button = document.getElementById("btn");
let result = document.getElementById("result");

button.addEventListener("click", () => {
    console.log("Button Clicked");
})

// let url=`https://randomfox.ca/floof/`
let key=`90f4da5ed64374056cbbbdeb97f0d832`
let url=`https://api.openweathermap.org/data/2.5/weather?q=${input.value},&appid=${key}`


let getData=fetch(url);

getData.then((responce)=>{
    let data=responce.json();
    return data;
}).then((data)=>{
    console.log(data.main.temp);
    result.innerHTML = data.main.temp;
    // result.innerHTML=`<img src=${value.image}>`
})

