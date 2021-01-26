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
    var containers = [
      this.getDivTag('alarm-standard-time-container'),
      this.getDivTag('alarm-input-container'),
      this.getDivTag('alarm-list-container'),
      this.getDivTag('alarm-message-container'),
    ];

    for (var i = 0; i < containers.length; i++) {
      this.managerContainer.appendChild(containers[i]);
    }
  },

  renderStandardTime: function () {
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
  },

  getStandardTimePickers: function () {
    return [
      this.getInputTag(
        'alarm-input-date-picker',
        'text',
        '기준 시간의 날짜를 설정하세요'
      ),
      this.getInputTag(
        'alarm-input-time-picker',
        'text',
        '기준 시간의 시간을 설정하세요'
      ),
    ];
  },

  renderAlarmInput: function () {
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
    return [
      this.getPtag(messages.STANDARD_HEADING),
      this.getPtag('test', 'alarm-standard-time'),
    ];
  },

  getClockModeOptions: function () {
    return [
      this.getOptionTag(messages.CLOCK_MODE_NORMAL, messages.CLOCK_MODE_NORMAL),
      this.getOptionTag(
        messages.CLOCK_MODE_VIBRATION,
        messages.CLOCK_MODE_VIBRATION
      ),
      this.getOptionTag(messages.CLOCK_MODE_NIGHT, messages.CLOCK_MODE_NIGHT),
    ];
  },

  getAlarmModeOptions: function () {
    return [
      this.getOptionTag(messages.ALARM_MODE_NORMAL, messages.ALARM_MODE_NORMAL),
      this.getOptionTag(
        messages.ALARM_MODE_EMERGENCY,
        messages.ALARM_MODE_EMERGENCY
      ),
    ];
  },

  getAlarmInputClockModeTags: function () {
    var alarmInputClockModeSelectTag = this.getSelectTag(
      'alarm-input-clock-mode-select'
    );

    this.appendChildrenToElement(
      alarmInputClockModeSelectTag,
      this.getClockModeOptions()
    );

    return [this.getPtag(messages.CLOCK_MODE), alarmInputClockModeSelectTag];
  },

  getAlarmInputAlarmModeTags: function () {
    var alarmInputAlarmModeSelectTag = this.getSelectTag(
      'alarm-input-alarm-mode-select'
    );

    this.appendChildrenToElement(
      alarmInputAlarmModeSelectTag,
      this.getAlarmModeOptions()
    );

    return [this.getPtag(messages.ALARM_MODE), alarmInputAlarmModeSelectTag];
  },

  getAlarmInputContentTags: function () {
    return (
      this.getPtag(messages.CONTENT),
      this.getInputTag(
        'alarm-input-content-input',
        'text',
        '알람 내용을 입력해주세요.'
      )
    );
  },

  getAlarmInputTimeSettingTags: function () {
    return [this.getPtag(messages.TIME_SETTING)].concat(
      this.getAlarmInputDatePickers()
    );
  },

  getAlarmInputDatePickers: function () {
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
  },

  getPtag: function (text, idValue) {
    var pTag;

    if (idValue) {
      pTag = this.createElementWithAttributes('p', [
        {
          name: 'id',
          value: idValue,
        },
      ]);

      pTag.innerHTML = text;

      return pTag;
    }

    pTag = document.createElement('p');
    pTag.innerHTML = text;

    return pTag;
  },

  getButtonTag: function (text, idValue, actionValue) {
    var attributesObjects = [];

    if (text) {
      attributesObjects.push({ name: 'innerHTML', value: text });
    }

    if (idValue) {
      attributesObjects.push({ name: 'id', value: idValue });
    }

    if (actionValue) {
      attributesObjects.push({ name: 'data-action', value: actionValue });
    }

    return this.createElementWithAttributes('button', attributesObjects);
  },

  getInputTag: function (idValue, typeValue, placeholderValue) {
    var attributesObjects = [];

    if (idValue) {
      attributesObjects.push({ name: 'id', value: idValue });
    }

    if (typeValue) {
      attributesObjects.push({ name: 'type', value: typeValue });
    }

    if (placeholderValue) {
      attributesObjects.push({ name: 'placeholder', value: placeholderValue });
    }

    return this.createElementWithAttributes('input', attributesObjects);
  },

  getDivTag: function (idValue) {
    var attributesObjects = [];

    if (idValue) {
      attributesObjects.push({ name: 'id', value: idValue });
    }

    return this.createElementWithAttributes('div', attributesObjects);
  },

  getOptionTag: function (text, value) {
    var attributesObjects = [];

    if (text) {
      attributesObjects.push({ name: 'innerHTML', value: text });
    }

    if (value) {
      attributesObjects.push({ name: 'value', value: value });
    }

    return this.createElementWithAttributes('option', attributesObjects);
  },

  getSelectTag: function (idValue) {
    var attributesObjects = [];

    if (idValue) {
      attributesObjects.push({ name: 'id', value: idValue });
    }

    return this.createElementWithAttributes('select', attributesObjects);
  },
};
