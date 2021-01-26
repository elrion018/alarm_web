import 'regenerator-runtime/runtime';

import { AlarmManagerModel } from './models';
import { AlarmManagerViewModel } from './viewModels';
import { AlarmManagerView } from './views';

window.addEventListener('DOMContentLoaded', function () {
  var managerContainer = document.querySelector('#manager-container');
  var managerModel = new AlarmManagerModel();
  var managerViewModel = new AlarmManagerViewModel(managerModel);
  var managerView = new AlarmManagerView(managerViewModel, managerContainer);
});
