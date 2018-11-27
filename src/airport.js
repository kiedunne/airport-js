function Airport() {
  this.container = []
  this.capacity = 5
}

Airport.prototype.land = function(plane) {
  if (this.container.length === 5) {
    throw new Error('Airport full')
  }
  this.container.push(plane)
};

Airport.prototype.takeOff = function(plane) {
  this.container.pop(plane)
};
