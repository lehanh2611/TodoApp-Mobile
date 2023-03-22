import {useState} from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import TButton from '../../../components/common/TButton';
import theme from '../../../components/common/theme';
import actions from '../../../redux/actions/actions';

export default function ButtonBox() {
  const [loadingDeleteAll, setLoadingDeleteAll] = useState(false);
  const [loadingDeleteDone, setLoadingDeleteDone] = useState(false);
  const dispacth = useDispatch();

  return (
    <View style={styles.container}>
      <TButton
        title="Delete All"
        buttonStyle={styles.button}
        loading={loadingDeleteAll}
        onPress={() =>
          dispacth(
            actions.DELETE_TODO_REQUEST({
              type: 'all',
              loading: setLoadingDeleteAll,
            }),
          )
        }
      />
      <TButton
        title="Delete All Done"
        buttonStyle={styles.button}
        loading={loadingDeleteDone}
        onPress={() =>
          dispacth(
            actions.DELETE_TODO_REQUEST({
              type: 'all-done',
              loading: setLoadingDeleteDone,
            }),
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  button: {
    width: '45%',
    backgroundColor: theme.colors.red,
  },
});
