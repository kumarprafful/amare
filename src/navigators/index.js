import React from 'react';
import Login from '../screens/Onboarding/Login';
import Email from '../screens/Onboarding/Email';
import Phone from '../screens/Onboarding/Phone';
import Name from '../screens/Onboarding/Name';
import DOB from '../screens/Onboarding/DOB';
import Gender from '../screens/Onboarding/Gender';
import { createStackNavigator } from '@react-navigation/stack';

function MainNavigation() {
    const Stack = createStackNavigator();

    return (
        <>
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
        </>
    );
}

export default MainNavigation;
