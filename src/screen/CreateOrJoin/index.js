import React, {useState} from 'react';
import {connect} from 'react-redux';
import {logout} from '../../redux/actions/authActions';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {styles} from './CreateOrJoin.component.style';

const CreateOrJoin = ({userInfo, onLogout}) => {
  console.log('userInfo', userInfo);
  const onLogoutButtonClicked = () => {
    onLogout();
  };
  return (
    <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>KoG</Text>
      <Text style={styles.subTitle}>Kingdom of The Greatest</Text>
      <View style={styles.container}>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icons/castle(1).png')}
        />
        <Text style={styles.subTitle}>Hello! {userInfo.user_name}</Text>
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
        <Pressable style={styles.signupButton} onPress={onLogoutButtonClicked}>
          <Text style={styles.buttonText}>{'Logout'}</Text>
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
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateOrJoin);
