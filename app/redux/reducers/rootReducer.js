import actionID from '../actions/actionID';

const initState = {
  todoList: [
    {
      id: 0,
      name: 'Learn Javscript',
      status: 'finish',
    },
    {
      id: 1,
      name: 'Learn ReactJS',
      status: 'unfinish',
    },
    {
      id: 2,
      name: 'Learn React Native',
      status: 'unfinish',
    },
    {
      id: 3,
      name: 'Learn Javscript',
      status: 'finish',
    },
    {
      id: 4,
      name: 'Learn ReactJS',
      status: 'unfinish',
    },
    {
      id: 5,
      name: 'Learn React Native',
      status: 'unfinish',
    },
    {
      id: 6,
      name: 'Learn Javscript',
      status: 'finish',
    },
    {
      id: 7,
      name: 'Learn ReactJS',
      status: 'unfinish',
    },
    {
      id: 8,
      name: 'Learn React Native',
      status: 'unfinish',
    },
    {
      id: 10,
      name: 'Learn Javscript',
      status: 'finish',
    },
    {
      id: 11,
      name: 'Learn ReactJS',
      status: 'unfinish',
    },
    {
      id: 12,
      name: 'Learn React Native',
      status: 'unfinish',
    },
    {
      id: 13,
      name: 'Learn Javscript',
      status: 'finish',
    },
    {
      id: 14,
      name: 'Learn ReactJS',
      status: 'unfinish',
    },
    {
      id: 15,
      name: 'Learn React Native',
      status: 'unfinish',
    },
    {
      id: 16,
      name: 'Learn Javscript',
      status: 'finish',
    },
    {
      id: 17,
      name: 'Learn ReactJS',
      status: 'unfinish',
    },
    {
      id: 18,
      name: 'Learn React Native',
      status: 'unfinish',
    },
  ],
  todoOutput: {
    type: 'all',
    value: [],
    inputHistory: null,
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
          newList = newList.filter(todo => todo.status === 'unfinish');
          break;
        case 'finish':
          newList = newList.filter(todo => todo.status === 'finish');
          break;
      }
      return {
        ...state,
        todoList: newList,
        todoOutput: {
          ...todoOutput,
          value: newList,
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
          type: 'all',
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
          inputHistory: payload,
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
