import {Platform, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  containerWrapper: {flex: 1, backgroundColor: '#FFFFFF'},
  container: {
    flex: 1,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  header: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#FFFFFF',
  },
  informationWrapper: {
    marginLeft: 10,
  },
  title: {
    color: '#515151',
  },
  name: {
    color: '#0A3040',
  },
  headerProductCount: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    backgroundColor: '',
  },
  shadowLine: {
    width: '100%',
    height: 2.5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 1, height: 3},
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  hidden: {
    backgroundColor: 'transparent',
    elevation: 0,
  },
});
