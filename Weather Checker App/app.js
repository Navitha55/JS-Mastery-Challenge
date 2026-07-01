// url = "https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=8e4808cae1d4612e4e629a148a3e2437&units=metric"

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather"
const API_KEY_HERE = "8e4808cae1d4612e4e629a148a3e2437"

const input = document.querySelector("#input");
const btn = document.getElementById("btn");
const result = document.querySelector(".result");

let getData = async (city) => {
    if (city.trim() === "") {
        result.classList.remove("hide")
        result.innerHTML = `<p class="error">⚠️ You must enter a city name!</p>`;
        return
    }
    const url = `${BASE_URL}?q=${city}&appid=${API_KEY_HERE}&units=metric`
    try {
        let response = await fetch(url);
        if (!response.ok) {
            result.classList.remove("hide");
            result.innerHTML =
                `<p class="error">❌ ${city} not found. Try another city.</p>`;
            return;
        }
        let data = await response.json()
        display(data)
    } catch (error) {
        result.classList.remove("hide");
        result.innerHTML =
            `<p class="error">⚠️ Something went wrong. Please try again later.</p>`;
    }
}

btn.addEventListener("click", () => {
    if (btn.innerHTML === "Check Weather") {
        getData(input.value)
        btn.innerHTML = "Enter City"
        input.classList.add("hide")
    } else {
        btn.innerHTML = "Check Weather"
        result.innerHTML = "";
        input.classList.remove("hide")
        result.classList.add("hide")
        input.value = ""
    }
})

function display(obj) {
    let d = obj?.weather[0]?.description
    let temp = Math.round(obj?.main.temp)
    result.classList.remove("hide")
    if (!d || temp === undefined) {
        result.innerHTML = `<p class="error">⚠️ Weather data is incomplete!</p>`;
        return
    }
    result.innerHTML = `
        <p class="success">🌡️ Temperature: ${temp}°C</p>
        <p class="success">☁️ Description: ${d}</p>
    `;
}