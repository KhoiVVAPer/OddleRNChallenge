import {useFocusEffect} from '@react-navigation/native';
import React, {FC, useContext} from 'react';
import {ProductContext} from '../../services/context/product';
import FavoritesView from './Favorites.view';

const FavoritesScreen: FC = (): JSX.Element => {
  const {
    listProductFavorite,
    getListProductFavorite,
    isLoadingListProductFavorite,
  } = useContext(ProductContext);

  useFocusEffect(
    React.useCallback(() => {
      getListProductFavorite();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <FavoritesView
      listProduct={listProductFavorite}
      onRefresh={getListProductFavorite}
      isLoading={isLoadingListProductFavorite}
    />
  );
};

export default FavoritesScreen;
