import {Dimensions} from 'react-native';
const {height} = Dimensions.get('window');

export const styles = {
  scrollView: {
    backgroundColor: '#90EE90',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#90EE90',
    minHeight: height,
  },
  title: {
    marginTop: '10%',
    color: '#0000FF',
    fontSize: 55,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  subTitle: {
    marginTop: '5%',
    color: '#0000FF',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
  },
  iconStyle: {
    width: 200,
    height: 200,
    marginTop: '10%',
  },
  signupButton: {
    backgroundColor: 'red',
    marginTop: '10%',
    minWidth: 250,
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    color: 'red',
  },
};
