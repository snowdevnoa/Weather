const search = document.getElementById('search');
const load = document.querySelector('.lds-ripple');
const results = document.querySelector('.results');

search.addEventListener('keypress', getCity);
const w = new Weather();
const ui = new UI();

function getCity(e) {
  if (e.key === 'Enter') {
    const userInput = e.target.value;
    console.log(userInput);
    load.style.display = 'inline-block';

    document.querySelector('.results').style.display = 'none';

    //Check response
    setTimeout(function () {
      w.getWeather(userInput)
        .then((data) => {
          console.log(data);
          ui.displayInfo(data);
          load.style.display = 'none';
        })
        .catch((err) => {
          //failed to find data

          load.style.display = 'none';
          ui.showError('Please enter an existing city.', 'alert');
        });
    }, 2000);
  }
}
