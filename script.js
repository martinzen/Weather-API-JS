// the JS document called each time whent he document is ready
$(document).ready(function() {



    //get the location vanilaJS
    navigator.geolocation.getCurrentPosition(success, error);

    // passing the locaiton vanilaJS 
    function success(pass) {

        var lat = pass.coords.latitude;
        var long = pass.coords.longitude;
        weather(lat, long);
    }
    // if user disallowed access to location then return error
    function error() {

        alert("Error, please refresh you browser and allow location access");
    }

    // function for weather passing the coordinates 
    function weather(lat, long) {
        // API URL, what we will do 
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        // get the jason data and then disply in console each object 
        $.getJSON(URL, function(data) {
            console.log(data);
            // pass the weather details to the updateHTML function
            updateHTML(data);
        });
    }
    // access individuals object that we like to display on the screen
    function updateHTML(data) {
        
        var city = data.name;
        // temperature to be a whole number 
        var temp = Math.round(data.main.temp);
        var desc = data.weather[0].description;
        var icon = data.weather[0].icon;
        var currentWeather = data.weather[0].main;
        var currentW = data.weather[0].main;
        console.log(currentWeather);
        console.log(desc);
        // checking weather description and depending on the weather data.weather[0].main we will have different animation 
        if (currentWeather === "Sun") {
            str = '<div class="sun"></div>';
            htmlCode = $.parseHTML(str)
            $("#test").html(htmlCode);
        }
        if (currentWeather === "Drizzle") {
            str = '<div class="cloud"><div class="cloud1"><ul><li></li><li></li><li></li><li></li></ul></div><div class="cloud1 c_shadow"><ul><li></li><li></li><li></li><li></li></ul></div></div><div class="cloud_s"></div><div class="cloud_vs"></div>';
            htmlCode = $.parseHTML(str)
            $("#test").html(htmlCode);
        }

        if (currentWeather === "Clouds") {
            str = '<div class="cloud"><div class="cloud1"><ul><li></li><li></li><li></li><li></li></ul></div><div class="cloud1 c_shadow"><ul><li></li><li></li><li></li><li></li></ul></div></div><div class="cloud_s"></div><div class="cloud_vs"></div>';
            htmlCode = $.parseHTML(str)
            $("#test").html(htmlCode);
        }

        if (currentWeather === "Rain") {
            str = '<div class="cloud"><div class="cloud1"><ul><li></li><li></li><li></li><li></li></ul></div><div class="cloud1 c_shadow"><ul><li></li><li></li><li></li><li></li></ul></div></div><div class="rain"><ul><li></li><li></li><li></li></ul></div>';
            htmlCode = $.parseHTML(str)
            $("#test").html(htmlCode);
        }
        /*
                if (currentWeather === "Clouds") {
                    str = '<div class="cloud"><div class="cloud1"><ul><li></li><li></li><li></li><li></li></ul></div><div class="cloud1 c_shadow"><ul><li></li><li></li><li></li><li></li></ul></div></div><div class="rain"><ul><li></li><li></li><li></li></ul></div>';
                    htmlCode = $.parseHTML(str)
                    $("#test").html(htmlCode);
                }
                */
        // updating the DOM html file with values from the API 
        $("#city").html(city);
        $("#temp").html(temp);
        $("#desk").html(desc);


    }

});