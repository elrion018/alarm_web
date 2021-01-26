import { Alarm } from '../../models';
import { Publisher } from '../../library';

export default function AlarmManagerModel() {
  this.standardTime = new Date();
  this.alarmArray = [];
  this.activeAlarmArray = [];
  this.publisher = new Publisher();
  this._timer1 = null;

  this.setTimer();
  // this.loadDataFromLocalStorage();
}

AlarmManagerModel.prototype = {
  setTimer: function () {
    var that = this;
    this._timer1 = setInterval(function () {
      that.passStandardTime();
    }, 1000);
  },

  saveDataToLocalStorage: function (key, data) {
    localStorage.setItem(key, JSON.stringify(data));
  },

  loadDataFromLocalStorage: function () {
    // console.log(localStorage);
    if (localStorage['alarmArray']) {
      this.setAlarmArray(JSON.parse(localStorage.getItem('alarmArray')));
    }
  },

  publish: function (callback) {
    this.publisher.publish(callback);
  },

  getStandardTime: function () {
    return this.standardTime;
  },

  setStandardTime: function (time) {
    clearInterval(this._timer1);
    this.standardTime = new Date(time);
    this.setTimer();

    this.publish('setStandardTimeInViewModel');
    this.searchActiveAlarms(this.standardTime);
  },

  passStandardTime: function () {
    var prevMinute = this.standardTime.getMinutes();

    this.standardTime.setMilliseconds(
      this.standardTime.getMilliseconds() + 1000
    );

    var nowMinute = this.standardTime.getMinutes();

    this.publish('setStandardTimeInViewModel');

    if (prevMinute !== nowMinute) {
      this.searchActiveAlarms(this.standardTime);
    }
  },

  getAlarmArray: function () {
    return this.alarmArray;
  },

  setAlarmArray: function (array) {
    var loadedAlarmArray = [];

    for (var i = 0; i < array.length; i++) {
      loadedAlarmArray.push(
        new Alarm({
          alarmTime: new Date(array[i].alarmTime),
          clockMode: array[i].clockMode,
          alarmMode: array[i].alarmMode,
          alarmContent: array[i].alarmContent,
          alarmOnOffState: array[i].alarmOnOffState,
        })
      );
    }

    this.alarmArray = loadedAlarmArray;

    this.alarmArray.sort(function (a, b) {
      return (a.alarmTime || 0) - (b.alarmTime || 0);
    });

    // this.saveDataToLocalStorage('alarmArray', this.alarmArray);

    // console.log(this.alarmArray, 'setAlarmArray');

    return this.alarmArray;
  },

  addAlarmToAlarmArray: function (alarmObject) {
    // console.log('addAlarmToAlarmArray');
    this.alarmArray.push(new Alarm(alarmObject));

    this.alarmArray.sort(function (a, b) {
      return (a.alarmTime || 0) - (b.alarmTime || 0);
    });

    // this.saveDataToLocalStorage('alarmArray', this.alarmArray);

    // console.log(this.alarmArray, 'addAlarmToAlarmArray');
    this.publish('setAlarmArrayInViewModel');
  },

  removeAlarmFromAlarmArray: function (alarmIndex) {
    this.alarmArray.splice(alarmIndex, 1);

    // this.saveDataToLocalStorage('alarmArray', this.alarmArray);

    this.publish('setAlarmArrayInViewModel');
  },

  getActiveAlarmArray: function () {
    return this.activeAlarmArray;
  },

  searchActiveAlarms: function (standardTime) {
    this.activeAlarmArray = [];

    for (var i = 0; i < this.alarmArray.length; i++) {
      if (
        standardTime.toString() === this.alarmArray[i].alarmTime.toString() &&
        this.alarmArray[i].alarmOnOffState
      ) {
        this.activeAlarmArray.push(this.alarmArray[i]);
      }
    }
    console.log('searchActiveAlarms');

    this.publish('setActiveAlarmArrayInViewModel');
  },

  setOnOffStateOfAlarm: function (alarmIndex) {
    // saveDataToLocalStorage('alarmArray', this.alarmArray)
    this.alarmArray[alarmIndex].setAlarmOnOffState(
      !this.alarmArray[alarmIndex].getAlarmOnOffState()
    );

    this.publish('setAlarmArrayInViewModel');
  },
};
