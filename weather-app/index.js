let weather={
    limk:"64050509bbe1479a897171844232203",
    fetchWeather: function(city){
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key="
            + this.limk
            + "&q="
            + city
            + "&days=1&aqi=no&alerts=no"
        ).then((response)=>response.json())
        .then((data)=>weather.displayweather(data));
    },
    displayweather: function(data){
        const {name}=data.location;
        const {temp_c,wind_kph,humidity} = data.current;
        const {text,icon}=data.current.condition;
        //console.log(`${name} ${temp_c} ${wind_kph} ${humidity} ${text}`)
        document.querySelector(".city").innerText=`weather in ${name}`;
        document.querySelector(".temp").innerText=`${temp_c}°C`;
        document.querySelector(".icon").src=`${icon}`;
        document.querySelector(".cloud-type").innerText=`${text}`;
        document.querySelector(".humidity").innerText=`humidity : ${humidity}%`;
        document.querySelector(".wind").innerText=`wind-speed : ${wind_kph}km/h`;
        document.body.style.backgroundImage="url('https://source.unsplash.com/random/900×700/?city')";
    },
    search: function(){
        this.fetchWeather(document.querySelector(".ip").value)
    }
}
document.querySelector(".sch").addEventListener("click",function(){
    weather.search();
})
document.querySelector(".ip").addEventListener("keyup",function(event)
{
    if(event.key=="Enter")
    {
        weather.search();
    }
})