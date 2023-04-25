import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Button, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const rootStack = createNativeStackNavigator();

const App = () => {

    return (
        <NavigationContainer>
            <rootStack.Navigator>
                <rootStack.Screen name="Home" component={HomeScreen} options={{title: 'Welcome'}} />
                <rootStack.Screen name="Profile" component={ProfileScreen} />
            </rootStack.Navigator>
        </NavigationContainer>
    )
}

export default App;