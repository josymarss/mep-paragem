import { StatusBar } from 'expo-status-bar';
// import  from 'react-native-safe-area-context';
import { SafeAreaView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from './pages/main';
import Driving from './pages/driving';
import Routes from './pages/routes/routes';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName='Main'
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Driving" component={Driving} />
          <Stack.Screen name="Routes" component={Routes} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}