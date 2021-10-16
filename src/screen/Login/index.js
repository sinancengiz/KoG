import React, {useState} from 'react';
import {connect} from 'react-redux';
import {loginRequest} from '../../redux/actions/authActions';
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {styles} from './Login.component.style';

const Login = ({onLoginRequest}) => {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);

  const onLoginButtonClicked = () => {
    onLoginRequest({email, password});
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.title}>KoG</Text>
        <Text style={styles.subTitle}>Kingdom of The Greatest</Text>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icons/castle(1).png')}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeEmail}
          value={email}
          placeholder="Enter Email"
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePassword}
          value={password}
          placeholder="Enter Password"
          secureTextEntry={true}
        />
        <Pressable style={styles.loginButton} onPress={onLoginButtonClicked}>
          <Text style={styles.buttonText}>{'Login'}</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
