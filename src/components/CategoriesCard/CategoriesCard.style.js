import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    inner_container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#bdbdbd',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },

    image: {
        minHeight: 80,
        width: 80,
        resizeMode: 'contain',
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        
    },

    body_container: {
        paddingLeft: 10,
    },

    title: {
        fontSize: 20,
    }
});