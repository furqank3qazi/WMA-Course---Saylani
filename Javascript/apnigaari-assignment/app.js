
var alldata = {
    Audi : {
        a1 : {
            Year: "2023",
            Color: "Black, White, Yellow",
            Image: "https://www.ultimatespecs.com/cargallery/2/10105/w170_Audi-A1-(GB)-Sportback-1.jpg"
        },

        a2 : {
            Year: "2023",
            Color: "Black, White, Blue",
            Image: "https://www.ultimatespecs.com/cargallery/2/10741/w170_Audi-A3-(8Y)-Sportback-1.jpg"
        },

        a3 : {
            Year: "2023",
            Color: "Black, White, Green",
            Image: "https://www.ultimatespecs.com/cargallery/2/10680/w170_Audi-A5-Coupe-2020-8.jpg"
        }
    }
}

var displayallcars = document.getElementById("diplay-allcars")
var carData = document.getElementById("cars");
var carModels = document.getElementById("car-models");

carData.innerHTML = `
    <option value="">Select Manufacturer</option>
    `

carModels.innerHTML = `
    <option value="">Select Model</option>
    `

for (var key in alldata)
{
    carData.innerHTML += `
    <option value="${key}">${key}</option>
    `

    for (var key2 in alldata[key])
    {
        carModels.innerHTML += `
        <option value="${key}">${alldata[key]}</option>
        `
        console.log(alldata[key])
    }
}


function allcarModels()
{
    carModels.innerHTML = `
    <option value="">Select Product</option>
    `

    for (var key in alldata[carModels.value])
    {
        carModels.innerHTML += `
        <option value="${key}">${alldata[carModels.value][key].name.toUpperCase()}</option>
        `
    }
    
}




