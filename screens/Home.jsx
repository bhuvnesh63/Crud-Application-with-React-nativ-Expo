import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { StyleSheet, View, ActivityIndicator, ToastAndroid } from 'react-native';
import { DataTable, IconButton, MD3Colors } from 'react-native-paper';
import { useFocusEffect } from '@react-navigation/native';


const Home = ({ navigation }) => {

  //all usestates

  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);


  //use of useffect

  useEffect(() => {
    getData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      getData();
    }, [])
  );



  //get the data from api
  const getData = async () => {
    try {
      const response = await axios.get('http://192.168.100.94:5000/api/v1/accounts');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };


  // deleting the account

  const deleteData = (id) => {
    axios.delete(`http://192.168.100.94:5000/api/v1/account/${id}`)
      .then(response => {
        getData();
        showToast('User deleted successfully');
      })
      .catch(error => {
        console.log(error);
        showToast('Failed to delete user');
      });
  }
  if (!getData) return null;



  //navigate function

  const navigateToUserDetails = (user) => {
    navigation.navigate('UserDetails', { user });
  }


  // fucntion to show toast message



  function showToast(message) {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  }


  return (
    <View style={{
      flex: 1,
      backgroundColor: "#FBCFCD"
    }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Phone</DataTable.Title>
            <DataTable.Title>Address</DataTable.Title>
            <DataTable.Title>Action</DataTable.Title>
            <DataTable.Title>Update</DataTable.Title>
          </DataTable.Header>

          {data?.accounts?.map((item, index) => (
            <DataTable.Row
              key={index}
              onPress={() =>
                navigateToUserDetails(item)}>
              <DataTable.Cell>
                {item.name}
              </DataTable.Cell>
              <DataTable.Cell>
                {item.phoneNumber}
              </DataTable.Cell>
              <DataTable.Cell>
                {item.address}
              </DataTable.Cell>
              <DataTable.Cell>
                <IconButton
                  icon="delete"
                  iconColor={MD3Colors.error50}
                  size={20}
                  onPress={() => { deleteData(item._id) }}
                  value={"Delete"}

                />
              </DataTable.Cell>
              <DataTable.Cell>
                <IconButton
                  icon="update"
                  iconColor={MD3Colors.error50}
                  size={20}
                  onPress={() =>
                    navigation.navigate("Update",
                      { userId: item._id })}
                />
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      )}
      <IconButton
        icon="plus"
        iconColor={MD3Colors.black}
        size={40}
        style={{
          position: 'absolute',
          bottom: 10, right: 10,
          backgroundColor: "white"
        }}
        onPress={() =>
          navigation.navigate("AddNew")}
      />

    </View>

  );
};

export default Home;

