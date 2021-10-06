import React from 'react';
import {connect} from 'react-redux';
import {loginRequest} from '../../redux/actions/authActions';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {styles} from './Landing.component.style';

const Landing = ({
  isFetching,
  isAuthenticated,
  failure,
  error,
  userInfo,
  onLoginRequest,
  navigation,
}) => {
  if (!isAuthenticated) {
    console.log('It is not autanticated');
  } else {
    console.log('It is autanticated');
  }
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>KoG</Text>
        <Text style={styles.subTitle}>Kingdom of The Greatest</Text>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icons/castle(1).png')}
        />
        <Pressable
          style={styles.loginButton}
          onPress={() => {
            onLoginRequest({email: 'admin@gmail.com', password: 'password'});
          }}>
          <Text style={styles.buttonText}>{'Login'}</Text>
        </Pressable>
        <Pressable
          style={styles.signupButton}
          onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.buttonText}>{'Sign Up'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  isFetching: state.auth.isFetching,
  isAuthenticated: state.auth.isAuthenticated,
  failure: state.auth.failure,
  error: state.auth.error,
  userInfo: state.auth.userInfo,
});

const mapDispatchToProps = {
  onLoginRequest: loginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
