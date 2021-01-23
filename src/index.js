import { AlarmManagerModel } from './models';

const managerModel = new AlarmManagerModel();

function test() {
  console.log('call');
}

let timer = setInterval(test, 1000);
