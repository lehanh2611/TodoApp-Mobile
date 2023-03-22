import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import theme from './theme';

export default function TButton({buttonStyle, onPress, title, loading}) {
  return (
    <TouchableOpacity
      onPress={loading ? () => {} : onPress}
      style={{...styles.container, ...buttonStyle}}>
      {loading ? (
        <ActivityIndicator size="large" color="#ffffff" />
      ) : (
        <Text style={styles.text}> {title}</Text>
      )}
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
