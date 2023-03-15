import actionID from '../actions/actionID';

const initState = {
  todoList: [],
  todoOutput: {
    type: 'all',
    value: [],
  },
};

export default function rootReducer(state = initState, action = {}) {
  const payload = action.payload;
  const todoList = state.todoList;
  const todoOutput = state.todoOutput;
  const type = todoOutput.type;

  switch (action.type) {
    case actionID.ADD_TODO: {
      const newList = [
        ...todoList,
        {
          id: payload.id,
          name: payload.name,
          status: 'unfinish',
        },
      ];
      return {
        ...state,
        todoList: newList,
        todoOutput: {
          ...todoOutput,
          value: newList,
          type: 'all',
        },
      };
    }
    case actionID.DELETE_TODO: {
      const item = payload.todo;
      let newList;
      let outputList = [];
      switch (payload.type) {
        case 'id':
          newList = todoList.filter(todo => item.id !== todo.id);
          break;
        case 'all':
          newList = [];
          break;
        case 'all-done':
          newList = todoList.filter(todo => todo.status !== 'finish');
          break;
        default:
          newList = todoList;
      }
      switch (type) {
        case 'unfinish':
          outputList = newList.filter(todo => todo.status === 'unfinish');
          break;
        case 'finish':
          outputList = newList.filter(todo => todo.status === 'finish');
          break;
      }
      return {
        ...state,
        todoOutput: {
          ...todoOutput,
          value: outputList,
        },
      };
    }
    case actionID.SET_STATUS_TODO: {
      const item = payload.todo;
      const newList = todoList.map(todo => {
        if (todo.id === item.id) {
          return {...item, status: payload.status ? 'unfinish' : 'finish'};
        }
        return todo;
      });
      return {
        ...state,
        todoList: newList,
        todoOutput: {
          ...todoOutput,
          value: newList,
        },
      };
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
    default:
      return state;
  }
}
