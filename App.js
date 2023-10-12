import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Home from './screens/Home'
import AddNew from './screens/AddNew';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Update from './screens/UpdateRecord';
import UserDetails from './screens/UserDetails';

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Home'>
        <stack.Screen  name='Home' component={Home} />
        <stack.Screen name='AddNew' component={AddNew} />
        <stack.Screen name='Update' component={Update} />
        <stack.Screen name='UserDetails' component={UserDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
}

