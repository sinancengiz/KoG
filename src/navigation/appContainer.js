import React from 'react';
import {connect} from 'react-redux';
import {Landing, Login, Signup, CreateOrJoin, CreateGame} from '../screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

// Commented because now I dont think to use Tab Navigation
//const Tab = createBottomTabNavigator();

// function TabNavigator() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="Home" component={Landing} />
//       <Tab.Screen name="City" component={Login} />
//       <Tab.Screen name="Settings" component={Signup} />
//     </Tab.Navigator>
//   );
// }

const AppContainer = ({isAuthenticated}) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Landing" component={Landing} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
          </>
        ) : (
          <>
            <Stack.Screen name="CreateOrJoin" component={CreateOrJoin} />
            <Stack.Screen name="CreateGame" component={CreateGame} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AppContainer);
