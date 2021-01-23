export default function AlarmManagerModel() {
  let standardTime = Date();
  let alarmArray = [];

  this.getStandardTime = function () {
    return standardTime;
  };

  this.setStandardTime = function (time) {
    standardTime = time;

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
