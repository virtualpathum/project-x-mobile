import React, { useState } from 'react';
import { Header } from 'react-navigation-stack';
import { Text, StyleSheet, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import {TextField,FilledTextField,OutlinedTextField} from 'react-native-material-textfield';
import axios from 'axios';
const LoginScreen = ({ navigation }) => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    onSubmit = () => {
        //e.preventDefault()
        const userObject = {
            usernameOrEmail: username,
            password: password

        };
        console.log(userObject)
        axios.post('http://ec2-13-229-66-227.ap-southeast-1.compute.amazonaws.com:8070/api/auth/signin', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    }
    return (
        <KeyboardAvoidingView keyboardVerticalOffset = {Header.HEIGHT + 10} behavior= {(Platform.OS === 'ios')? "padding" : null} style = {{ flex: 1 }}>
            <View style={styles.container}>
                <View >
                        <Text style={styles.titleText}>SIGN IN</Text>
                </View>
                <OutlinedTextField  label='Username' 
                 onChangeText={(username) => setUserName(username)}
                 value={username}  /> 
                <OutlinedTextField  label='Password' secureTextEntry 
                 onChangeText={(password) => setPassword(password)}
                 value={password}/>   
                <View style={styles.buttonContainer}>
                    <TouchableOpacity>
                    <View style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => onSubmit()}>LOGIN</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('Register')}> 
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </View>
                    </TouchableOpacity>
                </View>            
            </View>
        </KeyboardAvoidingView>
    )

};

const styles = StyleSheet.create({
    buttonContainer: {
        paddingTop: 20,
        paddingVertical: 15
    },
    button: {
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: '#2980b6'
    },      
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        padding: 20
    },
    loginContainer:{
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
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

export default LoginScreen;
