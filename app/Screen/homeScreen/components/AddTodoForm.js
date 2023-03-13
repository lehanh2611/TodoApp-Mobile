import {useState} from 'react';
import {StyleSheet, View, Text, Keyboard} from 'react-native';
import {useDispatch} from 'react-redux';
import uuid from 'react-native-uuid';
import TInput from '../../../components/common/TInput';
import TButton from '../../../components/common/TButton';
import theme from '../../../components/common/theme';
import actions from '../../../redux/actions/actions';

export default function AddTodoForm() {
  const [value, setValue] = useState('');
  const dispacth = useDispatch();
  const generateId = uuid.v4();

  return (
    <View>
      <Text style={styles.title}>Todo Input</Text>
      <TInput
        inputStyle={styles.input}
        value={value}
        onChangeText={e => setValue(e)}
        placeholder="Add new todo"
        selectionColor={theme.colors.primary}
      />
      <TButton
        onPress={() => {
          if (!value) {
            return;
          }
          dispacth(actions.ADD_TODO({id: generateId, name: value}));
          setValue('');
          Keyboard.dismiss();
        }}
        buttonStyle={styles.button}
        title="Add new task"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...theme.fonts.title,
  },
  input: {
    width: '100%',
    borderColor: theme.colors.borderColor,
    borderRadius: 999,
  },
  button: {
    marginVertical: 20,
    width: '100%',
  },
});
