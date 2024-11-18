import React from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const data = [
  { id: '1', title: 'Chole Bhature', image: require('../../assets/images/chole-bhature.png') },
  { id: '2', title: 'Pizza', image: require('../../assets/images/pizza.png') },
  { id: '3', title: 'Sandwich', image: require('../../assets/images/sandwich.png') },
  { id: '4', title: 'Burger', image: require('../../assets/images/burger.png') },
  { id: '5', title: 'Chole Bhature', image: require('../../assets/images/chole-bhature.png') },
];

const FoodItem = ({ title, image }) => (
  <LinearGradient
    colors={['#D9D9D900', '#F7CEAF']}
    start={{ x: 0, y: 0 }}
    end={{ x: 0, y: 1 }}

    className="flex items-center rounded-2xl mx-2 w-[88px] h-[85px] justify-center"
  >
    <Image source={image} className="w-24 h-16" resizeMode="contain" />
    <Text className="text-center text-gray-800 text-xs font-semibold mb-2 -mt-1 px-1" >
      {title}
    </Text>
  </LinearGradient>
);

export default function FoodMenuFlatList() {
  return (
    <View className="flex-1 bg-white justify-center items-start mt-4">
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <FoodItem title={item.title} image={item.image} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        style={{ height: 100 }}
      />
    </View>
  );
}
