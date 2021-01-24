export default function Alarm(alarmObject) {
  this.alarmTime = alarmObject.alarmTime;
  this.clockMode = alarmObject.clockMode;
  this.alarmMode = alarmObject.alarmMode;
  this.alarmContent = alarmObject.alarmContent;
  this.alarmOnOffState = alarmObject.alarmOnOffState;
  var that = this;

  this.setAlarmTime = function (time) {
    this.alarmTime = time;

    return this.alarmTime;
  };

  this.getAlarmTime = function () {
    return this.alarmTime;
  };

  this.setClockMode = function (mode) {
    this.clockMode = mode;

    return this.clockMode;
  };

  this.getClockMode = function () {
    return this.clockMode;
  };

  this.setAlarmMode = function (mode) {
    this.alarmMode = mode;

    return this.alarmMode;
  };

  this.getAlarmMode = function () {
    return this.alarmMode;
  };

  this.setAlarmContent = function (content) {
    this.alarmContent = content;

    return this.alarmContent;
  };

  this.getAlarmContent = function () {
    return this.alarmContent;
  };

  this.setAlarmOnOffState = function (onOffState) {
    this.alarmOnOffState = onOffState;

    return this.alarmOnOffState;
  };

  this.getAlarmOnOffState = function () {
    return this.alarmOnOffState;
  };
}
