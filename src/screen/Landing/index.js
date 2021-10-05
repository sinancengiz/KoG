import React from 'react';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {styles} from './Landing.component.style';

const Landing = () => {
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
            alert('Login Button Pressed');
          }}>
          <Text style={styles.buttonText}>{'Login'}</Text>
        </Pressable>
        <Pressable
          style={styles.signupButton}
          onPress={() => {
            alert('Signup Button Pressed');
          }}>
          <Text style={styles.buttonText}>{'Sign Up'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Landing;
