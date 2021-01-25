import { Observer } from '../../library';

export default function AlarmManagerView(viewModel) {
  this.viewModel = viewModel;
  this.observer = new Observer();
  this.managerContainer = null;
  this.eventDelegator = null;

  this.observer.observe(this, this.viewModel);
}
