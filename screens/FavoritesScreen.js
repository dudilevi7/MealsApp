import React from 'react';
import {StyleSheet ,View,Text, Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';
import MealItem from '../components/MealItem';

const FavoritesScreen = props => {
    // const { favMealsArr } = props.route.params;

    const renderMealItem = itemData => {
        return(
            <MealItem item = {itemData.item}
            onSelectMeal = {()=>props.navigation.navigate('MealDetails',{
                meal : itemData.item
            })}
            />
        );
    }
    const favMeals = useSelector(state => state.meals.favoriteMeals)
    // const favMeals = MEALS;
    return (
        <View style = {styles.screen}> 
         <FlatList data = {favMeals} 
             keyExtractor = {(item,index) =>item.id}
             renderItem = {renderMealItem}/>
        </View>
    )
};


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
});
export default FavoritesScreen;