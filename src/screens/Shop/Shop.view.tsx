import React, {FC, useCallback, useMemo} from 'react';
import {FlatList, Image, ImageBackground, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import CardProduct from '../../components/CardProduct/CardProduct';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';
import {H3, SParagraph} from '../../components/Typography';
import {Product} from '../../models/Product';
import {UserInfo} from '../../models/User';
import {getWelcomeString} from '../../utils/string';
import {styles} from './Shop.styles';

type ShopViewProps = {
  listProduct: Product[];
  isLoading: boolean;
  totalProductCount?: number;
  onRefresh?: () => void;
  userInfo: UserInfo;
  onLoadMore?: () => void;
};

const AppBG = require('../../../assets/images/gradient.png');

const ShopView: FC<ShopViewProps> = ({
  userInfo,
  onRefresh,
  onLoadMore,
  isLoading,
  listProduct,
  totalProductCount,
}: ShopViewProps): JSX.Element => {
  const shortName = userInfo.name ? userInfo.name.slice(0, 8) : 'N/A';

  const keyExtractor = useCallback((item: Product) => item.id.toString(), []);

  const renderItem = ({item}: any) => <CardProduct data={item} />;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedValue = useMemo(() => renderItem, [listProduct]);

  return (
    <View style={styles.containerWrapper}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={AppBG} style={styles.container}>
          <View style={styles.header}>
            <View style={[styles.row, {}]}>
              <Image source={userInfo.avatar} />
              <View style={styles.informationWrapper}>
                <SParagraph style={styles.title}>
                  {getWelcomeString()}
                </SParagraph>
                <H3 bold style={styles.name}>
                  {shortName}
                </H3>
              </View>
            </View>
          </View>
          <View style={styles.shadowLine} />
          <FlatList
            keyExtractor={keyExtractor}
            ListHeaderComponent={() => (
              <View style={styles.headerProductCount}>
                <SParagraph>
                  {`${totalProductCount} products sorted by price`}
                </SParagraph>
              </View>
            )}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0.1}
            data={listProduct}
            onRefresh={onRefresh}
            refreshing={isLoading}
            renderItem={memoizedValue}
          />
        </ImageBackground>
      </SafeAreaView>
    </View>
  );
};

export default ShopView;
