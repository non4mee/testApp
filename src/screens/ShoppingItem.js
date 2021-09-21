import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function ShoppingItem({ name, image, about, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
}
  const styles = StyleSheet.create ({
    container: {
      width: '100%',
      height: 60,
      borderBottomWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    name: {
      fontSize: 20
    }
  })
