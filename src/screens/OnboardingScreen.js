import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

// Array of images for onboarding
const images = [
  require('../assets/images/onboardingImage1.png'),
  require('../assets/images/onboardingImage2.png'),
  require('../assets/images/onboardingImage1.png'),
];

const OnboardingScreen = ({navigation}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image or loop back to the first
  const goToNextImage = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
  };

  // Set up an effect to automatically change the image every 3 seconds
  useEffect(() => {
    const interval = setInterval(goToNextImage, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ImageBackground
        source={images[currentIndex]}
        className="flex-1 justify-end"
        resizeMode="cover">
        {/* Indicators */}
        <View className="absolute top-10 flex-row space-x-2 z-10 self-center justify-center items-center w-full">
          {images.map((_, index) => (
            <View
              key={index}
              className={`h-2 w-24 rounded-full mx-1 ${
                currentIndex === index ? 'bg-white' : 'bg-[#979797CC]'
              }`}
            />
          ))}
        </View>

        {/* Fading Red Gradient & Button */}
        <LinearGradient
          colors={['transparent', 'rgba(255,0,0,0.8)', 'red']}
          className="w-full py-16 items-center">
          <TouchableOpacity
            className="bg-white py-2 px-6 w-4/6 rounded-full flex-row justify-between items-center"
            onPress={() => {
              navigation.navigate('Login');
            }}>
            <Text className="text-primary text-lg font-bold mx-auto">
              Get Started
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
