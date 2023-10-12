import React from 'react';
import { View, ImageBackground, Text, StyleSheet } from 'react-native';
import image from '../assets/app2.jpeg'

const UserDetails = ({ route }) => {
    const { user } = route.params;

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <View style={styles.wholeview}>
                    <Text style={styles.heading}>
                        Hey{' '}
                        <Text style={styles.spanText}>{user.name} 😃</Text>
                    </Text>
                    <Text style={styles.useerdetails}>Name: {user.name}</Text>
                    <Text style={styles.useerdetails}>Email: {user.email}</Text>
                    <Text style={styles.useerdetails}>Phone: {user.phoneNumber}</Text>
                    <Text style={styles.useerdetails}>Address: {user.address}</Text>
                    <Text style={styles.useerdetails}>GST Number: {user.gstNumber}</Text>
                   
                </View>
            </ImageBackground>
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wholeview:{
        backgroundColor:"white",
        opacity:0.6,
        flex:1
    },
    image: {
        flex: 1,
    },
    heading: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingVertical:20,
        color:"black"
    },
    spanText: {
        color: 'red',
    },
    useerdetails: {
        fontSize: 20,
        color: "black",
        padding:20,
        fontWeight:"900"

    }
});

export default UserDetails;
