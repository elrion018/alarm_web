import { Observer } from '../../library';
import { messages } from '../../constants';

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
    this.renderStandardTimeContainer();
    // this.renderAlarmInputContainer();
    // this.renderAlarmListContainer();
    // this.renderAlarmMessagesCotainer();
  },

  renderStandardTimeContainer: function () {
    var standardTimeContainerDivTag = this.createElementWithAttributes('div', [
      {
        name: 'id',
        value: 'alarm-standard-time-container',
      },
    ]);
    var statndardHeadingPtag = document.createElement('p');
    var standardTimePtag = this.createElementWithAttributes('p', [
      {
        name: 'id',
        value: 'alarm-standard-time',
      },
    ]);

    statndardHeadingPtag.innerHTML = messages.STANDARD_HEADING;
    standardTimePtag.innerHTML = 'test';

    this.appendChildrenToElement(standardTimeContainerDivTag, [
      statndardHeadingPtag,
      standardTimePtag,
    ]);

    this.managerContainer.append(standardTimeContainerDivTag);
  },

  renderAlarmInputContainer: function () {
    var alarmInputContainerDivTag = this.createElementWithAttributes('div', [
      { name: 'id', value: 'alarm-input-container' },
    ]);
  },

  renderAlarmListContainer: function () {},

  renderAlarmMessagesCotainer: function () {},

  createElementWithAttributes: function (tagName, attributesObjects) {
    var element = document.createElement(tagName);

    for (var i = 0; i < attributesObjects.length; i++) {
      element.setAttribute(
        attributesObjects[i].name,
        attributesObjects[i].value
      );
    }

    return element;
  },

  appendChildrenToElement: function (element, children) {
    for (var i = 0; i < children.length; i++) {
      element.appendChild(children[i]);
    }
  },
};
