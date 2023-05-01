import React from "react";
import { TouchableWithoutFeedback, Image, View, Text } from "react-native";
import styles from './CategoriesCard.style'

const CategoriesCard = ({category, onSelect}) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.inner_container}>
                <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
                
                <View style={styles.body_container}>
                    <Text style={styles.title}>{category.strCategory} </Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default CategoriesCard;