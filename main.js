function getWeather() {
    const zipCode = document.getElementById("zip-code").value;
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=d8526394fee24acaba5154523230504&q=${zipCode}`;
  
    fetch(apiUrl)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Unable to retrieve weather data.");
        }
      })
      .then(data => {
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = `
          <p>Current temperature: ${data.current.temp_f} &#8457;</p>
          <p>Feels like: ${data.current.feelslike_f} &#8457;</p>
          <p>Humidity: ${data.current.humidity}%</p>
          <p>Conditions: ${data.current.condition.text}</p>
        `;
      })
      .catch(error => {
        console.error(error);
        const weatherInfo = document.getElementById("weather-info");
        weatherInfo.innerHTML = "Unable to retrieve weather data.";
      });
  }