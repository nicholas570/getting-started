import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CameraScreen } from '../screens/CameraScreen';
import { FeedScreen } from '../screens/FeedScreen';
import { ImagesScreen } from '../screens/ImagesScreen';
import { TabBarIcon } from './TabBarIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="FeedScreen"
      screenOptions={{
        tabBarActiveTintColor: 'tomato'
      }}
    >
      <Tab.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{
          title: 'camera',
          tabBarIcon: ({ color }) => <TabBarIcon name="camera" color={color} />
        }}
      />
      <Tab.Screen
        name="ImagesScreen"
        component={ImagesScreen}
        options={{
          title: 'images',
          tabBarIcon: ({ color }) => <TabBarIcon name="image" color={color} />
        }}
      />
      <Tab.Screen
        name="FeedScreen"
        component={FeedScreen}
        options={{
          title: 'feed',
          tabBarIcon: ({ color }) => <TabBarIcon name="share" color={color} />
        }}
      />
    </Tab.Navigator>
  );
};
