import { EventDelegator } from '../../library';

export default function AlarmManagerViewEventDelegator() {}

AlarmManagerViewEventDelegator.prototype = Object.create(
  EventDelegator.prototype
);

AlarmManagerViewEventDelegator.prototype.constructor = AlarmManagerViewEventDelegator;
