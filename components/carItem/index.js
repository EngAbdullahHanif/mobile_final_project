import React from 'react';
import  { View, Text, ImageBackground, SafeAreaView } from 'react-native';
import styles from './styles'
import StyleButton from './../styledButton/';


import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import Mybutton from './../components/Mybutton';


import { openDatabase } from "expo-sqlite";
const db = openDatabase("db");


const CarItem = (props) => {
    // const {navigate} = useNavigation();
    const navigation = useNavigation();
    const {image, name, tagline, taglineCTA} = props.car; 
    // const {image, name, tagline, taglineCTA} = ''; 


    useEffect(() => {
      db.transaction(function (txn) {
        txn.executeSql(
          "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
          [],
          function (tx, res) {
            console.log('item:', res.rows.length);
            if (res.rows.length == 0) {
              txn.executeSql('DROP TABLE IF EXISTS table_user', []);
              txn.executeSql(
                'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
                []
              );
            }
          }
        );
      });
    }, []);

    return(
        <View style={styles.carContainer}>
          <ImageBackground source={image} style={styles.image} />
          <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtitle}>
              {tagline}
              {' '}
              <Text style={styles.subtitleCTA}>{taglineCTA}</Text>  
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <StyleButton 
              type="primary"
              content={'Custom Order'}
              onPress={()=>{
                console.warn("Cutom order was pressed")
              }}
            />
            <StyleButton 
              type="secondary"
              content={'Existing inventory'}
              onPress={()=>{
                console.warn("Custom inventrory was pressed")
              }}
            />
              <View >
                <View style={{ flex: 1 }}>
                  <Mybutton
                    title="New Contact"
                    customClick={() => navigate('NewContact')}
                  />
                </View>
              </View>            
          </View>  
      </View>
    );
};  

export default CarItem;

//    blog.edafait.com
//    www.edafait.com
