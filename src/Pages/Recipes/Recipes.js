import React from "react";
import { View, FlatList, Text } from "react-native";
import useFetch from "../../hooks/useFetch";
import {RECIPES_URL} from '@env';
import Loading from "../../components/Loading/Loading";
import RecipesCard from "../../components/RecipesCard/RecipesCard";
import styles from './Recipes.style'

const Recipes = ({route, navigation}) => {

    const renderRecipes = ({item}) => <RecipesCard recipes={item} onSelect={() => handleRecipeSelect(item.strMeal)} />

    const handleRecipeSelect = (recipe_name) => {
        navigation.navigate('DetailsPage', {recipe_name});
    }
    
    const category = route.params.category_name;
    
    const {data, loading, error} = useFetch(RECIPES_URL + `${category}`);

    if(loading) return <Loading/>

    if(error) return <Error/>

    return (
        <View style={styles.container}>
            <FlatList data={data.meals} renderItem={renderRecipes} />
        </View>
    )
}

export default Recipes;