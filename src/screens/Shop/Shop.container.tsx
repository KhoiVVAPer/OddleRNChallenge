import {APP_ACCOUNT_NAME} from '@env';
import React, {FC, useContext} from 'react';
import {ProductContext} from '../../services/context/product';
import ShopView from './Shop.view';

const avatar = require('../../../assets/images/avatar.png');
const ShopScreen: FC = (): JSX.Element => {
  const {
    isLoadingListProduct,
    totalProductCount,
    listProduct,
    loadDataShop,
    getProductList,
  } = useContext(ProductContext);

  return (
    <ShopView
      userInfo={{
        avatar,
        name: APP_ACCOUNT_NAME,
      }}
      isLoading={isLoadingListProduct}
      listProduct={listProduct}
      totalProductCount={totalProductCount}
      onRefresh={loadDataShop}
      onLoadMore={() => getProductList()}
    />
  );
};

export default ShopScreen;
