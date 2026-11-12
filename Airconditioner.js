const airConditioner = { temperature: 16 };

function AirconditionerIsOn() {
        return true;
}

function AirconditionerIsOff() {
    return false;
}

function AirconditionerIncreaseTemperature() {
    if (airConditioner.temperature < 30) {
        airConditioner.temperature += 1;
    }
    return airConditioner.temperature;
}

function AirconditionerDecreaseTemperature() {
    if (airConditioner.temperature > 16) {
        airConditioner.temperature -= 1;
    }
    return airConditioner.temperature;
}

module.exports = { AirconditionerIsOn, AirconditionerIsOff, AirconditionerIncreaseTemperature, AirconditionerDecreaseTemperature, airConditioner };