import React from "react";
import { View, FlatList, Text } from "react-native";
import {CATEGORIES_URL} from '@env';
import useFetch from "../../hooks/useFetch";

import CategoriesCard from "../../components/CategoriesCard/CategoriesCard";
import Loading from "../../components/Loading/Loading";
import Error from "../../components/Error/Error";
import styles from "./Categories.style";

const Categories = ({navigation}) => {

    const {data, loading, error} = useFetch(CATEGORIES_URL);

    const renderCategories = ({item}) => {
        return (
            <CategoriesCard category={item} onSelect={() => handleCategorySelect(item.strCategory)} />
        )
    }

    const handleCategorySelect = (category_name) => {
        navigation.navigate('RecipesPage', {category_name});
    }

    if(loading){
        return <Loading/>
    }

    if(error){
        return <Error/>
    }

    return (
        <View style={styles.container}>
            <View style={styles.inner_container}>
                <FlatList data={data.categories} renderItem={renderCategories}/>
            </View>
        </View>
    )
    
}

export default Categories;