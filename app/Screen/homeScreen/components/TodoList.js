import {React, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Icon from '../../../assets/Icon';
import theme from '../../../components/common/theme';
import TUpdate from '../../../components/common/TUpdate';
import actions from '../../../redux/actions/actions';

export default function TodoList() {
  const updatingData = useSelector(state => state.updatingData);
  const todos = useSelector(state => state.todoOutput);
  const dispacth = useDispatch();
  const ICON_SIZE = 22;
  const isEmpty = todos.value?.length === 0;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo List</Text>
      {updatingData ? (
        <TUpdate />
      ) : (
        <>
          {isEmpty ? (
            <Text style={styles.titleEmpty}>Todo Empty</Text>
          ) : (
            <FlatList
              style={styles.list}
              data={todos.value}
              renderItem={element => {
                const item = element.item;
                const isFinish = item.status === 'finish';
                if (!item) {
                  return;
                }
                return (
                  <View key={element.index} style={styles.item}>
                    <Text style={styles.itemTitle}>{item.name}</Text>
                    <Icon
                      name="check"
                      style={styles.icon}
                      size={ICON_SIZE}
                      color={
                        isFinish ? theme.colors.green : theme.colors.border
                      }
                      onPress={() =>
                        dispacth(
                          actions.SET_STATUS_TODO_REQUEST({
                            id: item.id,
                            status: isFinish,
                          }),
                        )
                      }
                    />
                    <Icon
                      name="delete"
                      style={styles.icon}
                      size={ICON_SIZE}
                      color={theme.colors.red}
                      onPress={() =>
                        dispacth(
                          actions.DELETE_TODO_REQUEST({
                            id: item.id,
                            type: 'id',
                            loading: () => {},
                          }),
                        )
                      }
                    />
                  </View>
                );
              }}
            />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...theme.fonts.title,
  },
  titleEmpty: {
    textAlign: 'center',
    marginTop: 180,
    fontSize: 20,
    color: theme.colors.border,
  },
  list: {
    flex: 1,
    marginBottom: 50,
  },
  item: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: theme.colors.border,
    padding: 5,
    marginVertical: 5,
  },
  itemTitle: {
    flex: 1,
  },
  icon: {
    marginHorizontal: 5,
  },
});
