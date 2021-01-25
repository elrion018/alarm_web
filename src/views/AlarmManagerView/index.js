import { Observer } from '../../library';
import { messages } from '../../constants';
import flatpickr from 'flatpickr';

export default function AlarmManagerView(viewModel, managerContainer) {
  this.viewModel = viewModel;
  this.observer = new Observer();
  this.managerContainer = managerContainer;
  this.eventDelegator = null;

  this.observer.observe(this, this.viewModel);

  this.renderAlarmManager();
}

AlarmManagerView.prototype = {
  renderAlarmManager: function () {
    this.renderContainers();
    this.renderStandardTime();
    this.renderAlarmInput();
    this.renderAlarmList();
    // this.renderAlarmMessagesCotainer();
  },

  renderContainers: function () {
    this.managerContainer.appendChild(
      this.createElementWithAttributes('div', [
        {
          name: 'id',
          value: 'alarm-standard-time-container',
        },
      ])
    );
    this.managerContainer.appendChild(
      this.createElementWithAttributes('div', [
        {
          name: 'id',
          value: 'alarm-input-container',
        },
      ])
    );
    this.managerContainer.appendChild(
      this.createElementWithAttributes('div', [
        {
          name: 'id',
          value: 'alarm-list-container',
        },
      ])
    );
    this.managerContainer.appendChild(
      this.createElementWithAttributes('div', [
        {
          name: 'id',
          value: 'alarm-message-container',
        },
      ])
    );
  },

  renderStandardTime: function () {
    var standardTimeContainerDivTag = this.managerContainer.querySelector(
      '#alarm-standard-time-container'
    );

    this.appendChildrenToElement(
      standardTimeContainerDivTag,
      this.getStandardTimePtags()
    );

    this.managerContainer.appendChild(standardTimeContainerDivTag);
  },

  renderAlarmInput: function () {
    var alarmInputContainerDivTag = this.managerContainer.querySelector(
      '#alarm-input-container'
    );
    var alarmInputHeadingPtag = document.createElement('p');

    alarmInputHeadingPtag.innerHTML = messages.ALARM_INPUT_HEADING;

    this.appendChildrenToElement(
      alarmInputContainerDivTag,
      [alarmInputHeadingPtag]
        .concat(this.getAlarmInputClockModeTags())
        .concat(this.getAlarmTimeSettingTags())
        .concat(this.getAlarmInputAlarmModeTags())
        .concat(this.getAlarmInputContentTags())
        .concat(this.getAlarmInputAddButton())
    );

    this.managerContainer.appendChild(alarmInputContainerDivTag);

    flatpickr('#alarm-input-date-picker', {});
    flatpickr('#alarm-input-time-picker', {
      enableTime: true,
      noCalendar: true,
      dateFormat: 'H:i',
      time_24hr: true,
    });
  },

  renderAlarmList: function () {
    var alarmListContainerDivTag = this.managerContainer.querySelector(
      '#alarm-list-container'
    );
    var alarmListHeadingPtag = document.createElement('p');
    alarmListHeadingPtag.innerHTML = messages.ALARM_LIST;

    this.appendChildrenToElement(alarmListContainerDivTag, [
      alarmListHeadingPtag,
    ]);

    this.managerContainer.appendChild(alarmListContainerDivTag);
  },

  // getAlarmListTags: function() {

  // },

  renderAlarmMessagesCotainer: function () {},

  createElementWithAttributes: function (tagName, attributesObjects) {
    var element = document.createElement(tagName);

    for (var i = 0; i < attributesObjects.length; i++) {
      element[attributesObjects[i].name] = attributesObjects[i].value;
    }

    return element;
  },

  appendChildrenToElement: function (element, children) {
    for (var i = 0; i < children.length; i++) {
      element.appendChild(children[i]);
    }
  },

  getStandardTimePtags: function () {
    var statndardHeadingPtag = document.createElement('p');
    var standardTimePtag = this.createElementWithAttributes('p', [
      {
        name: 'id',
        value: 'alarm-standard-time',
      },
    ]);

    statndardHeadingPtag.innerHTML = messages.STANDARD_HEADING;
    standardTimePtag.innerHTML = 'test';

    return [statndardHeadingPtag, standardTimePtag];
  },

  getClockModeOptions: function () {
    var alarmInputClockModeNormalOptionTag = this.createElementWithAttributes(
      'option',
      [
        { name: 'value', value: messages.CLOCK_MODE_NORMAL },
        { name: 'innerHTML', value: messages.CLOCK_MODE_NORMAL },
      ]
    );
    var alarmInputClockModeVibrationOptionTag = this.createElementWithAttributes(
      'option',
      [
        {
          name: 'value',
          value: messages.CLOCK_MODE_VIBRATION,
        },
        { name: 'innerHTML', value: messages.CLOCK_MODE_VIBRATION },
      ]
    );
    var alarmInputClockModeNightOptionTag = this.createElementWithAttributes(
      'option',
      [
        {
          name: 'value',
          value: messages.CLOCK_MODE_NIGHT,
        },
        { name: 'innerHTML', value: messages.CLOCK_MODE_NIGHT },
      ]
    );

    return [
      alarmInputClockModeNormalOptionTag,
      alarmInputClockModeVibrationOptionTag,
      alarmInputClockModeNightOptionTag,
    ];
  },

  getAlarmModeOptions: function () {
    var alarmInputAlarmModeNormalOptionTag = this.createElementWithAttributes(
      'option',
      [
        { name: 'value', value: messages.ALARM_MODE_NORMAL },
        { name: 'innerHTML', value: messages.ALARM_MODE_NORMAL },
      ]
    );
    var alarmInputAlarmModeEmergencyOptionTag = this.createElementWithAttributes(
      'option',
      [
        {
          name: 'value',
          value: messages.ALARM_MODE_EMERGENCY,
        },
        { name: 'innerHTML', value: messages.ALARM_MODE_EMERGENCY },
      ]
    );

    return [
      alarmInputAlarmModeNormalOptionTag,
      alarmInputAlarmModeEmergencyOptionTag,
    ];
  },

  getAlarmInputClockModeTags: function () {
    var alarmInputClockModePtag = document.createElement('p');
    var alarmInputClockModeSelectTag = this.createElementWithAttributes(
      'select',
      [{ name: 'id', value: 'alarm-input-clock-mode-select' }]
    );
    var clockModeOptions = this.getClockModeOptions();

    alarmInputClockModePtag.innerHTML = messages.CLOCK_MODE;

    this.appendChildrenToElement(
      alarmInputClockModeSelectTag,
      clockModeOptions
    );

    return [alarmInputClockModePtag, alarmInputClockModeSelectTag];
  },

  getAlarmInputAlarmModeTags: function () {
    var alarmInputAlarmModePtag = document.createElement('p');
    var alarmInputAlarmModeSelectTag = this.createElementWithAttributes(
      'select',
      [{ name: 'id', value: 'alarm-input-alarm-mode-select' }]
    );
    var alarmModeOptions = this.getAlarmModeOptions();

    alarmInputAlarmModePtag.innerHTML = messages.ALARM_MODE;

    this.appendChildrenToElement(
      alarmInputAlarmModeSelectTag,
      alarmModeOptions
    );

    return [alarmInputAlarmModePtag, alarmInputAlarmModeSelectTag];
  },

  getAlarmInputContentTags: function () {
    var alarmInputContentPtag = document.createElement('p');
    var alarmInputContentInputTag = this.createElementWithAttributes('input', [
      {
        name: 'id',
        value: 'alarm-input-content-input',
      },
      { name: 'type', value: 'text' },
    ]);

    alarmInputContentPtag.innerHTML = messages.CONTENT;

    return [alarmInputContentPtag, alarmInputContentInputTag];
  },

  getAlarmInputAddButton: function () {
    var alarmInputAddButtonTag = this.createElementWithAttributes('button', [
      {
        name: 'id',
        value: 'alarm-input-add-button',
      },
      { name: 'data-action', value: 'addAlarm' },
      { name: 'innerHTML', value: '알람 추가' },
    ]);

    return [alarmInputAddButtonTag];
  },

  getAlarmTimeSettingTags: function () {
    var alarmInputTimeSettingTag = document.createElement('p');

    alarmInputTimeSettingTag.innerHTML = messages.TIME_SETTING;

    var alarmInputDatePicker = this.createElementWithAttributes('input', [
      {
        name: 'id',
        value: 'alarm-input-date-picker',
      },
      {
        name: 'placeholder',
        value: '날짜를 설정하세요',
      },
    ]);

    var alarmInputTimePicker = this.createElementWithAttributes('input', [
      {
        name: 'id',
        value: 'alarm-input-time-picker',
      },
      {
        name: 'placeholder',
        value: '시간을 설정하세요',
      },
    ]);

    return [
      alarmInputTimeSettingTag,
      alarmInputDatePicker,
      alarmInputTimePicker,
    ];
  },
};
