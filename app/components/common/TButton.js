import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import theme from './theme';

export default function TButton({buttonStyle, onPress, title}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.container, ...buttonStyle}}>
      <Text style={styles.text}> {title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: theme.colors.primary,
    height: 40,
  },
  text: {
    color: theme.colors.default,
    fontWeight: 400,
    fontSize: 20,
  },
});
