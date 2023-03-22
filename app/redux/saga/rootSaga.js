import {
  takeEvery,
  put,
  takeLatest,
  all,
  call,
  delay,
  fork,
} from 'redux-saga/effects';
import {fetchGet, fetchPatch, fetchDelete} from '../../api/storeApi';
import actionID from '../actions/actionID';
import actions from '../actions/actions';

function* updateData() {
  try {
    yield put(actions.UPDATE_DATA(yield call(fetchGet)));
  } catch {
    console.log('updateData error');
  }
}

function* addTodo(action) {
  const payload = action.payload;

  // yield delay(2000);

  try {
    yield fetchPatch({[payload.id]: payload});
    yield put(
      actions.SET_NOTIFICATION({
        status: true,
        text: 'Thêm việc làm thành công',
      }),
    );
  } catch {
    yield put(
      actions.SET_NOTIFICATION({
        status: false,
        text: 'Thêm việc làm thất bại',
      }),
    );
  } finally {
    yield put(actions.UPDATE_DATA_REQUEST());
    yield put(actions.ADD_TODO({loading: payload.loading}));
  }
}

function* deleteTodo(action) {
  const payload = action.payload;
  const type = payload.type;
  const todos =
    type !== 'id' ? Object.values((yield call(fetchGet)) ?? {}) : [];

  // yield delay(2000);

  switch (payload.type) {
    case 'id': {
      try {
        yield call(fetchDelete, '/' + payload.id);
        yield put(
          actions.SET_NOTIFICATION({
            status: true,
            text: 'Xoá việc làm thành công!',
          }),
        );
      } catch {
        yield put(
          actions.SET_NOTIFICATION({
            status: false,
            text: 'Xoá việc làm thất bại!',
          }),
        );
      }
      break;
    }
    case 'all':
      {
        try {
          const listDelete = todos.map(todo =>
            call(fetchDelete, '/' + todo.id),
          );
          yield all(listDelete);
          yield put(
            actions.SET_NOTIFICATION({
              status: true,
              text: 'Thao tác thành công!',
            }),
          );
        } catch {
          yield put(
            actions.SET_NOTIFICATION({
              status: false,
              text: 'Có lỗi rảy ra!',
            }),
          );
        }
      }
      break;
    case 'all-done':
      {
        const listDelete = todos.filter(todo => todo.status === 'finish');
        let isError;
        for (const todo of listDelete) {
          try {
            console.log('call api ...');
            yield call(fetchDelete, '/' + todo.id);
          } catch {
            isError = true;
            break;
          }
        }
        if (isError) {
          yield put(
            actions.SET_NOTIFICATION({
              status: false,
              text: 'Có lỗi rảy ra!',
            }),
          );
        } else {
          yield put(
            actions.SET_NOTIFICATION({
              status: true,
              text: 'Thao tác thành công!',
            }),
          );
        }
      }
      break;
  }

  // yield delay(100);
  yield put(actions.DELETE_TODO({loading: payload.loading}));
  yield put(actions.UPDATE_DATA_REQUEST());
}

function* setStatusTodo(action) {
  try {
    const payload = action.payload;
    yield fetchPatch(
      {status: payload.status ? 'unfinish' : 'finish'},
      '/' + payload.id,
    );
    yield put(actions.SET_STATUS_TODO());
    yield put(actions.UPDATE_DATA_REQUEST());
  } catch {
    yield put(
      actions.SET_NOTIFICATION({
        status: false,
        text: 'Có lỗi rảy ra!',
      }),
    );
  }
}

export default function* rootSaga() {
  yield takeLatest(actionID.UPDATE_DATA_REQUEST, updateData);
  yield takeEvery(actionID.ADD_TODO_REQUEST, addTodo);
  yield takeEvery(actionID.DELETE_TODO_REQUEST, deleteTodo);
  yield takeEvery(actionID.SET_STATUS_TODO_REQUEST, setStatusTodo);
}
