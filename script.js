let button = document.querySelector(".sButton");
let display = document.querySelector("#search");
let sts = document.querySelector(".sts");


let url = `OWN-URL`;
let options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'OWN-KEY',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let temp = document.querySelector("#temp");
let humi = document.querySelector(".humiVal");
let wind = document.querySelector(".winVal");

let getData = async() => {
    try {
        url = `OWN_URL`;
        const response = await fetch(url, options);
        const result = await response.json();
        temp.innerText = result.temp;
        humi.innerText = result.humidity;
        wind.innerText = result.wind_speed;

        if (result.cloud_pct <= 10) {
            sts.innerText = "🌞";
        }
        else if (result.cloud_pct <= 30) {
            sts.innerText = "🌤️";
        }
        else if (result.cloud_pct <= 50) {
            sts.innerText = "⛅";
        }
        else if (result.cloud_pct <= 70) {
            sts.innerText = "🌥️";
        }
        else if (result.cloud_pct <= 90) {
            sts.innerText = "☁️";
        }
        else {
            sts.innerText = "🌫️";
        }
        

    } catch (error) {
        console.error(error);
    }
}


button.addEventListener("click", () => {
    getData();
});
