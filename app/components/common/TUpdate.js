import {StyleSheet, Text, View} from 'react-native';
import React, {useRef, useState} from 'react';

export default function TUpdate() {
  const [dotLoading, setDotLoading] = useState('');
  const timerID = useRef();

  timerID.current = setTimeout(() => {
    if (dotLoading.length >= 3) {
      setDotLoading('');
    } else {
      setDotLoading(dotLoading + '.');
    }
  }, 300);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.text}>Updating</Text>
        <Text style={styles.dot}>{dotLoading}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapper: {
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    fontSize: 20,
    textTransform: 'uppercase',
  },
  dot: {
    fontSize: 20,
    position: 'absolute',
    left: 96,
    bottom: 2,
    textAlign: 'right',
  },
});
