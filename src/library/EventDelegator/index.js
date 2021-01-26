export default function EventDelegator() {
  this.view = null;
  this.viewModel = null;
}

EventDelegator.prototype.bindEvent = function (element) {
  element.addEventListener('click', this.onClick.bind(this));
};

EventDelegator.prototype.onClick = function (event) {
  if (event.target['data-action']) {
    this[event.target['data-action']](event.target);
  }
};

EventDelegator.prototype.bindView = function (view) {
  this.view = view;
};

EventDelegator.prototype.bindViewModel = function (viewModel) {
  this.viewModel = viewModel;
};
