import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import HomeScreen from '../screens/HomeScreen';
import TakeawayScreen from '../screens/TakeawayScreen';
import DeliveryScreen from '../screens/DeliveryScreen';
import WishlistScreen from '../screens/WishlistScreen';
import ReorderScreen from '../screens/ReorderScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          // Assign icons based on the route name
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Takeaway') {
            iconName = focused ? 'fast-food' : 'fast-food';
          } else if (route.name === 'Delivery') {
            iconName = focused ? 'bicycle' : 'bicycle';
          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart' : 'heart';
          } else if (route.name === 'Reorder') {
            iconName = focused ? 'timer-outline' : 'timer-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FC261B', 
        tabBarInactiveTintColor: 'gray',  
        tabBarStyle: {
          backgroundColor: '#ffffff',
          paddingBottom: 5,
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          overflow: 'hidden',
          
          
        },
        tabBarLabelStyle: {
          fontSize: 12,    
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Takeaway" component={TakeawayScreen} />
      <Tab.Screen name="Delivery" component={DeliveryScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen}/>
      <Tab.Screen name="Reorder" component={ReorderScreen}  />
    </Tab.Navigator>
  );
};

export default TabNavigator;
