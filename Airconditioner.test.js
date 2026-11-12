const  { AirconditionerIsOn, AirconditionerIsOff, AirconditionerIncreaseTemperature, AirconditionerDecreaseTemperature, airConditioner } = require('./Airconditioner');

test('should return true when the air conditioner is on', () => {
    expect(AirConditionerIsOn()).toBe(true);
});


test('should return true when the air conditioner is off', () => {
    expect(AirConditionerIsOff()).toBe(false);
});

test('should increase temperature', () => {
    airConditioner.temperature = 16;
    AirConditionerIncreaseTemperature();
    expect(airConditioner.temperature).toBe(17);
    AirConditionerIncreaseTemperature();
    expect(airConditioner.temperature).toBe(18);
});

test('should decrease temperature', () => {
    airConditioner.temperature = 18;
    AirConditionerDecreaseTemperature();
    expect(airConditioner.temperature).toBe(17);
    AirConditionerDecreaseTemperature();
    expect(airConditioner.temperature).toBe(16);
});

test('should not decrease temperature below 16', () => {
    airConditioner.temperature = 16;
    AirConditionerDecreaseTemperature();
    expect(airConditioner.temperature).toBe(16);
});

test('should not increase temperature above 30', () => {
    airConditioner.temperature = 30;
    AirConditionerIncreaseTemperature();
    expect(airConditioner.temperature).toBe(30);
});