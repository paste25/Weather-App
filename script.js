const apiKey="c9dea24cf13d93da32a7ca23edf6d6eb";
const api= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input")    //Searchbox
const btn = document.querySelector(".search button")      //Search button
const icon = document.querySelector(".icon")              //to change icons
async function checkWeather(city){
    const response = await fetch(api + city + `&appid=${apiKey}`); 
    if(response.status == 404){                                               //if api doesnt return any data run the below code which is to show error message
        document.querySelector(".search").style.padding = "50px 0px 0px";
        document.querySelector(".error").style.display="block";              //display the error message as it was hidden in CSS         
        document.querySelector(".result").style.display="none";
        document.querySelector(".details").style.display="none";
    }
    else{
    document.querySelector(".error").style.display="none";                  //to hide the error msg if we search again after error msg was displayed
    let data = await response.json();
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= data.main.temp  + " °C"; //for non floating value use math.round(data.main.temp)
    document.querySelector(".humidity").innerHTML= data.main.humidity + " %";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
    if(data.weather[0].main=="Clouds")
    {
        icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main=="Clear")
    {
        icon.src = "images/clear.png";
    }
    else if(data.weather[0].main=="Rain")
    {
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main=="Drizzle")
    {
        icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist")
    {
        icon.src = "images/mist.png";
    }
    else if(data.weather[0].main=="Snow")
    {
        icon.src = "images/snow.png";
    }

    document.querySelector(".result").style.display = "flex";
    document.querySelector(".details").style.display = "flex";
}

}
btn.addEventListener("click", ()=>{
    checkWeather(search.value);
})

search.addEventListener("keyup", e=>{
    if (e.keyCode === 13) {
        e.preventDefault();
    btn.click();
    }
})
