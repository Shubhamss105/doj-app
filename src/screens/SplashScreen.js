import React, { useEffect, useRef } from 'react';
import { Animated, Image, View, StyleSheet, Dimensions } from 'react-native';

const { height } = Dimensions.get('window');

const SplashScreen = () => {
  const translateY = useRef(new Animated.Value(-height)).current; 
  const bgColor = useRef(new Animated.Value(0)).current;

  useEffect(() => {

    Animated.sequence([

      Animated.timing(translateY, {
        toValue: height / 2, 
        duration: 800,
        useNativeDriver: true,
      }),

      Animated.spring(translateY, {
        toValue: 0, 
        useNativeDriver: true,
        bounciness: 10,
        speed: 8,
      }),

      Animated.timing(bgColor, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [bgColor, translateY]);

  const backgroundColor = bgColor.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#FC261B'], 
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
