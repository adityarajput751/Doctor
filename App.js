import { View, Text } from 'react-native'
import React from 'react'
import MainNavigator from './src/screens/MainNavigator'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <Dashboard /> */}
      <MainNavigator />
    </View>
  )
}

export default App