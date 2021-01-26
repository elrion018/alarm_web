import { Observer } from '../../library';
import { messages } from '../../constants';
import { AlarmManagerViewEventDelegator } from '../../eventDelegators';
import flatpickr from 'flatpickr';

export default function AlarmManagerView(viewModel, managerContainer) {
  this.viewModel = viewModel;
  this.observer = new Observer();
  this.managerContainer = managerContainer;
  this.eventDelegator = new AlarmManagerViewEventDelegator();

  this.eventDelegator.bindEvent(this.managerContainer);
  this.eventDelegator.bindView(this);
  this.eventDelegator.bindViewModel(this.viewModel);
  this.observer.observe(this, this.viewModel);
  this.renderAlarmManager();
}

AlarmManagerView.prototype.renderAlarmManager = function () {
  this.renderContainers();
  this.renderStandardTime();
  this.renderAlarmInput();
  this.renderAlarmList();
  this.renderAlarmMessages();
};

AlarmManagerView.prototype.renderContainers = function () {
  var containers = [
    this.getDivTag('alarm-standard-time-container'),
    this.getDivTag('alarm-input-container'),
    this.getDivTag('alarm-list-container'),
    this.getDivTag('alarm-messages-container'),
  ];

  for (var i = 0; i < containers.length; i++) {
    this.managerContainer.appendChild(containers[i]);
  }
};

AlarmManagerView.prototype.renderStandardTime = function () {
  var standardTimeContainerDivTag = this.managerContainer.querySelector(
    '#alarm-standard-time-container'
  );
  var standardTimeStringContainer = this.getDivTag(
    'alarm-standard-time-string-container'
  );

  this.appendChildrenToElement(
    standardTimeStringContainer,
    this.getStandardTimePtags()
  );

  this.appendChildrenToElement(
    standardTimeContainerDivTag,
    [standardTimeStringContainer]
      .concat(
        this.getButtonTag(
          '현재 시간(기준 시간) 바꾸기',
          'alarm-standard-time-set-button',
          'setStandardTime'
        )
      )
      .concat(this.getStandardTimePickers())
  );

  flatpickr('#alarm-standard-time-date-picker', {});
  flatpickr('#alarm-standard-time-time-picker', {
    enableTime: true,
    noCalendar: true,
    dateFormat: 'H:i:S',
    time_24hr: true,
  });
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

  var alarmListAlarmListContainer = this.getDivTag(
    'alarm-list-alarm-list-container'
  );

  this.appendChildrenToElement(alarmListAlarmListContainer, [
    this.getPtag(messages.ALARM_LIST),
    this.getAlarmListTags(),
  ]);

  this.appendChildrenToElement(alarmListContainerDivTag, [
    alarmListAlarmListContainer,
  ]);
};

AlarmManagerView.prototype.renderAlarmMessages = function () {
  var alarmMessagesContainerDivTag = this.managerContainer.querySelector(
    '#alarm-messages-container'
  );

  var alarmMessagesListContainer = this.getDivTag(
    'alarm-messages-list-container'
  );

  this.appendChildrenToElement(alarmMessagesListContainer, [
    this.getPtag(messages.MESSAGES_LIST),
    this.getAlarmMessagesListTags(),
  ]);

  alarmMessagesContainerDivTag.appendChild(alarmMessagesListContainer);
};

AlarmManagerView.prototype.clearContainer = function (containerId) {
  this.managerContainer.querySelector('#' + containerId).innerHTML = '';
};

AlarmManagerView.prototype.rerenderStandardTimeString = function () {
  this.clearContainer('alarm-standard-time-string-container');
  this.appendChildrenToElement(
    this.managerContainer.querySelector(
      '#alarm-standard-time-string-container'
    ),
    this.getStandardTimePtags()
  );
};

AlarmManagerView.prototype.rerenderAlarmList = function () {
  this.clearContainer('alarm-list-alarm-list-container');
  this.appendChildrenToElement(
    this.managerContainer.querySelector('#alarm-list-alarm-list-container'),
    [this.getPtag(messages.ALARM_LIST), this.getAlarmListTags()]
  );
};

AlarmManagerView.prototype.rerenderAlarmMessages = function () {
  this.clearContainer('alarm-messages-list-container');
  this.appendChildrenToElement(
    this.managerContainer.querySelector('#alarm-messages-list-container'),
    [this.getPtag(messages.MESSAGES_LIST), this.getAlarmMessagesListTags()]
  );
};

AlarmManagerView.prototype.getStandardTimePtags = function () {
  return [
    this.getPtag(messages.STANDARD_HEADING),
    this.getPtag(this.viewModel.getStandardTime(), 'alarm-standard-time'),
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

AlarmManagerView.prototype.createElementWithAttributes = function (
  tagName,
  attributesObjects
) {
  var element = document.createElement(tagName);

  for (var i = 0; i < attributesObjects.length; i++) {
    element[attributesObjects[i].name] = attributesObjects[i].value;
  }

  return element;
};

AlarmManagerView.prototype.appendChildrenToElement = function (
  element,
  children
) {
  for (var i = 0; i < children.length; i++) {
    element.appendChild(children[i]);
  }
};

AlarmManagerView.prototype.getPtag = function (text, idValue) {
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
};

AlarmManagerView.prototype.getButtonTag = function (
  text,
  classValue,
  actionValue
) {
  var attributesObjects = [];

  if (text) {
    attributesObjects.push({ name: 'innerHTML', value: text });
  }

  if (classValue) {
    attributesObjects.push({ name: 'className', value: classValue });
  }

  if (actionValue) {
    attributesObjects.push({ name: 'data-action', value: actionValue });
  }

  return this.createElementWithAttributes('button', attributesObjects);
};

AlarmManagerView.prototype.getInputTag = function (
  idValue,
  typeValue,
  placeholderValue
) {
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
};

AlarmManagerView.prototype.getDivTag = function (idValue) {
  var attributesObjects = [];

  if (idValue) {
    attributesObjects.push({ name: 'id', value: idValue });
  }

  return this.createElementWithAttributes('div', attributesObjects);
};

AlarmManagerView.prototype.getOptionTag = function (text, value) {
  var attributesObjects = [];

  if (text) {
    attributesObjects.push({ name: 'innerHTML', value: text });
  }

  if (value) {
    attributesObjects.push({ name: 'value', value: value });
  }

  return this.createElementWithAttributes('option', attributesObjects);
};

AlarmManagerView.prototype.getSelectTag = function (idValue) {
  var attributesObjects = [];

  if (idValue) {
    attributesObjects.push({ name: 'id', value: idValue });
  }

  return this.createElementWithAttributes('select', attributesObjects);
};

AlarmManagerView.prototype.getAlarmListOlTag = function (idValue) {
  var attributesObjects = [];

  if (idValue) {
    attributesObjects.push({ name: 'id', value: idValue });
  }

  return this.createElementWithAttributes('ol', attributesObjects);
};

AlarmManagerView.prototype.getAlarmListLiTag = function (
  itemIdValue,
  alarmTime,
  clockMode,
  alarmMode,
  content,
  alarmOnOffState
) {
  var attributesObjects = [];

  if (itemIdValue) {
    attributesObjects.push({ name: 'data-itemId', value: itemIdValue });
  }

  if (alarmOnOffState) {
    alarmOnOffState = messages.ON;
  } else {
    alarmOnOffState = messages.OFF;
  }

  var liTag = this.createElementWithAttributes('li', attributesObjects);

  liTag.innerHTML = [
    alarmTime,
    content,
    clockMode + messages.MODE,
    alarmMode + messages.MODE,
    alarmOnOffState,
  ].join(', ');

  var onOffButton = this.getButtonTag(
    messages.ON_OFF,
    'alarm-list-on-off-button',
    'onOffItem'
  );
  var removeButton = this.getButtonTag(
    messages.REMOVE,
    'alarm-list-remove-button',
    'removeItem'
  );

  onOffButton['data-itemId'] = itemIdValue;
  removeButton['data-itemId'] = itemIdValue;

  this.appendChildrenToElement(liTag, [onOffButton, removeButton]);

  return liTag;
};

AlarmManagerView.prototype.getAlarmListTags = function () {
  var alarmListOlTag = this.getAlarmListOlTag('alarm-list-alarm-list');
  var alarmArray = this.viewModel.getAlarmArray();

  for (var i = 0; i < alarmArray.length; i++) {
    alarmListOlTag.appendChild(
      this.getAlarmListLiTag(
        i,
        alarmArray[i].alarmTime,
        alarmArray[i].clockMode,
        alarmArray[i].alarmMode,
        alarmArray[i].alarmContent,
        alarmArray[i].alarmOnOffState
      )
    );
  }

  return alarmListOlTag;
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

AlarmManagerView.prototype.getMessageListOlTag = function (idValue) {
  var attributesObjects = [];

  if (idValue) {
    attributesObjects.push({ name: 'id', value: idValue });
  }

  return this.createElementWithAttributes('ol', attributesObjects);
};

AlarmManagerView.prototype.getAlarmMessagesListTags = function () {
  var alarmMessagesListOlTag = this.getMessageListOlTag('alarm-messages-list');
  var activeAlarmArray = this.viewModel.getActiveAlarmArray();

  for (var i = 0; i < activeAlarmArray.length; i++) {
    alarmMessagesListOlTag.appendChild(
      this.getMessageListLiTag(
        activeAlarmArray[i].alarmTime,
        activeAlarmArray[i].clockMode,
        activeAlarmArray[i].alarmMode,
        activeAlarmArray[i].alarmContent
      )
    );
  }

  return alarmMessagesListOlTag;
};

AlarmManagerView.prototype.getMessageListLiTag = function (
  alarmTime,
  clockMode,
  alarmMode,
  content
) {
  var liTag = document.createElement('li');

  liTag.innerHTML = [alarmTime, content].join(', ');

  if (clockMode === messages.CLOCK_MODE_NORMAL) {
    liTag.innerHTML += ', ' + messages.SOUND;
  }

  if (clockMode === messages.CLOCK_MODE_VIBRATION) {
    liTag.innerText += ', ' + messages.VIBRATION;
  }

  if (
    clockMode === messages.CLOCK_MODE_NIGHT &&
    alarmMode === messages.ALARM_MODE_EMERGENCY
  ) {
    liTag.innerText += ', ' + messages.SOUND;
  }

  return liTag;
};
