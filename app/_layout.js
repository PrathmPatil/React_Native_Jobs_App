import React, { useCallback } from 'react';
import { Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

export default function Layout() {
  const [fontsLoaded] = useFonts({
    DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
    DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
    DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
  })

  const onLayoutRootView = useCallback(async()=>{
if(fontsLoaded){
  return SplashScreen.hideAsync()
}
  },[fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView}/>;
}
