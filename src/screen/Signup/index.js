import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {styles} from './Landing.component.style';

const SignUp = () => {
  const [userName, onChangeUserName] = useState(null);
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
  const [passwordConfirmation, onChangePasswordConfirmation] = useState(null);
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>KoG</Text>
      <Text style={styles.subTitle}>Kingdom of The Greatest</Text>
      <View style={styles.container}>
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
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangePasswordConfirmation}
          value={passwordConfirmation}
          placeholder="Confirm Password"
        />
        <Pressable
          style={styles.signupButton}
          onPress={() => {
            alert('Sign up Button Pressed');
          }}>
          <Text style={styles.buttonText}>{'Sign Up'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default SignUp;
