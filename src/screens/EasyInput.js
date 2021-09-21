import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function EasyInput({
  title,
  placeholder,
  styleInput,
  disabled,
  _value,
  onChangeText,
  ...rest
}) {
  const [text, setText] = useState('')
  useEffect (() => {
    setText(_value)
  }, [_value])
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, styleInput, disabled && styles.disabled]}
        value={text}
        onChangeText={newText => {
          setText(newText)
          onChangeText(newText)
        }}
        placeholder={placeholder}
        placeholderTextColor='#000000'
        {...rest}
      />
    </View>
  )
}
  const styles = StyleSheet.create ({
    container: {
      paddingHorizontal: 16
    }
  })
