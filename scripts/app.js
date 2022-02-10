console.log("loaded");

/* === Meters === */

// Growth Tracker


// Sun Meter
const $sunMeter = $("#sunlight");
let sun = 100;

const decreaseSun = function() {
    sun -= 10;
    $sunMeter.attr("value", sun);
    if (sun === 0){
        return clearInterval(sunInterval);
    };
};
let sunInterval = setInterval(decreaseSun, 2000);

// Water Level
const $waterLevel = $("#water");
let water = 100;

const decreaseWater = function() {
        water -= 10;
        $waterLevel.attr("value", water);
        if (water === 0){
            return clearInterval(waterInterval);
        };
};
let waterInterval = setInterval(decreaseWater, 1000);

// Air Quality
const $airQuality = $("#air");
let air = 100;

const decreaseAir = function() {
    air -= 10;
    $airQuality.attr("value", air);
    if (air === 0){
        return clearInterval(airInterval);
    };
};
let airInterval = setInterval(decreaseAir, 3000);


/* === Buttons === */

// Sun Button
const $sunButton = $("#sun-button");

$sunButton.click(function() {
    if ($sunMeter.attr("value") < 101) {
        sun += 10
    $sunMeter.attr("value", sun);
    };
});

// Water Button
const $waterButton = $("#water-button");

$waterButton.click(function() {
    if ($waterLevel.attr("value") < 101) {
        water += 10
    $waterLevel.attr("value", water);
    };
});

// Air Button
const $airButton = $("#air-button");

$airButton.click(function() {
    if ($airQuality.attr("value") < 101) {
        air += 10
    $airQuality.attr("value", air);
    };
});