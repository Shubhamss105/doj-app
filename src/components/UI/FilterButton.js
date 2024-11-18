import React from 'react';
import { View, Text, Pressable } from 'react-native';

const FilterButton = ({ text, onPress }) => (
  <Pressable
    onPress={onPress}
    className="border border-[#B6B5B5] bg-transparent rounded-[5px] py-[2px] px-2 items-center justify-center">
    <Text className="text-[#575757] text-[12px] font-medium">{text}</Text>
  </Pressable>
);

export default FilterButton;