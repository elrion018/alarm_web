export default function Publisher() {
  this.observers = [];

  this.register = function (observer) {
    this.observers.push(observer);
  };

  this.publish = function (callback) {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i][callback]();
    }
  };
}
