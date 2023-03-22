const todo =
  'https://todoapp-c0447-default-rtdb.asia-southeast1.firebasedatabase.app';

function getApi() {
  const random = Math.floor(Math.random() * 10);
  // return todo;
  // return 'https://abc';
  return random <= 6 ? todo : 'https://abc';
}
getApi();

export function fetchGet(path = '/') {
  console.log('fetchGet');
  return fetch(`${todo}${path}.json`).then(response => response.json());
}

export function fetchPut(value, path = '/') {
  console.log('fetchPut');
  return fetch(`${getApi()}${path}.json`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });
}

export function fetchPatch(value, path = '/') {
  console.log('fetchPatch');
  return fetch(`${getApi()}${path}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  }).then(response => response.json());
}

export function fetchDelete(path = '/') {
  console.log('fetchDelete');
  return fetch(`${getApi()}${path}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
