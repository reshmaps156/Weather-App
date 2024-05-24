let weather = {
    apiKey : '214d7fcfd19cc427d1b52c92a128a686',
    fetchWeather : function(){
        
    }
}
//data fetching
fetch('https://api.openweathermap.org/data/2.5/weather?q=Kerala&units=metric&appid=214d7fcfd19cc427d1b52c92a128a686').then((response)=>{
            
            response.json().then((weather)=>{
                console.log(weather);

                //temperature
                let temp = weather.main['temp']
                console.log(temp);

                //humidity
                let humid = weather.main['humidity']
                console.log(humid);

                //weather description
                let weatherDescription = weather.weather[0].description
                console.log(weatherDescription);

                //wind speed
                let windSpeed = weather.wind['speed']
                console.log(windSpeed);

                //icon
                let weather_icon = weather.weather[0].icon
                console.log(weather_icon);

                // https://openweathermap.org/img/wn/10n@2x.png


            })

            
        }).catch((err)=>console.log(err))