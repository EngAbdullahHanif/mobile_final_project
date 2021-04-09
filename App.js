import { StatusBar } from 'expo-status-bar';
// import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarsList from './components/CarList';
import Header from './components/Header';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './components/HomeScreen';
import NewContact from './components/NewContact';
import UpdateUser from './components/UpdateUser';
import ViewUser from './components/ViewUser';
import ViewAllUser from './components/ViewAllUser';
import DeleteUser from './components/DeleteUser';

export default function App() {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <Header />   
      <StatusBar style="auto" />
      <CarsList />

    {/* <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Home', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="View"
          component={ViewUser}
          options={{
            title: 'View User', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="ViewAll"
          component={ViewAllUser}
          options={{
            title: 'View Users', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Update"
          component={UpdateUser}
          options={{
            title: 'Update User', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="NewContact"
          component={NewContact}
          options={{
            title: 'New Contact', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
        <Stack.Screen
          name="Delete"
          component={DeleteUser}
          options={{
            title: 'Delete User', //Set Header Title
            headerStyle: {
              backgroundColor: '#221eeb', //Set Header color
            },
            headerTintColor: '#fff', //Set Header text color
            headerTitleStyle: {
              fontWeight: 'bold', //Set Header text style
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer> */}
    </View>      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// https://blog.edafait.com
// https://www.edafait.com

// import 'react-native-gesture-handler';

// import * as React from 'react';
// import { Button, View, Text } from 'react-native';

// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// import HomeScreen from './components/HomeScreen';
// import NewContact from './components/NewContact';
// import UpdateUser from './components/UpdateUser';
// import ViewUser from './components/ViewUser';
// import ViewAllUser from './components/ViewAllUser';
// import DeleteUser from './components/DeleteUser';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="HomeScreen">
//         <Stack.Screen
//           name="HomeScreen"
//           component={HomeScreen}
//           options={{
//             title: 'Home', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="View"
//           component={ViewUser}
//           options={{
//             title: 'View User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="ViewAll"
//           component={ViewAllUser}
//           options={{
//             title: 'View Users', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Update"
//           component={UpdateUser}
//           options={{
//             title: 'Update User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="NewContact"
//           component={NewContact}
//           options={{
//             title: 'New Contact', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//         <Stack.Screen
//           name="Delete"
//           component={DeleteUser}
//           options={{
//             title: 'Delete User', //Set Header Title
//             headerStyle: {
//               backgroundColor: '#221eeb', //Set Header color
//             },
//             headerTintColor: '#fff', //Set Header text color
//             headerTitleStyle: {
//               fontWeight: 'bold', //Set Header text style
//             },
//           }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
