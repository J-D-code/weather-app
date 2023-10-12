      const searchBox = document.querySelector("#search");
      const button = document.getElementById(btn);
      const apiKey = "1b150c6eced28badb7bd1cc37e9841b4";
      const weatherIcon = document.querySelector(".weather-icon");
      async function checkWeather(search) {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${apiKey}&units=metric`
        );
        var data = await response.json();
        if (search && data.name) {
          console.log(data);
          document.querySelector(".city").innerText = data.name;
          document.querySelector(".temp").innerText =
            Math.round(data.main.temp) + "˚C";
          document.querySelector(".wind").innerText = data.wind.speed + "km/h";
          document.querySelector(
            ".humidity"
          ).innerText = `${data.main.humidity}%`;

          if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "./imgs/cloudy.png";
          } else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "./imgs/clear.png";
          } else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "./imgs/rain.png";
          } else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "./imgs/drizzle.png";
          } else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "./imgs/mist.png";
          }
          document.querySelector(".weather").style.display = "block";
        } else {
          alert("please enter a valid city");
        }
      }
      btn.addEventListener("click", () => {
        searchBox.value;
        checkWeather(searchBox.value);
      });
