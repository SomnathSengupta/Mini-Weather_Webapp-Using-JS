let button = document.querySelector(".sButton");
let display = document.querySelector("#search");
let sts = document.querySelector(".sts");


let url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai`;
let options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'dc4fb00ab2mshbc036770c2adb05p1c69fejsn5221ca4469e7',
		'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let temp = document.querySelector("#temp");
let humi = document.querySelector(".humiVal");
let wind = document.querySelector(".winVal");

let getData = async() => {
    try {
        url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${display.value}`;
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