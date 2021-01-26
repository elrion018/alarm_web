export default function Alarm(alarmObject) {
  this.alarmTime = new Date(alarmObject.alarmTime);
  this.clockMode = alarmObject.clockMode;
  this.alarmMode = alarmObject.alarmMode;
  this.alarmContent = alarmObject.alarmContent;
  this.alarmOnOffState = alarmObject.alarmOnOffState;
}

Alarm.prototype.setAlarmTime = function (time) {
  this.alarmTime = time;

  return this.alarmTime;
};

Alarm.prototype.getAlarmTime = function () {
  return this.alarmTime;
};

Alarm.prototype.setClockMode = function (mode) {
  this.clockMode = mode;

  return this.clockMode;
};

Alarm.prototype.getClockMode = function () {
  return this.clockMode;
};

Alarm.prototype.setAlarmMode = function (mode) {
  this.alarmMode = mode;

  return this.alarmMode;
};

Alarm.prototype.getAlarmMode = function () {
  return this.alarmMode;
};

Alarm.prototype.setAlarmContent = function (content) {
  this.alarmContent = content;

  return this.alarmContent;
};

Alarm.prototype.getAlarmContent = function () {
  return this.alarmContent;
};

Alarm.prototype.setAlarmOnOffState = function (onOffState) {
  this.alarmOnOffState = onOffState;

  return this.alarmOnOffState;
};

Alarm.prototype.getAlarmOnOffState = function () {
  return this.alarmOnOffState;
};
