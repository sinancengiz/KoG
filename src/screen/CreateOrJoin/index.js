import React from 'react';
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
      <View style={styles.container}>
        <Text style={styles.title}>KoG</Text>
        <Text style={styles.subTitle}>Kingdom of The Greatest</Text>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icons/castle(1).png')}
        />
        <Text style={styles.subTitle}>Hello! {userInfo.user_name}</Text>
        <Pressable
          style={styles.createButton}
          onPress={() => {
            console.log('Create Button Clicked');
          }}>
          <Text style={styles.buttonText}>{'Create a Game'}</Text>
        </Pressable>
        <Pressable
          style={styles.joinButton}
          onPress={() => {
            console.log('Join Button Clicked');
          }}>
          <Text style={styles.buttonText}>{'Join a Game'}</Text>
        </Pressable>
        <Pressable style={styles.logoutButton} onPress={onLogoutButtonClicked}>
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
