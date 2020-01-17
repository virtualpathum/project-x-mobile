import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
    return (
        <View>
            <Text style={styles.textStyle}>Welcome Home !</Text>
            <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText} >LOGIN</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('Register')}> 
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>REGISTER</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('BlogPost')}> 
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>CREATE A BLOG POST</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('User')}> 
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>View User List</Text>
                    </View>
                    </TouchableOpacity>
                </View>   

        </View>

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

export default HomeScreen;