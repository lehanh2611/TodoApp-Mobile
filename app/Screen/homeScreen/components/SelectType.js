import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import TButton from '../../../components/common/TButton';
import theme from '../../../components/common/theme';
import actions from '../../../redux/actions/actions';
import dimensions from './device/dimensions';

export default function SelectType() {
  const type = useSelector(state => state.todoOutput.type);
  const dispacth = useDispatch();
  const buttons = [
    {title: 'All', type: 'all'},
    {
      title: 'Todo',
      type: 'unfinish',
    },
    {
      title: 'Done',
      type: 'finish',
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo Type</Text>
      <FlatList
        contentContainerStyle={{...styles.buttonWraper}}
        data={buttons}
        renderItem={element => {
          const item = element.item;
          let style = styles.button;

          if (type === item.type) {
            style = {...style, backgroundColor: theme.colors.orange};
          }

          return (
            <TButton
              title={item.title}
              onPress={() => dispacth(actions.FILTER_TODO(item.type))}
              buttonStyle={style}
            />
          );
        }}></FlatList>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
  },
  title: {
    ...theme.fonts.title,
  },
  buttonWraper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: theme.colors.border,
    width: dimensions.with / 3 - 20,
  },
});
