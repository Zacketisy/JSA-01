const api_key = "a67c6b23bde3968eae4fab9f84a68304";
let q = "Hanoi";
let search = "Hanoi";

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&=units=${units}&=lang=${lang}London&appid=${api_key}`)
    .then(function (resp) {
        return resp.json();
    }).then(data => {
        document.getElementById ("location").innerText = data.location || "--";
        document.getElementById ("temp").innerText = data.temp + " C";
        document.getElementById ("rain").innerText = data.weather[0].feels-like;
        document.getElementById ("wind").innerText = `L:${data.main.temp_min} - H:${data.main.temp_max}`;

        // console.log(data);
        // console.log ("Location = " + data.name);
        // console.log ("Temperature = " + data.main.temp);
        // console.log ("Feels like = " + data.main.feels_like);
        // console.log ("Pressure = " + data.main.pressure);
    })

    let units = "metric";
    let a = "England";
    let lang = "vi";

