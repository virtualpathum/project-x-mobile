import React, { useState } from 'react';
import { Header } from 'react-navigation-stack';
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, KeyboardAvoidingView , FlatList } from 'react-native';
import {TextField,FilledTextField,OutlinedTextField} from 'react-native-material-textfield';
import axios from 'axios';
const API_URL = 'http://localhost:8070/api/signup';


const BlogPostScreen = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [blogs, setBlogs] = useState('');
    const [message, setMessage] = useState('');


    onSubmit = () => {
        //e.preventDefault()
        const payload = {
            title: title,
            content: content

        };
    console.log(payload)
        axios.post('http://ec2-13-229-66-227.ap-southeast-1.compute.amazonaws.com:8070/api/blog/', payload)
            .then((res) => {
                console.log(res.data)
                setMessage('Successfully Created!')
            }).catch((error) => {
                console.log(error)
                setMessage(error)
            });
    }

    const headers = {
        headers: {'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNTc5MTY0Mjk4LCJleHAiOjE1Nzk3NjkwOTh9.QPnLbNpCx1sfQfjowRt732yireMaoDYWHAP5QmDh8LyIPm112FxTgguNfAe18a0bEyEUVTlWudQKdBryAD_Xbw'}
    }

    const blogAPI = async () => {
        
        const response = await axios.get('http://ec2-13-229-66-227.ap-southeast-1.compute.amazonaws.com:8070/api/blog/')
        .then((response) => {
            console.log(response.data)
            setBlogs(response.data);
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
                <Text style={styles.titleText}>CREATE A BLOG POST</Text>
                <OutlinedTextField  label='Title' 
                onChangeText={(title) => setTitle(title)}
                    value={title} /> 
                <OutlinedTextField  label='Content' 
                 onChangeText={(content) => setContent(content)}
                 value={content} /> 
                <TouchableOpacity style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => onSubmit()}>CREATE</Text>
                    </View>
                </TouchableOpacity> 
                
                <TouchableOpacity style={styles.buttonContainer} >
                    <View style={styles.button}>
                        <Text style={styles.buttonText} onPress={() => blogAPI()}>VIEW BLOG POSTS</Text>
                    </View>
                </TouchableOpacity> 
                <Text style={styles.messageText}>There are {blogs.length} blog posts</Text>
                
                <FlatList
            data={blogs} // data is a constant values in the File scope.
            keyExtractor={post => post.id} 
            renderItem={({ item }) => <Item title={item.title} />} 
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
        paddingVertical: 10
    },
    button: {
        marginBottom: 10,
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
        fontSize:14,
        padding: 20
    },
    messageText:{
        color: '#CE9178',
        textAlign: 'center',
        fontSize:14,
        padding: 10
    },
    item: {
        backgroundColor: '#9CCECA',
        padding: 10,
        marginVertical: 2,
        marginHorizontal: 5,
      },

    input:{
        borderColor:'white',
        padding: 2,
        
    },
});

export default BlogPostScreen;