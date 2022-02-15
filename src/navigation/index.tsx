import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';
import { BottomTabNavigator } from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      {/* not found route */}
    </Stack.Navigator>
  );
};

export const Navigation = () => {
  return (
    <NavigationContainer fallback={<Text>Loading...</Text>}>
      <RootNavigator />
    </NavigationContainer>
  );
};
