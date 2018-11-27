
describe("Airport", function() {
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport(plane);
  });

    it('Can land planes at the airport'), function() {
      airport.land(plane);
      expect(airport.planes).toEqual([plane])
    });


});
