import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import base64 from 'react-native-base64'
import _ from 'lodash'

import ShoppingItem from './ShoppingItem'

function ShoppingList({ navigation }) {
  const [products, setProducts] = useState([])
  const token = base64.encode('john@groshapp.com:Jd1234')
  useEffect(() => {
    getData()
  }, []);
  const getData = () => {
    axios({
      url: 'https://groshapp.com/edge/users/me/households',
      method: 'get',
      headers: { Authorization: 'Basic ' + token }
    })
    .then(res => {
      console.log('res', res)
      setProducts(res.data)
    })
    .catch(err => console.log('err', err?.response || err))
  }
  return (
    <ScrollView>
      {_.map(products, (item, key) => {
        return (
          <ShoppingItem
            key={key}
            name={item.name}
            onPress={() => navigation.navigate('SelectedList', { item, token })}
          />
        )
      })}
    </ScrollView>
    )
  }

export default ShoppingList
