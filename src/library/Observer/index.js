export default function Observer() {
  this.observe = function (self, target) {
    target.publisher.register(self);

    console.log(target.publisher.observers);
  };
}
