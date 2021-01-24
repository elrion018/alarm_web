export default function Alarm() {
  var alarmTime = new Date();
  var clockMode = '';
  var alarmMode = '';
  var alarmContent = '';
  var alarmOnOffState = false;
  // var that = this;

  this.setAlarmTime = function (time) {
    alarmTime = time;

    return alarmTime;
  };

  this.getAlarmTime = function () {
    return alarmTime;
  };

  this.setClockMode = function (mode) {
    clockMode = mode;

    return clockMode;
  };

  this.getClockMode = function (mode) {
    return clockMode;
  };

  this.setAlarmMode = function (mode) {
    alarmMode = mode;

    return alarmMode;
  };

  this.getAlarmMode = function (mode) {
    return alarmMode;
  };

  this.setAlarmContent = function (content) {
    alarmContent = content;

    return alarmContent;
  };

  this.getAlarmContent = function () {
    return alarmContent;
  };

  this.setAlarmOnOffState = function (onOffState) {
    alarmOnOffState = onOffState;

    return alarmOnOffState;
  };

  this.getAlarmOnOffState = function () {
    return alarmOnOffState;
  };
}
