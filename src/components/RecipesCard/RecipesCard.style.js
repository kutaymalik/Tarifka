import React from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({

    inner_container: {
        flex: 1,
        padding: 10,
        borderRadius: 20,
    },

    image: {
        minHeight: 200,
        borderRadius: 20,
    },

    body_container: {
        position: 'absolute',
        top: 170,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'flex-end',
        height: 40,
        width: 355,
    },

    title: {
        fontWeight: 'bold',
        color: 'white',
        fontSize: 30,
        paddingRight: 10,
        paddingLeft: 10,
        flex:1,
        flexWrap: 'wrap',
        flexDirection: 'row',
    }


});