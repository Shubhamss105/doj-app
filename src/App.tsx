import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import AuthStack from './navigation/AuthStack';
import SplashScreen from './screens/SplashScreen';

function App() {

  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 3000); // Show splash for 3 seconds
    return () => clearTimeout(timer);
  }, []);
  return (
    <NavigationContainer>
      {isSplashVisible ? <SplashScreen /> :<AuthStack />}
    </NavigationContainer>
  );
}

export default App;