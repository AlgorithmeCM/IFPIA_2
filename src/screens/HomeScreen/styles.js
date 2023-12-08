import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b3b7ff',
  },
  carrousel: {flexDirection: 'row'},
  image: {
    resizeMode: 'cover',
    height: 200,
    width: Dimensions.get('screen').width - 10,
    // width: '100%',
    margin: 5,
    borderRadius: 20,
  },
  carrouselIndicator: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('screen').width,
    top: 10,
    zIndex: 2,
  },
  indicator: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    borderColor: 'white',
    borderWidth: 1,
    marginHorizontal: 10,
    marginBottom: 5,
  },
  activeIndicator: {
    backgroundColor: 'white',
  },
  links: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  servicesImage: {
    resizeMode: 'cover',
    borderRadius: 10,
    width: (Dimensions.get('screen').width - 30) / 2,
    height: 150,
    backgroundColor: 'black',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  date: {
    backgroundColor: '#3908a0',
    padding: 5,
    margin: 10,
    borderRadius: 10,
  },
  entrance: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    color: 'white',
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
  },
  formatSeconds: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: 'red',
  },
});

export default styles;
