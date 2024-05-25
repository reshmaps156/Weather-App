apiKey = '214d7fcfd19cc427d1b52c92a128a686'
city = 'chavakkad'
//      "url('https://source.unsplash.com/1600x900/?" + name + "')";

//data fetching
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`).then((response)=>{
            
            response.json().then((weather)=>{
                console.log(weather);

                //temperature
                let temp = weather.main['temp'].toFixed()
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

                //feels like
                let feels__like = weather.main['feels_like'].toFixed()

                //minimum temperature
                let min_temp = weather.main['temp_min'].toFixed()

                //maximum temperature
                let max_temp = weather.main['temp_max'].toFixed()

                // https://openweathermap.org/img/wn/${weather_icon}@2x.png

                temperature.innerHTML = `${temp}°C`
                feelsLike.innerHTML = 
                weather__description.innerHTML = `${weatherDescription}`
                wind.innerHTML = `${windSpeed} m/s`
                humidity.innerHTML = `${humid}%`
                feelsLike.innerHTML = `${feels__like}°C`
                minTemp.innerHTML = `${min_temp}°C`
                maxTemp.innerHTML = `${max_temp} °C`
                cityName.innerHTML = `${city}`


                //clock
                function getTime(){
                    const time = new Date()
                    console.log(time);
                
                    const hour = time.getHours()
                    console.log(hour);
                
                    const min = time.getMinutes()
                    console.log(min);
                
                    const second = time.getSeconds()
                    console.log(second);
                    
                
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


            })

            
        }).catch((err)=>console.log(err))