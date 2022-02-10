console.log("loaded");

/* === Global Variables === */
// let growthInterval = setInterval;
// let sunInterval = setInterval;
// let waterInterval = setInterval;
// let airInterval = setInterval;

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
$airButton.click(function () {
    if ($airQuality.attr("value") < 101 && $airQuality.attr("value") > 0) {
        air += 10
        $airQuality.attr("value", air);
    };
});


/* === Start/Reset === */

$startButton.click(function () {
    growthInterval = setInterval(increaseGrowth, 1000);
    sunInterval = setInterval(decreaseSun, 2000);
    waterInterval = setInterval(decreaseWater, 1000);
    airInterval = setInterval(decreaseAir, 3000);
});