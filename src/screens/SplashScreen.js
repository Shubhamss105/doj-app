import React, { useEffect, useRef } from 'react';
import { Animated, Image, View, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const SplashScreen = () => {
  const translateY = useRef(new Animated.Value(-height)).current; // Start above the screen
  const bgColor = useRef(new Animated.Value(0)).current; // For white-to-#FC261B background color transition

  useEffect(() => {
    // Run the animation sequence
    Animated.sequence([
      // Move the circle to the bottom of the screen
      Animated.timing(translateY, {
        toValue: height / 2, // Move to the bottom of the screen
        duration: 800,
        useNativeDriver: true,
      }),
      // Move the circle back up to the center
      Animated.spring(translateY, {
        toValue: 0, // Center position
        useNativeDriver: true,
        bounciness: 10,
        speed: 8,
      }),
      // Change background color to #FC261B after the circle reaches the center
      Animated.timing(bgColor, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [bgColor, translateY]);

  // Interpolate background color from white to #FC261B
  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#FC261B'], // from white to #FC261B
  });

  return (
    <Animated.View style={[styles.container, { backgroundColor }]}>
      <Animated.View
        style={[
          styles.circle,
          { transform: [{ translateY }] },
        ]}
      >
        <Image
          source={require('../assets/images/misc/logo.png')}
          style={styles.logo}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 120, 
    height: 120,
    backgroundColor: '#FC261B', 
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 80, 
    height: 80,
    resizeMode: 'contain',
  },
});
