import { Observer } from '../../library';

export default function AlarmManagerViewModel(model) {
  this.model = model;
  this.observer = new Observer();
  var that = this;

  observe();

  function observe() {
    that.observer.observe(that, that.model);
  }

  return;
}
