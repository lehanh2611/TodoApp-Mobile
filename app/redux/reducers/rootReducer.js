import actionID from '../actions/actionID';

const initState = {
  todoList: [],
  todoOutput: {
    type: 'all',
    value: [],
  },
  notification: {
    status: true,
    text: 'Thêm công việc nào!',
    ms: 3000,
  },
  updatingData: false,
};

export default function rootReducer(state = initState, action = {}) {
  const payload = action.payload;
  const todoList = state.todoList;
  const todoOutput = state.todoOutput;
  const type = todoOutput.type;

  switch (action.type) {
    case actionID.START_APP: {
      return state;
    }
    case actionID.UPDATE_DATA_REQUEST: {
      console.log('UPDATE_DATA_REQUEST...');
      return state;
    }
    case actionID.UPDATE_DATA: {
      const data = Object.values(payload ?? {});
      let listOutput = data;
      switch (type) {
        case 'unfinish':
          listOutput = data.filter(todo => todo.status === 'unfinish');
          break;
        case 'finish':
          listOutput = data.filter(todo => todo.status === 'finish');
          break;
      }
      console.log('UPDATE_DATA_REQUEST ===> DONE');
      return {
        ...state,
        todoList: data,
        todoOutput: {
          ...state.todoOutput,
          value: listOutput,
        },
        updatingData: false,
      };
    }
    case actionID.ADD_TODO_REQUEST: {
      console.log('ADD_TODO_REQUEST...');
      payload.loading(true);
      return {
        ...state,
        todoOutput: {
          ...state.todoOutput,
          type: 'all',
        },
        updatingData: true,
      };
    }
    case actionID.ADD_TODO: {
      console.log('ADD_TODO_REQUEST ===> DONE');
      payload.loading(false);
      return state;
    }
    case actionID.DELETE_TODO_REQUEST: {
      console.log('DELETE_TODO_REQUEST...');
      payload.loading(true);

      return {
        ...state,
        todoOutput: {
          ...state.todoOutput,
        },
        updatingData: true,
      };
    }
    case actionID.DELETE_TODO: {
      console.log('DELETE_TODO_REQUEST ===> DONE');
      payload.loading(false);
      return state;
    }
    case actionID.SET_STATUS_TODO_REQUEST: {
      console.log('SET_STATUS_TODO_REQUEST...');
      return state;
    }
    case actionID.SET_STATUS_TODO: {
      console.log('SET_STATUS_TODO ===> DONE');

      return state;
    }
    case actionID.SEARCH_TODO: {
      return {
        ...state,
        todoOutput: {
          ...todoOutput,
          type: payload === '' ? 'all' : 'search',
          value: todoList.filter(todo => todo.name.includes(payload)),
        },
      };
    }
    case actionID.FILTER_TODO: {
      let output;
      switch (payload) {
        case 'all':
          {
            output = todoList;
          }
          break;
        case 'unfinish':
          {
            output = todoList.filter(todo => todo.status === 'unfinish');
          }
          break;
        case 'finish':
          {
            output = todoList.filter(todo => todo.status === 'finish');
          }
          break;
        default:
          output = todoList;
      }
      return {
        ...state,
        todoOutput: {
          ...todoOutput,
          type: payload,
          value: output,
        },
      };
    }
    case actionID.SET_NOTIFICATION: {
      return {
        ...state,
        notification: {...state.notification, ...payload},
      };
    }
    default:
      return state;
  }
}
