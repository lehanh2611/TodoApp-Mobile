import {useDispatch} from 'react-redux';
import actions from '../redux/actions/actions';

export default function useNotification() {
  const dispacth = useDispatch();
  return (text = '', ms = 3000) => {
    dispacth(actions.SET_NOTIFICATION({text: text, ms: ms}));
  };
}
