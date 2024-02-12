const apiKey = "bc76c6c455a389e49273e3af747a45eb";
const form = document.querySelector("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const city = document.querySelector("input").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const name = document.querySelector(".name");
      const description = document.querySelector(".description");
      const tempC = document.querySelector(".tempC");
      const tempF = document.querySelector(".tempF");
      const humidity = document.querySelector(".humidity");
      const wind = document.querySelector(".wind");
      const weatherIcon = document.querySelector(".icon");
      const iconUrl = `https://openweathermap.org/img/wn/${res.weather[0].icon}.png`;

      document.body.style.backgroundImage =
      `url('https://source.unsplash.com/1440x1000/?${city})`;
      
      let tempFRounded = Math.round(res.main.temp);
      let windRounded = Math.round(res.wind.speed);

      weatherIcon.innerHTML = `<img src="${iconUrl}" alt="Weather Icon"/>`;
      name.innerText = city;
      humidity.innerHTML = `humidity: ${res.main.humidity} %`;
      wind.innerText = `wind: ${windRounded}mph `;
      description.innerText = `conditions: ${res.weather[0].description}`;
      tempF.innerText = `${tempFRounded}°F`;

      // tempC.textContent = `tempC: ${Math.round((res.main.temp - 32) * 5) / 9}°C`;
        // console.log(`Temperature: ${res.main.temp}`);
      // // console.log(((Number(res.main.temp))*(5/9))+32);
      // // console.log(`Humidity: ${res.main.humidity} %`);
      // // console.log(`wind: ${res.wind.speed} km/h`);
      // // console.log(`conditions: ${res.weather[0].description}`);
      // console.log(`img: ${res.weather[0].iconId}`);
      // console.log(res)
    });
}
