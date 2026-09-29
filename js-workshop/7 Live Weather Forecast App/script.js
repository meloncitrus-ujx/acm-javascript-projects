/*
    ALGORITHM: Live Weather Forecast App (Fetch & Async/Await)

    1. SETUP:
       - Get the weather `<form>`, city text input, and card display container.
       - Define your OpenWeatherMap API key constant: `const apiKey = 'YOUR_API_KEY';`.

    2. FORM SUBMISSION:
       - Add a 'submit' event listener to the weather form.
       - Call `event.preventDefault()` to prevent default page reload.
       - Read city name from input field.
       - If city is entered, call `getWeatherData(city)`.
       - Else, call `displayError('Please enter a city.')`.

    3. FETCH WEATHER DATA (`async function getWeatherData(city)`):
       - Wrap execution in a `try...catch` block.
       - Inside `try`:
           - Construct query URL: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`.
           - Call `const response = await fetch(apiUrl);`.
           - If `!response.ok`, throw a new Error('Could not fetch weather data.').
           - Parse JSON: `const data = await response.json();`.
           - Pass `data` to `displayWeatherInfo(data)`.
       - Inside `catch (error)`:
           - Call `displayError(error.message)`.

    4. RENDER WEATHER INFO (`displayWeatherInfo(data)`):
       - Destructure required properties from `data`: city name, `temp` (in Kelvin), `humidity`, description, and weather `id`.
       - Reset card container content and set display style to `flex`.
       - Create and append elements:
           - `<h1>` for City Name.
           - `<p>` for Temperature (converted to Celsius or Fahrenheit with `.toFixed(1)`).
           - `<p>` for Humidity percentage.
           - `<p>` for Weather Description text.
           - `<p>` for Weather Emoji based on weather `id` group (200s: ⛈️, 300s/500s: 🌧️, 600s: ❄️, 800: ☀️, 800+: ☁️).

    5. ERROR HANDLER (`displayError(message)`):
       - Reset card container and set display to `flex`.
       - Create `<p>` element with error class, set text content to `message`, and append to card.
*/

// WRITE YOUR CODE BELOW:


const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apikey = '778fc4385500452f6848ceb3412bae72';

weatherForm.addEventListener("submit", async event => {
      event.preventDefault();   //forms refresh the page

      const city = cityInput.value;

      if(city){
            try{
                  const weatherData = await getWeatherData(city);
                  displayWeatherInfo(weatherData);
            }
            catch(error){
               console.error(error)
               displayError(error);
            }
      }
      else{
         displayError("Please enter a city")
      }
});

async function getWeatherData(city){
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

      const response = await fetch(apiUrl);

      if(!response.ok){
            throw new Error("could not fetch weather data");
      }

      return await response.json(); 
}

function displayWeatherInfo(data){
         const {name: city,
               main: {temp, humidity}, 
               weather: [{description, id}]} = data;   //obj array destructuring

      card.textContent = '';
      card.style.display = "flex";

      const cityDisplay = document.createElement("h1");
      const tempDisplay = document.createElement("p");
      const humidityDisplay = document.createElement("p");
      const descDisplay = document.createElement("p");
      const weatherEmoji = document.createElement("p");

      cityDisplay.textContent = city;
      tempDisplay.textContent = `${(temp - 273.15).toFixed(1)}°C`;
      humidityDisplay.textContent = `Humidity: ${humidity}%`;
      descDisplay.textContent = description; 
      weatherEmoji.textContent = getWeatherEmoji(id); 

      cityDisplay.classList.add("cityDisplay");
      tempDisplay.classList.add("tempDisplay");
      humidityDisplay.classList.add("humidityDisplay");
      descDisplay.classList.add("descDisplay");
      weatherEmoji.classList.add("weatherEmoji");

      card.appendChild(cityDisplay);
      card.appendChild(tempDisplay);
      card.appendChild(humidityDisplay);
      card.appendChild(descDisplay);
      card.appendChild(weatherEmoji);
}

function getWeatherEmoji(weatherId){

      switch(true){
         case (weatherId >= 200 && weatherId < 300):
            return '⛈️'; 
         case (weatherId >= 300 && weatherId < 400):
            return '🌧️'; 
         case (weatherId >= 500 && weatherId < 600):
            return '🌧️'; 
         case (weatherId >= 600 && weatherId < 700):
            return '❄️'; 
         case (weatherId >= 700 && weatherId < 800):
            return '🌫️'; 
         case (weatherId === 800):
            return '☀️'; 
         case (weatherId >= 801 && weatherId < 810):
            return '🌥️';
         default : 
            return '❓';     
      }
}

function displayError(message){
      const errorDisplay = document.createElement("p");
      errorDisplay.textContent = message;
      errorDisplay.classList.add("errorDisplay");

      card.textContent = '';
      card.style.display = "flex";
      card.appendChild(errorDisplay);
}
