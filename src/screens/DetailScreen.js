import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

export default function DetailScreen({ name, price, image, about, onPress, amount, note }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.name}>{name}</Text>
      <Image style={styles.img} source={image}/>
      {note && (
        <Text style={styles.note}>{note}</Text>
      )}
      <View>
        <Text style={styles.amount}>Quantity:{amount}</Text>
        {price && (
          <Text style={styles.price}>Price:{price}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
  const styles = StyleSheet.create ({
    container: {
      width: '100%',
      height: 100,
      paddingHorizontal: 16,
      borderBottomWidth: 1,
      borderBottomColor: 'grey',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    name: {
      fontSize: 20
    },
    amount: {
      paddingHorizontal: 16
    },
    img: {
      width: 50,
      height: 50,
    },
    price: {
      paddingHorizontal: 16
    },
    note: {
      width: 100
    }
  })
