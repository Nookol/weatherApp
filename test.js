function getBurger() {
    let url = 'http://api.weatherapi.com/v1/forecast.json?key=0c98b79da4a843b5b03175505231701&q=carol-stream-illinois-united-states-of-america&days=1&aqi=no&alerts=no\n'
    fetch(url)
        .then(response => response.json())
        .then(data => {
            let d = new Date();
            let time = d.getHours()
            let i = time;
            while (i < 24) {
                console.log(data.forecast.forecastday[0])
                // console.log(data.forecast.forecastday[0].hour[i].temp_f)
                i++;
            }
        })
}
getBurger()
