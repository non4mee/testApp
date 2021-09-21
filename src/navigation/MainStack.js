import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import ShoppingList from '../screens/ShoppingList'
import SelectedList from '../screens/SelectedList'

const Stack = createStackNavigator()

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ShoppingList"
        component={ShoppingList}
      />
      <Stack.Screen
        name="SelectedList"
        component={SelectedList}
      />
    </Stack.Navigator>
  )
}

export default MainStack
