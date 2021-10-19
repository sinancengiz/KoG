import React,{useState} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text,TextInput, Image, Pressable} from 'react-native';
import {styles} from './CreateGame.component.style';

const CreateGame = ({userInfo, navigation}) => {
    const [gameTitle, onChangeGameTitle] = useState(null);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image
          style={styles.iconStyle}
          source={require('../../assets/icons/castle(1).png')}
        />
        <Text style={styles.subTitle}> Create a New Game</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeGameTitle}
          value={gameTitle}
          placeholder="Game Title"
        />
        <Pressable style={styles.logoutButton} onPress={()=>{alert("create game")}}>
          <Text style={styles.buttonText}>{'Create game'}</Text>
        </Pressable>
        <Pressable 
            // style={styles.joinButton} 
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