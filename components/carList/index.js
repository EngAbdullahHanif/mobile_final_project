import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import CarItem from "../CarItem";

import styles from './styles';
import cars from './cars';

import HomeScreen from './../HomeScreen';
import NewContact from './../NewContact';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const CarsList = (props) => {
  const Stack = createStackNavigator();
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({item}) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
      />
      <NavigationContainer>
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
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default CarsList;
