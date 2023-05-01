import React from "react";
import { View, Text, StyleSheet } from "react-native";
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Categories from "./Pages/Categories/Categories";
import Recipes from "./Pages/Recipes/Recipes";
import Details from "./Pages/Details/Details";

const Stack = createStackNavigator();



const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='CategoriesPage' component={Categories} />
                <Stack.Screen name='RecipesPage' component={Recipes} />
                <Stack.Screen name='DetailsPage' component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
