import React, {FC} from 'react';
import {Dimensions, FlatList, StyleSheet, View} from 'react-native';
import CardProduct from '../../../components/CardProduct/CardProduct';
import {H3} from '../../../components/Typography';
import {Product} from '../../../models/Product';

type HorizontalListProductProps = {
  title: string;
  data: Product[];
};
const screenWidth = Dimensions.get('screen').width;

const HorizontalListProduct: FC<HorizontalListProductProps> = ({
  title,
  data,
}: HorizontalListProductProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.titleSection}>
        <H3 bold style={styles.title}>
          {title}
        </H3>
      </View>
      <FlatList
        data={data}
        style={styles.list}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={styles.spaceBetweenItem} />}
        renderItem={({item}) => (
          <View style={{width: screenWidth - 80}}>
            <CardProduct data={item} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {paddingHorizontal: 10, marginTop: 20},
  titleSection: {marginBottom: 25},
  title: {color: '#000000'},
  list: {paddingLeft: 10},
  spaceBetweenItem: {width: 20},
});

export default HorizontalListProduct;
