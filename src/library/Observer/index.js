export default function Observer() {
  this.subscribe = function (self, target) {
    target.register(self);
  };

  return;
}
