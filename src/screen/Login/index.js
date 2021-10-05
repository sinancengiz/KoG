import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {styles} from './Login.component.style';

const Login = () => {
  const [email, onChangeEmail] = useState(null);
  const [password, onChangePassword] = useState(null);
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
        <Pressable
          style={styles.loginButton}
          onPress={() => {
            alert('Login Button Pressed');
          }}>
          <Text style={styles.buttonText}>{'Login'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Login;
