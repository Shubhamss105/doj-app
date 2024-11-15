import React, { useState } from 'react';
import { View, Text, Pressable, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const FoodTypeSelector = ({ options, defaultOption }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const getColorClasses = (option) => {
    return {
      borderColor: `border-[${option.color}]`,
      textColor: `text-[${option.color}]`,
      bgColor: `bg-[${option.color}]`,
    };
  };

  const selectedOptionClasses = getColorClasses(
    options.find((option) => option.value === selectedOption)
  );

  return (
    <View>
      {/* Food Type Icon */}
      <Pressable
        onPress={() => setModalVisible(!modalVisible)}
        className={`w-12 h-12 border-2 rounded-xl flex items-center justify-center ${selectedOptionClasses.borderColor}`}
      >
        <View
          className={`border rounded-sm p-1 ${selectedOptionClasses.borderColor}`}
        >
          <View
            className={`rounded-full w-2 h-2 ${selectedOptionClasses.bgColor}`}
          />
        </View>
        <Text
          className={`text-[8px] text-center ${selectedOptionClasses.textColor}`}
        >
          {selectedOption.includes('Pure')
            ? 'Veg'
            : selectedOption.includes('Non')
            ? 'Non-Veg'
            : 'Both'}
        </Text>
      </Pressable>

      {/* Dropdown Menu */}
      {modalVisible && (
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View className="absolute top-14 right-0 w-64 bg-white border border-gray-300 rounded-xl shadow-lg z-10">
            {options.map((option, index) => {
              const optionClasses = getColorClasses(option);
              return (
                <TouchableOpacity
                  key={option.value}
                  onPress={() => handleOptionChange(option.value)}
                  className={`flex-row items-center p-0 ${
                    index < options.length - 1 ? 'border-b border-gray-300' : ''
                  }`}
                >
                  <RadioButton
                    value={option.value}
                    status={selectedOption === option.value ? 'checked' : 'unchecked'}
                    onPress={() => handleOptionChange(option.value)}
                    color={option.color}
                    uncheckedColor="#B0B0B0"
                  />
                  <Text className="text-black text-xs flex-1">
                    {option.value}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default FoodTypeSelector;
