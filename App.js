/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { applyMiddleware, createStore } from 'redux'

import Login from './src/screens/Login'
import reducers from './src/redux/reducers'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

const App: () => React$Node = () => {

    const Stack = createStackNavigator()

    const store = createStore(reducers, applyMiddleware(thunk))

    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App
