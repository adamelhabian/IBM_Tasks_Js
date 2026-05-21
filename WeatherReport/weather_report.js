function showweatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const apiKey = "ff36c4e25298741b6dcd29d25c6c7b83"; // my api key on openWeather
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((Response) => Response.json())
    .then((data) => {
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<h2> Weather in ${data.name}</h2>
         <p> Temprature: ${data.main.temp}  &#8451;</p>
         <p>Weather: ${data.weather[0].description}</p> `;
    })
    .catch((error) => {
      console.error("Error fetching weather:", error);
      const weatherInfo = document.getElementById("weatherInfo");
      weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`;
    });
}
document
  .getElementById("weatherForm")
  .addEventListener("submit", showweatherDetails);
