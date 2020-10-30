import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import dlColors from '../constants/dlColors';

const MealItem = props => {
    return (
        <View style = {styles.mealItem}>
            <TouchableOpacity onPress = {props.onSelectMeal}>
                <View>
                    <View style = {{...styles.mealRow,...styles.mealHeader}}>
                        <ImageBackground style = {styles.bgImg} source = {{uri : props.item.imageURL}}>
                        <Text numOfLines={1}style = {styles.title}>{props.item.title}</Text>
                        </ImageBackground>
                        
                    </View>
                    <View style = {{...styles.mealRow,...styles.mealDetail}}>
                        <Text>{props.item.duration}m</Text>
                        <Text>{props.item.complexity.toUpperCase()}</Text>
                        <Text>{props.item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
        
    
}
const styles = StyleSheet.create({
    mealItem : {
        height : 200,
        width : '100%',
        marginVertical : 20,
        borderBottomWidth : 5,
        borderBottomColor : dlColors.blue,
        borderRadius : 3,
        shadowOffset :  {width : 0 , height : 1},
        shadowRadius : 4,
        shadowOpacity : 0.26,
        elevation : 1,
        overflow : 'hidden'
    },
    mealRow : {
        flexDirection : 'row',
    },
    mealHeader : {
        height : '90%'
    },
    mealDetail : {
        paddingHorizontal : 2,
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    title :{
        padding : 5,
        fontSize : 20,
        color : dlColors.white,
        backgroundColor :'rgba(0,0,0,0.5)',
        textAlign : 'center'
    },
    bgImg : {
        width : '100%',
        height : '100%',
        justifyContent : 'flex-end'
    }
})
export default MealItem;