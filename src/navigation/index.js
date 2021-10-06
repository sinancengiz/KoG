import {createStackNavigator} from 'react-navigation-stack';
import {Landing, Login, Signup} from '../screen';

export const AppStack = createStackNavigator({Landing: Landing, Login: Login});
export const AuthStack = createStackNavigator({Signup: Signup});
