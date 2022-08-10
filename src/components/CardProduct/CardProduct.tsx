import React, {FC, useContext, useState} from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Product} from '../../models/Product';
import {uppercaseFirstLetter} from '../../utils/string';
import Button from '../Button';
import IconHeart from '../Icons/IconHeart';
import IconInformation from '../Icons/IconInformation';
import IconStar from '../Icons/IconStar';
import {H3, Paragraph, SParagraph} from '../Typography';
import {Linking} from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';
import IconHeartOutlined from '../Icons/IconHeartOutlined';
import {ProductContext} from '../../services/context/product';
import {styles} from './styles';
import {AppContext} from '../../services/context/app';

type CardProductProps = {
  data: Product;
  onViewBrand?: () => void;
  onOrderNow?: () => void;
};

const CardProduct: FC<CardProductProps> = ({
  data,
  onOrderNow,
  onViewBrand,
}): JSX.Element => {
  const {likeProduct, disLikeProduct, productLikedIds} =
    useContext(ProductContext);
  const {setWebViewUrl} = useContext(AppContext);
  const [lastTap, setLastTap] = useState<number>();
  const isLiked = productLikedIds.some(id => id === data.id);

  const tagList =
    data.tagList && data.tagList.length > 0
      ? uppercaseFirstLetter(data.tagList.join(', '))
      : 'N/A';
  const name = data.name ? uppercaseFirstLetter(data.name) : 'N/A';
  const brand = data.brand ? uppercaseFirstLetter(data.brand) : 'N/A';
  const rating = data.rating ? data.rating : 'N/A';
  const priceSign = data.priceSign
    ? uppercaseFirstLetter(data.priceSign)
    : 'N/A';
  const price = data.price ? data.price : 'N/A';
  const category = data.category ? uppercaseFirstLetter(data.category) : 'N/A';
  const productType = data.productType
    ? uppercaseFirstLetter(data.productType)
    : 'N/A';

  const openWebsiteLink = async () => {
    try {
      const isAvailable = await InAppBrowser.isAvailable();
      const url = data.websiteLink;
      if (isAvailable) {
        InAppBrowser.open(url, {
          // iOS Properties
          dismissButtonStyle: 'cancel',
          preferredBarTintColor: 'gray',
          preferredControlTintColor: 'white',
          // Android Properties
          showTitle: true,
          toolbarColor: '#6200EE',
          secondaryToolbarColor: 'black',
          enableUrlBarHiding: true,
          enableDefaultShare: true,
          forceCloseOnRedirection: true,
        });
      } else {
        Linking.openURL(url);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleOnViewBranch = () => {
    openWebsiteLink();
    onViewBrand && onViewBrand();
  };

  const handleOnOrderNow = () => {
    setWebViewUrl && setWebViewUrl(data.productLink);
    onOrderNow && onOrderNow();
  };

  const handleDoubleTap = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 300;
    if (lastTap && now - lastTap < DOUBLE_PRESS_DELAY) {
      isLiked ? disLikeProduct(data.id) : likeProduct(data.id);
    } else {
      setLastTap(now);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <TouchableWithoutFeedback onPress={handleDoubleTap}>
          <Image
            source={{
              uri: `https:${data.apiFeaturedImage}`,
            }}
            resizeMode={'contain'}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.content}>
        <H3 bold>{name}</H3>
        <View style={styles.verticalMargin} />
        <SParagraph>{tagList}</SParagraph>
        <View style={styles.verticalMargin} />
        <View style={styles.row}>
          <View style={styles.iconStarWrapper}>
            <IconStar />
          </View>
          <SParagraph>{rating}</SParagraph>
          <View style={styles.currencyWrapper}>
            <SParagraph>{priceSign}</SParagraph>
          </View>
          <SParagraph>{price}</SParagraph>
        </View>
        <View style={styles.verticalMargin} />
        <View style={styles.row}>
          <IconInformation />
          <SParagraph>{`${category} - ${productType}`}</SParagraph>
        </View>
        <View style={styles.verticalMargin} />
        <View style={styles.actionsSection}>
          <Button
            type="small"
            mode="outlined"
            style={styles.btnViewBrand}
            onPress={handleOnViewBranch}>
            <Paragraph>View brand</Paragraph>
          </Button>
          <Button
            type="small"
            mode="contained"
            style={styles.btnOrderNow}
            onPress={handleOnOrderNow}>
            <Paragraph bold style={styles.orderBtnLabel}>
              Order now
            </Paragraph>
          </Button>
        </View>
        <View style={styles.verticalMargin} />
      </View>

      {/* Overflow */}
      <View style={styles.overflow}>
        <View style={styles.branchWrapper}>
          <SParagraph>{brand}</SParagraph>
        </View>
        <TouchableOpacity
          style={styles.btnLike}
          onPress={() =>
            isLiked ? disLikeProduct(data.id) : likeProduct(data.id)
          }>
          <ImageBackground
            style={styles.btnLikeBGImage}
            source={require('../../../assets/images/oval.png')}>
            <View style={styles.iconLikeWrapper}>
              {isLiked ? <IconHeart /> : <IconHeartOutlined />}
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardProduct;
