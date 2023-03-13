import {useEffect, useRef, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from '../../../assets/Icon';
import theme from '../../../components/common/theme';
import TInput from '../../../components/common/TInput';
import debounce from '../../../helper/debounce';
import actions from '../../../redux/actions/actions';

const ICON_SIZE = 23;

export default function SearchTodo() {
  const [value, setValue] = useState('');
  const type = useSelector(state => state.todoOutput.type);
  const dispacth = useDispatch();
  const {current: delaySearch} = useRef(debounce(dispacth, 300));

  let iconColor = type === 'search' ? theme.colors.orange : theme.colors.border;

  const handleSearch = text => {
    setValue(text);
    delaySearch(actions.SEARCH_TODO(text));
  };

  useEffect(() => {
    if (type !== 'search') {
      setValue('');
    }
  }, [type]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Search</Text>
      <View style={styles.inputContainer}>
        <TInput
          value={value}
          onChangeText={handleSearch}
          placeholder="Search todo"
        />
        <Icon
          style={styles.icon}
          name="search"
          size={ICON_SIZE}
          color={iconColor}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginVertical: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    ...theme.fonts.title,
  },
  icon: {
    position: 'absolute',
    right: 10,
  },
});
