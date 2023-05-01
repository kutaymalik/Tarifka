import React from "react";
import { View, FlatList, Text, Image, TouchableOpacity } from "react-native";
import useFetch from "../../hooks/useFetch";
import {RECIPE_URL} from '@env';
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import styles from './Details.style';
import { Divider } from "react-native-paper";
import { Linking } from "react-native";

const Details = ({route, navigation}) => {

    const recipe = route.params.recipe_name;
    console.log(RECIPE_URL + `${recipe}`);
    const {data, loading, error} = useFetch(RECIPE_URL + `${recipe}`);


    const renderMeals = ({item}) => {
        return (
            <View>
                <Image style={styles.image} source={{uri:item.strMealThumb}} />
                <View style={styles.header_container}>
                    <Text style={styles.header}>{item.strMeal} </Text>
                    <Text style={styles.area}>{item.strArea}</Text>
                </View>
                <Divider />

                <View style={styles.body_container}>
                    <Text style={styles.instructions}>{item.strInstructions}</Text>
                </View>

                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => {Linking.openURL(item.strYoutube)}} style={styles.button}>
                        <Text style={styles.button_title}>Watch on Youtube</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

    if(loading) return <Loading/>

    if(error) return <Error/>

    return <FlatList data={data.meals} renderItem={renderMeals} />
}

export default Details;