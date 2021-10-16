import React, {useState} from 'react';
import {connect} from 'react-redux';
import {signupRequest} from '../../redux/actions/authActions';
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {styles} from './Signup.component.style';

const SignUp = ({onSignupRequest}) => {
  const [userName, onChangeUserName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [passwordConfirmation, onChangePasswordConfirmation] = useState(null);

  const onSignupButtonClicked = () => {
    onSignupRequest({
      user_name: userName,
      email: email,
      password: password,
      password_confirmation: passwordConfirmation,
    });
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
          onChangeText={onChangeUserName}
          value={userName}
          placeholder="Enter Username"
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
        <TextInput
          style={styles.input}
          onChangeText={onChangePasswordConfirmation}
          value={passwordConfirmation}
          placeholder="Confirm Password"
          secureTextEntry={true}
        />
        <Pressable style={styles.signupButton} onPress={onSignupButtonClicked}>
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
  onSignupRequest: signupRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
