export default function AlarmManagerModel() {
  let standardTime = new Date();
  let alarmArray = [];
  let that = this;
  // let timer = setInterval(function () {
  //   that.passStandardTime();
  // }, 1000);

  this.passStandardTime = function () {
    standardTime = new Date();
    console.log(standardTime);
  };

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
