import React, {useState, useEffect} from 'react';
import {View, Text, ImageBackground, Dimensions, TouchableOpacity, Pressable, Alert} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LinearGradient} from 'react-native-linear-gradient';
import OfferIcon from '../../assets/images/misc/offerIcon';
import FilterButton from '../UI/FilterButton';

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

const buttons = [
    { id: 1, text: 'Popular', onPress: () => alert('Popular selected') },
    { id: 2, text: 'Rating 4.0+', onPress: () => alert('Rating selected') },
    { id: 3, text: 'Fast Delivery', onPress: () => alert('Fast Delivery selected') },
    { id: 4, text: 'Offer', onPress: () => alert('Offer selected') },
    { id: 5, text: 'Sort', onPress: () => alert('Sort selected') },
  ];

const RestaurantList = () => {
  const screenWidth = Dimensions.get('window').width;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % data.length);
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const currentItem = data[currentIndex];

  return (
    <View className="mx-4">
      <Text className="text-lg text-secondary font-bold my-2">Recommended</Text>

      <View className="flex-row justify-between items-center mb-4">
      {buttons?.map(({ id, text, onPress }) => (
        <FilterButton key={id} text={text} onPress={onPress} />
      ))}
    </View>

      {/* Image with dynamic text */}
      <View className="rounded-xl border-2 border-gray-300 mb-4">
        <ImageBackground
          source={currentItem.image}
          className="w-full h-40 object-cover"
          resizeMode="cover"
          imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10}}>
          {/* Top left: Name */}
          <View
            className="absolute top-4 left-4 px-2 py-[2px] rounded-lg"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <Text className="text-white text-xs font-semibold">
              {currentItem.name}
            </Text>
          </View>

          <View
            className="absolute top-4 right-4 px-2 py-[2px] rounded-3xl"
            style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <View className=" flex flex-row space-x-2 px-1 items-center">
              <Text className="text-white text-xs font-medium">4.5</Text>
              <Ionicons name="star" size={12} color="yellow" />
            </View>
          </View>

          <LinearGradient
            colors={['transparent', 'rgba(0, 0, 0, 1)']}
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 40,
            }}>
            <View className="absolute bottom-2 left-4">
              <Text className="text-white text-xs font-semibold">
                Free Delivery
              </Text>
            </View>

            {/* <View className="absolute bottom-2 right-4 flex-row items-center">
              <Ionicons name="timer" size={14} color="red" />
              <Text className="text-white text-xs font-semibold ml-1">
                15-20 min
              </Text>
            </View> */}
          </LinearGradient>
        </ImageBackground>
        <View className="px-2">
          <View className="flex flex-row items-center justify-between mx-2">
            <Text className="text-xl text-black font-semibold">
              Taco Crunchy
            </Text>
            <View className="flex-row items-center space-x-1">
              <Ionicons name="location" size={12} color="gray" />
              <Text className="text-[10px] text-secondary font-semibold">
                2 km
              </Text>
            </View>
          </View>
          <View className="flex flex-row items-center justify-between mx-2 my-1">
            <View className="flex flex-row items-center space-x-2">
              <View className="px-2 py-[2px] rounded-[15px] bg-[#EAE8E8C2]">
                <Text className="text-[9px] text-[#757575]">Taco Fries</Text>
              </View>
              <View className="px-2 py-[2px] rounded-[15px] bg-[#EAE8E8C2]">
                <Text className="text-[9px] text-[#757575]">French Fries</Text>
              </View>
              <View className="px-2 py-[2px] rounded-[15px] bg-[#EAE8E8C2]">
                <Text className="text-[9px] text-[#757575]">Galauti</Text>
              </View>
            </View>
            <View className="flex-row items-center space-x-1">
              <Ionicons name="timer" size={10} color="red" />
              <Text className="text-[8px] text-[#575757] font-semibold">
                30-45 mins
              </Text>
            </View>
          </View>
        </View>
        <View className="w-full h-10 overflow-hidden flex justify-center items-center">
  {/* Full-width SVG */}
  <OfferIcon width="110%" height="100%" />

  {/* Centered Text */}
  <Text className="absolute text-[#001FAB] text-xs font-bold">
    Flat 100 OFF above 249
  </Text>
</View>

      </View>
    </View>
  );
};

export default RestaurantList;
