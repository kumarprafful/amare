/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { Provider as PaperProvider } from 'react-native-paper';

import reducers from './src/redux/reducers';
import MainNavigation from './src/navigators';

const App: () => React$Node = () => {
    const store = createStore(reducers, applyMiddleware(thunk));

    return (
        <Provider store={store}>
            <PaperProvider>
                <NavigationContainer>
                    <MainNavigation />
                </NavigationContainer>
            </PaperProvider>
        </Provider>
    );
};

export default App;
