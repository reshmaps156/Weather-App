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


            })

            
        }).catch((err)=>console.log(err))