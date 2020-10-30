import React from 'react';
import { useSelector } from 'react-redux';

import {StyleSheet ,View,Text , Button} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
    const {categoryId ,type , color } = props.route.params;

    const availableMeals = useSelector (state => state.meals.filteredMeals)

    const renderMealItem = itemData => {
        return(
            <MealItem item = {itemData.item}
            onSelectMeal = {()=>props.navigation.navigate('MealDetails',{
                meal : itemData.item
            })}
            />
        );
    }
    const displayedMeals = availableMeals.filter(meal => meal.catIds.indexOf(categoryId)>=0);


    return (
        <View style = {styles.screen}> 
            <FlatList data = {displayedMeals} 
            keyExtractor = {(item,index) =>item.id}
            renderItem = {renderMealItem}/>
            {/* <Button color = {color} title = "Go To details!"
            onPress = {()=>props.navigation.navigate('MealDetails')}></Button> */}
        </View>
    )
};
CategoryMealScreen.navigationOptions = (navData)=> {
    return {
        title : navData.route.params.type,
        headerRight: () => (<Button title = "back"/>)
    }
}
const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
});
export default CategoryMealScreen;