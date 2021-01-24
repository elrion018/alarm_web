import { Alarm } from '../../models';

export default function AlarmManagerModel() {
  var standardTime = new Date();
  var alarmArray = [];
  var _timer = null;
  var that = this;

  setTimer();

  function setTimer() {
    that._timer = setInterval(function () {
      that.passStandardTime();
    }, 1000);
  }

  this.passStandardTime = function () {
    standardTime.setMilliseconds(standardTime.getMilliseconds() + 1000);

    console.log(standardTime);
    return standardTime;
  };

  this.getStandardTime = function () {
    return standardTime;
  };

  this.setStandardTime = function (time) {
    clearInterval(that._timer);
    standardTime = time;
    setTimer();

    return standardTime;
  };

  this.getAlarmArray = function () {
    return alarmArray;
  };

  this.setAlarmArray = function (array) {
    alarmArray = array;

    return alarmArray;
  };

  this.addAlarmToAlarmArray = function (alarmObj) {
    alarmArray.push(new Alarm(alarmObj));

    return alarmArray;
  };
}
