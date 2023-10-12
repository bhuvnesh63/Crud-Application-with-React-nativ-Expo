import { View, Text, ScrollView, ToastAndroid, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';


const Create = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gstNumber, setGstNumber] = useState('');

  const handleAddUser = async () => {
    try {
      const userData = {
        name,
        phoneNumber,
        email,
        address,
        gstNumber
      };
      const response = await 
      axios.post('http://192.168.100.94:5000/api/v1/account/new', 
      userData);
      console.log('User created:', response.data);
      showToast('User created successfully!');

      navigation.navigate("Home")
    } catch (error) {

      console.error('Error creating user:', error);
      showToast('Failed to create user');
    }
  };

  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }
  return (
    <ScrollView >
      <View style={{ margin: 20 }}>

        <Text style={{
          fontSize: 20,
          marginBottom: 10
        }} >Name</Text>
        <TextInput
          placeholder='Enter your name'
          value={name}
          onChangeText={(text) =>
            setName(text)}></TextInput>


        <Text style={{
          fontSize: 20,
          marginTop: 20
        }} >Phone Number</Text>
        <TextInput
          placeholder='Enter your phone number'
          keyboardType="numeric"
          style={{ marginTop: 10 }}
          value={phoneNumber}
          onChangeText={(text) =>
            setPhoneNumber(text)}></TextInput>


        <Text style={{
          fontSize: 20,
          marginTop: 20
        }} >Email</Text>
        <TextInput
          placeholder='Enter your email Id'
          style={{ marginTop: 10 }}
          value={email}
          onChangeText={(text) =>
            setEmail(text)}>
        </TextInput>


        <Text style={{
          fontSize: 20,
          marginTop: 20
        }}>Address</Text>
        <TextInput
          placeholder='Enter your Address'
          style={{ marginTop: 10 }}
          value={address}
          onChangeText={(text) =>
            setAddress(text)}>

        </TextInput>


        <Text style={{
          fontSize: 20,
          marginTop: 20
        }} >GST Number</Text>
        <TextInput
          placeholder='Enter your gst number'
          keyboardType="numeric"
          style={{ marginTop: 10 }}
          value={gstNumber}
          onChangeText={(text) =>
            setGstNumber(text)}>

        </TextInput>

        <Button textColor='white'
          style={{
            backgroundColor: "#F29492",
            margin: 20,
            marginLeft: "35%",
            width: 90,
          }}
          onPress={handleAddUser} >
          Add User
        </Button>
      </View>
    </ScrollView>
  )



}

export default Create