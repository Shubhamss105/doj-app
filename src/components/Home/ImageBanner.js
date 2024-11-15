import React, { useState, useEffect } from 'react';
import { View, Text, Dimensions, Image } from 'react-native';

const { width } = Dimensions.get('window');

const ImageBanner = () => {
  const images = [
    require('../../assets/images/banner1.png'),
    require('../../assets/images/banner2.png'),
    require('../../assets/images/banner3.png'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <View className='w-full h-36 justify-center object-cover items-center px-4 mt-2'>
      <Image
        source={images[currentIndex]}
        className='w-full h-full object-cover'
      />
      
    </View>
  );
};

export default ImageBanner;
