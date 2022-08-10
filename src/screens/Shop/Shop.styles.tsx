import {StyleSheet} from 'react-native';

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
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    shadowOffset: {
      width: 10,
      height: 15,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5.84,

    elevation: 15,
  },
  hidden: {
    backgroundColor: 'transparent',
  },
});
