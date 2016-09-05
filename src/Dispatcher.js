import { Dispatcher } from 'flux';

class DispatcherClass extends Dispatcher {

  handleFilterAction(action) {

    this.dispatch({
      action: action
    });
  }

}

const AppDispatcher = new DispatcherClass();
export default AppDispatcher;