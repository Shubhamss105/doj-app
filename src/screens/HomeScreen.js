import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {LinearGradient} from 'react-native-linear-gradient';
import {SafeAreaView} from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodTypeSelector from '../components/Home/FoodTypeSelector';
import ImageBanner from '../components/Home/ImageBanner.js';
import FoodMenuFlatList from '../components/Home/FoodMenuFlatList.js';
import RecommendedFood from '../components/Home/RecommendedFood.js';
import ExploreSection from '../components/Home/ExploreSection.js';
import Header from '../components/Home/Header.js';
// import { GlobalStyles } from './assets/styles.js';

const HomeScreen = () => {
  return (
    <SafeAreaView className=" flex-1">
      <Header/>
      
      <ScrollView className='flex-1 -mt-6 rounded-t-3xl'>
        <View className=' bg-white  mb-16'>
        <ImageBanner/>
        <FoodMenuFlatList/>
        <RecommendedFood/>
        <ExploreSection/>
        <ExploreSection/>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
