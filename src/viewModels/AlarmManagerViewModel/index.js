import { Observer, Publisher } from '../../library';

export default function AlarmManagerViewModel(model) {
  this.model = model;
  this.standardTime = this.model.getStandardTime();
  this.activeAlarmArray = [];
  this.observer = new Observer();
  this.publisher = new Publisher();

  this.observer.observe(this, this.model);
}

AlarmManagerViewModel.prototype = {
  publish: function (callback) {
    this.publisher.publish(callback);
  },

  getActiveAlarmArray: function () {
    this.activeAlarmArray = this.model.getActiveAlarmArray();
    console.log(this.activeAlarmArray, 'getActiveAlarmArray');

    return this.activeAlarmArray;
  },

  getStandardTime: function () {
    return this.standardTime;
  },

  setStandardTimeInModel: function (time) {
    return this.model.setStandardTime(time);
  },

  setStandardTimeInViewModel: function (time) {
    this.standardTime = this.model.getStandardTime();
    console.log(this.standardTime);
    this.publish('rerenderStandardTimeString');
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
