import React from "react";
import { TouchableWithoutFeedback, Image, View, Text } from "react-native";
import styles from './RecipesCard.style'

const RecipesCard = ({recipes, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.inner_container}>
                <Image style={styles.image} source={{uri: recipes.strMealThumb}} />

                <View style={styles.body_container}>
                    <Text numberOfLines={1} style={styles.title}>{recipes.strMeal}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default RecipesCard;