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
  loginButton: {
    backgroundColor: 'green',
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
    color: 'black',
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 2,
    width: 250,
    height: 40,
    margin: 5,
  },
};
