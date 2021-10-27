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
import {styles} from './StartGame.component.style';

const StartGame = ({onSignupRequest, error}) => {
  const [userName, onChangeUserName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [passwordConfirmation, onChangePasswordConfirmation] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [errors, setErrors] = useState(error);

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.subTitle}>Start Game</Text>
        {errors && <Text style={styles.error}>{errors}</Text>}
        <Pressable style={styles.signupButton}>
          <Text style={styles.buttonText}>{'Start Game'}</Text>
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
  gameUsers: state.game.gameUsers,
});

const mapDispatchToProps = {
  onSignupRequest: signupRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(StartGame);
