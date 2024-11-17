import React from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
  {
    id: '1',
    name: "McDonald's",
    rating: 4.5,
    distance: '2 km',
    deliveryTime: '10-15 mins',
    deliveryCost: 'Free delivery',
    image: require('../../assets/images/mcDonald.png'),
  },
  {
    id: '2',
    name: 'Burger King',
    rating: 4.3,
    distance: '3 km',
    deliveryTime: '15-20 mins',
    deliveryCost: 'Free delivery',
    image: require('../../assets/images/dominos.png'),
  },
  {
    id: '3',
    name: "McDonald's",
    rating: 4.5,
    distance: '2 km',
    deliveryTime: '10-15 mins',
    deliveryCost: 'Free delivery',
    image: require('../../assets/images/mcDonald.png'),
  },
  {
    id: '4',
    name: 'Burger King',
    rating: 4.3,
    distance: '3 km',
    deliveryTime: '15-20 mins',
    deliveryCost: 'Free delivery',
    image: require('../../assets/images/dominos.png'),
  },
];

const RecommendedFood = () => {
  const screenWidth = Dimensions.get('window').width;

  const renderItem = ({item}) => (
    <View
      className="bg-[#FFF9F5] mx-2 rounded-[10px] shadow-md"
      style={{width: screenWidth / 2 - 16}}>
      {/* Local image */}
      <Image
        source={item.image}
        className="w-full h-20 object-cover rounded-t-lg"
        resizeMode="cover"
      />
      <View
        className="absolute top-2 right-2 px-2 py-1 rounded-3xl"
        style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
        <Text className="text-white text-[8px] font-medium">
          {item.rating} ★
        </Text>
      </View>

      <View className="p-2">
        <View className='flex flex-row items-center justify-between'>
        <Text className="text-md text-black font-semibold">{item.name}</Text>
        <View className="flex-row items-center">
          <Ionicons name="location" size={8} color="gray" />
          <Text className="text-[8px] text-gray-500 font-semibold">{item.distance}</Text>
        </View>
        </View>
        <View className='flex flex-row items-center justify-between'>
        <Text className="text-[8px] text-[#575757] font-semibold">{item.deliveryCost}</Text>
        <View className="flex-row items-center space-x-1">
        <Ionicons name="timer" size={10} color="red" />
          <Text className="text-[8px] text-[#575757] font-semibold">{item.deliveryTime}</Text>
        </View>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <View className='flex flex-row items-center justify-between m-4 mt-0'>
      <Text className="text-lg text-black font-bold">Recommended</Text>
      <Text className="text-[10px] text-[#FC261B] font-semibold">See all</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 10}}
      />
    </View>
  );
};

export default RecommendedFood;
