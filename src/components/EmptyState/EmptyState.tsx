import React, {FC} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';
import {H3} from '../Typography';

type EmptyStateViewProps = {
  image: ImageSourcePropType;
  title: string;
};

const EmptyStateView: FC<EmptyStateViewProps> = ({
  title,
  image,
}): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        {image && <Image source={image} style={styles.image} />}
      </View>
      <View style={styles.titleWrapper}>
        <H3 style={styles.title}>{title}</H3>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginTop: 50, alignItems: 'center'},
  imageWrapper: {width: 100, height: 100},
  image: {width: '100%', height: '100%'},
  titleWrapper: {width: '70%', marginTop: 25},
  title: {textAlign: 'center'},
});

export default EmptyStateView;
