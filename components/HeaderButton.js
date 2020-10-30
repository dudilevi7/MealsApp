import React,{useState} from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons } from '@expo/vector-icons';
import dlColors from '../constants/dlColors';
import { Alert } from 'react-native';

const CustomHeaderButton = props => {
    const [isLiked,setIsLiked] = useState(dlColors.black);

    const onLikedPressed = (title)=>{
        if(isLiked === dlColors.red){
            //press unlike
            setIsLiked(dlColors.black)
        } 
        else { //press like
            setIsLiked(dlColors.red)
        } 
        props.onNewFav();
    }
    return <HeaderButton {...props} onPress = {onLikedPressed}
    IconComponent = {Ionicons} iconSize={23} color = {isLiked}/>
}
export default CustomHeaderButton;