import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Screen1 from "./screens/Main"
import Screen2 from "./screens/Users"
import Screen3 from "./screens/Details"

const Stack = createNativeStackNavigator();

const options = {
  headerShown: false
};
const options2 = {
  title: 'admin page',
  headerStyle: {
    backgroundColor: '#607D8B',
  },
  headerTintColor: '#ffffff'
}

const options3 = {
  title: 'details page',
  headerStyle: {
    backgroundColor: '#607D8B',
  },
  headerTintColor: '#ffffff'
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="s1" component={Screen1} options={options} />
        <Stack.Screen name="s2" component={Screen2} options={options2} />
        <Stack.Screen name="s3" component={Screen3} options={options3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
