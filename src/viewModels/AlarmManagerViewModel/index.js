import { Observer, Publisher } from '../../library';

export default function AlarmManagerViewModel(model) {
  this.model = model;
  this.activeAlarmArray = [];
  this.observer = new Observer();
  this.publisher = new Publisher();

  this.observer.observe(this, this.model);
}

AlarmManagerViewModel.prototype = {
  // observe: function () {
  //   this.observer.observe(this, this.model);
  // },

  getActiveAlarmArray: function () {
    this.activeAlarmArray = this.model.getActiveAlarmArray();
    console.log(this.activeAlarmArray, 'getActiveAlarmArray');

    return this.activeAlarmArray;
  },

  getStandardTime: function () {
    return this.model.getStandardTime();
  },

  setStandardTime: function (time) {
    return this.model.setStandardTime(time);
  },

  getAlarmArray: function () {
    return this.model.alarmArray();
  },

  setAlarmArray: function (array) {
    return this.model.setAlarmArray(array);
  },

  addAlarmToAlarmArray: function (alarmObject) {
    return this.model.addAlarmToAlarmArray(alarmObject);
  },

  removeAlarmFromAlarmArray: function (alarmIndex) {
    return this.model.removeAlarmFromAlarmArray(alarmIndex);
  },

  setOnOffStateOfAlarm: function (alarmIndex) {
    return this.model.setOnOffStateOfAlarm(alarmIndex);
  },
};
