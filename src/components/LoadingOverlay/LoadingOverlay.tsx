import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';

type LoadingOverlayProps = {};

const LoadingOverlay: FC<LoadingOverlayProps> = ({}): JSX.Element => {
  return (
    <View style={[StyleSheet.absoluteFill, styles.container]}>
      <ActivityIndicator size={35} color={'#1C0056'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default LoadingOverlay;
