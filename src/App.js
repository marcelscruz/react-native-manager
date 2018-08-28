import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import firebase from 'firebase'
import reducers from './reducers'

import firebaseConfig from '../config/firebase'

class App extends Component {
  componentDidMount() {
    firebase.initializeApp(firebaseConfig)
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello world!</Text>
        </View>
      </Provider>
    )
  }
}

export default App
