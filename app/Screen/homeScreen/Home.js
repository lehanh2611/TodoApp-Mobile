import {StyleSheet, View} from 'react-native';
import AddTodoForm from './components/AddTodoForm';
import SelectType from './components/SelectType';
import SearchTodo from './components/SearchTodo';
import TodoList from './components/TodoList';
import ButtonBox from './components/ButtonBox';
import dimensions from './components/device/dimensions';

export default function Home() {
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
