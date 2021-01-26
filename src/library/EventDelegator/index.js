export default function EventDelegator() {
  this.functions = {};
}

EventDelegator.prototype.bindEvent = function (element) {
  element.addEventListener('click', this.onClick.bind(this));
};

EventDelegator.prototype.onClick = function (event) {
  console.log(event.target);
};

EventDelegator.prototype.bindFunctions = function (functions) {
  this.functions = functions;
};
