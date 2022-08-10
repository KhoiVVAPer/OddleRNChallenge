import React, {useContext, useRef} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/Home.container';
import ShopScreen from '../screens/Shop/Shop.container';
import FavoritesScreen from '../screens/Favorites/Favorites.container';
import IconAddressBookActive from '../components/Icons/IconAddressBookActive';
import IconAddressBookInactive from '../components/Icons/IconAddressBookInactive';
import IconHeart from '../components/Icons/IconHeart';
import IconHeartOutlined from '../components/Icons/IconHeartOutlined';
import IconInformation from '../components/Icons/IconInformation';
import IconMinOrder from '../components/Icons/IconMinOrder';
import IconShopActive from '../components/Icons/IconShopActive';
import IconShopInactive from '../components/Icons/IconShopInactive';
import IconStar from '../components/Icons/IconStar';
import {ProductProvider} from '../services/context/product';
import BottomSheet from 'reanimated-bottom-sheet';
import {Dimensions, Platform, StyleSheet, View} from 'react-native';
import {H2} from '../components/Typography';
import {AppContext} from '../services/context/app';
import BottomSheetBehavior from 'reanimated-bottom-sheet';
import {WebView} from 'react-native-webview';
import Button from '../components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const icons: {
  [key: string]: () => JSX.Element;
} = {
  IconAddressBookActive,
  IconAddressBookInactive,
  IconHeart,
  IconHeartOutlined,
  IconInformation,
  IconMinOrder,
  IconShopActive,
  IconShopInactive,
  IconStar,
};

const Tab = createBottomTabNavigator();
const screenHeight = Dimensions.get('screen').height;

export default function Router() {
  const bsRef = useRef<BottomSheetBehavior>(null);
  const {webViewUrl, setWebViewUrl} = useContext(AppContext);

  if (webViewUrl.length > 0) {
    bsRef.current?.snapTo(1);
  } else {
    bsRef.current?.snapTo(0);
  }

  const onCloseBS = () => {
    setWebViewUrl('');
  };

  const insets = useSafeAreaInsets();

  const bsHeight =
    screenHeight - (Platform.OS === 'ios' ? insets.top : insets.top + 50);

  return (
    <NavigationContainer>
      <ProductProvider>
        <Tab.Navigator
          screenOptions={({route}) => ({
            headerShown: false,
            tabBarStyle: {height: Platform.OS === 'ios' ? 100 : 70},
            tabBarLabelStyle: {
              fontSize: 10,
              lineHeight: 12,
              color: '#0A3040',
            },
            tabBarIcon: ({focused}) => {
              let item = 'IconStar';

              if (route.name === 'Home') {
                item = focused
                  ? 'IconAddressBookActive'
                  : 'IconAddressBookInactive';
              } else if (route.name === 'Shop') {
                item = focused ? 'IconShopActive' : 'IconShopInactive';
              } else if (route.name === 'Favorites') {
                item = focused ? 'IconHeart' : 'IconHeartOutlined';
              }

              const Icon = icons[item];

              return <Icon />;
            },
          })}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Shop" component={ShopScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
        <BottomSheet
          ref={bsRef}
          snapPoints={[0, bsHeight]}
          renderContent={() => (
            <View
              style={[
                styles.bsContainer,
                {
                  height: bsHeight,
                },
              ]}>
              <View style={styles.bsHeader}>
                <Button mode="text" onPress={() => setWebViewUrl('')}>
                  <H2 bold style={styles.bsCloseLabel}>
                    Close
                  </H2>
                </Button>
              </View>
              {webViewUrl.length > 0 && <WebView source={{uri: webViewUrl}} />}
            </View>
          )}
          onCloseEnd={onCloseBS}
        />
      </ProductProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bsContainer: {
    backgroundColor: '#FFFFFF',
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: 'gray',
  },
  bsHeader: {
    alignItems: 'flex-end',
    paddingRight: 5,
  },
  bsCloseLabel: {textDecorationLine: 'underline'},
});
