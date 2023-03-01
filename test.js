function getBurger() {
    let key = "6c433bc9b94f39c617df099ceedc1db6"
    let lat = 41.755129346436554
    let lon = -88.34940809552472
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}`
    fetch(url)
        .then(response => response.json())
        .then(data => {console.log(data.hourly[0])})
}

getBurger()
