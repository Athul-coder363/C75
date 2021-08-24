import React from 'react'
import { View,Text, StyleSheet, TextInput, Image, TouchableOpacity,KeyboardAvoidingView } from 'react-native'
import * as firebase from 'firebase'

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            emailId : '',
            passWord: '',
        }
    }  
    login = async(email,password) =>{
        if(email && password){
             try{
                 const response = await firebase.auth().signInWithEmailAndPassword(email,password)
                 if(response){
                     this.props.navigation.navigate('Transaction')
                 }
             }catch(error){
                 switch(error.code){
                     case 'auth/user-not-found': alert('user does not exist in this unverse')
                     console.log('does not exist')
                     break
                     case 'auth/invalid-email': alert('incorrect email or password')
                     console.log(invalid)
                     break
                 }
             }
        }else{
            alert('enter email & password')
        }
    }
    render(){
        return(
            <KeyboardAvoidingView style = {{alignItems: 'center', marginTop: 20}}>
            <View>
                <Image source = {require("../assets/booklogo.jpg")} style  = {{width: 200, height: 200}} />
                <Text style = {{textAlign: 'center', fontSize: 30}}>
                    Willy
                </Text>
            </View>
            <View>
                <TextInput style = {styles.loginBox} placeholder = "EmailId" keyboardType = 'email-address' 
                onChangeText = {(text)=>{
                    this.setState({
                        emailId: text
                    })
                }} />
                <TextInput style = {styles.loginBox} placeholder = "PassWord" secureTextEntry = {true} 
                onChangeText = {(text)=>{
                    this.setState({
                        passWord: text
                    })
                }} />
            </View>
            <View>
                <TouchableOpacity style = {{height: 30, width: 90, borderWidth: 1, marginTop: 20, borderRadius: 7}}
                onPress = {
                    ()=>{
                        this.login(this.state.emailId, this.state.passWord)
                    }
                }
                >
                <Text style = {{textAlign: 'center'}}>login</Text>    
                </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
        )
        }
}
const styles = StyleSheet.create({
    loginBox : {
        width: 300,
        height: 40,
        borderWidth: 1.5,
        fontSize: 20,
        margin: 10,
        paddingLeft: 10
    }
})