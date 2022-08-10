import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Router from './src/navigation/Router';
import {AppProvider} from './src/services/context/app';

const App = () => {
  return (
    <AppProvider>
      <SafeAreaProvider>
        <Router />
      </SafeAreaProvider>
    </AppProvider>
  );
};

export default App;
