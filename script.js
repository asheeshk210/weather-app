var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name1 = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');


button.addEventListener('click', function() {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + inputValue.value + '&appid=b809b4c7b9d0209d74c1b60fdeec3f99')
        .then(response => response.json())
        .then(data => {
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];
            var windValue = data['wind']['speed'];
            name1.innerHTML = nameValue;
            temp.innerHTML = (tempValue - 273.15).toFixed(0) + "&#xb0 C";
            desc.innerHTML = "Weather Condition : " + descValue;
            wind.innerHTML = "Wind Speed : " + ((windValue * 18) / 5).toFixed(0) + " km/hr";

            if (descValue == "clear sky") {
                document.getElementById("dp").style.backgroundImage = "url(boat-863129_640.jpg)";
                document.getElementById("dp").style.color = "black";
            }
            if (descValue == "haze") {
                document.getElementById("dp").style.backgroundImage = "url(lamp-post-768567_640.jpg)";
                document.getElementById("dp").style.color = "black";
            }
            if (descValue == "light rain") {
                document.getElementById("dp").style.backgroundImage = "url(surface-455120_640.jpg)";

            }
            inputValue.value = "";
            // -------------------------------time and date
            setInterval(() => {
                var d = new Date();
                document.getElementById('time').innerHTML = d;
                // var h = d.getHours();
                // var m = d.getMinutes();
                // var s = d.getSeconds();
                // var session="  AM";
                // if(h==0){
                //     h=12;
                // }
                // if(h>12){
                //     h=h-12;
                //     session="PM";
                // }
                // if(h<10){
                //     h="0"+h;
                // }
                // if(m<10){
                //     m="0"+m;
                // }
                // if(s<10){
                //     s="0"+s;
                // }


                // var h1=document.getElementById('hour');
                // var m1=document.getElementById('minute');
                // var s1=document.getElementById('second');
                // var ap=document.getElementById('smy');
                // h1.innerHTML=h;
                // m1.innerHTML=m;
                // s1.innerHTML=s;
                // ap.innerHTML=session;
            }, 1000);
        })
        .catch(err => alert("wrong city name ! "))
})