import clickDownload from 'client-csv';
import papa from 'papaparse';
import AppDispatcher from './Dispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let store = {
  activeGridFilter: 'Live',
};

class ProjectGridStoreClass extends EventEmitter {

  addChangeListener(cb) {
    this.on(CHANGE_EVENT, cb);
  }

  removeChangeListener(cb) {
    this.removeListener(CHANGE_EVENT, cb);
  }

  getActiveFilter() {
    return store;
  }

}

function downloadCSV() {
  var projects = require('./ProjectData.json');
  var csvData = papa.unparse(projects);
  var anchor = document.createElement('a');
  clickDownload(anchor, function(encode) {
    return {
      filename: 'projects.csv',
      contents: encode.text(csvData),
    };
  });
  anchor.click();
}

const ProjectGridStore = new ProjectGridStoreClass();

AppDispatcher.register((payload) => {

  switch (payload.action.actionType) {

  case "FILTER_GRID":
    store.activeGridFilter = payload.action.filter;
    ProjectGridStore.emit(CHANGE_EVENT);
    break;

  case "DOWNLOAD_CSV":
    downloadCSV();
    break;

  default:
    return true;
  }
});

export default ProjectGridStore;