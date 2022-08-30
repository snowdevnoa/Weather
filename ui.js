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

    document.querySelector('.results').style.display = 'block';
  }

  showError(msg, className) {
    this.clearError();
    //create new alert element
    const div = document.createElement('div');

    //add text and class
    div.appendChild(document.createTextNode(msg));
    div.classList = className;

    //get parent and child element
    const parentEle = document.querySelector('article.card');
    const search = document.getElementById('search');

    //add to DOM
    parentEle.insertBefore(div, search);

    setTimeout(this.clearError, 2000);
  }

  clearError() {
    const alert = document.querySelector('.alert');

    if (alert) {
      alert.remove();
    }
  }
}
