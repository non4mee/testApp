import React, { useEffect, useState } from 'react'
import { ScrollView, StyleSheet, View, TouchableOpacity, FlatList, Text } from 'react-native'
import axios from 'axios'
import _ from 'lodash'

import DetailScreen from './DetailScreen'

function SelectedList({ navigation, route }) {
  const { item, token } = route.params
  const [list, setList] = useState([])
  useEffect(() => {
    getData()
  }, []);
  const getData = () => {
    axios({
      url: `https://groshapp.com/edge/households/${item.id}/current`,
      method: 'get',
      headers: { Authorization: 'Basic ' + token }
    })
    .then(res => {
      setList(res.data)
    })
    .catch(err => console.log('err', err?.response || err))
  }
  const data = _.reduce(
    list,
    (res, item) => {
      return [...res, ...item.groceries]
    },
    []
  )
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item }) => (
          <DetailScreen
            name={item.name}
            amount={item.amount}
            image={{ uri: item.image }}
            price={item.price}
            note={item.note}
          />
        )}
      />
    </View>
    )
  }

  const styles = StyleSheet.create ({
  })

export default SelectedList
