import React,{useState} from 'react';
import {connect} from 'react-redux';
import {ScrollView, View, Text,TextInput, Image, Pressable} from 'react-native';
import {createGameRequest} from '../../redux/actions/gameActions';
import {styles} from './CreateGame.component.style';

const CreateGame = ({userInfo, onCreatetGameRequest, navigation, game}) => {
  if(game){
    console.log(game);
  }
  const [gameTitle, onChangeGameTitle] = useState(null);
  const onSubmit = () => {
    onCreatetGameRequest({ title: gameTitle});
  }
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
        <Pressable style={styles.logoutButton} onPress={onSubmit}>
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
  game: state.game.game
});

const mapDispatchToProps = {
  onCreatetGameRequest: createGameRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);