
describe("Airport", function() {
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport(plane);
  });

    it('Can land planes at the airport', function() {
      airport.land(plane);
      expect(airport.container).toEqual([plane])
    });

    it('Can takeOff planes at the airport', function() {
      airport.land(plane);
      airport.takeOff(plane)
      expect(airport.container.length).toEqual (0);
    });

    it('Cannot land at a full aiport', function() {
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);
      airport.land(plane);

      expect(function() {
        airport.land(plane);
      }).toThrowError('Airport full');
  });
});
