import { AlarmManagerModel } from './models';
import { AlarmManagerViewModel } from './viewModels';

var managerModel = new AlarmManagerModel();
var managerViewModel = new AlarmManagerViewModel(managerModel);

// console.log(managerModel.getStandardTime());

// console.log(managerModel.setStandardTime(new Date('1997-12-17T03:24:00')));

console.log(
  managerModel.addAlarmToAlarmArray({
    alarmTime: new Date(),
    clockMode: 'test',
    alarmMode: 'test',
    alarmContent: 'test',
    alarmOnOffState: true,
  })
);

console.log(
  managerModel.addAlarmToAlarmArray({
    alarmTime: new Date('1997-12-17T03:24:00'),
    clockMode: 'test',
    alarmMode: 'test',
    alarmContent: 'test',
    alarmOnOffState: true,
  })
);

console.log(
  managerModel.addAlarmToAlarmArray({
    alarmTime: new Date('1992-12-17T03:24:00'),
    clockMode: 'test',
    alarmMode: 'test',
    alarmContent: 'test',
    alarmOnOffState: true,
  })
);

console.log(managerModel.setOnOffStateOfAlarm(1));
console.log(managerModel.getAlarmArray());
