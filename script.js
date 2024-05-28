apiKey = '214d7fcfd19cc427d1b52c92a128a686'
unsplashApiKey = '_U6MD-dw1-nAaKUgcGrJ9BSo0jXwxWXCC0f6gQq7qn0'
document.getElementById('location').addEventListener("keydown",function (event){
    if(event.key == 'Enter'){
        getBackground()
        getWeather()
       
    }
})
document.getElementById('location').addEventListener("keydown",function (event){
    if(event.key == 'Backspace'){
        document.getElementById('location').value = ''
    }
})

function getWeather(){
   let city = document.getElementById('location').value
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then((response)=>{
        if(!response.ok){
            throw new Error('city not found')
            
        }
        return  response.json()
            
           
        }).then((weather)=>{
             
           
            //temperature
            let temp = weather.main['temp'].toFixed()
            

            //humidity
            let humid = weather.main['humidity']
           

            //weather description
            let weatherDescription = weather.weather[0].description
           

            //wind speed
            let windSpeed = weather.wind['speed']
            

            //icon
            let weather_icon = weather.weather[0].icon
            

            //feels like
            let feels__like = weather.main['feels_like'].toFixed()

            //minimum temperature
            let min_temp = weather.main['temp_min'].toFixed()

            //maximum temperature
            let max_temp = weather.main['temp_max'].toFixed()

            
            temperature.innerHTML = `${temp}°C`
            weather__description.innerHTML = `${weatherDescription}`
            wind.innerHTML = `${windSpeed} m/s`
            humidity.innerHTML = `${humid}%`
            feelsLike.innerHTML = `${feels__like}°C`
            minTemp.innerHTML = `${min_temp}°C`
            maxTemp.innerHTML = `${max_temp} °C`
            cityName.innerHTML = `${city}`
            weatherImg.innerHTML = `<img id="weatherIcon"  src=" https://openweathermap.org/img/wn/${weather_icon}@2x.png" alt="">`


            //clock
            function getTime(){
                const time = new Date()
                const hour = time.getHours()
                const min = time.getMinutes()
                const second = time.getSeconds()
                
                clock.innerHTML = `${hour} : ${min} :${second} ${hour>12?'PM':'AM'}`
            
                setTimeout(()=>{
                    getTime()
                },1000)
            }
            getTime()

            //date
            function get__day(){
                const days = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
                const d = new Date()
                let day = days[d.getDay()]
                today.innerHTML = `${day}`
            }
            get__day()
        })  .catch((err)=>alert(err.message))
}
function getBackground(){
    let city =  document.getElementById('location').value
    fetch(`https://api.unsplash.com/search/photos/?query=${city}&per_page=1&client_id=${unsplashApiKey}`).then((response)=>{
        response.json().then((query)=>{
            console.log(query.results[0].urls.regular)
            let backgnd = query.results[0].urls.regular
            changingBackground.innerHTML = `<img src="${backgnd}" alt="" id="bg"  >`
        }
            
    )
   
        
        
    }).catch((err)=>{
    console.log(err);
})
}





