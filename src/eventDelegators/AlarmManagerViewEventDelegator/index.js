import { EventDelegator } from '../../library';

export default function AlarmManagerViewEventDelegator() {}

AlarmManagerViewEventDelegator.prototype = Object.create(
  EventDelegator.prototype
);

AlarmManagerViewEventDelegator.prototype.constructor = AlarmManagerViewEventDelegator;

AlarmManagerViewEventDelegator.prototype.setStandardTime = function () {
  this.viewModel.setStandardTimeInModel(
    this.view.managerContainer.querySelector('#alarm-standard-time-date-picker')
      .value,
    this.view.managerContainer.querySelector('#alarm-standard-time-time-picker')
      .value
  );
};

AlarmManagerViewEventDelegator.prototype.addAlarm = function () {
  this.viewModel.addAlarmToAlarmArray({
    alarmTime:
      this.view.managerContainer.querySelector('#alarm-input-date-picker')
        .value +
      'T' +
      this.view.managerContainer.querySelector('#alarm-input-time-picker')
        .value,
    clockMode: this.view.managerContainer.querySelector(
      '#alarm-input-clock-mode-select'
    ).value,
    alarmMode: this.view.managerContainer.querySelector(
      '#alarm-input-alarm-mode-select'
    ).value,
    alarmContent: this.view.managerContainer.querySelector(
      '#alarm-input-content-input'
    ).value,
    alarmOnOffState: true,
  });
};

AlarmManagerViewEventDelegator.prototype.removeItem = function (target) {
  this.viewModel.removeAlarmFromAlarmArray(target['data-itemId']);
};

AlarmManagerViewEventDelegator.prototype.onOffItem = function (target) {
  this.viewModel.setOnOffStateOfAlarm(target['data-itemId']);
};
