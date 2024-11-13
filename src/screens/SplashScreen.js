import React, { useEffect } from 'react';
import { View, Animated, Image } from 'react-native';

const SplashScreen = () => {
  const translateY = new Animated.Value(-100); // Initial position above the view

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      bounciness: 30,
      speed: 10,
    }).start();
  }, []);

  return (
    <View className="flex-1 bg-red-500 justify-center items-center">
      <Animated.View style={{ transform: [{ translateY }] }}>
        <Image
          source={require('../assets/images/misc/logo.png')}
          style={{
            width: 172,
            height: 109,
            resizeMode: 'contain',
          }}
        />
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
