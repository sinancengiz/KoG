import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  Image,
  Pressable,
  TextInput,
} from 'react-native';
import {styles} from './Home.component.style';

const Home = ({game}) => {

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text>Home Page</Text>
      </View>
    </ScrollView>
  );
};

const mapStateToProps = (state) => ({
  game: state.game.game,
});

export default connect(mapStateToProps)(Home);
