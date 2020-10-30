import React, { useCallback, useEffect } from 'react';
import {StyleSheet ,View,Text, Button, Platform, ImageBackground} from 'react-native';
import { MEALS } from '../data/dummy-data';
import { Ionicons } from '@expo/vector-icons';
import { HeaderButtons,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import dlColors from '../constants/dlColors';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/actions/meals';
const MealDetailScreen = props => {

    const { meal } = props.route.params;
    const dispatch = useDispatch();
    const toggleFavoriteHandler = useCallback(()=>{
        console.log('work')
        dispatch(toggleFavorite(meal.id))
    }, [dispatch,meal.id]);

    useEffect(()=> {
        props.navigation.setParams({toggleFav : toggleFavoriteHandler})
    },[toggleFavoriteHandler]);

    const renderIngItem = (itemData) => {
        return (
            <View>
               <Text style = {{borderBottomColor : dlColors.gray,borderBottomWidth:1}}>{itemData.item}</Text> 
            </View>
        );
    }
    return (
        <View> 
            <ImageBackground style = {styles.bgImg} 
            source = {{uri : meal.imageURL}}/>
             <View style = {{...styles.mealRow,...styles.mealDetail}}>
                        <Text>{meal.duration}m</Text>
                        <Text>{meal.complexity.toUpperCase()}</Text>
                        <Text>{meal.affordability.toUpperCase()}</Text>
              </View>
              <View style = {styles.rest}>
                    <View style = {styles.ings}>
                        <Text style = {styles.indTitle}>
                            Ingredients
                        </Text>
                        <FlatList data = {meal.ingredients} 
                            keyExtractor = {(item,index) =>item.index}
                            renderItem = {renderIngItem}/>
                    </View>

                    <View style = {styles.ings}>
                        <Text style = {{...styles.indTitle,...styles.more}}>
                           M O R E
                        </Text>
                        <Text>
                            isGlutenFree {meal.isGlutenFree ? '✔' : '✘'}
                        </Text>
                        <Text>
                            isVegan {meal.isVegan ? '✔' : '✘'}
                        </Text>
                        <Text>
                         isVegetarian {meal.isVegetarian ? '✔' : '✘'}
                        </Text>
                        <Text>
                            isLactoseFree {meal.isLactoseFree ? '✔' : '✘'}
                        </Text>
                    </View>
              </View>
          
        </View>
    )
};
MealDetailScreen.navigationOptions = (navData) => {
  const onNewMealFav = () => {
    navData.route.params.toggleFav();
    
    }
   return {
      headerTitle : navData.route.params.meal.title,
      headerRight: () => (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title = 'favorite' onNewFav = {onNewMealFav} iconName = {Platform.OS === 'ios' ? "ios-heart" : "md-heart" }/>
                  </HeaderButtons>)
   }; 
}

const styles = StyleSheet.create({
    rest : {
        flexDirection : 'row',
        justifyContent : 'space-around',
    },
    ings : {
        alignItems : 'center'
    },
    bgImg : {
        width : '100%',
        height : 200 ,
        marginBottom : 3,
        shadowOffset :  {width : 0 , height : 1},
        shadowRadius : 5,
        shadowOpacity : 0.35,
        elevation : 3,
    },
    more : {
        backgroundColor : dlColors.black,
        borderBottomColor : dlColors.gray,
        color : 'white'
    },

    indTitle : {
        fontSize : 19,
        backgroundColor : dlColors.gray,
        paddingVertical: 5,
        paddingHorizontal : 7,
        borderRadius : 5,
        borderBottomWidth : 5,
        borderBottomColor : dlColors.black,
        marginBottom : 5
    },
    mealRow : {
        flexDirection : 'row',
        marginBottom : 10,
        paddingHorizontal : 10,
        justifyContent : 'space-between',
        alignItems : 'center'
    },
});
export default MealDetailScreen;