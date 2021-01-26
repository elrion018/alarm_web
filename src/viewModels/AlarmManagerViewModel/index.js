import { Observer, Publisher } from '../../library';
import { messages } from '../../constants';

export default function AlarmManagerViewModel(model) {
  this.model = model;
  this.standardTime = this.model.getStandardTime();
  this.alarmArray = [];
  this.activeAlarmArray = [];
  this.observer = new Observer();
  this.publisher = new Publisher();

  this.observer.observe(this, this.model);
}

AlarmManagerViewModel.prototype.publish = function (callback) {
  this.publisher.publish(callback);
};

AlarmManagerViewModel.prototype.getActiveAlarmArray = function () {
  this.activeAlarmArray = this.model.getActiveAlarmArray();
  console.log(this.activeAlarmArray, 'getActiveAlarmArray');

  return this.activeAlarmArray;
};

AlarmManagerViewModel.prototype.setActiveAlarmArrayInViewModel = function () {
  this.activeAlarmArray = this.model.getActiveAlarmArray();

  this.publish('rerenderAlarmMessages');
};

AlarmManagerViewModel.prototype.getStandardTime = function () {
  return this.model.getStandardTime();
};

AlarmManagerViewModel.prototype.setStandardTimeInModel = function (date, time) {
  var exception = this.validationStandardTime(date, time);

  if (exception) {
    alert(exception);

    return;
  }

  return this.model.setStandardTime(date + 'T' + time);
};

AlarmManagerViewModel.prototype.setStandardTimeInViewModel = function () {
  this.standardTime = this.model.getStandardTime();
  // console.log(this.standardTime);
  this.publish('rerenderStandardTimeString');
};

AlarmManagerViewModel.prototype.getAlarmArray = function () {
  return this.model.getAlarmArray();
};

AlarmManagerViewModel.prototype.setAlarmArray = function (array) {
  return this.model.setAlarmArray(array);
};

AlarmManagerViewModel.prototype.addAlarmToAlarmArray = function (alarmObject) {
  var exception = this.validationAlarmObject(alarmObject);

  if (exception) {
    alert(exception);

    return;
  }

  return this.model.addAlarmToAlarmArray(alarmObject);
};

AlarmManagerViewModel.prototype.removeAlarmFromAlarmArray = function (
  alarmIndex
) {
  return this.model.removeAlarmFromAlarmArray(alarmIndex);
};

AlarmManagerViewModel.prototype.setOnOffStateOfAlarm = function (alarmIndex) {
  return this.model.setOnOffStateOfAlarm(alarmIndex);
};

AlarmManagerViewModel.prototype.setAlarmArrayInViewModel = function () {
  this.alarmArray = this.model.getAlarmArray();

  console.log(this.alarmArray, 'setAlarmArrayInViewModel');
  this.publish('rerenderAlarmList');
};

AlarmManagerViewModel.prototype.validationStandardTime = function (date, time) {
  console.log(date, time);
  if (date.length === 0 || time.length === 0) {
    return messages.ALERT_FOT_EMPTY_DATE_TIME;
  }
};

AlarmManagerViewModel.prototype.validationAlarmObject = function (alarmObject) {
  var dateAndTime = alarmObject.alarmTime.split('T');

  if (dateAndTime[0].length === 0 || dateAndTime[1].length === 0) {
    return messages.ALERT_FOT_EMPTY_DATE_TIME;
  }

  if (alarmObject.alarmContent.trim().length <= 0) {
    return messages.ALERT_FOT_EMPTY_CONTENT;
  }
};
