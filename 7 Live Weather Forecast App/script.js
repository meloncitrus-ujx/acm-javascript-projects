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

