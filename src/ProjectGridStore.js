
import AppDispatcher from './Dispatcher';
import { EventEmitter } from 'events';

const CHANGE_EVENT = 'change';

let store = {
  activeGridFilter: 'Shipped',
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

const ProjectGridStore = new ProjectGridStoreClass();

AppDispatcher.register((payload) => {

  switch (payload.type.actionType) {

  case "FILTER_GRID":
    store.activeGridFilter = payload.type.type;
    ProjectGridStore.emit(CHANGE_EVENT);
    break;

  default:
    return true;
  }
});

export default ProjectGridStore;