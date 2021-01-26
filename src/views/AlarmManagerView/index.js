import { Observer } from '../../library';
import { messages } from '../../constants';
import { ViewComponent } from '../../library';
import flatpickr from 'flatpickr';

export default function AlarmManagerView(viewModel, managerContainer) {
  this.viewModel = viewModel;
  this.observer = new Observer();
  this.managerContainer = managerContainer;
  this.eventDelegator = null;

  this.observer.observe(this, this.viewModel);

  console.log(this);

  this.renderAlarmManager();
}

AlarmManagerView.prototype = Object.create(ViewComponent.prototype);
AlarmManagerView.prototype.constructor = AlarmManagerView;

AlarmManagerView.prototype.renderAlarmManager = function () {
  this.renderContainers();
  this.renderStandardTime();
  this.renderAlarmInput();
  this.renderAlarmList();
  // this.renderAlarmMessagesCotainer();
};

AlarmManagerView.prototype.renderContainers = function () {
  var containers = [
    this.getDivTag('alarm-standard-time-container'),
    this.getDivTag('alarm-input-container'),
    this.getDivTag('alarm-list-container'),
    this.getDivTag('alarm-message-container'),
  ];

  for (var i = 0; i < containers.length; i++) {
    this.managerContainer.appendChild(containers[i]);
  }
};

AlarmManagerView.prototype.renderStandardTime = function () {
  var standardTimeContainerDivTag = this.managerContainer.querySelector(
    '#alarm-standard-time-container'
  );

  this.appendChildrenToElement(
    standardTimeContainerDivTag,
    this.getStandardTimePtags()
      .concat(
        this.getButtonTag(
          '현재 시간(기준 시간) 바꾸기',
          'alarm-standard-time-set-button',
          'setStandardTime'
        )
      )
      .concat(this.getStandardTimePickers())
  );

  this.managerContainer.appendChild(standardTimeContainerDivTag);
  flatpickr('#alarm-standard-time-date-picker', {});
  flatpickr('#alarm-standard-time-time-picker', {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true,
  });
};

AlarmManagerView.prototype.getStandardTimePickers = function () {
  return [
    this.getInputTag(
      'alarm-standard-time-date-picker',
      'text',
      '기준 시간의 날짜를 설정하세요'
    ),
    this.getInputTag(
      'alarm-standard-time-time-picker',
      'text',
      '기준 시간의 시간을 설정하세요'
    ),
  ];
};

AlarmManagerView.prototype.renderAlarmInput = function () {
  var alarmInputContainerDivTag = this.managerContainer.querySelector(
    '#alarm-input-container'
  );

  this.appendChildrenToElement(
    alarmInputContainerDivTag,
    [this.getPtag(messages.ALARM_INPUT_HEADING)]
      .concat(this.getAlarmInputClockModeTags())
      .concat(this.getAlarmInputTimeSettingTags())
      .concat(this.getAlarmInputAlarmModeTags())
      .concat(this.getAlarmInputContentTags())
      .concat(
        this.getButtonTag('알람 추가', 'alarm-input-add-button', 'addAlarm')
      )
  );

  this.managerContainer.appendChild(alarmInputContainerDivTag);

  flatpickr('#alarm-input-date-picker', {});
  flatpickr('#alarm-input-time-picker', {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i',
    time_24hr: true,
  });
};
AlarmManagerView.prototype.renderAlarmList = function () {
  var alarmListContainerDivTag = this.managerContainer.querySelector(
    '#alarm-list-container'
  );
  var alarmListHeadingPtag = document.createElement('p');
  alarmListHeadingPtag.innerHTML = messages.ALARM_LIST;

  this.appendChildrenToElement(alarmListContainerDivTag, [
    alarmListHeadingPtag,
  ]);

  this.managerContainer.appendChild(alarmListContainerDivTag);
};

AlarmManagerView.prototype.getAlarmListTags = function () {};

AlarmManagerView.prototype.renderAlarmMessagesCotainer = function () {};

AlarmManagerView.prototype.getStandardTimePtags = function () {
  return [
    this.getPtag(messages.STANDARD_HEADING),
    this.getPtag('test', 'alarm-standard-time'),
  ];
};

AlarmManagerView.prototype.getClockModeOptions = function () {
  return [
    this.getOptionTag(messages.CLOCK_MODE_NORMAL, messages.CLOCK_MODE_NORMAL),
    this.getOptionTag(
      messages.CLOCK_MODE_VIBRATION,
      messages.CLOCK_MODE_VIBRATION
    ),
    this.getOptionTag(messages.CLOCK_MODE_NIGHT, messages.CLOCK_MODE_NIGHT),
  ];
};

AlarmManagerView.prototype.getAlarmModeOptions = function () {
  return [
    this.getOptionTag(messages.ALARM_MODE_NORMAL, messages.ALARM_MODE_NORMAL),
    this.getOptionTag(
      messages.ALARM_MODE_EMERGENCY,
      messages.ALARM_MODE_EMERGENCY
    ),
  ];
};

AlarmManagerView.prototype.getAlarmInputClockModeTags = function () {
  var alarmInputClockModeSelectTag = this.getSelectTag(
    'alarm-input-clock-mode-select'
  );

  this.appendChildrenToElement(
    alarmInputClockModeSelectTag,
    this.getClockModeOptions()
  );

  return [this.getPtag(messages.CLOCK_MODE), alarmInputClockModeSelectTag];
};

AlarmManagerView.prototype.getAlarmInputAlarmModeTags = function () {
  var alarmInputAlarmModeSelectTag = this.getSelectTag(
    'alarm-input-alarm-mode-select'
  );

  this.appendChildrenToElement(
    alarmInputAlarmModeSelectTag,
    this.getAlarmModeOptions()
  );

  return [this.getPtag(messages.ALARM_MODE), alarmInputAlarmModeSelectTag];
};

AlarmManagerView.prototype.getAlarmInputContentTags = function () {
  return (
    this.getPtag(messages.CONTENT),
    this.getInputTag(
      'alarm-input-content-input',
      'text',
      '알람 내용을 입력해주세요.'
    )
  );
};

AlarmManagerView.prototype.getAlarmInputTimeSettingTags = function () {
  return [this.getPtag(messages.TIME_SETTING)].concat(
    this.getAlarmInputDatePickers()
  );
};

AlarmManagerView.prototype.getAlarmInputDatePickers = function () {
  return [
    this.getInputTag(
      'alarm-input-date-picker',
      'text',
      '알람을 원하는 날짜를 설정하세요'
    ),
    this.getInputTag(
      'alarm-input-time-picker',
      'text',
      '알람을 원하는 시간을 설정하세요'
    ),
  ];
};
