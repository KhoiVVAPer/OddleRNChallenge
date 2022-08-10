import React, {FC, useContext} from 'react';
import HomeView from './Home.view';
import {APP_ACCOUNT_NAME} from '@env';
import {ProductContext} from '../../services/context/product';
import {uppercaseFirstLetter} from '../../utils/string';
import {useFocusEffect} from '@react-navigation/native';

const avatar = require('../../../assets/images/avatar.png');

const HomeScreen: FC = (): JSX.Element => {
  const {
    listProductWithMostLikedProductType,
    listProductWithMostLikedBrand,
    listNewestProducts,
    isLoadingListProductWithMostLikedProductType,
    isLoadingListProductWithMostLikedBrand,
    isLoadingListNewestProducts,
    loadDataHome,
  } = useContext(ProductContext);

  const mostLikeBrand =
    listProductWithMostLikedBrand.length > 0
      ? uppercaseFirstLetter(listProductWithMostLikedBrand[0]?.brand)
      : 'N/A';

  useFocusEffect(
    React.useCallback(() => {
      loadDataHome();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  return (
    <HomeView
      info={{
        avatar,
        name: APP_ACCOUNT_NAME,
      }}
      onRefresh={loadDataHome}
      mostLikedBrand={mostLikeBrand}
      recommendListProduct={listProductWithMostLikedProductType}
      mostLikedBrandListProduct={listProductWithMostLikedBrand}
      newestListProduct={listNewestProducts}
      isLoading={
        isLoadingListProductWithMostLikedProductType ||
        isLoadingListProductWithMostLikedBrand ||
        isLoadingListNewestProducts
      }
    />
  );
};

export default HomeScreen;
