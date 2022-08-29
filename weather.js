class Weather {
  constructor() {
    this.apiKey = '241b78e47f85c9ca25ba912f079ffb61';
  }

  async getWeather(city) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}`
    );

    const data = await response.json();
    return data;
  }
}
