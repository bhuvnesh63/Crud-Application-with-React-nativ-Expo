import { View, Text, ScrollView, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import axios from 'axios';
import { useRoute } from '@react-navigation/native';


const Update = ({ navigation }) => {
  const route = useRoute();
  const { userId } = route.params;
  

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [gstNumber, setGstNumber] = useState('');



  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await 
        axios.get(`http://192.168.0.105:5000/api/v1/account/${userId}`);
        const userData = response.data;
        setName(userData.account.name);
        setPhoneNumber(userData.account.phoneNumber.toString());
        setEmail(userData.account.email);
        setAddress(userData.account.address);
        setGstNumber(userData.account.gstNumber.toString());
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userId]);


  const handleUpdateUser = async () => {
    try {
      const updatedUserData = {
        name,
        phoneNumber: parseInt(phoneNumber),
        email,
        address,
        gstNumber: parseInt(gstNumber)
      };
      const response = await 
      axios.put(`http://192.168.100.94:5000/api/v1/account/${userId}`, 
      updatedUserData);

      // console.log('User Updated:', response.data);
      showToast('User updated successfully!');
      navigation.navigate("Home");
    } catch (error) {
      showToast('User not updated successfully!');
      console.error('Error updating user:', error);
    }
  };



  function showToast(message) {
    ToastAndroid.show(message, 
      ToastAndroid.SHORT);
  }


  return (
    <ScrollView >
      <View style={{
        margin: 20
      }}>
        <Text style={{
          fontSize: 20,
          marginBottom: 10
        }} >Name</Text>
        <TextInput
          placeholder='Enter your name'
          value={name}
          onChangeText={(text) =>
            setName(text)}>

        </TextInput>


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
            setPhoneNumber(text)}>

        </TextInput>


        <Text style={{
          fontSize: 20,
          marginTop: 20
        }} >Email</Text>
        <TextInput
          placeholder='Enter your email Id'
          style={{
            marginTop: 10
          }}
          value={email}
          onChangeText={(text) =>
            setEmail(text)}>
        </TextInput>


        <Text style={{
          fontSize: 20,
          marginTop: 20
        }} >Address</Text>
        <TextInput
          placeholder='Enter your Address'
          style={{
            marginTop: 10
          }}
          value={address}
          onChangeText={(text) =>
            setAddress(text)}>
        </TextInput>


        <Text style={{
          fontSize: 20,
          marginTop: 20
        }}  >GST Number</Text>
        <TextInput
          placeholder='Enter your gst number'
          keyboardType="numeric"
          style={{ marginTop: 10 }}
          value={gstNumber}
          onChangeText={(text) =>
            setGstNumber(text)}>

        </TextInput>

        <Button
          textColor='white'
          style={{
            backgroundColor: "#F29492",
            margin: 20,
            marginLeft: "35%",
            width: 90,
          }}
          onPress={handleUpdateUser} >
          Update
        </Button>
      </View>
    </ScrollView>
  )
}

export default Update