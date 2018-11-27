function Airport(weather) {
  this.container = []
  this.capacity = 5
  this.weather = weather
}

Airport.prototype.land = function(plane) {
  if (this.container.length === 5) {
    throw new Error('Airport full');
  } else if (this.weather === 'Stormy') {
    throw new Error('Stormy weather');
  } else {
  this.container.push(plane);
  }
};

Airport.prototype.takeOff = function(plane) {
  this.container.pop(plane)
};
