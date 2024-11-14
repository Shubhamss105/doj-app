// App.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import AuthStack from './navigation/AuthStack';
import SplashScreen from './screens/SplashScreen';

enableScreens();

function App() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsSplashVisible(false), 5000); // Show splash for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {isSplashVisible ? <SplashScreen /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
