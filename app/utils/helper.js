import {useDispatch} from 'react-redux';
const dispatch = useDispatch();

export function setNotification(content, ms) {
  console.log('setNotification', content);
}
