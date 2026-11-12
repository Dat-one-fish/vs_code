const  { BikeIsOn, BikeIsOff, BikeAccelerate, BikeDecelerate , bike} = require('./bike');

test('should return true when the bike is on', () => {
    expect(BikeIsOn(1)).toBe(true);
});


test('should return true when the bike is off', () => {
    expect(BikeIsOff(0)).toBe(true);
});



test('should increase speed based on gear', () => {
    bike.speed = 0;
    BikeAccelerate(1, bike.speed);
    expect(bike.speed).toBe(1);
    BikeAccelerate(2, bike.speed );
    expect(bike.speed).toBe(0);
    BikeAccelerate(3, bike.speed);
    expect(bike.speed).toBe(0);
    BikeAccelerate(4, bike.speed);
    expect(bike.speed).toBe(0);
});



test('should decrease speed based on gear', () => {
    bike.speed = 10;
    BikeDecelerate(1, bike.speed);
    expect(bike.speed).toBe(9);
    BikeDecelerate(2, bike.speed);
    expect(bike.speed).toBe(10); 
    BikeDecelerate(3, bike.speed);  
    expect(bike.speed).toBe(10);
    BikeDecelerate(4, bike.speed);
    expect(bike.speed).toBe(10);
});
