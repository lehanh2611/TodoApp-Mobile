import {useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import theme from './theme';

export default function TInput({inputStyle, ...props}) {
  const [borderColor, setBorderColor] = useState(theme.colors.border);

  return (
    <TextInput
      {...props}
      onFocus={() => setBorderColor(theme.colors.primary)}
      onEndEditing={() => setBorderColor(theme.colors.border)}
      style={{...styles.input, ...inputStyle, borderColor: borderColor}}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '100%',
    borderWidth: 1,
    borderRadius: 999,
    paddingHorizontal: 10,
  },
});
