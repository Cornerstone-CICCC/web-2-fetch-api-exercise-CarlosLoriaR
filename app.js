const weather = document.getElementById('weather')
const wind = document.getElementById('wind')
const timezone = document.getElementById('timezone')
const time = document.getElementById('time')

async function getWeather() {
    try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=49.2497&longitude=-123.1193&current=temperature_2m,is_day,rain,showers,wind_speed_10m&timezone=auto&forecast_days=1")
        const data = await res.json()
        return data
    } catch (err) {
        console.error(err)
    }
}
async function buildWeatherDisplay() {
    const weatherData = await getWeather()
    weather.textContent = `${weatherData.current.temperature_2m} ${weatherData.current_units.temperature_2m}`
    wind.textContent = `Wind speed: ${weatherData.current.wind_speed_10m} ${weatherData.current_units.wind_speed_10m}`
    timezone.textContent = `${weatherData.timezone}`
    const currentTime = new Date(weatherData.current.time).toLocaleString();
    time.textContent = `Last Updated: ${currentTime}`;
}
buildWeatherDisplay()