import React from 'react';
import { FlatList, Image, Text, View, Dimensions } from 'react-native';

const data = [
  { id: '1', title: 'Home Food', subtitle: 'Daily Food', image: require('../../assets/images/dailyFood.png') },
  { id: '2', title: 'Combo Deals', subtitle: 'Large Order', image: require('../../assets/images/largeOrder.png') },
  { id: '3', title: 'Healthy Food', subtitle: 'Fresh Food', image: require('../../assets/images/freshFood.png') },
  { id: '4', title: 'Offers', subtitle: '50% off', image: require('../../assets/images/discount.png') },
  { id: '5', title: 'Gift Offers', subtitle: 'Starting at 500', image: require('../../assets/images/giftOffer.png') },
  { id: '6', title: 'Brand Coupon', subtitle: 'Extra Cashback', image: require('../../assets/images/cashback.png') },
  { id: '7', title: 'Cuisine', subtitle: 'Fresh Food', image: require('../../assets/images/cuisine.png') },
];

const screenWidth = Dimensions.get('window').width;

const FoodItem = ({ title, subtitle, image }) => (
  <View
    className={`flex items-center rounded-2xl mx-2 w-20 h-28 justify-center`}
  >
    <Image source={image} className="w-20 h-20 object-cover" resizeMode="contain" />
    <Text className="text-center text-[#575757] text-[10px] font-semibold">{title}</Text>
    <Text className="text-center text-[#575757] text-[8px]">{subtitle}</Text>
  </View>
);

export default function ExploreSection() {
  return (
    <View className="flex-1 bg-white mt-4">
      <View className="mx-4 mb-2">
        <Text className="text-lg text-secondary font-bold">Explore</Text>
      </View>

      {/* Food Items List */}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FoodItem title={item.title} subtitle={item.subtitle} image={item.image} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
        style={{ height: 120 }}
      />
    </View>
  );
}
