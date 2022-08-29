class UI {
  displayInfo(data) {
    const { icon, description } = data.weather[0];

    document.getElementById('city').innerText = `Weather in ${data.name}`;
    document.getElementById('temp').innerText = `${(
      data.main.temp - 273
    ).toFixed(1)}°C`;

    document.getElementById(
      'icon'
    ).src = `http://openweathermap.org/img/wn/${icon}.png`;
    document.getElementById('description').innerText = `${description}`;
    document.getElementById(
      'humidity'
    ).innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById(
      'wind'
    ).innerText = `Wind: ${data.wind.speed.toFixed(1)} km/h`;
  }
}
