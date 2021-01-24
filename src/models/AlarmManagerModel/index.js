import { Alarm } from '../../models';
import { compareWithTime } from '../../utils';
import { Publisher } from '../../library';

export default function AlarmManagerModel() {
  this.standardTime = new Date();
  this.alarmArray = [];
  this.publisher = new Publisher();
  this._timer = null;
  var that = this;

  setTimer();

  function setTimer() {
    that._timer = setInterval(function () {
      that.passStandardTime();
    }, 1000);
  }

  this.passStandardTime = function () {
    this.standardTime.setMilliseconds(
      this.standardTime.getMilliseconds() + 1000
    );

    console.log(this.standardTime);
    return this.standardTime;
  };

  this.getStandardTime = function () {
    return this.standardTime;
  };

  this.setStandardTime = function (time) {
    clearInterval(that._timer);
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
