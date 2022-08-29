const search = document.getElementById('search');

search.addEventListener('keypress', getCity);
const w = new Weather();
const ui = new UI();

function getCity(e) {
  if (e.key === 'Enter') {
    const userInput = e.target.value;
    console.log(userInput);

    w.getWeather(userInput)
      .then((data) => {
        console.log(data);
        ui.displayInfo(data);
      })
      .catch((err) => console.log(err));
  }
}
