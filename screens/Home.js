import React from 'react';
import { StyleSheet, Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Ionicons } from '@expo/vector-icons';
import CategoriesScreen from './CategoriesScreen';
import FavoritesScreen from './FavoritesScreen';
import dlColors from '../constants/dlColors';

const Home = () => {
    let Tab;
    let platform = Platform.OS;
  
    if (platform === 'ios'){
      Tab = createBottomTabNavigator();
      return (
            <Tab.Navigator 
            screenOptions = {({route})=> ({
                tabBarIcon : ({focused,color,size})=> {
                  let iconName;
                  if (route.name === 'Home') {
                    iconName = 'ios-home';
                
                  }else if (route.name ==='Favorites'){
                    iconName = 'ios-heart';
                  }

                  return <Ionicons name={iconName} size= {size} color={color}/>;
                },
              })
            }
            tabBarOptions = {{activeTintColor : dlColors.red,
            inactiveTintColor : dlColors.black}}
            >
              <Tab.Screen name = "Home" component={CategoriesScreen}/>
              <Tab.Screen name = "Favorites" component={FavoritesScreen}/>
            </Tab.Navigator>
          );
    }
    else {
      Tab = createMaterialBottomTabNavigator();
      return (
        <Tab.Navigator
          initialRouteName = "Home"
          activeColor = {dlColors.red}
          inactiveColor = {dlColors.gray}
          barStyle ={{backgroundColor : dlColors.black}}>
            <Tab.Screen name = "Home" component={CategoriesScreen}
            options ={{tabBarLabel : "Home", 
                      tabBarIcon : ({color})=>{
                        return <Ionicons name={"md-home"} size= {22} color={color}/>;
            }
            }}/>
            <Tab.Screen name = "Favorites" component={FavoritesScreen}
            options ={{tabBarLabel : "Favorites", 
            tabBarIcon : ({color})=>{
              return <Ionicons name={"md-heart"} size= {22} color={color}/>;
              }
              }}/>
          </Tab.Navigator>
      );

    }
    
  }

export default Home;