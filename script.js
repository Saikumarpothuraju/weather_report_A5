let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let fetchData = async ()=>{
let key = "42ce18f8aeaff97c93b90d1e34117852"
let place = document.querySelector("#location").value
let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${key}`)
let finaloutput = await data.json()
             console.log(finaloutput);  
let tempValue = document.querySelector(".temp_value")
let humidValue = document.querySelector(".humid_value")
let weathercondition = document.querySelector("#weathercondition")
let finalTemp = Math.round(finaloutput.main.temp-273)
let finalHumid = (finaloutput.main.humidity)
let finalcondition = (finaloutput.weather[0].main).toUpperCase()
// console.log(finalcondition);
weathercondition.innerHTML=`${finalcondition}`
tempValue.innerHTML=`${finalTemp} <sup>0</sup>C`
humidValue.innerHTML=`${finalHumid} kmph`

 let weatherimage = document.getElementById("img")

 switch (finalcondition) {
    case "HAZE":  weatherimage.src = "./assest/wether haze.jpg"
        break;
    case "CLOUDS" : weatherimage.src="./assest/weather cloud.png"
        break;
        case "RAIN" : weathercondition.src = "./assest/wether image.avif"
    
    default:
        break;
 }
    }
    fetchData()
})


// let key = "42ce18f8aeaff97c93b90d1e34117852"
// let api = "https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}"