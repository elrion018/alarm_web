export default function Observer() {
  this.observe = function (self, target) {
    target.publisher.register(self);
  };
}
