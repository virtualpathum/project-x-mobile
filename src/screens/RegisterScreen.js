import React, { useState } from 'react';
import { Header } from 'react-navigation-stack';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {TextField,FilledTextField,OutlinedTextField} from 'react-native-material-textfield';
import axios from 'axios';
const API_URL = 'http://localhost:8070/api/signup';


const RegisterScreen = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    onSubmit = () => {
        //e.preventDefault()
        const userObject = {
            name: firstName,
            email: email,
            username: username,
            password: password

        };
    console.log(userObject)
        axios.post('http://ec2-13-229-66-227.ap-southeast-1.compute.amazonaws.com:8070/api/auth/signup', userObject)
            .then((res) => {
                console.log(res.data.message)
                setMessage(res.data.message)
            }).catch((error) => {
                console.log(error)
            });
    }

    return (
        <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 10} behavior= {(Platform.OS === 'ios')? "padding" : null} style = {{ flex: 1 }}>
            
            <ScrollView>
            <View style={styles.loginContainer}>
            <Text style={styles.titleText}>SIGN UP</Text>
                <OutlinedTextField  label='First Name' 
                onChangeText={(firstName) => setFirstName(firstName)}
                    value={firstName} /> 
                <OutlinedTextField  label='Last Name' 
                 onChangeText={(lname) => setLastName(lastName)}
                 value={lastName} /> 
                <OutlinedTextField  label='Email' 
                 onChangeText={(email) => setEmail(email)}
                 value={email} /> 
                <OutlinedTextField  label='Username' 
                 onChangeText={(username) => setUserName(username)}
                 value={username} /> 
                <OutlinedTextField  label='Password' secureTextEntry 
                 onChangeText={(password) => setPassword(password)}
                 value={password}/>   
                <TouchableOpacity style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => onSubmit()}>REGISTER</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.titleText}>{message}</Text>               
            </View>
            </ScrollView>
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
});

export default RegisterScreen;