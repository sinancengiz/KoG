import React, {useState} from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {styles} from './CreateOrJoin.component.style';

const CreateOrJoin = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>KoG</Text>
      <Text style={styles.subTitle}>Kingdom of The Greatest</Text>
      <View style={styles.container}>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icons/castle(1).png')}
        />
        <Pressable
          style={styles.signupButton}
          onPress={() => {
            alert('Create Button Clicked');
          }}>
          <Text style={styles.buttonText}>{'Create a Game'}</Text>
        </Pressable>
        <Pressable
          style={styles.signupButton}
          onPress={() => {
            alert('Join Button Clicked');
          }}>
          <Text style={styles.buttonText}>{'Join a Game'}</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default CreateOrJoin;
