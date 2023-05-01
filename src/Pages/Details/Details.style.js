import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    image: {
        height: 250,
    },

    header: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#A52A2A',
    },

    header_container: {
        paddingTop: 10,
        paddingLeft: 5
    },

    area:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#A52A2A',
    },
    
    body_container: {
        padding: 10,
    },

    instructions: {
        fontSize: 20,
    },

    button_container: {
        alignItems: 'center',
        backgroundColor: 'red',
        margin: 10,
        padding: 5,
        borderRadius: 5,
    },

    button: {
        backgroundColor: 'red',
        textAlign: 'center',
    },

    button_title: {
        color: 'white',
    }
})