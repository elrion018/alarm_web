export default function Observer() {}

Observer.prototype.observe = function (self, target) {
  target.publisher.register(self);
};
