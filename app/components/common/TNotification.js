import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import theme from './theme';
import useNotification from '../../hooks/useNotification';

export default function TNotification() {
  const {status, text, ms} = useSelector(state => state.notification);
  const setNotification = useNotification();
  const {green, red} = theme.colors;
  let timerID;

  useEffect(() => {
    timerID = setTimeout(() => {
      setNotification();
    }, ms);
    return () => clearTimeout(timerID);
  }, [text]);

  return (
    text && (
      <View
        style={{
          ...styles.container,
          backgroundColor: status ? green : red,
        }}>
        <Text style={styles.content}>{text}</Text>
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'flex-end',
    top: 0,
    right: 0,
    marginTop: 5,
    marginRight: 5,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  content: {
    fontSize: 16,
    color: theme.colors.default,
    fontWeight: '900',
    letterSpacing: 0.2,
    textAlign: 'center',
    paddingHorizontal: 6,
    paddingVertical: 3,
  },
});
