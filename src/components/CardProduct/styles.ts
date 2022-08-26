import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconStarWrapper: {
    marginRight: 5,
  },
  currencyWrapper: {
    borderWidth: 1,
    borderColor: '#0A3040',
    paddingHorizontal: 5,
    borderRadius: 15,
    marginRight: 5,
    marginLeft: 10,
  },
  imageWrapper: {
    height: 200,
    backgroundColor: '#FFFFFF',
  },
  image: {height: '100%', width: '100%'},
  overflow: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  branchWrapper: {
    backgroundColor: '#F1F1F1',
    padding: 3,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  btnLike: {},
  btnLikeBGImage: {
    padding: 5,
  },
  content: {
    padding: 7,
    paddingHorizontal: 14,
  },
  verticalMargin: {
    height: 10,
  },
  actionsSection: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnViewBrand: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btnOrderNow: {
    marginLeft: 12,
  },
  orderBtnLabel: {
    color: '#FFFFFF',
  },
  iconLikeWrapper: {padding: 5},
});
