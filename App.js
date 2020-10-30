import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Platform} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreen  from './screens/FavoritesScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import CategoryMealsScreen from './screens/CategoryMealsScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import Home from './screens/Home';
import dlColors from './constants/dlColors';
import CategoryMealScreen from './screens/CategoryMealsScreen';
import {createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';


const rootReducer = combineReducers({
  meals : mealsReducer
})
const store = createStore(rootReducer);

const Stack = createStackNavigator();

export default function App (){
  return (
  <Provider store = {store}>
       <MealsNavigator/>
    </Provider>);
}

  const MealsNavigator = () => {
    const platform = Platform.OS;
      return (
            <NavigationContainer>
                    <Stack.Navigator 
                          screenOptions ={{ 
                            headerStyle : {
                              backgroundColor : platform === "android" ? dlColors.gray : dlColors.white
                            },
                            headerTintColor : dlColors.black,
                            headerTitleStyle : {
                              fontWeight : '400',
                            },
                          }}>
                        <Stack.Screen name = "Home" component = {Home} options = {{headerTitle :"LD Resturant | HOME"}}/>
                        <Stack.Screen name = "Categories" component = { CategoriesScreen }/>
                        <Stack.Screen name = "Favorites" component = { FavoritesScreen }/>
                        <Stack.Screen name = "CategoryMeals" 
                        component = { CategoryMealsScreen }  options = {CategoryMealScreen.navigationOptions} />
                        <Stack.Screen name = "MealDetails" component = { MealDetailScreen } options = {MealDetailScreen.navigationOptions}/>
                  </Stack.Navigator>
            </NavigationContainer>
      );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 
});
