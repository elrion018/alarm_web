import { AlarmManagerModel } from './models';

var managerModel = new AlarmManagerModel();

console.log(managerModel.getStandardTime());

managerModel.setStandardTime(new Date('1997-12-17T03:24:00'));
