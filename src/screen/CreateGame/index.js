import React from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text, Image, Pressable} from 'react-native';
import {styles} from './CreateGame.component.style';

const CreateGame = ({userInfo, navigation}) => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.subTitle}>Create Game</Text>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icons/castle(1).png')}
        />
        <Text style={styles.subTitle}>Hello! {userInfo.user_name}</Text>
        <Pressable style={styles.logoutButton} onPress={()=>{alert("create game")}}>
          <Text style={styles.buttonText}>{'Create game'}</Text>
        </Pressable>
        <Pressable 
            style={styles.joinButton} 
            onPress={() => navigation.navigate('CreateOrJoin')}
        >
          <Text style={styles.buttonText}>{'Back'}</Text>
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

export default connect(mapStateToProps)(CreateGame);