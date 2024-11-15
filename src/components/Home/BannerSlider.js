// import React, { useRef, useState } from 'react';
// import { View, Image, Dimensions } from 'react-native';
// import Carousel from 'react-native-snap-carousel';

// // Import local images
// import Banner1 from '../../assets/images/loginImage1.png';
// import Banner2 from '../../assets/images/loginImage2.png';
// import Banner3 from '../../assets/images/onboardingImage1.png';

// export const BannerSlider = ({ interval = 3000 }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const carouselRef = useRef(null);

//   const screenWidth = Dimensions.get('window').width;

//   // Array of local image references
//   const images = [Banner1, Banner2, Banner3];

//   React.useEffect(() => {
//     const timer = setInterval(() => {
//       if (carouselRef.current) {
//         const nextIndex = (activeIndex + 1) % images.length;
//         carouselRef.current.snapToItem(nextIndex);
//       }
//     }, interval);

//     return () => clearInterval(timer); 
//   }, [activeIndex, images.length, interval]);

//   const renderItem = ({ item }) => (
//     <Image
//       source={item}
//       style={{
//         width: screenWidth,
//         height: 200,
//         resizeMode: 'cover',
//         borderRadius: 10,
//       }}
//     />
//   );

//   return (
//     <View>
//       <Carousel
//         ref={carouselRef}
//         data={images}
//         renderItem={renderItem}
//         sliderWidth={screenWidth}
//         itemWidth={screenWidth}
//         onSnapToItem={(index) => setActiveIndex(index)}
//         autoplay={false} // Autoplay controlled manually
//         loop={true}
//         inactiveSlideScale={1}
//         inactiveSlideOpacity={1}
//       />
//     </View>
//   );
// };




