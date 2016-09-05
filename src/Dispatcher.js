import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {

  handleFilterAction(type) {
  	console.info('Dispatcher', type);

    this.dispatch({
      source: 'FILTER_GRID',
      type: type,
    });
  }

}

const AppDispatcher = new DispatcherClass();
export default AppDispatcher;