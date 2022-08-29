const search = document.getElementById('search');

search.addEventListener('keypress', getCity);
const w = new Weather();

function getCity(e) {
  if (e.key === 'Enter') {
    const userInput = e.target.value;
    console.log(userInput);

    w.getWeather(userInput)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }
}
