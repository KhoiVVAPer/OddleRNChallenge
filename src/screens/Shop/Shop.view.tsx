import React, {FC, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  NativeScrollEvent,
  NativeSyntheticEvent,
  View,
} from 'react-native';
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
  const [isShowHeaderShadow, setIsShowHeaderShadow] = useState<boolean>(false);

  const onScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (e.nativeEvent.contentOffset.y > 0 && !isShowHeaderShadow) {
      // case when user just started scrolling down from the top
      setIsShowHeaderShadow(true);
    } else if (e.nativeEvent.contentOffset.y <= 0 && isShowHeaderShadow) {
      // case when the user scrolls back to the top
      setIsShowHeaderShadow(false);
    }
  };

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
          <View
            style={[styles.shadowLine, !isShowHeaderShadow && styles.hidden]}
          />
          {listProduct.length > 0 && (
            <FlatList
              keyExtractor={item => item.id}
              ListHeaderComponent={() => (
                <View style={styles.headerProductCount}>
                  <SParagraph>
                    {`${totalProductCount} products sorted by price`}
                  </SParagraph>
                </View>
              )}
              onScroll={onScroll}
              onEndReached={onLoadMore}
              data={listProduct}
              onRefresh={onRefresh}
              refreshing={false}
              renderItem={({item}) => <CardProduct data={item} />}
            />
          )}
        </ImageBackground>
        {isLoading && <LoadingOverlay />}
      </SafeAreaView>
    </View>
  );
};

export default ShopView;
