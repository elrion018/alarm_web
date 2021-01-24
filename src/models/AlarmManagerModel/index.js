import { Alarm } from '../../models';
import { compareWithTime } from '../../utils';
import { Publisher } from '../../library';

export default function AlarmManagerModel() {
  this.standardTime = new Date();
  this.alarmArray = [];
  this.activeAlarmArray = [];
  this.publisher = new Publisher();
  this._timer1 = null;
  var that = this;

  setTimer();

  function setTimer() {
    that._timer1 = setInterval(function () {
      that.passStandardTime();
    }, 1000);
  }

  function publish(callback) {
    that.publisher.publish(callback);
  }

  function isSameTime(standardTime, alarmTime) {
    if (standardTime.getFullYear() !== alarmTime.getFullYear()) {
      return false;
    }

    if (standardTime.getMonth() !== alarmTime.getMonth()) {
      return false;
    }

    if (standardTime.getDate() !== alarmTime.getDate()) {
      return false;
    }

    if (standardTime.getHours() !== alarmTime.getHours()) {
      return false;
    }

    if (standardTime.getMinutes() !== alarmTime.getMinutes()) {
      return false;
    }

    if (standardTime.getSeconds() !== alarmTime.getSeconds()) {
      return false;
    }

    return true;
  }

  this.getActiveAlarmArray = function () {
    return this.activeAlarmArray;
  };

  this.searchActiveAlarms = function (standardTime) {
    this.activeAlarmArray = [];

    for (var i = 0; i < this.alarmArray.length; i++) {
      if (isSameTime(standardTime, this.alarmArray[i].alarmTime)) {
        this.activeAlarmArray.push(this.alarmArray[i]);
      }
    }

    publish('getActiveAlarmArray');

    return this.activeAlarmArray;
  };

  this.passStandardTime = function () {
    var prevMinute = this.standardTime.getMinutes();

    this.standardTime.setMilliseconds(
      this.standardTime.getMilliseconds() + 1000
    );

    var nowMinute = this.standardTime.getMinutes();
    if (prevMinute !== nowMinute) {
      this.searchActiveAlarms(this.standardTime);
    }

    return this.standardTime;
  };

  this.getStandardTime = function () {
    return this.standardTime;
  };

  this.setStandardTime = function (time) {
    clearInterval(that._timer1);
    this.standardTime = time;
    setTimer();

    return this.standardTime;
  };

  this.getAlarmArray = function () {
    return this.alarmArray;
  };

  this.setAlarmArray = function (array) {
    this.alarmArray = array;

    if (this.alarmArray.length >= 2) {
      this.alarmArray.sort(compareWithTime);
    }

    return this.alarmArray;
  };

  this.addAlarmToAlarmArray = function (alarmObject) {
    this.alarmArray.push(new Alarm(alarmObject));

    if (this.alarmArray.length >= 2) {
      this.alarmArray.sort(compareWithTime);
    }

    return this.alarmArray;
  };

  this.removeAlarmFromAlarmArray = function (alarmIndex) {
    this.alarmArray.splice(alarmIndex, 1);

    return this.alarmArray;
  };

  this.setOnOffStateOfAlarm = function (alarmIndex) {
    return this.alarmArray[alarmIndex].setAlarmOnOffState(
      !this.alarmArray[alarmIndex].getAlarmOnOffState()
    );
  };
}
