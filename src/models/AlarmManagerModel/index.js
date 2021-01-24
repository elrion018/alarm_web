export default function AlarmManagerModel() {
  var standardTime = new Date();
  var alarmArray = [];
  var timer = null;
  var that = this;

  setTimer();

  function setTimer() {
    that.timer = setInterval(function () {
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
    clearInterval(that.timer);
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
}
