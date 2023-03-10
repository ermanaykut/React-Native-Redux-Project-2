import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "./src/screens/HomeScreen";
import DetailsScreen from "./src/screens/DetailsScreen";
import {Provider} from "react-redux"
import {configureStore} from "@reduxjs/toolkit"
import reducer from "./src/redux"

const Stack = createNativeStackNavigator();

const App = () => {
  const store= configureStore({reducer: reducer})
  return (
    <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
};

export default App;
