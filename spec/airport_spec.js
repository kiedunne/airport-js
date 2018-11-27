
describe("Airport", function() {
  var airport;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
  });

    it('Can land planes at the airport', function() {
      spyOn(weather, 'randomizer').and.returnValue('Sunny')
      airport.land(plane);
      expect(airport.container).toEqual([plane])
    });

    it('Can takeOff planes at the airport', function() {
      spyOn(weather, 'randomizer').and.returnValue('Sunny')
      airport.takeOff(plane)
      expect(airport.container.length).toEqual (0);
    });

    it('Cannot land at a full aiport', function() {
      spyOn(weather, 'randomizer').and.returnValue('Sunny')
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);

      expect(function() {
        airport.land(plane);
      }).toThrowError('Airport full');

  });

   it('Cannot land if weather is stormy', function() {
     spyOn(weather, 'randomizer').and.returnValue('Stormy')
     expect(function() {
       airport.land(plane);
     }).toThrowError('Stormy weather');
   });

   it('Cannot takeOff if weather is stormy', function() {
     spyOn(weather, 'randomizer').and.returnValue('Stormy')
     expect(function() {
       airport.takeOff(plane);
     }).toThrowError('Stormy weather');
   });
});
