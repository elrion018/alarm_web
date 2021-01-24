import { Observer, Publisher } from '../../library';

export default function AlarmManagerViewModel(model) {
  this.model = model;
  this.activeAlarmArray = [];
  this.observer = new Observer();
  this.publisher = new Publisher();
  var that = this;

  observe();

  function observe() {
    that.observer.observe(that, that.model);
  }

  this.getActiveAlarmArray = function () {
    this.activeAlarmArray = this.model.getActiveAlarmArray();
    console.log(this.activeAlarmArray, 'published');

    return this.activeAlarmArray;
  };

  this.getStandardTime = function () {
    return this.model.getStandardTime();
  };

  this.setStandardTime = function (time) {
    return this.model.setStandardTime(time);
  };

  this.getAlarmArray = function () {
    return this.model.alarmArray();
  };

  this.setAlarmArray = function (array) {
    return this.model.setAlarmArray(array);
  };

  this.addAlarmToAlarmArray = function (alarmObject) {
    return this.model.addAlarmToAlarmArray(alarmObject);
  };

  this.removeAlarmFromAlarmArray = function (alarmIndex) {
    return this.model.removeAlarmFromAlarmArray(alarmIndex);
  };

  this.setOnOffStateOfAlarm = function (alarmIndex) {
    return this.model.setOnOffStateOfAlarm(alarmIndex);
  };
}
