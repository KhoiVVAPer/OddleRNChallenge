import React, {FC} from 'react';
import {
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './Home.styles';
import {H3, SParagraph} from '../../components/Typography';
import {getWelcomeString} from '../../utils/string';
import {UserInfo} from '../../models/User';
import HorizontalListProduct from './HorizontalList/HorizontalList';
import {Product} from '../../models/Product';
import LoadingOverlay from '../../components/LoadingOverlay/LoadingOverlay';

type HomeViewProps = {
  info: UserInfo;
  mostLikedBrand: string;
  recommendListProduct: Product[];
  mostLikedBrandListProduct: Product[];
  newestListProduct: Product[];
  isLoading: boolean;
  onRefresh: () => void;
};

const AppBG = require('../../../assets/images/gradient.png');

const HomeView: FC<HomeViewProps> = ({
  info,
  mostLikedBrand,
  recommendListProduct,
  mostLikedBrandListProduct,
  newestListProduct,
  isLoading,
  onRefresh,
}: HomeViewProps): JSX.Element => {
  return (
    <View style={styles.containerWrapper}>
      <SafeAreaView style={styles.container}>
        <ImageBackground source={AppBG} style={styles.container}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={false} onRefresh={onRefresh} />
            }>
            <View style={styles.header}>
              <View style={styles.row}>
                <Image source={info.avatar} />
                <View style={styles.informationWrapper}>
                  <SParagraph style={styles.title}>
                    {getWelcomeString()}
                  </SParagraph>
                  <H3 bold style={styles.name}>
                    {info.name}
                  </H3>
                </View>
              </View>
            </View>
            <View style={styles.container}>
              {recommendListProduct.length > 0 && (
                <HorizontalListProduct
                  title="Recommended for you"
                  data={recommendListProduct}
                />
              )}
              {mostLikedBrandListProduct.length > 0 && (
                <HorizontalListProduct
                  title={`Because you like ${mostLikedBrand}`}
                  data={mostLikedBrandListProduct}
                />
              )}
              <HorizontalListProduct
                title={'Brand new products'}
                data={newestListProduct}
              />
            </View>
          </ScrollView>
        </ImageBackground>
        {isLoading && <LoadingOverlay />}
      </SafeAreaView>
    </View>
  );
};

export default HomeView;
