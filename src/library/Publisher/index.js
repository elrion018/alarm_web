export default function Publisher() {
  this.observers = [];
}

Publisher.prototype = {
  register: function (observer) {
    this.observers.push(observer);
  },

  publish: function (callback) {
    for (var i = 0; i < this.observers.length; i++) {
      this.observers[i][callback]();
    }
  },
};
