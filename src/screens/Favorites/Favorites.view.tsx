import React, {FC} from 'react';
import {FlatList, Image, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text} from 'react-native-paper';
import {styles} from './Favorites.styles';
import {Product} from '../../models/Product';
import {H1} from '../../components/Typography';
import CardProduct from '../../components/CardProduct/CardProduct';
import EmptyStateView from '../../components/EmptyState/EmptyState';

type FavoritesViewProps = {
  listProduct: Product[];
  isLoading: boolean;
  onRefresh: () => void;
};

const avatar = require('../../../assets/images/avatar.png');
const emptyFavoriteImg = require('../../../assets/images/love.png');

const FavoritesView: FC<FavoritesViewProps> = ({
  listProduct,
  isLoading,
  onRefresh,
}): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        refreshing={isLoading}
        onRefresh={onRefresh}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <H1 bold style={styles.title}>
              <Text>Favourites</Text>
            </H1>
            <Image source={avatar} style={styles.avatar} />
          </View>
        )}
        stickyHeaderIndices={[0]}
        ListEmptyComponent={
          <EmptyStateView
            title={"You don't have any favourite product yet."}
            image={emptyFavoriteImg}
          />
        }
        showsVerticalScrollIndicator={false}
        data={listProduct}
        renderItem={({item}) => <CardProduct data={item} />}
      />
    </SafeAreaView>
  );
};

export default FavoritesView;
