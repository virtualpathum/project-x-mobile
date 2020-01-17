import React, { useState } from 'react';
import { Header } from 'react-navigation-stack';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, KeyboardAvoidingView, FlatList } from 'react-native';
import {TextField,FilledTextField,OutlinedTextField} from 'react-native-material-textfield';
import server from './../backend/server';
import axios from 'axios';


const UserScreen = () => {
    const [users, setUsers] = useState('');
    const headers = {
        headers: {'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTc5MTY0Mjk4LCJleHAiOjE1Nzk3NjkwOTh9.QPnLbNpCx1sfQfjowRt732yireMaoDYWHAP5QmDh8LyIPm112FxTgguNfAe18a0bEyEUVTlWudQKdBryAD_Xbw'}
    }
    
    const userAPI = async () => {
        
        const response = await axios.get('http://ec2-13-229-66-227.ap-southeast-1.compute.amazonaws.com:8070/api/user/', headers)
        .then((response) => {
            //console.log(response.data.length)
            setUsers(response.data);
        }).catch((error) => {
            console.log(error)
        });
    }

    function Item({ title }) {
        return (
          <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
          </View>
        );
      }


   
    return (
        <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 10} behavior= {(Platform.OS === 'ios')? "padding" : null} style = {{ flex: 1 }}>
        
            <View style={styles.loginContainer}>
            <TouchableOpacity style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => userAPI()}>VIEW USERS</Text>
                    </View>
            </TouchableOpacity> 
            <Text>There are {users.length} users</Text>
            <FlatList
            data={users} // data is a constant values in the File scope.
            keyExtractor={user => user.id} 
            renderItem={({ item }) => <Item title={item.firstName} />} 
            />
            </View>
            
        </KeyboardAvoidingView>
        )

};

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: '#2980b6',
        padding: 20
    },
    loginContainer:{
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20
    },
    buttonContainer:{
        paddingVertical: 15
    },
    button: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#2980b6'
    },
    buttonText:{
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        padding: 20
    },
    titleText:{
        color: '#2980b6',
        textAlign: 'center',
        fontWeight: '700',
        fontSize:24,
        padding: 20
    },

    input:{
        borderColor:'white',
        padding: 2,
        
    },
    item: {
        backgroundColor: '#9CCECA',
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 5,
      },
      title: {
        fontSize: 14,
        color: '#fff',
      },
});

export default UserScreen;