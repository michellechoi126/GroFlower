console.log("loaded");

/* === DOM Elements === */
const $startButton = $(".start");
const $sunMeter = $("#sunlight");
const $waterLevel = $("#water");
const $airQuality = $("#air");
const $sunButton = $("#sun-button");
const $waterButton = $("#water-button");
const $airButton = $("#air-button");


/* === Meters === */

// Growth Tracker
timer = 20;

const increaseGrowth = function () {
    timer--;
    if (timer === 15) {
        $("#stage1").css("color", "limegreen");
        $("img").attr("src", "./Images/pinkFlower/pinkFlower2.png");
    };
    if (timer === 10) {
        $("#stage2").css("color", "limegreen");
        $("img").attr("src", "./Images/pinkFlower/pinkFlower3.png");
    }
    if (timer === 5) {
        $("#stage3").css("color", "limegreen");
        $("img").attr("src", "./Images/pinkFlower/pinkFlower4.png");
    }
    if (timer === 0) {
        $("#stage4").css("color", "limegreen");
        $("img").attr("src", "./Images/pinkFlower/pinkFlower5.png");
    }
    if (timer < 0) {
        return clearInterval(increaseGrowth);
    }
};
let growthInterval = setInterval;

// Sun Meter
let sun = 100;

const decreaseSun = function () {
    sun -= 10;
    $sunMeter.attr("value", sun);
    if (sun === 0) {
        return clearInterval(sunInterval);
    };
};
let sunInterval = setInterval;

// Water Level
let water = 100;

const decreaseWater = function () {
    water -= 10;
    $waterLevel.attr("value", water);
    if (water === 0) {
        return clearInterval(waterInterval);
    };
};
let waterInterval = setInterval;

// Air Quality
let air = 100;

const decreaseAir = function () {
    air -= 10;
    $airQuality.attr("value", air);
    if (air === 0) {
        return clearInterval(airInterval);
    };
};
let airInterval = setInterval;


/* === Buttons === */

// Sun Button
$sunButton.click(function () {
    if ($sunMeter.attr("value") < 101 && $sunMeter.attr("value") > 0) {
        sun += 10
        $sunMeter.attr("value", sun);
    };
});

// Water Button
$waterButton.click(function () {
    if ($waterLevel.attr("value") < 101 && $waterLevel.attr("value") > 0) {
        water += 10
        $waterLevel.attr("value", water);
    };
});

// Air Button
const timeOut = () => {
$("img").css("animation", "");
};

$airButton.click(function () {
    if ($airQuality.attr("value") < 101 && $airQuality.attr("value") > 0) {
        air += 10
        $airQuality.attr("value", air);
    };
    $("img").css("animation", "sway 3s ease");
    setTimeout(timeOut, 3000);
});


/* === Plant Name === */
$("#nameSubmission").click(function(event) {
    event.preventDefault();
    event.stopPropagation();
    const $userName = $("#nameInput").val();
    const $newName = $("<h3></h3>");
    $newName.text($userName);
    $(".plant").append($newName);
});


/* === Kill Plant === */
const killPlant = function () {
    if ($sunMeter.attr("value") === "0" || $waterLevel.attr("value") === "0" || $airQuality.attr("value") === "0") {
        $("img").attr("src", "./Images/deadPlant.png");
        clearInterval(growthInterval);
        clearInterval(sunInterval);
        clearInterval(waterInterval);
        clearInterval(airInterval);
        clearInterval(killInterval);
        alert("Whoops. You let your plant die! Refresh the page to start over with a new plant and try again.");
    } 
};
let killInterval = setInterval;


/* === Start/Reset === */
$startButton.click(function () {
    growthInterval = setInterval(increaseGrowth, 1000);
    sunInterval = setInterval(decreaseSun, 2000);
    waterInterval = setInterval(decreaseWater, 1000);
    airInterval = setInterval(decreaseAir, 3000);
    killInterval = setInterval(killPlant, 500);
});