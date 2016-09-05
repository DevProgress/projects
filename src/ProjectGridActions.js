// Todo actions
import AppDispatcher from './Dispatcher';

export function filterGrid(type) {
  AppDispatcher.handleFilterAction({
    actionType: 'FILTER_GRID',
    type: type
  });
}