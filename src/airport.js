function Airport() {
  this.container = []
  this.capacity = 20
}

Airport.prototype.land = function(plane) {
  this.container.push(plane)
};
// plane = "plane"
// airport = new Airport()
// airport.land(plane)
// console.log(airport)
