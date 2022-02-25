
import React from 'react';
import {
  StyleSheet
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './screens';

// drawercontent hamun menu ro ke baz mikoni tushe
import { DrawerContent } from './assets/components';

//  age azin Drawere estefade nakoni error mide
const Drawer=createDrawerNavigator();


const App= () => {
  
  return (
  <NavigationContainer>
    <Drawer.Navigator
     drawerContent={()=> <DrawerContent />}
    initialRouteName="Home"
    screenOptions={{
       headerShown:false
    }}
      >
      <Drawer.Screen name="Home" component={HomeScreen}  ></Drawer.Screen>
    </Drawer.Navigator>
  </NavigationContainer>
 
  );
};

const styles = StyleSheet.create({
 
});

export default App;
