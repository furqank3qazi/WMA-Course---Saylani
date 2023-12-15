var result = document.getElementById("result")
let getweather = ()=>{
    let c_name = document.querySelector("#inp-weather").value
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${c_name}&units=metric&appid=a717be3f97b8f09034b059e3538ad603`)
        .then((res)=>{
        result.innerHTML = `<p style="font-size: 30px;font-weight: bolder; color: rgb(33, 33, 66);border-radius: 50px;padding: 5px;font-style: oblique;border: 3px solid rgb(221, 221, 235);margin-top: -1px">Weather for ${c_name} City</p><div id="result-img"><img src="images/temp.gif"><p> Temperature: ${res.data.main.temp} °C </p></div>`
        result.innerHTML += `<div id="result-img"><img src="images/humidity.gif"><p> Humidity: ${res.data.main.humidity} °C </p></div>`
        result.innerHTML += `<div id="result-img"><img src="images/feel.gif"><p> Feel: ${res.data.main.feels_like} </p></div>`
        result.innerHTML += `<div id="result-img"><img src="images/pressure.gif"><p> Air Pressure: ${res.data.main.pressure} </p></div>`

    })
    .catch((err)=>{
        console.log(err)
    })
}


// let getValue = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         reject("Data agya hai")
//     }, 5000);
// })

// getValue
//     .then(res => console.log("resolve", res))
//     .catch(err => console.log("reject", err))

// let getValue = new Promise((resolve, reject) =>{
//     fetch("https://api.openweathermap.org/data/3.0/onecall?lat={24.860966}&lon={66.990501}&exclude={part}&appid={a717be3f97b8f09034b059e3538ad603}")
// })

// getValue
//     .then(res => console.log("resolve", res))
//     .catch(err => console.log("reject", err))



