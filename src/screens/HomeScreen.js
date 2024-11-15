import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodTypeSelector from '../components/Home/FoodTypeSelector';

const MyComponent = () => {
  return (
    <SafeAreaView className="px-4 py-2">
      <View className="flex">
        <View className="flex flex-row items-center mt-4">
          <Ionicons name="location" size={24} color="gray" />
          <Text className="text-gray-500 text-sm ml-2">
            4102, Pretty View Lane, EWS Essel...
          </Text>
          <Image
            source={require('../assets/images/user-profile.jpg')}
            className="w-9 h-9 rounded-full ml-auto"
          />
        </View>

        <View className="flex flex-row items-end my-4 space-x-2 mx-2">
          <View className="flex flex-row w-4/5 items-center justify-center border-2 h-12 border-gray-200 rounded-xl p-1">
            <Ionicons name="search" size={24} color="gray" className="mr-4" />
            <TextInput
              className="flex-1 text-gray-500"
              placeholder="Find for food or restaurant..."
              placeholderTextColor="gray"
              style={{textAlignVertical: 'top'}}
            />
            <Ionicons name="mic" size={24} color="gray" />
          </View>

          <View>
          <FoodTypeSelector
  options={[
    { value: 'Show Only Pure Veg Restaurant', label: 'Pure Veg', color: '#34A853' },
    { value: 'Show All Veg with Egg Dishes', label: 'Veg with Egg', color: '#FBBC05' },
    { value: 'Show Only Non-Veg Restaurant', label: 'Non-Veg', color: '#EA4335' },
  ]}
  defaultOption="Show Only Pure Veg Restaurant"
/>

          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyComponent;
