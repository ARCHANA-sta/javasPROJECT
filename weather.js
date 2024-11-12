const apiKey = "";
const apiurl = "";

async function checkweather(city){
    const response = await fetch(apiurl + city + "$appid=$(apiKey)");
    var data = await response.json();



    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C" ;
    document.querySelector(".humidity").innerHTML = data.main.humidity;
    document.querySelector(".wind").innerHTML = data.main.wind.speed ;

    


}

checkweather();

