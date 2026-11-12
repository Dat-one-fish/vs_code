const bike = { speed: 0 };

function BikeIsOn(number) {
    if (number > 0) {
        return true;
    }
}

function BikeIsOff(number) {
    if (number === 0) {
        return true;
    }
}

function BikeAccelerate(gear, speed) {
    if ((gear === 1) && (speed < 20)) {
        bike.speed = speed + 1;
    } else if ((gear === 2) && (speed > 20 && speed < 30)) {
        bike.speed = speed + 2;
    } else if ((gear === 3) && (speed > 30 && speed < 40)) {
        bike.speed = speed + 3; 
    } else if ((gear === 4) && (speed > 40)) {
        bike.speed = speed + 4;
    } else {
        bike.speed = 0; 
    }
    return bike.speed;
}

function BikeDecelerate(gear, speed) {
    if ((gear === 1) && (speed > 0)) {
        bike.speed = speed - 1;
    } else if ((gear === 2) && (speed > 20 && speed < 30)) {
        bike.speed = speed - 2;
    } else if ((gear === 3) && (speed > 30 && speed < 40)) {
        bike.speed = speed - 3;
    } else if ((gear === 4) && (speed > 40)) {
        bike.speed = speed - 4;
    } else {
        bike.speed = 10;
    }
    return bike.speed;
}

module.exports = { BikeIsOn, BikeIsOff, BikeAccelerate, BikeDecelerate, bike };
