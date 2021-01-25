export default function Alarm(alarmObject) {
  this.alarmTime = alarmObject.alarmTime;
  this.clockMode = alarmObject.clockMode;
  this.alarmMode = alarmObject.alarmMode;
  this.alarmContent = alarmObject.alarmContent;
  this.alarmOnOffState = alarmObject.alarmOnOffState;
}

Alarm.prototype = {
  setAlarmTime: function (time) {
    this.alarmTime = time;

    return this.alarmTime;
  },

  getAlarmTime: function () {
    return this.alarmTime;
  },

  setClockMode: function (mode) {
    this.clockMode = mode;

    return this.clockMode;
  },

  getClockMode: function () {
    return this.clockMode;
  },

  setAlarmMode: function (mode) {
    this.alarmMode = mode;

    return this.alarmMode;
  },

  getAlarmMode: function () {
    return this.alarmMode;
  },

  setAlarmContent: function (content) {
    this.alarmContent = content;

    return this.alarmContent;
  },

  getAlarmContent: function () {
    return this.alarmContent;
  },

  setAlarmOnOffState: function (onOffState) {
    this.alarmOnOffState = onOffState;

    return this.alarmOnOffState;
  },

  getAlarmOnOffState: function () {
    return this.alarmOnOffState;
  },
};
