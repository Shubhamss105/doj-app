import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Button,
} from 'react-native';
import CountryPicker, {CountryCode} from 'react-native-country-picker-modal';
import PhoneInput from 'react-native-phone-input';

import GoogleSVG from '../assets/images/misc/google.svg';
import FacebookSVG from '../assets/images/misc/facebook.svg';
import TwitterSVG from '../assets/images/misc/twitter.svg';

import CustomButton from '../components/UI/CustomButton';

const images = [
  require('../assets/images/loginImage1.png'),
  require('../assets/images/loginImage2.png'),
  require('../assets/images/onboardingImage1.png'),
];

const LoginScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [phoneCountryCode, setPhoneCountryCode] = useState('IN');
  const [showPhoneCountryPicker, setShowPhoneCountryPicker] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const phoneInput = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleCountrySelect = country => {
    setPhoneCountryCode(country.cca2);
    setShowPhoneCountryPicker(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-primary">
      {/* Top Half ImageBackground with Carousel */}
        <ImageBackground
          source={images[currentIndex]}
          className="h-80 justify-center object-cover"
          resizeMode="cover">
          {/* Skip Button */}
          <TouchableOpacity
            className="absolute top-8 right-5 bg-black opacity-50 rounded-2xl px-4"
            onPress={() => navigation.navigate('Home')}>
            <Text className="text-white text-lg font-semibold">Skip</Text>
          </TouchableOpacity>

          {/* Carousel Indicator */}
          <View className="absolute bottom-10 self-center flex-row space-x-2">
            {images.map((_, index) => (
              <View
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-gray-500'
                }`}
              />
            ))}
          </View>
        </ImageBackground>

        {/* Bottom Half for Input Fields and Buttons */}
        <View className="flex-1 px-6 pt-6 -mt-4 rounded-t-3xl bg-white">
          <Text className="font-bold text-[24px] text-primary text-center">
            Get Started with DOJ
          </Text>

          <View className="flex-row items-center my-7">
            {/* Left Line */}
            <View className="flex-1 h-[1px] bg-[#BFBFBF]" />

            {/* Text */}
            <Text className="mx-2 text-[#565656] text-medium font-semibold">
              Log in or Sign up
            </Text>

            {/* Right Line */}
            <View className="flex-1 h-[1px] bg-[#BFBFBF]" />
          </View>

          <View className="flex-row space-x-3 mb-4">
            {/* Country Code Input Field */}
            <View className="flex-1 max-w-[30%] border-2 border-gray-200 rounded-2xl">
              <PhoneInput
                ref={phoneInput}
                className="p-2 flex justify-center text-black"
                initialValue={phoneNumber}
                initialCountry={phoneCountryCode.toLowerCase()}
                onPressFlag={() => setShowPhoneCountryPicker(true)}
                onChangePhoneNumber={text => setPhoneNumber(text)}
              />

              {/* <CountryPicker
                countryCode={phoneCountryCode}
                visible={showPhoneCountryPicker}
                onSelect={handleCountrySelect}
                onClose={() => setShowPhoneCountryPicker(false)}
                withFlagButton={false}
                withFilter
              /> */}
            </View>

            {/* Mobile Number Input Field */}
            <View className="flex-1 border-2 border-gray-200 rounded-2xl shadow-inner bg-white">
              <TextInput
                keyboardType="numeric"
                placeholder="Enter Mobile No."
                placeholderTextColor="gray"
                maxLength={10}
                className="text-lg p-2 text-black"
              />
            </View>
          </View>

          {/* Login Button */}
          <CustomButton label="Login" onPress={() => {navigation.navigate('OtpVerification')}} />

          <Text className="text-center text-[#757575] font-medium -mt-2">
            By continuing you agree to our Terms of use & Privacy Policy
          </Text>

          <View className="flex-row items-center my-5">
            {/* Left Line */}
            <View className="flex-1 h-[1px] bg-[#BFBFBF]" />

            {/* Text */}
            <Text className="mx-2 text-[#565656] font-semibold">
              or Sign in with
            </Text>

            {/* Right Line */}
            <View className="flex-1 h-[1px] bg-[#BFBFBF]" />
          </View>

          {/* Social Login Buttons */}
          <View className="flex-row justify-center space-x-6 my-3">
            <TouchableOpacity
              onPress={() => {}}
              className="border border-gray-300 rounded-xl px-3 py-3">
              <GoogleSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              className="border border-gray-300 rounded-xl px-3 py-3">
              <FacebookSVG height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {}}
              className="border border-gray-300 rounded-xl px-3 py-3">
              <TwitterSVG height={24} width={24} />
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-center mt-5 mb-8 space-x-2">
            {/* Driver SignUp Button */}
            <TouchableOpacity
              onPress={() => {}}
              className="border-2 border-primary bg-transparent rounded-xl py-2 w-1/2">
              <Text className="text-primary text-md font-semibold text-center">
                Driver SignUp
              </Text>
            </TouchableOpacity>

            {/* Partner SignUp Button */}
            <TouchableOpacity
              onPress={() => {}}
              className="border-2 border-primary bg-transparent rounded-xl py-2 w-1/2">
              <Text className="text-primary text-md font-semibold text-center">
                Partner SignUp
              </Text>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
