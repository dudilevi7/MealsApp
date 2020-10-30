import React from 'react';
import {StyleSheet ,View,Text ,Button, ImageBackground} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {CATEGORIES} from '../data/dummy-data';
import dlColors from '../constants/dlColors';


const CategoriesScreen = props => {
    const onCatClick = (itemData)=> {
        props.navigation.navigate('CategoryMeals',{
            categoryId : itemData.item.id,
            type : itemData.item.type,
            color : itemData.item.color
        })
    }
    const renderCategoryItem = (itemData) => {
        return (<TouchableOpacity activeOpacity = {0.8} 
        style = {styles.listItem} onPress = {onCatClick.bind(this,itemData)}>
                    <View>
                        <ImageBackground style = {styles.imgBg} source = {{uri : itemData.item.imageURL}}>
                             <Text style = {styles.title}>{itemData.item.type}</Text>
                        </ImageBackground>
                    
                    </View>    
                 </TouchableOpacity>
        );
    }
    return (
        <View style = {styles.screen}> 
            <FlatList keyExtractor = {(item,index) => item.id}
            numColumns = {3} data = {CATEGORIES} renderItem = {renderCategoryItem}/>
          {/* <View style = {styles.btn}>
             <Button color = "black" title = "Go To Meals!"
                 onPress = {()=>props.navigation.navigate('CategoryMeals')}></Button>
           </View>  */}
        </View>
    )
};


const styles = StyleSheet.create({
    screen : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    listItem : {
        backgroundColor : dlColors.white,
        borderTopColor : dlColors.gray,
        borderTopWidth : 2,
        borderRadius : 3,
        shadowColor: dlColors.black,
        shadowOffset :  {width : 0 , height : 2},
        shadowRadius : 10,
        shadowOpacity : 0.26,
        elevation : 3,
        margin : 15,
        height : 100,
        width : 100,
        overflow : 'hidden'
    },
    btn : {
        width : '50%'
    },
    title : {
        padding : 3,
        fontSize : 15,
        color : dlColors.white,
        backgroundColor :'rgba(0,0,0,0.5)',
        textAlign : 'center'
    },
    imgBg : {
        width : '100%',
        height : '100%',
        
        justifyContent : 'flex-end'
    }
});
export default CategoriesScreen;