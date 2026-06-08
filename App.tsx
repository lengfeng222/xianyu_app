import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { PushService } from './src/services/PushService';
import { GlobalWebSocketAndRiskModal } from './src/components/GlobalWebSocketAndRiskModal';
import { GlobalUpdateModal } from './src/components/GlobalUpdateModal';

export default function App() {
  useEffect(() => {
    // 初始化极光推送
    PushService.init();

    return () => {
      // 在应用销毁时移除监听器
      PushService.removeListeners();
    };
  }, []);

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <NavigationContainer>
        <StatusBar
          barStyle="dark-content"
          translucent={true}
          backgroundColor="transparent"
          animated={false}
          hidden={false}
        />
        <AppNavigator />
        <GlobalWebSocketAndRiskModal />
        <GlobalUpdateModal />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
