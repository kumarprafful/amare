/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { applyMiddleware, createStore } from 'redux';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Provider as PaperProvider } from 'react-native-paper';

import reducers from './src/redux/reducers';
import Login from './src/screens/Onboarding/Login';
import Email from './src/screens/Onboarding/Email';
import Phone from './src/screens/Onboarding/Phone';
import Name from './src/screens/Onboarding/Name';
import DOB from './src/screens/Onboarding/DOB';
import Gender from './src/screens/Onboarding/Gender';

const App: () => React$Node = () => {
    const Stack = createStackNavigator();

    const store = createStore(reducers, applyMiddleware(thunk));

    return (
        <Provider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false,
                        }}
                    >
                        {/* <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Email" component={Email} />
                    <Stack.Screen name="Phone" component={Phone} />
                    <Stack.Screen name="Name" component={Name} /> */}
                        <Stack.Screen name="Gender" component={Gender} />
                    </Stack.Navigator>
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    );
};

export default App;
