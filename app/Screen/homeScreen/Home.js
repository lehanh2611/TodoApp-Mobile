import {useDispatch} from 'react-redux';
import {StyleSheet, View} from 'react-native';
import AddTodoForm from './components/AddTodoForm';
import SelectType from './components/SelectType';
import SearchTodo from './components/SearchTodo';
import TodoList from './components/TodoList';
import ButtonBox from './components/ButtonBox';
import dimensions from './components/device/dimensions';
import actions from '../../redux/actions/actions';
import {useLayoutEffect} from 'react';

export default function Home() {
  const dispacth = useDispatch();
  useLayoutEffect(() => {
    dispacth(actions.UPDATE_DATA_REQUEST());
  }, []);

  // const promise1 = new Promise((resolve, reject) => {
  //   resolve(1);
  // });
  // const promise2 = new Promise((resolve, reject) => {
  //   // resolve(2);
  //   setTimeout(() => {
  //     reject('error1');
  //     console.log('promise2');
  //   }, 1000);
  // });
  // const promise3 = new Promise((resolve, reject) => {
  //   console.log('promise3');
  //   // resolve(3);
  //   reject('error2');
  // });

  // const result = Promise.allSettled([promise1, promise2, promise3])
  //   .then(output => {
  //     console.log('Promise====', output);
  //   })
  //   .catch(output => {
  //     console.log('Promise====', output);
  //   });

  // console.log('Promise====', result);

  return (
    <View style={styles.container}>
      <AddTodoForm />
      <SelectType />
      <SearchTodo />
      <TodoList />
      <ButtonBox />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    minHeight: dimensions.height,
    flex: 1,
    padding: 10,
  },
});
