import { Observer } from '../../library';

export default function AlarmManagerViewModel(model) {
  this.model = model;
  this.observer = new Observer();

  console.log(this.model);
  return;
}
