import {View, Text, TextInput, Image} from 'react-native';
import React from 'react';
import {LinearGradient} from 'react-native-linear-gradient';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodTypeSelector from './FoodTypeSelector';

const Header = () => {
  return (
    <LinearGradient colors={['#FFFFFF', '#FC261B']}>
      <View className="flex px-4 mb-4">
        <View className="flex flex-row items-center mt-4">
          <Ionicons name="location" size={24} color="gray" />
          <Text className="text-[#3D3D3D] text-sm font-semibold ml-2">
            4102, Pretty View Lane, EWS Essel...
          </Text>
          <Image
            source={require('../../assets/images/user-profile.jpg')}
            className="w-9 h-9 rounded-full ml-auto"
          />
        </View>

        <View className="flex flex-row justify-center items-center my-4 space-x-2 mx-2">
          <View className="flex flex-row w-4/5 items-center justify-center border bg-white h-12 border-gray-200 rounded-xl p-1">
            <Ionicons name="search" size={24} color="gray" className="mx-4" />
            <TextInput
              className="flex-1 -mt-[2px]"
              placeholder="Find for food or restaurant..."
              placeholderTextColor="gray"
            />
            <Ionicons name="mic-outline" size={24} color="red" />
          </View>

          <View>
            <FoodTypeSelector
              options={[
                {
                  value: 'Show Only Pure Veg Restaurant',
                  label: 'Pure Veg',
                  color: '#34A853',
                },
                {
                  value: 'Show All Veg with Egg Dishes',
                  label: 'Veg with Egg',
                  color: '#FBBC05',
                },
                {
                  value: 'Show Only Non-Veg Restaurant',
                  label: 'Non-Veg',
                  color: '#EA4335',
                },
              ]}
              defaultOption="Show Only Pure Veg Restaurant"
            />
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

export default Header;
